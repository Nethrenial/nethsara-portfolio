<template>
  <div class="pt-16 lg:pt-0">
    <!-- Header with Back Navigation -->
    <section class="py-12 px-8 bg-[var(--color-secondary)] border-b border-[var(--color-border)]">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center mb-6">
          <NuxtLink
            to="/#projects"
            class="flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 mr-4"
            aria-label="Go back to home page projects section"
          >
            <Icon
              name="heroicons:arrow-left"
              class="text-xl mr-2"
              aria-hidden="true"
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
          <FilterButtonGroup
            :categories="categories"
            :selected-category="selectedCategory"
            @update:selected-category="selectedCategory = $event"
          />
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 px-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectsCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
            :variant="ProjectVariant.COMPACT"
            :max-technologies="4"
          />
        </div>

        <!-- Empty State -->
        <EmptyState
          v-if="filteredProjects.length === 0"
          icon="heroicons:folder-open"
          title="No projects found"
          message="Try selecting a different category."
        />
      </div>
    </section>

    <!-- Call to Action -->
    <CTACard
      title="Have a Project in Mind?"
      description="I'm always excited to take on new challenges and bring innovative ideas to life."
      button-text="Let's Work Together"
      button-href="/#contact"
      :button-variant="ButtonVariant.PRIMARY"
      :button-size="ButtonSize.LARGE"
      background="secondary"
      button-aria-label="Navigate to contact section to discuss your project"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '~/models/Project'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'
import { ProjectVariant } from '~/enums/ProjectVariant'

const selectedCategory = ref<string>('All')

const categories: string[] = ['All', 'Web App', 'Mobile App', 'API', 'Tool', 'Open Source']

const projects: Project[] = [
  {
    id: 1,
    title: 'Nethren UI',
    slug: 'nethren-ui',
    category: 'Open Source',
    description: 'A UI components library for React and Vue. Released several pre-release versions of the VueJS edition. Used as the UI library for 3rd year university project.',
    icon: 'heroicons:cube',
    image: 'https://picsum.photos/seed/nethren-ui/600/400',
    technologies: ['VueJS', 'SCSS', 'TypeScript', 'React'],
    demo: 'https://nethren-ui-vue-docs.pages.dev',
    github: 'https://github.com/Nethrenial/nethren-ui-vue',
    status: 'Active',
    featured: true,
  },
  {
    id: 2,
    title: 'BanhMi Web Framework',
    slug: 'banh-mi-framework',
    category: 'Open Source',
    description: 'An experimental web framework for the Bun runtime from scratch. API inspired by ExpressJS but with major differences. Published early version with features for simple full-stack web apps.',
    icon: 'heroicons:cog-6-tooth',
    image: 'https://picsum.photos/seed/banh-mi/600/400',
    technologies: ['Bun Runtime', 'TypeScript'],
    demo: 'https://github.com/banh-mi-org/examples',
    github: 'https://github.com/banh-mi-org/framework',
    status: 'Active',
    featured: true,
  },
  {
    id: 3,
    title: 'Ecommerce B2B Platform',
    slug: 'ecommerce-b2b',
    category: 'Web App',
    description: 'B2B sales portal and inventory management system with microfrontend and microservices architecture, emulating Sysco shop for wholesale food products.',
    icon: 'heroicons:shopping-cart',
    image: 'https://picsum.photos/seed/ecommerce-b2b/600/400',
    technologies: ['ReactJS', 'Single-SPA', 'Chakra UI', 'TypeScript', 'ExpressJS', 'Java', 'Spring Boot', 'PostgreSQL'],
    demo: '#',
    github: '#',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'SailingPen - LMS',
    slug: 'sailingpen-lms',
    category: 'Web App',
    description: 'LMS and institute management system for private tuition institute with focus on content protection and improving student engagement. Led as project leader.',
    icon: 'heroicons:academic-cap',
    image: 'https://picsum.photos/seed/sailingpen-lms/600/400',
    technologies: ['VueJS', 'SCSS', 'TailwindCSS', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Cloudflare Stream'],
    demo: '#',
    github: '#',
    status: 'Completed',
    featured: true,
  },
  {
    id: 5,
    title: 'AutoRealm Management System',
    slug: 'autorealm',
    category: 'Web App',
    description: 'Vehicle maintenance center management system with e-commerce website and employee dashboards. Built custom PHP framework from scratch.',
    icon: 'heroicons:wrench-screwdriver',
    image: 'https://picsum.photos/seed/autorealm/600/400',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    demo: '#',
    github: '#',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'AIESEC CC Opportunities Portal',
    slug: 'aiesec-portal',
    category: 'Web App',
    description: 'Official opportunity portal and admin dashboard for AIESEC in Colombo Central with Firebase and Algolia integration.',
    icon: 'heroicons:briefcase',
    image: 'https://picsum.photos/seed/aiesec-portal/600/400',
    technologies: ['VueJS', 'TypeScript', 'SCSS', 'Firebase', 'Algolia'],
    demo: 'https://opps.uoc.aiesec.lk/',
    github: 'https://github.com/Nethrenial/aiesec-opportunities',
    status: 'Live',
  },
  // TODO: Update this data with your real data - placeholder for additional projects
  {
    id: 7,
    title: 'LLM Test Case Generator',
    slug: 'llm-test-generator',
    category: 'Tool',
    description: 'LLM-based tool for intelligent test case generation presented to Sysco global technical leadership team.',
    icon: 'heroicons:cpu-chip',
    image: 'https://picsum.photos/seed/llm-test-generator/600/400',
    technologies: ['Python', 'LangChain', 'Gemini'],
    demo: '#',
    github: '#',
    status: 'Demo',
  },
]

const filteredProjects = computed((): Project[] => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

// SEO
useSeoMeta({
  title: 'Projects - Nethsara Elvitigala | Software Engineer Portfolio',
  description: 'Explore my portfolio of projects including open source libraries, web applications, and innovative software solutions.',
})
</script>
