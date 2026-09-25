<template>
  <section
    :id="id"
    class="relative pt-24 pb-24 lg:pt-24 lg:pb-24"
    :class="surface === 'raised' ? 'bg-surface' : 'bg-canvas'"
    :aria-labelledby="id ? `${id}-heading` : undefined"
  >
    <div class="shell">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface BaseSectionProps {
  id?: string
  /**
   * Steps between two neighbouring approved darks, for the rare section that
   * needs to sit forward of the canvas.
   */
  surface?: 'canvas' | 'raised'
}

withDefaults(defineProps<BaseSectionProps>(), {
  id: undefined,
  surface: 'canvas',
})
</script>
