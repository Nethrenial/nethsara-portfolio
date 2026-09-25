<template>
  <header
    class="mb-16 grid grid-cols-1 gap-x-8 gap-y-8 lg:mb-24 lg:grid-cols-12"
    :style="hueStyle(hue)"
  >
    <!-- Ordinal chip, label, and a rule that draws out to the edge -->
    <div class="flex items-center gap-4 lg:col-span-12">
      <span
        v-reveal="{ variant: 'scale' }"
        class="tabular grid size-8 place-items-center rounded-lg bg-(--hue) font-mono text-xs font-medium text-accent-ink"
        aria-hidden="true"
      >{{ index }}</span>
      <p
        v-reveal="{ variant: 'fade', delay: 120 }"
        class="font-mono text-xs tracking-wide text-ink-2"
      >
        {{ label }}
      </p>
      <span
        v-reveal="{ variant: 'line', delay: 200 }"
        class="h-px flex-1 bg-line"
        aria-hidden="true"
      />
    </div>

    <h2
      :id="sectionId ? `${sectionId}-heading` : undefined"
      class="max-w-4xl text-5xl font-semibold tracking-display text-ink lg:col-span-8 lg:text-7xl"
    >
      <MotionSplitText
        :text="title"
        by="word"
        :step="60"
      />
    </h2>

    <p
      v-if="description"
      v-reveal="{ delay: 300 }"
      class="measure text-lg text-ink-2 lg:col-span-4 lg:self-end"
    >
      {{ description }}
    </p>
  </header>
</template>

<script setup lang="ts">
import type { Signal } from '~/utils/signal'

interface SectionHeaderProps {
  title: string
  description?: string
  /** Two digit ordinal, e.g. "01". */
  index?: string
  /** Section name shown beside the ordinal. */
  label?: string
  sectionId?: string
  hue?: Signal
}

withDefaults(defineProps<SectionHeaderProps>(), {
  description: undefined,
  index: undefined,
  label: undefined,
  sectionId: undefined,
  hue: 'saffron',
})
</script>
