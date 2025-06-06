<template>
  <div class="pt-16 lg:pt-0">
    <!-- Header with Back Navigation -->
    <section class="py-12 px-8 bg-[var(--color-secondary)] border-b border-[var(--color-border)]">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center mb-6">
          <NuxtLink
            to="/#projects"
            class="flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 mr-4"
          >
            <Icon
              name="heroicons:arrow-left"
              class="w-5 h-5 mr-2"
            />
            <span>Back to Home</span>
          </NuxtLink>
        </div>

        <div class="text-center">
          <h1 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            All <span class="gradient-text">Projects</span>
          </h1>
          <p class="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-8">
            A comprehensive showcase of my creative work, from complex web applications to innovative solutions that solve real-world problems.
          </p>

          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="category in categories"
              :key="category"
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              :class="selectedCategory === category
                ? 'bg-[var(--color-primary)] text-[var(--color-surface)]'
                : 'bg-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]'"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group bg-[var(--color-secondary)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 card-hover"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden">
              <div class="w-full h-48 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-dark)]/20 flex items-center justify-center">
                <Icon
                  :name="project.icon"
                  class="w-16 h-16 text-[var(--color-primary)]"
                />
              </div>
              <div class="absolute inset-0 bg-[var(--color-surface)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="flex space-x-4">
                  <a
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-[var(--color-surface)] hover:bg-[var(--color-primary-dark)] transition-colors duration-300"
                  >
                    <Icon
                      name="heroicons:eye"
                      class="w-5 h-5"
                    />
                  </a>
                  <a
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-surface)] transition-colors duration-300"
                  >
                    <Icon
                      name="heroicons:code-bracket"
                      class="w-5 h-5"
                    />
                  </a>
                </div>
              </div>

              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <span class="bg-[var(--color-primary)] text-[var(--color-surface)] px-3 py-1 rounded-full text-sm font-medium">
                  {{ project.category }}
                </span>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {{ project.title }}
              </h3>

              <p class="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-text-secondary)] text-xs rounded"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.technologies.length > 3"
                  class="px-2 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs rounded"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <Icon
                    name="heroicons:star"
                    class="w-4 h-4 text-[var(--color-primary)]"
                  />
                  <span class="text-[var(--color-text-secondary)] text-xs">{{ project.status }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredProjects.length === 0"
          class="text-center py-20"
        >
          <Icon
            name="heroicons:folder-open"
            class="w-16 h-16 text-[var(--color-text-secondary)] mx-auto mb-4"
          />
          <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            No projects found
          </h3>
          <p class="text-[var(--color-text-secondary)]">
            Try selecting a different category.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 px-8 bg-[var(--color-secondary)]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center bg-[var(--color-accent)] rounded-xl p-8 border border-[var(--color-border)]">
          <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Have a Project in Mind?
          </h2>
          <p class="text-[var(--color-text-secondary)] mb-6">
            I'm always excited to take on new challenges and bring innovative ideas to life.
          </p>
          <a
            href="/#contact"
            class="bg-[var(--color-primary)] text-[var(--color-surface)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 hover:shadow-[var(--shadow-glow)] inline-block"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')

const categories = ['All', 'Web App', 'Mobile App', 'API', 'Tool', 'Open Source']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    category: 'Web App',
    description: 'A modern e-commerce platform built with Vue.js and Node.js, featuring real-time inventory management, secure payments, and advanced analytics dashboard.',
    icon: 'heroicons:shopping-cart',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/yourusername/project',
    status: 'Live',
  },
  {
    id: 2,
    title: 'Task Management App',
    slug: 'task-management-app',
    category: 'Mobile App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    icon: 'heroicons:clipboard-document-list',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Zustand'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/yourusername/project',
    status: 'Live',
  },
  {
    id: 3,
    title: 'AI Analytics Dashboard',
    slug: 'ai-analytics-dashboard',
    category: 'Web App',
    description: 'An intelligent analytics dashboard that uses machine learning to provide insights and predictions for business metrics.',
    icon: 'heroicons:chart-bar',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/yourusername/project',
    status: 'Beta',
  },
  {
    id: 4,
    title: 'Weather API Service',
    slug: 'weather-api-service',
    category: 'API',
    description: 'A robust weather API service with real-time data, forecasts, and historical weather information for developers.',
    icon: 'heroicons:cloud',
    technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
    demo: 'https://api.weather-demo.com',
    github: 'https://github.com/yourusername/weather-api',
    status: 'Live',
  },
  {
    id: 5,
    title: 'Code Snippet Manager',
    slug: 'code-snippet-manager',
    category: 'Tool',
    description: 'A developer tool for managing and organizing code snippets with syntax highlighting and search functionality.',
    icon: 'heroicons:code-bracket',
    technologies: ['Electron', 'Vue.js', 'SQLite', 'CodeMirror'],
    demo: 'https://snippets-demo.com',
    github: 'https://github.com/yourusername/snippet-manager',
    status: 'Live',
  },
  {
    id: 6,
    title: 'React Component Library',
    slug: 'react-component-library',
    category: 'Open Source',
    description: 'An open-source React component library with modern design patterns and accessibility features.',
    icon: 'heroicons:cube',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup'],
    demo: 'https://components-demo.com',
    github: 'https://github.com/yourusername/react-components',
    status: 'Active',
  },
  {
    id: 7,
    title: 'Portfolio Website Template',
    slug: 'portfolio-template',
    category: 'Web App',
    description: 'A customizable portfolio website template for developers and designers with dark/light mode and responsive design.',
    icon: 'heroicons:computer-desktop',
    technologies: ['Nuxt.js', 'Tailwind CSS', 'TypeScript', 'Netlify'],
    demo: 'https://portfolio-template-demo.com',
    github: 'https://github.com/yourusername/portfolio-template',
    status: 'Live',
  },
  {
    id: 8,
    title: 'Chat Application',
    slug: 'realtime-chat-app',
    category: 'Web App',
    description: 'A real-time chat application with rooms, file sharing, and user authentication built with Socket.io.',
    icon: 'heroicons:chat-bubble-left-right',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
    demo: 'https://chat-demo.com',
    github: 'https://github.com/yourusername/chat-app',
    status: 'Live',
  },
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

// SEO
useSeoMeta({
  title: 'Projects - Your Name | Full Portfolio',
  description: 'Explore my complete portfolio of web applications, mobile apps, APIs, and open source projects.',
})
</script>
