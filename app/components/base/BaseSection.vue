<template>
  <section
    :id="id"
    class="border-b border-line pt-20 pb-24 lg:pt-24 lg:pb-24"
    :class="surface === 'raised' ? 'bg-surface' : 'bg-canvas'"
    :aria-labelledby="id ? `${id}-heading` : undefined"
  >
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface BaseSectionProps {
  id?: string
  /**
   * Steps between two neighbouring approved darks. Sections alternate so the
   * page reads as one surface family rather than a dark block dropped into a
   * light page.
   */
  surface?: 'canvas' | 'raised'
}

withDefaults(defineProps<BaseSectionProps>(), {
  id: undefined,
  surface: 'canvas',
})
</script>
