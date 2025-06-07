<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div
        v-for="project in featuredProjects"
        :key="project.id"
        class="group glass-card rounded-2xl overflow-hidden card-hover glow-on-hover relative"
      >
        <!-- Status Badge -->
        <div class="absolute top-4 left-4 z-20">
          <span
            class="text-xs font-medium px-3 py-1 rounded-full glass-card"
            :class="getStatusColor(project.status)"
          >
            {{ project.status || 'Featured' }}
          </span>
        </div>

        <!-- Project Image with Enhanced Overlay -->
        <div class="relative overflow-hidden h-48">
          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/80 via-transparent to-transparent" />

          <!-- Enhanced Hover Overlay -->
          <div class="absolute inset-0 glass-card opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
            <div class="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <a
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 btn-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Icon
                  name="heroicons:eye"
                  class="w-6 h-6"
                />
              </a>
              <a
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 glass-card rounded-full flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Icon
                  name="heroicons:code-bracket"
                  class="w-6 h-6"
                />
              </a>
            </div>
          </div>

          <!-- Category Badge -->
          <div class="absolute bottom-4 right-4">
            <span class="text-[var(--color-text-secondary)] text-xs glass-card px-3 py-1 rounded-full">
              {{ project.category }}
            </span>
          </div>
        </div>

        <!-- Enhanced Project Content -->
        <div class="p-6 relative">
          <!-- Background Pattern -->
          <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-full transform translate-x-12 -translate-y-12" />

          <div class="relative z-10">
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-1">
              {{ project.title }}
            </h3>

            <p class="text-[var(--color-text-secondary)] text-sm mb-4 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Enhanced Technology Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies.slice(0, 3)"
                :key="tech"
                class="px-3 py-1.5 glass-card text-[var(--color-text-secondary)] text-xs rounded-full hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 cursor-default"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 3"
                class="px-3 py-1.5 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs rounded-full font-medium"
              >
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <!-- Project Stats/Info -->
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-1 text-[var(--color-text-secondary)] text-xs">
                <Icon
                  name="heroicons:star"
                  class="w-4 h-4 text-[var(--color-primary)]"
                />
                <span>{{ project.featured ? 'Featured Project' : 'Project' }}</span>
              </div>

              <!-- Action Indicator -->
              <div class="flex items-center text-[var(--color-primary)] text-xs group-hover:translate-x-1 transition-transform duration-300">
                <span class="mr-1">View Details</span>
                <Icon
                  name="heroicons:arrow-right"
                  class="w-3 h-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced View All Projects Button -->
    <div class="text-center">
      <NuxtLink
        to="/projects"
        class="btn-primary glow-on-hover inline-flex items-center space-x-3 text-lg px-10 py-4 group"
      >
        <Icon
          name="heroicons:folder-open"
          class="w-6 h-6"
        />
        <span>View All Projects</span>
        <Icon
          name="heroicons:arrow-right"
          class="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const featuredProjects = [
  {
    id: 1,
    title: 'Nethren UI',
    slug: 'nethren-ui',
    category: 'Open Source',
    description: 'A UI components library for React and Vue. Released several pre-release versions of the VueJS edition. Used as the UI library for 3rd year university project.',
    image: '/projects/nethren-ui.jpg',
    technologies: ['VueJS', 'SCSS', 'TypeScript', 'React'],
    demo: 'https://nethren-ui-vue-docs.pages.dev',
    github: 'https://github.com/Nethrenial/nethren-ui-vue',
    featured: true,
    status: 'Active',
  },
  {
    id: 2,
    title: 'BanhMi Web Framework',
    slug: 'banh-mi-framework',
    category: 'Open Source',
    description: 'An experimental web framework for the Bun runtime from scratch. API inspired by ExpressJS but with major differences.',
    image: '/projects/banh-mi.jpg',
    technologies: ['Bun Runtime', 'TypeScript'],
    demo: 'https://github.com/banh-mi-org/examples',
    github: 'https://github.com/banh-mi-org/framework',
    featured: true,
    status: 'Active',
  },
  {
    id: 3,
    title: 'SailingPen - LMS',
    slug: 'sailingpen-lms',
    category: 'Web App',
    description: 'LMS and institute management system for private tuition institute with focus on content protection and improving student engagement.',
    image: '/projects/sailingpen.jpg',
    technologies: ['VueJS', 'SCSS', 'TailwindCSS', 'TypeScript', 'NestJS', 'Prisma'],
    demo: '#',
    github: '#',
    featured: true,
    status: 'Completed',
  },
]

// Helper function for status colors
const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'active':
    case 'live':
      return 'text-green-400 border-green-400/30'
    case 'completed':
      return 'text-blue-400 border-blue-400/30'
    case 'in development':
      return 'text-yellow-400 border-yellow-400/30'
    default:
      return 'text-[var(--color-primary)] border-[var(--color-primary)]/30'
  }
}
</script>
