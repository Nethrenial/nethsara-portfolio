<template>
  <div class="min-h-screen bg-[var(--color-surface)] text-[var(--color-text-primary)]">
    <!-- Skip Links -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>

    <!-- Mobile Menu Button -->
    <button
      ref="menuButtonRef"
      class="lg:hidden fixed top-4 left-4 z-50 w-12 h-12 bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-lg flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors duration-300"
      :aria-expanded="isMobileMenuOpen"
      aria-label="Toggle navigation menu"
      aria-controls="sidebar-navigation"
      @click="toggleMobileMenu"
    >
      <Icon
        :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
        class="w-6 h-6"
      />
    </button>

    <aside
      id="sidebar-navigation"
      ref="mobileMenuRef"
      class="fixed left-0 top-0 h-screen w-80 bg-[var(--color-secondary)] border-r border-[var(--color-border)] z-40 overflow-y-auto transition-transform duration-300 lg:transform-none"
      :class="isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full lg:translate-x-0'"
      :inert="!isMobileMenuOpen && windowWidth < 1024"
    >
      <SidebarNavigation @close-mobile="closeMobileMenu" />
    </aside>

    <!-- Mobile Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 bg-black/50 z-30"
      aria-hidden="true"
      @click="closeMobileMenu"
    />

    <!-- Main Content Area -->
    <main
      id="main-content"
      class="flex-1 lg:ml-80 scroll-container"
    >
      <div class="min-h-screen">
        <slot />
      </div>
    </main>

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'

const isMobileMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement>()
const menuButtonRef = ref<HTMLElement>()
const windowWidth = ref(1024)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value

  if (isMobileMenuOpen.value) {
    nextTick(() => {
      // Focus first navigation item when menu opens
      const firstNavItem = mobileMenuRef.value?.querySelector('button, a')
      if (firstNavItem) {
        (firstNavItem as HTMLElement).focus()
      }
    })
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  // Return focus to menu button when closing
  nextTick(() => {
    menuButtonRef.value?.focus()
  })
}

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('keydown', handleEscapeKey)
    window.addEventListener('resize', updateWindowWidth)
    updateWindowWidth() // Set initial value
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.removeEventListener('keydown', handleEscapeKey)
    window.removeEventListener('resize', updateWindowWidth)
  }
})
</script>
