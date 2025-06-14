<!-- eslint-disable vue/no-v-html -->
<template>
  <div :class="containerClasses">
    <h2
      v-if="!isH1"
      :id="sectionId ? `${sectionId}-heading` : undefined"
      :class="titleClasses"
      v-html="formattedTitle"
    />
    <h1
      v-else
      :id="sectionId ? `${sectionId}-heading` : undefined"
      :class="titleClasses"
      v-html="formattedTitle"
    />

    <p
      v-if="description"
      :class="descriptionClasses"
    >
      {{ description }}
    </p>

    <slot name="additional" />
  </div>
</template>

<script setup lang="ts">
interface SectionHeaderProps {
  title: string
  highlightedWord?: string
  description?: string
  centered?: boolean
  isH1?: boolean
  size?: 'default' | 'large' | 'extra-large'
  marginBottom?: string
  sectionId?: string
}

const props = withDefaults(defineProps<SectionHeaderProps>(), {
  highlightedWord: undefined,
  description: undefined,
  centered: true,
  isH1: false,
  size: 'default',
  marginBottom: 'mb-16',
  sectionId: undefined,
})

const containerClasses = computed(() => {
  const classes: string[] = []

  if (props.centered) {
    classes.push('text-center')
  }

  classes.push(props.marginBottom)

  return classes.join(' ')
})

const titleClasses = computed(() => {
  const classes: string[] = []

  // Size classes
  switch (props.size) {
    case 'large':
      classes.push('text-4xl md:text-5xl')
      break
    case 'extra-large':
      classes.push('text-5xl md:text-6xl lg:text-7xl')
      break
    default:
      classes.push('text-3xl md:text-4xl')
  }

  classes.push('font-bold text-[var(--color-text-primary)] mb-6')

  return classes.join(' ')
})

const descriptionClasses = computed(() => {
  const classes = ['text-[var(--color-text-secondary)] text-lg']

  if (props.centered) {
    classes.push('max-w-2xl mx-auto')
  }

  if (!props.isH1) {
    classes.push('mb-8')
  }

  return classes.join(' ')
})

const formattedTitle = computed(() => {
  if (!props.highlightedWord) {
    return props.title
  }

  return props.title.replace(
    props.highlightedWord,
    `<span class="gradient-text">${props.highlightedWord}</span>`,
  )
})
</script>
