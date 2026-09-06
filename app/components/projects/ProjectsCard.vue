<template>
  <article
    v-spotlight
    class="spotlight group flex flex-col rounded-2xl bg-surface-2 p-8 transition-all duration-700 ease-out-expo hover:-translate-y-1 hover:bg-surface-3 hover:shadow-lift"
    :class="feature ? 'lg:p-12' : ''"
  >
    <!-- Screenshot, only when a real one exists -->
    <NuxtImg
      v-if="project.image"
      :src="project.image"
      :alt="`Screenshot of ${project.title}`"
      width="800"
      height="500"
      class="mb-8 aspect-video w-full rounded-xl object-cover"
      loading="lazy"
    />

    <div class="flex items-start justify-between gap-4">
      <div class="flex items-center gap-3">
        <Icon
          :name="project.icon"
          :class="feature ? 'text-3xl' : 'text-2xl'"
          class="text-ink-2 transition-colors duration-700 ease-out-expo group-hover:text-accent"
          aria-hidden="true"
        />
        <span class="font-mono text-xs tracking-wide text-ink-3 uppercase">
          {{ project.category }}
        </span>
      </div>

      <!-- Square status marker rather than another pill -->
      <span
        class="shrink-0 rounded-sm px-2 py-1 font-mono text-xs"
        :class="statusClasses"
      >
        {{ project.status }}
      </span>
    </div>

    <h3
      class="mt-6 font-semibold tracking-display text-ink"
      :class="feature ? 'text-3xl lg:text-4xl' : 'text-xl'"
    >
      {{ project.title }}
    </h3>

    <p
      class="measure mt-3 text-ink-2"
      :class="feature ? 'text-lg' : 'text-base'"
    >
      {{ project.description }}
    </p>

    <ul class="mt-6 mb-8 flex flex-wrap gap-2">
      <li
        v-for="tech in visibleTechnologies"
        :key="tech"
        class="rounded-md border border-line px-2 py-1 font-mono text-xs text-ink-3"
      >
        {{ tech }}
      </li>
      <li
        v-if="hiddenCount > 0"
        class="rounded-md px-2 py-1 font-mono text-xs text-ink-3"
      >
        +{{ hiddenCount }} more
      </li>
    </ul>

    <!-- Actions pinned to the bottom so they align across a row -->
    <div
      v-if="links.length"
      class="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6"
    >
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-all duration-700 ease-out-expo hover:gap-2.5 hover:text-accent"
        :aria-label="`${link.label} for ${project.title} (opens in a new tab)`"
      >
        {{ link.label }}
        <Icon
          :name="link.icon"
          class="text-base"
          aria-hidden="true"
        />
      </a>
    </div>

    <!-- Private work still needs a footer so cards line up -->
    <p
      v-else
      class="mt-auto border-t border-line pt-6 text-sm text-ink-3"
    >
      Client work, source not public
    </p>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/models/Project'
import { ProjectStatus } from '~/enums/ProjectStatus'

interface ProjectsCardProps {
  project: Project
  /** Renders the card at hero scale for the lead slot of an asymmetric grid. */
  feature?: boolean
  maxTechnologies?: number
}

const props = withDefaults(defineProps<ProjectsCardProps>(), {
  feature: false,
  maxTechnologies: 4,
})

const visibleTechnologies = computed(() =>
  props.project.technologies.slice(0, props.feature ? 6 : props.maxTechnologies),
)

const hiddenCount = computed(() =>
  props.project.technologies.length - visibleTechnologies.value.length,
)

// A '#' href renders a dead link, so only real destinations become actions.
const isLive = (href?: string): href is string => !!href && href !== '#'

const links = computed(() => {
  const result: { label: string, href: string, icon: string }[] = []
  if (isLive(props.project.demo)) {
    result.push({ label: 'Live', href: props.project.demo, icon: 'ph:arrow-up-right' })
  }
  if (isLive(props.project.github)) {
    result.push({ label: 'Source', href: props.project.github, icon: 'ph:github-logo' })
  }
  return result
})

const statusClasses = computed(() => {
  switch (props.project.status) {
    case ProjectStatus.ACTIVE:
    case ProjectStatus.LIVE:
      return 'bg-accent/10 text-accent'
    case ProjectStatus.ARCHIVED:
      return 'bg-surface-3 text-ink-3'
    default:
      return 'bg-surface-3 text-ink-2'
  }
})
</script>
