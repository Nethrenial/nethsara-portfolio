<template>
  <Transition
    enter-active-class="transition-all duration-700 ease-out-expo"
    enter-from-class="opacity-0 translate-y-4"
    leave-active-class="transition-all duration-300 ease-out-expo"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="isVisible"
      type="button"
      class="glass fixed right-6 bottom-6 z-nav grid size-12 place-items-center rounded-full text-ink transition-all duration-700 ease-out-expo hover:-translate-y-0.5 hover:text-accent active:scale-95"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <!-- The ring doubles as a read-progress indicator -->
      <svg
        class="absolute inset-0 size-12 -rotate-90"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          class="text-accent opacity-70 transition-[stroke-dashoffset] duration-300 ease-out-expo"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
        />
      </svg>
      <Icon
        name="ph:arrow-up"
        class="relative text-lg"
        aria-hidden="true"
      />
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const { y: scrollY } = useWindowScroll()
const { height: viewportHeight } = useWindowSize()

const isVisible = computed(() => scrollY.value > 600)

const progress = computed((): number => {
  if (!import.meta.client) return 0
  const scrollable = document.documentElement.scrollHeight - viewportHeight.value
  if (scrollable <= 0) return 0
  return Math.min(Math.max(scrollY.value / scrollable, 0), 1)
})

const circumference = 2 * Math.PI * 21
const dashOffset = computed(() => circumference * (1 - progress.value))

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
