<!-- eslint-disable vue/no-v-html -->
<template>
  <article
    class="group relative"
    :style="hueStyle(hue)"
  >
    <div class="flex items-center gap-4">
      <span class="grid size-12 place-items-center rounded-xl bg-surface-2 text-(--hue) transition-all duration-700 ease-out-expo group-hover:-rotate-6 group-hover:bg-(--hue) group-hover:text-accent-ink">
        <Icon
          :name="icon"
          class="size-6"
          aria-hidden="true"
        />
      </span>
      <span class="tabular font-mono text-xs text-ink-3">
        {{ String(index + 1).padStart(2, '0') }}
      </span>
    </div>

    <h3 class="mt-6 text-2xl font-semibold tracking-display text-ink">
      {{ title }}
    </h3>

    <div class="mt-4 space-y-4">
      <p
        v-for="(paragraph, i) in paragraphs"
        :key="i"
        class="measure text-base text-ink-2 [&_a]:text-(--hue) [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-ink"
        v-html="paragraph"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Signal } from '~/utils/signal'

interface StoryCardProps {
  icon: string
  title: string
  paragraphs: string[]
  index: number
  hue: Signal
}

defineProps<StoryCardProps>()
</script>
