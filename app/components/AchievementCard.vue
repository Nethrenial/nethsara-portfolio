<template>
  <div :class="cardClasses">
    <div class="flex items-start space-x-4">
      <div :class="iconContainerClasses">
        <Icon
          :name="achievement.icon"
          class="text-2xl text-[var(--color-primary)]"
        />
      </div>
      <div :class="contentClasses">
        <h4 :class="titleClasses">
          {{ achievement.title }}
        </h4>
        <p :class="descriptionClasses">
          {{ achievement.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Achievement } from '~/models/Achievement'

interface AchievementCardProps {
  achievement: Achievement
  variant?: 'default' | 'enhanced'
}

const props = withDefaults(defineProps<AchievementCardProps>(), {
  variant: 'default',
})

const cardClasses = computed(() => {
  const baseClasses = 'p-6 rounded-xl transition-colors duration-300'

  if (props.variant === 'enhanced') {
    return `${baseClasses} glass-card card-hover glow-on-hover group`
  }

  return `${baseClasses} flex items-start space-x-4 bg-[var(--color-accent)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30`
})

const iconContainerClasses = computed(() => {
  const baseClasses = 'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'

  if (props.variant === 'enhanced') {
    return `${baseClasses} bg-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)]/30 transition-colors duration-300`
  }

  return `${baseClasses} bg-[var(--color-primary)]/10`
})

const contentClasses = computed(() => {
  if (props.variant === 'enhanced') {
    return 'flex-1'
  }

  return ''
})

const titleClasses = computed(() => {
  const baseClasses = 'text-[var(--color-text-primary)] font-semibold'

  if (props.variant === 'enhanced') {
    return `${baseClasses} mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300`
  }

  return `${baseClasses} mb-1`
})

const descriptionClasses = computed(() => {
  const baseClasses = 'text-[var(--color-text-secondary)] text-sm'

  if (props.variant === 'enhanced') {
    return `${baseClasses} leading-relaxed`
  }

  return baseClasses
})
</script>
