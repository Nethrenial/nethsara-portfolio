<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div
        v-for="project in featuredProjects"
        :key="project.id"
        class="group bg-[var(--color-accent)] rounded-xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 card-hover"
      >
        <!-- Project Image -->
        <div class="relative overflow-hidden">
          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-[var(--color-surface)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="flex space-x-4">
              <a
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary-dark)] transition-colors duration-300"
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
                class="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
              >
                <Icon
                  name="heroicons:code-bracket"
                  class="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Project Content -->
        <div class="p-6">
          <div class="flex items-start justify-between mb-3">
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
              {{ project.title }}
            </h3>
            <span class="text-[var(--color-text-secondary)] text-sm bg-[var(--color-secondary)] px-2 py-1 rounded">
              {{ project.category }}
            </span>
          </div>

          <p class="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-3">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies.slice(0, 3)"
              :key="tech"
              class="px-2 py-1 bg-[var(--color-secondary)] text-[var(--color-text-secondary)] text-xs rounded"
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
            <div class="flex items-center space-x-1 text-[var(--color-text-secondary)] text-xs">
              <Icon
                name="heroicons:star"
                class="w-4 h-4 text-[var(--color-primary)]"
              />
              <span>{{ project.featured ? 'Featured' : 'Project' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View All Projects Button -->
    <div class="text-center">
      <NuxtLink
        to="/projects"
        class="inline-flex items-center bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-all duration-300 hover:shadow-[var(--shadow-glow)] group"
      >
        View All Projects
        <Icon
          name="heroicons:arrow-right"
          class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const featuredProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    category: 'Web App',
    description: 'A modern e-commerce platform built with Vue.js and Node.js, featuring real-time inventory management, secure payments, and advanced analytics.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/yourusername/project',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    slug: 'task-management-app',
    category: 'Mobile App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/projects/taskapp.jpg',
    technologies: ['React', 'React Native', 'Firebase', 'TypeScript', 'Zustand'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/yourusername/project',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Analytics Dashboard',
    slug: 'ai-analytics-dashboard',
    category: 'Data Viz',
    description: 'An intelligent analytics dashboard that uses machine learning to provide insights and predictions for business metrics.',
    image: '/projects/analytics.jpg',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    demo: 'https://demo.example.com',
    github: 'https://github.com/yourusername/project',
    featured: true,
  },
]
</script>
