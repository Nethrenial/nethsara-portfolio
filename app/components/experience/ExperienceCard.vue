<template>
  <article
    v-reveal="{ delay: index * 80 }"
    class="group relative grid grid-cols-1 gap-x-10 gap-y-4 pb-16 last:pb-0 md:grid-cols-[10rem_1fr]"
  >
    <div class="md:pt-1">
      <time class="block font-mono text-xs tracking-wide text-ink-2 uppercase">
        {{ experience.period }}
      </time>
      <span
        v-if="isCurrent"
        class="mt-2 inline-block rounded-sm bg-surface-3 px-2 py-1 font-mono text-xs text-accent"
      >
        Current
      </span>
    </div>

    <div class="relative md:border-l md:border-line md:pl-10">
      <!-- Rail marker, sitting on the rule and aligned to the role title -->
      <span
        class="absolute top-2 left-0 hidden size-2 -translate-x-1/2 rounded-full bg-ink-3 transition-colors duration-700 ease-out-expo group-hover:bg-accent md:block"
        aria-hidden="true"
      />

      <h3 class="text-xl font-semibold text-ink lg:text-2xl">
        {{ experience.position }}
      </h3>
      <p class="mt-1.5 text-base text-ink-2">
        {{ experience.company }} · {{ experience.location }}
      </p>

      <p class="measure mt-4 text-base text-ink-2">
        {{ experience.description }}
      </p>

      <ul
        v-if="experience.achievements.length"
        class="measure mt-6 space-y-3"
      >
        <li
          v-for="achievement in experience.achievements"
          :key="achievement"
          class="relative pl-6 text-base text-ink-2"
        >
          <span
            class="absolute top-2.5 left-0 size-1 rounded-full bg-ink-3"
            aria-hidden="true"
          />
          {{ achievement }}
        </li>
      </ul>

      <ul class="mt-6 flex flex-wrap gap-2">
        <li
          v-for="tech in experience.technologies"
          :key="tech"
          class="rounded-md border border-line px-2 py-1 font-mono text-xs text-ink-3 transition-colors duration-200 ease-out-expo hover:border-ink-3 hover:text-ink-2"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Experience } from '~/models/Experience'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

const props = defineProps<ExperienceCardProps>()

const isCurrent = computed(() => props.experience.period.toLowerCase().includes('present'))
</script>
