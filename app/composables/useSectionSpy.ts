/**
 * Tracks which section is currently in view.
 *
 * Replaces a scroll listener: a scroll handler reflows on every frame, which
 * is what makes this pattern expensive on mobile. IntersectionObserver does
 * the same job off the main thread.
 *
 * The caller usually lives in the layout, which outlives the page, so the
 * sections are observed again whenever a new page finishes rendering.
 */
export function useSectionSpy(sectionIds: string[]) {
  // Empty until a section actually occupies the viewport, so nothing is
  // marked current while the reader is still on the hero.
  const activeSection = ref<string>('')
  const nuxtApp = useNuxtApp()
  let observer: IntersectionObserver | null = null

  const observe = () => {
    observer?.disconnect()
    activeSection.value = ''

    // Visible height per section in pixels, so the section filling most of
    // the screen wins. A ratio would penalise tall sections.
    const ratios = new Map<string, number>()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRect.height : 0)
        }

        let best = ''
        let bestRatio = 0
        for (const id of sectionIds) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            best = id
            bestRatio = ratio
          }
        }

        activeSection.value = best
      },
      {
        threshold: Array.from({ length: 21 }, (_, step) => step / 20),
        // Discounts the strip behind the floating nav.
        rootMargin: '-96px 0px -35% 0px',
      },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  }

  onMounted(observe)
  const stopFinish = nuxtApp.hook('page:finish', () => nextTick(observe))
  const stopTransition = nuxtApp.hook('page:transition:finish', () => nextTick(observe))

  onUnmounted(() => {
    stopFinish()
    stopTransition()
    observer?.disconnect()
    observer = null
  })

  return { activeSection }
}
