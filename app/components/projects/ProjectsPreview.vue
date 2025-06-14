<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <ProjectsCard
        v-for="project in featuredProjects"
        :key="project.id"
        :project="project"
        :variant="ProjectVariant.DEFAULT"
        :max-technologies="3"
        :show-progress="true"
      />
    </div>

    <!-- Enhanced View All Projects Button -->
    <div class="text-center">
      <BaseButton
        href="/projects"
        :variant="ButtonVariant.PRIMARY"
        icon="heroicons:folder-open"
        :size="ButtonSize.LARGE"
      >
        <span>View All Projects</span>
        <Icon
          name="heroicons:arrow-right"
          class="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
        />
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/models/Project'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'
import { ProjectVariant } from '~/enums/ProjectVariant'

const featuredProjects: Project[] = [
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
    featured: true,
    status: 'Active',
  },
  {
    id: 2,
    title: 'BanhMi Web Framework',
    slug: 'banh-mi-framework',
    category: 'Open Source',
    description: 'An experimental web framework for the Bun runtime from scratch. API inspired by ExpressJS but with major differences.',
    icon: 'heroicons:cog-6-tooth',
    image: 'https://picsum.photos/seed/banh-mi/600/400',
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
    icon: 'heroicons:academic-cap',
    image: 'https://picsum.photos/seed/sailingpen-lms/600/400',
    technologies: ['VueJS', 'SCSS', 'TailwindCSS', 'TypeScript', 'NestJS', 'Prisma'],
    demo: '#',
    github: '#',
    featured: true,
    status: 'Completed',
  },
]
</script>
