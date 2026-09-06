<template>
  <header
    v-reveal
    class="mb-16 lg:mb-20"
  >
    <p
      v-if="index"
      class="mb-6 font-mono text-xs tracking-widest text-ink-3 uppercase"
    >
      {{ index }}
    </p>

    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <h2
        :id="sectionId ? `${sectionId}-heading` : undefined"
        class="max-w-170 text-4xl font-semibold tracking-display text-ink lg:text-5xl"
      >
        {{ title }}
      </h2>

      <p
        v-if="description"
        class="measure text-lg text-ink-2 lg:max-w-sm lg:text-right"
      >
        {{ description }}
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
interface SectionHeaderProps {
  title: string
  description?: string
  /** Small ordinal label, e.g. "01 / Work". */
  index?: string
  sectionId?: string
}

withDefaults(defineProps<SectionHeaderProps>(), {
  description: undefined,
  index: undefined,
  sectionId: undefined,
})
</script>
