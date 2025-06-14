<template>
  <section
    :id="id"
    :class="sectionClasses"
  >
    <!-- Background Effects -->
    <div
      v-if="hasBackgroundSlot"
      class="absolute inset-0 pointer-events-none"
    >
      <slot name="background" />
    </div>

    <!-- Default Background Effects (if no custom background provided) -->
    <div
      v-else-if="showDefaultBackground"
      class="absolute inset-0 pointer-events-none"
    >
      <div class="absolute top-40 left-10 w-96 h-96 bg-[var(--color-primary)]/3 rounded-full blur-3xl floating" />
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-[var(--color-primary)]/5 rounded-full blur-3xl floating-delayed" />
    </div>

    <div class="container-modern relative z-10">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface BaseSectionProps {
  id?: string
  background?: 'secondary' | 'transparent'
  showDefaultBackground?: boolean
}

const props = withDefaults(defineProps<BaseSectionProps>(), {
  id: undefined,
  background: 'secondary',
  showDefaultBackground: true,
})

const slots = useSlots()

const hasBackgroundSlot = computed(() => !!slots.background)

const sectionClasses = computed(() => {
  const classes = ['section-padding', 'relative', 'overflow-hidden']

  if (props.background === 'secondary') {
    classes.push('bg-[var(--color-secondary)]')
  }

  return classes.join(' ')
})
</script>
