/**
 * Motion directives.
 *
 * The plugin is universal so the directives resolve during SSR, but every hook
 * that does work is client only: `created` and `mounted` never run on the
 * server, and `getSSRProps` adds nothing to the markup. The result is that the
 * server payload ships fully visible content, so readers without JavaScript
 * see everything rather than a blank page.
 */

interface RevealOptions {
  /** Stagger in milliseconds before the element animates in. */
  delay?: number
  /** Fraction of the element that must be visible before it fires. */
  threshold?: number
}

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default defineNuxtPlugin((nuxtApp) => {
  const observers = new WeakMap<HTMLElement, IntersectionObserver>()

  nuxtApp.vueApp.directive<HTMLElement, RevealOptions | number | undefined>('reveal', {
    created(el, binding) {
      if (prefersReducedMotion()) return

      const delay = typeof binding.value === 'number' ? binding.value : binding.value?.delay
      el.dataset.reveal = ''
      if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
    },

    mounted(el, binding) {
      if (prefersReducedMotion()) return

      const threshold = typeof binding.value === 'object' ? binding.value?.threshold ?? 0.15 : 0.15

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            el.dataset.reveal = 'in'
            // One-shot: content does not re-hide when it leaves the viewport.
            observer.unobserve(el)
            el.addEventListener(
              'transitionend',
              () => el.style.removeProperty('will-change'),
              { once: true },
            )
          }
        },
        { threshold, rootMargin: '0px 0px -10% 0px' },
      )

      observer.observe(el)
      observers.set(el, observer)
    },

    unmounted(el) {
      observers.get(el)?.disconnect()
      observers.delete(el)
    },

    // Rendered content carries no reveal state, so it is visible without JS.
    getSSRProps: () => ({}),
  })

  /**
   * Tracks the cursor within an element so `.spotlight` can illuminate its
   * border under the pointer. Skipped on touch, where there is no cursor.
   */
  nuxtApp.vueApp.directive<HTMLElement>('spotlight', {
    mounted(el) {
      if (!window.matchMedia('(hover: hover)').matches) return

      const onMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
        el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
      }

      el.addEventListener('pointermove', onMove)
      el._spotlightCleanup = () => el.removeEventListener('pointermove', onMove)
    },

    unmounted(el) {
      el._spotlightCleanup?.()
    },

    getSSRProps: () => ({}),
  })
})

declare global {
  interface HTMLElement {
    _spotlightCleanup?: () => void
  }
}
