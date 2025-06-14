<template>
  <div class="h-full flex flex-col">
    <!-- Profile Section -->
    <div class="p-8 border-b border-[var(--color-border)]">
      <div class="text-center">
        <!-- Profile Image - simplified -->
        <div class="w-24 h-24 mx-auto mb-4 relative">
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] p-1">
            <div class="w-full h-full rounded-full overflow-hidden bg-[var(--color-surface)]">
              <NuxtImg
                src="/favicons/web-app-manifest-192x192.png"
                alt="Nethsara Elvitigala"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- Simple status indicator -->
          <div class="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
        </div>

        <!-- Name and Title - simplified -->
        <h1 class="text-xl font-bold gradient-text mb-1">
          Nethsara Elvitigala
        </h1>
        <p class="text-[var(--color-text-secondary)] text-sm mb-4">
          Software Engineer
        </p>

        <!-- Quick Contact - simplified -->
        <div class="flex justify-center space-x-3">
          <BaseButton
            href="mailto:nethsarasandeepaelvitigala@gmail.com"
            :variant="ButtonVariant.SECONDARY"
            icon="heroicons:envelope"
            circular
            :size="ButtonSize.SMALL"
            aria-label="Send email to Nethsara Elvitigala"
          />
          <BaseButton
            href="https://www.linkedin.com/in/nethsara-elvitigala/"
            :variant="ButtonVariant.SECONDARY"
            icon="heroicons:link"
            circular
            :size="ButtonSize.SMALL"
            external
            aria-label="Visit Nethsara's LinkedIn profile"
          />
          <BaseButton
            href="https://github.com/Nethrenial"
            :variant="ButtonVariant.SECONDARY"
            icon="heroicons:code-bracket"
            circular
            :size="ButtonSize.SMALL"
            external
            aria-label="Visit Nethsara's GitHub profile"
          />
        </div>
      </div>
    </div>

    <!-- Navigation Links - simplified -->
    <nav
      class="flex-1 p-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="space-y-2">
        <!-- Home page sections -->
        <template v-if="$route.path === '/'">
          <button
            v-for="link in navLinks"
            :key="link.id"
            type="button"
            class="flex items-center space-x-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--color-accent)] group w-full text-left"
            :class="{ 'text-[var(--color-primary)] bg-[var(--color-accent)]': activeSection === link.id }"
            :aria-label="`Navigate to ${link.name} section`"
            :aria-current="activeSection === link.id ? 'page' : undefined"
            @click="handleSectionClick(link.id)"
          >
            <Icon
              :name="link.icon"
              class="text-xl"
            />
            <span class="font-medium">{{ link.name }}</span>
          </button>
        </template>

        <!-- Other pages navigation -->
        <template v-else>
          <NuxtLink
            to="/"
            class="flex items-center space-x-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--color-accent)] group"
            aria-label="Navigate to home page"
            @click="handleMobileClose"
          >
            <Icon
              name="heroicons:home"
              class="text-xl"
            />
            <span class="font-medium">Home</span>
          </NuxtLink>

          <NuxtLink
            v-if="$route.path.startsWith('/projects')"
            to="/#projects"
            class="flex items-center space-x-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--color-accent)] group"
            aria-label="Navigate to projects overview section"
            @click="handleMobileClose"
          >
            <Icon
              name="heroicons:square-3-stack-3d"
              class="text-xl"
            />
            <span class="font-medium">Projects Overview</span>
          </NuxtLink>
        </template>
      </div>
    </nav>

    <!-- Download Resume Button - fixed positioning -->
    <div class="p-6 border-t border-[var(--color-border)] mt-auto">
      <BaseButton
        href="/resume.pdf"
        :variant="ButtonVariant.PRIMARY"
        icon="heroicons:arrow-down-tray"
        text="Download Resume"
        full-width
        external
        class="!rounded-lg"
        aria-label="Download Nethsara's resume PDF file"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import type { NavLink } from '~/models/NavLink'
import type { SectionElement } from '~/models/SectionElement'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'

const emit = defineEmits<{
  'close-mobile': []
}>()

const navLinks: NavLink[] = [
  { id: 'hero', name: 'Home', icon: 'heroicons:home' },
  { id: 'about', name: 'About', icon: 'heroicons:user' },
  { id: 'experience', name: 'Experience', icon: 'heroicons:briefcase' },
  { id: 'projects', name: 'Projects', icon: 'heroicons:square-3-stack-3d' },
  { id: 'skills', name: 'Skills', icon: 'heroicons:cpu-chip' },
  { id: 'contact', name: 'Contact', icon: 'heroicons:envelope' },
]

const activeSection = ref<string>('hero')
let ticking = false
let sectionElements: SectionElement[] = []

const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const handleSectionClick = (sectionId: string): void => {
  scrollToSection(sectionId)
  handleMobileClose()
}

const handleMobileClose = (): void => {
  emit('close-mobile')
}

// Cache section elements and their positions for better performance
const cacheSectionElements = (): void => {
  sectionElements = navLinks.map((link): SectionElement => {
    const element = document.getElementById(link.id)
    return {
      id: link.id,
      element,
      offsetTop: element ? element.offsetTop : 0,
    }
  }).filter(section => section.element)
}

const updateActiveSection = (): void => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY + 100

      // Find the active section more efficiently
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section && section.offsetTop <= scrollPosition) {
          activeSection.value = section.id
          break
        }
      }

      ticking = false
    })
    ticking = true
  }
}

// Throttled scroll handler
const handleScroll = (): void => {
  if (import.meta.client) {
    updateActiveSection()
  }
}

onMounted(() => {
  if (import.meta.client) {
    // Cache section elements after mount
    nextTick(() => {
      cacheSectionElements()
      updateActiveSection()
    })

    // Use passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Re-cache section positions on resize
    window.addEventListener('resize', cacheSectionElements, { passive: true })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', cacheSectionElements)
  }
})
</script>
