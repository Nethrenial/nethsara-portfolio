<template>
  <div>
    <!-- Asymmetric: the lead project takes three of five columns and the rest
         stack beside it, rather than three equal cards in a row. -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-start">
      <div
        v-reveal
        class="lg:col-span-3"
      >
        <ProjectsCard
          v-if="lead"
          :project="lead"
          feature
        />
      </div>

      <div class="grid gap-6 lg:col-span-2">
        <ProjectsCard
          v-for="(project, index) in rest"
          :key="project.id"
          v-reveal="{ delay: 120 + index * 120 }"
          :project="project"
          :max-technologies="3"
        />
      </div>
    </div>

    <div
      v-reveal
      class="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
    >
      <BaseButton
        href="/projects"
        :variant="ButtonVariant.SECONDARY"
        :size="ButtonSize.LARGE"
        icon="ph:arrow-right"
        text="See every project"
      />
      <p class="text-sm text-ink-3">
        Open source libraries, client platforms and internal tooling.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/models/Project'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'
import { ProjectStatus } from '~/enums/ProjectStatus'

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Nethren UI',
    slug: 'nethren-ui',
    category: 'Open source',
    description: 'A component library for Vue and React. The Vue edition shipped several pre-release versions and became the UI layer for the SailingPen build, which is where most of its API decisions came from.',
    icon: 'ph:stack',
    technologies: ['Vue', 'TypeScript', 'SCSS', 'React'],
    demo: 'https://nethren-ui-vue-docs.pages.dev',
    github: 'https://github.com/Nethrenial/nethren-ui-vue',
    featured: true,
    status: ProjectStatus.ACTIVE,
  },
  {
    id: 2,
    title: 'BanhMi',
    slug: 'banh-mi-framework',
    category: 'Open source',
    description: 'A web framework for the Bun runtime, written from scratch. The API borrows from Express and diverges where Bun makes something cheaper.',
    icon: 'ph:cube',
    technologies: ['Bun', 'TypeScript'],
    demo: 'https://github.com/banh-mi-org/examples',
    github: 'https://github.com/banh-mi-org/framework',
    featured: true,
    status: ProjectStatus.ACTIVE,
  },
  {
    id: 3,
    title: 'SailingPen',
    slug: 'sailingpen-lms',
    category: 'Client platform',
    description: 'A learning management and institute admin system for a private tuition provider, built around protecting paid video content.',
    icon: 'ph:graduation-cap',
    technologies: ['Vue', 'NestJS', 'Prisma', 'TypeScript'],
    featured: true,
    status: ProjectStatus.COMPLETED,
  },
]

const [lead, ...rest] = featuredProjects
</script>
