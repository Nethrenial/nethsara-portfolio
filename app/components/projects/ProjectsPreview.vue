<template>
  <div>
    <!-- A stack: each card pins beneath the nav and recedes as the next one
         slides over it. timeline-scope lets a card read its successor's
         scroll timeline. -->
    <div
      class="relative space-y-8 lg:space-y-24"
      :style="{ timelineScope: featuredProjects.map((_, index) => `--card-${index}`).join(', ') }"
    >
      <div
        v-for="(project, index) in featuredProjects"
        :key="project.id"
        class="lg:sticky"
        :style="{
          top: `calc(6rem + ${index * 1.5}rem)`,
          viewTimelineName: `--card-${index}`,
        }"
      >
        <div
          :class="index < featuredProjects.length - 1 ? 'scroll-stack-recede' : ''"
          :style="{ '--next-card': `--card-${index + 1}` }"
        >
          <div v-reveal="{ variant: 'scale' }">
            <ProjectsCard
              :project="project"
              :index="index"
              :hue="hueFor(project)"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      v-reveal
      class="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
    >
      <BaseButton
        href="/projects"
        :size="ButtonSize.LARGE"
        icon="ph:arrow-right"
        text="See every project"
        hue="saffron"
      />
      <p class="text-sm text-ink-3">
        Open source libraries, client platforms and internal tooling.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ButtonSize } from '~/enums/ButtonSize'
import { featuredProjects, projects } from '~/data/projects'
import type { Project } from '~/models/Project'

// A project keeps the same hue on every page it appears on.
const hueFor = (project: Project) => signalAt(projects.indexOf(project))
</script>
