<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 transform scale-95 translate-y-2"
    enter-to-class="opacity-100 transform scale-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 transform scale-100 translate-y-0"
    leave-to-class="opacity-0 transform scale-95 translate-y-2"
  >
    <button
      v-if="showScrollToTop"
      class="fixed bottom-8 right-8 z-40 group"
      @click="scrollToTop"
    >
      <!-- Progress Circle Background -->
      <div class="relative w-14 h-14">
        <!-- Background Circle -->
        <svg
          class="w-14 h-14 transform -rotate-90"
          viewBox="0 0 56 56"
        >
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="var(--color-border)"
            stroke-width="2"
            fill="none"
            class="opacity-30"
          />
          <!-- Progress Circle -->
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="var(--color-primary)"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="strokeDashoffset"
            class="transition-all duration-300 ease-out drop-shadow-sm"
            :class="{ 'drop-shadow-[0_0_6px_var(--color-primary)]': scrollProgress > 0 }"
          />
        </svg>

        <!-- Button Content -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-10 h-10 glass-card rounded-full flex items-center justify-center text-[var(--color-text-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
            <Icon
              name="heroicons:arrow-up"
              class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </div>
        </div>

        <!-- Pulse effect when near top -->
        <div
          v-if="scrollProgress > 95"
          class="absolute inset-0 rounded-full bg-[var(--color-primary)]/20 animate-ping"
        />
      </div>
    </button>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

// Get reactive scroll position using VueUse
const { y: scrollY } = useWindowScroll()

// Show button when scrolled down 400px
const showScrollToTop = computed(() => scrollY.value > 400)

// Calculate scroll progress percentage
const scrollProgress = computed(() => {
  if (import.meta.client) {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrollY.value / documentHeight) * 100
    return Math.min(Math.max(progress, 0), 100)
  }
  return 0
})

// Calculate circle properties for progress
const circumference = 2 * Math.PI * 24 // radius = 24
const strokeDashoffset = computed(() => {
  const progress = scrollProgress.value / 100
  return circumference - (progress * circumference)
})

// Smooth scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
/* Enhance the glow effect for the progress circle */
.drop-shadow-\[0_0_6px_var\(--color-primary\)\] {
  filter: drop-shadow(0 0 6px rgba(72, 133, 168, 0.6));
}
</style>
