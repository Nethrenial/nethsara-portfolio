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
      class="fixed bottom-8 right-8 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[var(--color-primary-dark)] transition-colors duration-300 flex items-center justify-center z-40 hover:scale-110"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <Icon
        name="heroicons:arrow-up"
        class="w-5 h-5"
      />
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollToTop = ref(false)
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      showScrollToTop.value = window.scrollY > 400
      ticking = false
    })
    ticking = true
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  if (import.meta.client) {
    // Use passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
