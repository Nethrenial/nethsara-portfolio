/**
 * Motion directives.
 *
 * The server stamps the initial reveal state into the markup, but CSS only
 * honours it under `html.js` (set by an inline script before first paint).
 * Readers without JavaScript therefore see every element in its final state,
 * and readers with JavaScript never see a flash of content that then hides.
 */

type RevealVariant = 'up' | 'fade' | 'mask' | 'line' | 'scale'

interface RevealOptions {
  /** Stagger in milliseconds before the element animates in. */
  delay?: number
  /** Fraction of the element that must be visible before it fires. */
  threshold?: number
  variant?: RevealVariant
}

interface CountOptions {
  from?: number
  to: number
  duration?: number
}

const SETTLE_MS = 1500

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const hasFinePointer = (): boolean =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

const normaliseReveal = (value: RevealOptions | number | undefined): RevealOptions =>
  typeof value === 'number' ? { delay: value } : value ?? {}

/**
 * Solves the system curve, cubic-bezier(0.32, 0.72, 0, 1), for JS driven
 * tweens so a counting number moves exactly like everything else.
 */
const easeOutExpo = (() => {
  const x1 = 0.32, y1 = 0.72, x2 = 0, y2 = 1
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by
  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t
  const slopeX = (t: number) => (3 * ax * t + 2 * bx) * t + cx

  return (x: number): number => {
    let t = x
    for (let i = 0; i < 8; i++) {
      const error = sampleX(t) - x
      const slope = slopeX(t)
      if (Math.abs(error) < 1e-5 || Math.abs(slope) < 1e-6) break
      t -= error / slope
    }
    return sampleY(Math.min(Math.max(t, 0), 1))
  }
})()

/** One shared observer per threshold, rather than one per element. */
const observerPool = new Map<number, IntersectionObserver>()
const callbacks = new WeakMap<Element, () => void>()

const observeOnce = (el: Element, threshold: number, onEnter: () => void) => {
  let observer = observerPool.get(threshold)
  if (!observer) {
    observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          obs.unobserve(entry.target)
          callbacks.get(entry.target)?.()
          callbacks.delete(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observerPool.set(threshold, observer)
  }
  callbacks.set(el, onEnter)
  observer.observe(el)
}

const unobserve = (el: Element) => {
  callbacks.delete(el)
  for (const observer of observerPool.values()) observer.unobserve(el)
}

export default defineNuxtPlugin((nuxtApp) => {
  const cleanups = new WeakMap<HTMLElement, () => void>()

  nuxtApp.vueApp.directive<HTMLElement, RevealOptions | number | undefined>('reveal', {
    created(el, binding) {
      const { delay, variant = 'up' } = normaliseReveal(binding.value)
      el.dataset.reveal = variant
      if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
    },

    mounted(el, binding) {
      const { delay = 0, threshold = 0.15, variant = 'up' } = normaliseReveal(binding.value)

      const settle = () => {
        delete el.dataset.reveal
        delete el.dataset.inview
        el.style.removeProperty('--reveal-delay')
      }

      if (prefersReducedMotion()) {
        settle()
        return
      }

      // IntersectionObserver honours the target's own clip path, so a fully
      // masked element never intersects. Masks watch their parent instead.
      const watched = variant === 'mask' ? el.parentElement ?? el : el

      observeOnce(watched, variant === 'mask' ? 0 : threshold, () => {
        el.dataset.inview = ''
        // Hands the element back to its own transitions once it has landed.
        window.setTimeout(settle, delay + SETTLE_MS)
      })
    },

    unmounted(el) {
      unobserve(el)
      if (el.parentElement) unobserve(el.parentElement)
    },

    getSSRProps(binding) {
      const { delay, variant = 'up' } = normaliseReveal(binding.value)
      return {
        'data-reveal': variant,
        'style': delay ? { '--reveal-delay': `${delay}ms` } : undefined,
      }
    },
  })

  /**
   * Tracks the cursor within an element so `.spotlight` can illuminate its
   * border under the pointer. Skipped on touch, where there is no cursor.
   */
  nuxtApp.vueApp.directive<HTMLElement>('spotlight', {
    mounted(el) {
      if (!hasFinePointer()) return

      const onMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
        el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
      }

      el.addEventListener('pointermove', onMove)
      cleanups.set(el, () => el.removeEventListener('pointermove', onMove))
    },

    unmounted(el) {
      cleanups.get(el)?.()
    },

    getSSRProps: () => ({}),
  })

  /**
   * Pulls an element toward the cursor while it hovers, then lets it spring
   * back on the system curve. Uses the independent `translate` property so it
   * composes with any scale or transform the element already has.
   */
  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('magnetic', {
    mounted(el, binding) {
      if (!hasFinePointer() || prefersReducedMotion()) return

      const strength = binding.value ?? 0.3
      el.classList.add('magnetic')

      const onMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect()
        const x = (event.clientX - rect.left - rect.width / 2) * strength
        const y = (event.clientY - rect.top - rect.height / 2) * strength
        el.style.setProperty('--mx', `${x}px`)
        el.style.setProperty('--my', `${y}px`)
      }

      const onLeave = () => {
        el.style.setProperty('--mx', '0px')
        el.style.setProperty('--my', '0px')
      }

      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
      cleanups.set(el, () => {
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
      })
    },

    unmounted(el) {
      cleanups.get(el)?.()
    },

    getSSRProps: () => ({}),
  })

  /**
   * Tilts a surface in 3D toward the cursor. The element needs a perspective
   * parent or its own `transform-style`; the directive only writes rotation.
   */
  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('tilt', {
    mounted(el, binding) {
      if (!hasFinePointer() || prefersReducedMotion()) return

      const max = binding.value ?? 6

      const onMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width - 0.5
        const py = (event.clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(1200px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
      }

      const onLeave = () => {
        el.style.transform = ''
      }

      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)
      cleanups.set(el, () => {
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
      })
    },

    unmounted(el) {
      cleanups.get(el)?.()
    },

    getSSRProps: () => ({}),
  })

  /**
   * Counts a number up when it scrolls into view. The server renders the
   * final value, so the true number is always in the markup.
   */
  nuxtApp.vueApp.directive<HTMLElement, CountOptions>('count', {
    mounted(el, binding) {
      const { from = 0, to, duration = 1800 } = binding.value
      if (prefersReducedMotion()) return

      el.textContent = String(from)

      observeOnce(el, 0.6, () => {
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          el.textContent = String(Math.round(from + (to - from) * easeOutExpo(progress)))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    },

    unmounted(el) {
      unobserve(el)
    },

    getSSRProps: () => ({}),
  })
})
