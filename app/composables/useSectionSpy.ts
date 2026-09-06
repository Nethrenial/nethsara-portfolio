/**
 * Tracks which section is currently in view.
 *
 * Replaces a scroll listener: a scroll handler reflows on every frame, which
 * is what makes this pattern expensive on mobile. IntersectionObserver does
 * the same job off the main thread.
 */
export function useSectionSpy(sectionIds: string[]) {
  // Empty until a section actually occupies the viewport, so nothing is
  // marked current while the reader is still on the hero.
  const activeSection = ref<string>('')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // Ratios per section, so the most-visible one wins rather than the last
    // one to cross the threshold.
    const ratios = new Map<string, number>()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
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

        if (best) activeSection.value = best
      },
      {
        threshold: [0, 0.15, 0.35, 0.6, 0.9],
        // Discounts the strip behind the floating nav.
        rootMargin: '-96px 0px -35% 0px',
      },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { activeSection }
}
