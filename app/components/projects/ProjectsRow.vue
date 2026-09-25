<template>
  <article
    class="group relative isolate border-t border-line"
    :style="hueStyle(hue)"
  >
    <!-- Hover surface. The content stays on the page grid; the surface
         bleeds past it on both sides and floats between the rules rather
         than covering them. -->
    <span
      class="absolute -inset-x-4 inset-y-2 -z-10 scale-[0.98] rounded-3xl bg-surface opacity-0 transition-all duration-700 ease-out-expo group-hover:scale-100 group-hover:opacity-100 lg:-inset-x-8"
      aria-hidden="true"
    />

    <div class="grid grid-cols-1 gap-x-8 gap-y-6 pt-10 pb-12 md:grid-cols-12">
      <div class="flex items-start gap-4 md:col-span-1">
        <span class="tabular font-mono text-xs text-(--hue)">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
      </div>

      <div class="md:col-span-7">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span class="font-mono text-xs tracking-wide text-ink-2">
            {{ project.category }}
          </span>
          <span
            class="rounded-sm px-2 py-0.5 font-mono text-xs font-medium"
            :class="statusClasses"
          >
            {{ project.status }}
          </span>
        </div>

        <h2 class="mt-4 text-4xl font-semibold tracking-display text-ink transition-transform duration-700 ease-out-expo group-hover:translate-x-2 lg:text-5xl">
          {{ project.title }}
        </h2>

        <p class="measure mt-4 text-lg text-ink-2">
          {{ project.description }}
        </p>

        <ul
          class="mt-6 flex flex-wrap gap-2"
          aria-label="Technologies"
        >
          <li
            v-for="tech in project.technologies"
            :key="tech"
            class="rounded-md border border-line px-2 py-1 font-mono text-xs text-ink-3 transition-colors duration-500 ease-out-expo group-hover:border-surface-3"
          >
            {{ tech }}
          </li>
        </ul>
      </div>

      <!-- Plate and actions. The plate pops and tilts toward the reader. -->
      <div class="flex flex-row items-end justify-between gap-6 md:col-span-4 md:flex-col md:items-end">
        <div
          class="grid size-24 shrink-0 place-items-center rounded-2xl bg-(--hue) text-accent-ink transition-transform duration-700 ease-out-expo group-hover:scale-110 group-hover:-rotate-6 lg:size-32"
          aria-hidden="true"
        >
          <Icon
            :name="project.icon"
            class="size-12 lg:size-16"
          />
        </div>

        <div
          v-if="links.length"
          class="flex flex-wrap items-center justify-end gap-x-6 gap-y-3"
        >
          <BaseButton
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            external
            :variant="ButtonVariant.TERTIARY"
            :icon="link.icon"
            :text="link.label"
            :aria-label="`${link.label} for ${project.title} (opens in a new tab)`"
          />
        </div>
        <p
          v-else
          class="flex items-center gap-2 text-sm text-ink-3"
        >
          <Icon
            name="ph:lock-simple"
            class="size-4"
            aria-hidden="true"
          />
          Client work, source not public
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/models/Project'
import { ProjectStatus } from '~/enums/ProjectStatus'
import { ButtonVariant } from '~/enums/ButtonVariant'
import type { Signal } from '~/utils/signal'

interface ProjectsRowProps {
  project: Project
  index: number
  hue: Signal
}

const props = defineProps<ProjectsRowProps>()

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
      return 'bg-(--hue) text-accent-ink'
    case ProjectStatus.ARCHIVED:
      return 'bg-surface-3 text-ink-3'
    default:
      return 'bg-surface-3 text-ink-2'
  }
})
</script>
