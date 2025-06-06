<template>
  <div class="min-h-screen bg-[var(--color-surface)] text-[var(--color-text-primary)]">
    <!-- Mobile Menu Button -->
    <button
      class="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-lg flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors duration-300"
      @click="toggleMobileMenu"
    >
      <Icon
        :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
        class="w-6 h-6"
      />
    </button>

    <!-- Fixed Left Sidebar Navigation -->
    <aside
      class="fixed left-0 top-0 h-screen w-80 bg-[var(--color-secondary)] border-r border-[var(--color-border)] z-40 overflow-y-auto transition-transform duration-300 lg:transform-none"
      :class="isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full lg:translate-x-0'"
    >
      <SidebarNavigation @close-mobile="closeMobileMenu" />
    </aside>

    <!-- Mobile Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-black/50 z-30"
      @click="closeMobileMenu"
    />

    <!-- Main Content Area -->
    <main class="flex-1 lg:ml-80 scroll-container">
      <div class="min-h-screen">
        <slot />
      </div>
    </main>

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// SEO
useSeoMeta({
  title: 'Your Name - Software Engineer',
  description: 'Full-Stack Software Engineer specializing in modern web technologies',
  ogTitle: 'Your Name - Software Engineer',
  ogDescription: 'Full-Stack Software Engineer specializing in modern web technologies',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})
</script>
