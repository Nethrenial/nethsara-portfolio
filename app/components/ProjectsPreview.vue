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
    title: 'Nethren UI',
    slug: 'nethren-ui',
    category: 'Open Source',
    description: 'A UI components library for React and Vue. Released several pre-release versions of the VueJS edition. Used as the UI library for 3rd year university project.',
    image: '/projects/nethren-ui.jpg',
    technologies: ['VueJS', 'SCSS', 'TypeScript', 'React'],
    demo: 'https://nethren-ui-vue-docs.pages.dev',
    github: 'https://github.com/Nethrenial/nethren-ui-vue',
    featured: true,
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
  },
]
</script>
