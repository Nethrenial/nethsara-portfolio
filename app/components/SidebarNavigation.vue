<template>
  <div class="h-full flex flex-col">
    <!-- Profile Section -->
    <div class="p-8 border-b border-[var(--color-border)]">
      <div class="text-center">
        <!-- Profile Image -->
        <div class="w-24 h-24 mx-auto mb-4 relative">
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] p-1">
            <div class="w-full h-full rounded-full overflow-hidden bg-[var(--color-surface)]">
              <NuxtImg
                src="/profile-image.jpg"
                alt="Your Name"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Name and Title -->
        <h1 class="text-xl font-bold gradient-text mb-1">
          Your Name
        </h1>
        <p class="text-[var(--color-text-secondary)] text-sm mb-4">
          Full-Stack Software Engineer
        </p>

        <!-- Quick Contact -->
        <div class="flex justify-center space-x-3">
          <a
            href="mailto:your.email@example.com"
            class="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-surface)] transition-colors duration-300"
          >
            <Icon
              name="heroicons:envelope"
              class="w-5 h-5"
            />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-surface)] transition-colors duration-300"
          >
            <Icon
              name="heroicons:link"
              class="w-5 h-5"
            />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-surface)] transition-colors duration-300"
          >
            <Icon
              name="heroicons:code-bracket"
              class="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 p-6">
      <div class="space-y-2">
        <!-- Home page sections -->
        <template v-if="$route.path === '/'">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="flex items-center space-x-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--color-accent)] group"
            :class="{ 'text-[var(--color-primary)] bg-[var(--color-accent)]': activeSection === link.id }"
            @click="handleSectionClick(link.id)"
          >
            <Icon
              :name="link.icon"
              class="w-5 h-5"
            />
            <span class="font-medium">{{ link.name }}</span>
          </a>
        </template>

        <!-- Other pages navigation -->
        <template v-else>
          <NuxtLink
            to="/"
            class="flex items-center space-x-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--color-accent)] group"
            @click="handleMobileClose"
          >
            <Icon
              name="heroicons:home"
              class="w-5 h-5"
            />
            <span class="font-medium">Home</span>
          </NuxtLink>

          <NuxtLink
            v-if="$route.path.startsWith('/projects')"
            to="/#projects"
            class="flex items-center space-x-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--color-accent)] group"
            @click="handleMobileClose"
          >
            <Icon
              name="heroicons:square-3-stack-3d"
              class="w-5 h-5"
            />
            <span class="font-medium">Projects Overview</span>
          </NuxtLink>
        </template>

        <!-- Blog Link (always visible) -->
        <NuxtLink
          to="/blog"
          class="flex items-center space-x-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[var(--color-accent)] group"
          :class="{ 'text-[var(--color-primary)] bg-[var(--color-accent)]': $route.path.startsWith('/blog') }"
          @click="handleMobileClose"
        >
          <Icon
            name="heroicons:newspaper"
            class="w-5 h-5"
          />
          <span class="font-medium">Blog</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Download Resume Button -->
    <div class="p-6 border-t border-[var(--color-border)]">
      <a
        href="/resume.pdf"
        target="_blank"
        class="w-full bg-[var(--color-primary)] text-[var(--color-surface)] py-3 px-4 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 hover:shadow-[var(--shadow-glow)] flex items-center justify-center space-x-2"
      >
        <Icon
          name="heroicons:arrow-down-tray"
          class="w-5 h-5"
        />
        <span>Download Resume</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const emit = defineEmits(['close-mobile'])

const navLinks = [
  { id: 'hero', name: 'Home', icon: 'heroicons:home' },
  { id: 'about', name: 'About', icon: 'heroicons:user' },
  { id: 'experience', name: 'Experience', icon: 'heroicons:briefcase' },
  { id: 'projects', name: 'Projects', icon: 'heroicons:square-3-stack-3d' },
  { id: 'skills', name: 'Skills', icon: 'heroicons:cpu-chip' },
  { id: 'contact', name: 'Contact', icon: 'heroicons:envelope' },
]

const activeSection = ref('hero')
let ticking = false
let sectionElements = []

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const handleSectionClick = (sectionId) => {
  scrollToSection(sectionId)
  handleMobileClose()
}

const handleMobileClose = () => {
  emit('close-mobile')
}

// Cache section elements and their positions for better performance
const cacheSectionElements = () => {
  sectionElements = navLinks.map((link) => {
    const element = document.getElementById(link.id)
    return {
      id: link.id,
      element,
      offsetTop: element ? element.offsetTop : 0,
    }
  }).filter(section => section.element)
}

const updateActiveSection = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY + 100

      // Find the active section more efficiently
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section.offsetTop <= scrollPosition) {
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
const handleScroll = () => {
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
