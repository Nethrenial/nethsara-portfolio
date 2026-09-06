<template>
  <div>
    <section class="border-b border-line pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <p class="font-mono text-xs tracking-widest text-ink-3 uppercase">
          Projects
        </p>
        <h1 class="mt-6 max-w-170 text-5xl font-semibold tracking-display text-ink lg:text-6xl">
          Everything worth showing
        </h1>
        <p class="measure mt-6 text-lg text-ink-2">
          Open source libraries, client platforms and internal tooling. The
          client work has no public source, so those cards link nowhere by
          design.
        </p>

        <div class="mt-10">
          <FilterButtonGroup
            :categories="categories"
            :selected-category="selectedCategory"
            @update:selected-category="selectedCategory = $event"
          />
        </div>
      </div>
    </section>

    <section class="border-b border-line py-20 lg:py-24">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <!-- Variable-height cards in a masonry-style column flow, so a short
             description does not stretch to match a long one. -->
        <div
          v-if="filteredProjects.length"
          class="gap-6 md:columns-2 lg:columns-3"
        >
          <ProjectsCard
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            v-reveal="{ delay: (index % 3) * 80 }"
            :project="project"
            :max-technologies="4"
            class="mb-6 break-inside-avoid"
          />
        </div>

        <EmptyState
          v-else
          icon="ph:funnel"
          :title="`Nothing filed under ${selectedCategory}`"
          message="That category is empty for now. The other filters have work in them."
        >
          <template #action>
            <BaseButton
              :variant="ButtonVariant.SECONDARY"
              text="Show everything"
              icon="ph:arrow-counter-clockwise"
              @click="selectedCategory = 'All'"
            />
          </template>
        </EmptyState>
      </div>
    </section>

    <CTACard
      title="Something you want built?"
      description="Tell me the problem and the constraints. I will tell you honestly whether I am the right person for it."
      button-text="Start a conversation"
      button-href="/#contact"
    />
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/models/Project'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ProjectStatus } from '~/enums/ProjectStatus'

const selectedCategory = ref<string>('All')

const categories: string[] = ['All', 'Open source', 'Client platform', 'Tooling']

const projects: Project[] = [
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
    status: ProjectStatus.ACTIVE,
    featured: true,
  },
  {
    id: 2,
    title: 'BanhMi',
    slug: 'banh-mi-framework',
    category: 'Open source',
    description: 'A web framework for the Bun runtime, written from scratch. The API borrows from Express and diverges where Bun makes something cheaper. The published version handles routing, middleware and static serving.',
    icon: 'ph:cube',
    technologies: ['Bun', 'TypeScript'],
    demo: 'https://github.com/banh-mi-org/examples',
    github: 'https://github.com/banh-mi-org/framework',
    status: ProjectStatus.ACTIVE,
    featured: true,
  },
  {
    id: 3,
    title: 'AIESEC Opportunities Portal',
    slug: 'aiesec-portal',
    category: 'Client platform',
    description: 'The opportunity listing and admin dashboard for AIESEC in Colombo Central, with Firebase behind it and Algolia handling search.',
    icon: 'ph:compass',
    technologies: ['Vue', 'TypeScript', 'SCSS', 'Firebase', 'Algolia'],
    demo: 'https://opps.uoc.aiesec.lk/',
    github: 'https://github.com/Nethrenial/aiesec-opportunities',
    status: ProjectStatus.LIVE,
  },
  {
    id: 4,
    title: 'SailingPen',
    slug: 'sailingpen-lms',
    category: 'Client platform',
    description: 'A learning management and institute admin system for a private tuition provider, built around protecting paid video content. I led the project through my third year at university.',
    icon: 'ph:graduation-cap',
    technologies: ['Vue', 'NestJS', 'Prisma', 'PostgreSQL', 'TypeScript', 'Cloudflare Stream'],
    status: ProjectStatus.COMPLETED,
    featured: true,
  },
  {
    id: 5,
    title: 'B2B Wholesale Ordering',
    slug: 'ecommerce-b2b',
    category: 'Client platform',
    description: 'A sales portal and inventory system for wholesale food distribution, built as microfrontends over a Spring Boot service estate during my time at Sysco LABS.',
    icon: 'ph:shopping-cart',
    technologies: ['React', 'Single-SPA', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    status: ProjectStatus.COMPLETED,
  },
  {
    id: 6,
    title: 'AutoRealm',
    slug: 'autorealm',
    category: 'Client platform',
    description: 'A management system for a vehicle service centre, with a storefront and staff dashboards. Built on a PHP framework I wrote from scratch, which taught me why frameworks exist.',
    icon: 'ph:wrench',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    status: ProjectStatus.ARCHIVED,
  },
  {
    id: 7,
    title: 'Test Case Generator',
    slug: 'llm-test-generator',
    category: 'Tooling',
    description: 'A prototype that reads a requirement and drafts the test cases for it, built on Gemini and LangChain. Presented to Sysco global leadership in 2024.',
    icon: 'ph:flask',
    technologies: ['Python', 'LangChain', 'Gemini'],
    status: ProjectStatus.DEMO,
  },
]

const filteredProjects = computed((): Project[] =>
  selectedCategory.value === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory.value),
)

useSeoMeta({
  title: 'Projects',
  description: 'Open source libraries, client platforms and internal tooling built by Nethsara Elvitigala, including Nethren UI and the BanhMi web framework.',
})

defineOgImage('PageLayout', {
  section: 'Projects',
  title: 'Everything worth showing',
  description: 'Open source libraries, client platforms and internal tooling.',
})
</script>
