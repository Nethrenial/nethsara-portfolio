<template>
  <article
    class="group relative border-t border-line py-12 transition-opacity duration-700 ease-out-expo first:border-t-0 first:pt-0 lg:py-16 lg:first:pt-0"
    :class="active ? 'lg:opacity-100' : 'lg:opacity-40 lg:hover:opacity-100'"
    :style="hueStyle(hue)"
  >
    <!-- Rail marker, sitting on the rule, lit when the role is in focus -->
    <span
      class="absolute top-16 -left-12 hidden size-3 -translate-x-1/2 rounded-full border border-line bg-canvas transition-all duration-700 ease-out-expo group-first:top-0 lg:block"
      :class="active ? 'scale-125 border-transparent bg-(--hue)' : ''"
      aria-hidden="true"
    />

    <div
      v-reveal
      class="flex flex-wrap items-center gap-x-4 gap-y-2"
    >
      <!-- Small screens get the hue chip the sticky panel carries on desktop -->
      <span
        class="tabular grid size-8 place-items-center rounded-lg bg-(--hue) font-mono text-xs font-medium text-accent-ink lg:hidden"
        aria-hidden="true"
      >0{{ index + 1 }}</span>
      <p class="flex items-center gap-2 font-mono text-xs tracking-wide text-ink-2">
        <time>{{ start }}</time>
        <Icon
          name="ph:arrow-right"
          class="text-xs text-(--hue)"
          aria-label="to"
        />
        <time>{{ end }}</time>
      </p>
      <span
        v-if="isCurrent"
        class="rounded-sm bg-(--hue) px-2 py-0.5 font-mono text-xs font-medium text-accent-ink"
      >
        Current
      </span>
    </div>

    <h3
      v-reveal="{ delay: 60 }"
      class="mt-4 text-3xl font-semibold tracking-display text-ink lg:text-4xl"
    >
      {{ experience.position }}
    </h3>
    <p
      v-reveal="{ delay: 100 }"
      class="mt-2 text-lg text-ink-2"
    >
      <span class="font-medium text-ink">{{ experience.company }}</span>
      · {{ experience.location }}
    </p>

    <p
      v-reveal="{ delay: 140 }"
      class="measure mt-6 text-lg text-ink-2"
    >
      {{ experience.description }}
    </p>

    <ul
      v-if="experience.achievements.length"
      class="measure mt-8 space-y-4"
    >
      <li
        v-for="(achievement, i) in experience.achievements"
        :key="achievement"
        v-reveal="{ delay: 180 + i * 60 }"
        class="relative pl-8 text-base text-ink-2"
      >
        <span
          class="absolute top-3 left-0 h-px w-4 bg-(--hue)"
          aria-hidden="true"
        />
        {{ achievement }}
      </li>
    </ul>

    <ul
      v-reveal="{ delay: 240 }"
      class="mt-8 flex flex-wrap gap-2"
      aria-label="Technologies"
    >
      <li
        v-for="tech in experience.technologies"
        :key="tech"
        class="rounded-md border border-line px-2 py-1 font-mono text-xs text-ink-3 transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-transparent hover:bg-(--hue) hover:text-accent-ink"
      >
        {{ tech }}
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { Experience } from '~/models/Experience'
import type { Signal } from '~/utils/signal'

interface ExperienceCardProps {
  experience: Experience
  index: number
  hue: Signal
  active?: boolean
}

const props = withDefaults(defineProps<ExperienceCardProps>(), {
  active: false,
})

const parts = computed(() => periodParts(props.experience.period))
const start = computed(() => parts.value[0])
const end = computed(() => parts.value[1])

const isCurrent = computed(() => props.experience.period.toLowerCase().includes('present'))
</script>
