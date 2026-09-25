<template>
  <article
    v-spotlight
    class="spotlight group relative grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-surface shadow-lift lg:min-h-128 lg:grid-cols-12"
    :style="hueStyle(hue)"
  >
    <!-- Copy -->
    <div class="relative flex flex-col p-8 lg:col-span-7 lg:p-12">
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span class="tabular font-mono text-xs text-(--hue)">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <span class="font-mono text-xs tracking-wide text-ink-2">
          {{ project.category }}
        </span>
        <!-- Square status marker rather than another pill -->
        <span
          class="rounded-sm px-2 py-0.5 font-mono text-xs font-medium"
          :class="statusClasses"
        >
          {{ project.status }}
        </span>
      </div>

      <h3 class="mt-8 text-5xl font-semibold tracking-display text-ink lg:text-6xl">
        {{ project.title }}
      </h3>

      <p class="measure mt-6 text-lg text-ink-2">
        {{ project.description }}
      </p>

      <ul
        class="mt-8 mb-12 flex flex-wrap gap-2"
        aria-label="Technologies"
      >
        <li
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-md border border-line px-2 py-1 font-mono text-xs text-ink-3"
        >
          {{ tech }}
        </li>
      </ul>

      <!-- Actions pinned to the bottom so they align across the stack -->
      <div
        v-if="links.length"
        class="mt-auto flex flex-wrap items-center gap-4"
      >
        <BaseButton
          v-for="(link, linkIndex) in links"
          :key="link.label"
          :href="link.href"
          external
          :variant="linkIndex === 0 ? ButtonVariant.SECONDARY : ButtonVariant.TERTIARY"
          :icon="link.icon"
          :text="link.label"
          :hue="hue"
          :aria-label="`${link.label} for ${project.title} (opens in a new tab)`"
        />
      </div>
      <p
        v-else
        class="mt-auto flex items-center gap-2 text-sm text-ink-3"
      >
        <Icon
          name="ph:lock-simple"
          class="text-base"
          aria-hidden="true"
        />
        Client work, source not public
      </p>
    </div>

    <!-- Plate: a flat block of the project's hue with its mark floating on it -->
    <component
      :is="plateLink ? 'a' : 'div'"
      :href="plateLink"
      :target="plateLink ? '_blank' : undefined"
      :rel="plateLink ? 'noopener noreferrer' : undefined"
      :tabindex="plateLink ? -1 : undefined"
      :data-cursor="plateLink ? 'Live' : undefined"
      class="relative isolate m-2 grid min-h-64 place-items-center overflow-hidden rounded-2xl bg-(--hue) lg:col-span-5 lg:m-2"
      aria-hidden="true"
    >
      <div class="dot-grid absolute inset-0 opacity-40 mix-blend-multiply" />

      <!-- Concentric rings that open outward on hover -->
      <span
        v-for="ring in 3"
        :key="ring"
        class="absolute aspect-square rounded-full border border-accent-ink/15 transition-transform duration-1000 ease-out-expo group-hover:scale-125"
        :style="{ width: `${ring * 30}%`, transitionDelay: `${ring * 60}ms` }"
      />

      <div class="animate-float relative">
        <Icon
          :name="project.icon"
          class="size-40 text-accent-ink transition-transform duration-1000 ease-out-expo group-hover:scale-110 group-hover:-rotate-6 lg:size-48"
        />
      </div>
    </component>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/models/Project'
import { ProjectStatus } from '~/enums/ProjectStatus'
import { ButtonVariant } from '~/enums/ButtonVariant'
import type { Signal } from '~/utils/signal'

interface ProjectsCardProps {
  project: Project
  index: number
  hue: Signal
}

const props = defineProps<ProjectsCardProps>()

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

const plateLink = computed(() => (isLive(props.project.demo) ? props.project.demo : undefined))

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
