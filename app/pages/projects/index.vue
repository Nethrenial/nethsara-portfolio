<template>
  <div>
    <section class="relative isolate overflow-clip pt-24 pb-16 lg:pb-20">
      <div
        class="dot-grid absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
      />
      <div class="shell pt-16">
        <div
          class="flex items-center gap-4"
          data-intro="fade"
          :style="{ '--d': '100ms' }"
        >
          <span
            class="tabular grid size-8 place-items-center rounded-lg bg-saffron font-mono text-xs font-medium text-accent-ink"
            aria-hidden="true"
          >{{ String(projects.length).padStart(2, '0') }}</span>
          <p class="font-mono text-xs tracking-wide text-ink-2">
            Projects
          </p>
        </div>

        <h1 class="mt-8 max-w-5xl text-6xl font-semibold tracking-display lg:text-8xl">
          <MotionSplitText
            text="Everything worth showing"
            trigger="load"
            :delay="200"
            :step="28"
            gradient
            hop
          />
        </h1>
        <p
          class="measure mt-8 text-lg text-ink-2"
          data-intro
          :style="{ '--d': '700ms' }"
        >
          Open source libraries, client platforms and internal tooling. The
          client work has no public source, so those cards link nowhere by
          design.
        </p>

        <div
          class="mt-12"
          data-intro
          :style="{ '--d': '850ms' }"
        >
          <FilterButtonGroup
            v-model="selectedCategory"
            :options="categoryOptions"
            label="Filter projects by category"
            hue="saffron"
          />
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="shell">
        <!-- An index rather than a card grid. Rows glide to their new places
             when the filter changes. -->
        <TransitionGroup
          v-if="filteredProjects.length"
          tag="div"
          class="relative border-b border-line"
          move-class="transition-all duration-700 ease-out-expo"
          enter-active-class="transition-all duration-700 ease-out-expo"
          enter-from-class="opacity-0 translate-y-8 blur-sm"
          leave-active-class="absolute inset-x-0 transition-all duration-400 ease-out-expo"
          leave-to-class="opacity-0"
        >
          <ProjectsRow
            v-for="project in filteredProjects"
            :key="project.id"
            v-reveal="{ variant: 'fade' }"
            :project="project"
            :index="projects.indexOf(project)"
            :hue="signalAt(projects.indexOf(project))"
          />
        </TransitionGroup>

        <EmptyState
          v-else
          icon="ph:funnel-duotone"
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
import { projects, projectCategories } from '~/data/projects'

const selectedCategory = ref<string>('All')

const categoryOptions = projectCategories.map(category => ({ id: category, name: category }))

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
