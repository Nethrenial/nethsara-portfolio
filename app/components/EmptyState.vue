<template>
  <div class="text-center py-20">
    <Icon
      :name="icon"
      :class="iconClasses"
    />
    <h3 :class="titleClasses">
      {{ title }}
    </h3>
    <p :class="messageClasses">
      {{ message }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface EmptyStateProps {
  icon?: string
  title: string
  message: string
  iconSize?: string
  iconColor?: string
}

const props = withDefaults(defineProps<EmptyStateProps>(), {
  icon: 'heroicons:folder-open',
  iconSize: 'w-16 h-16',
  iconColor: 'text-[var(--color-text-secondary)]',
})

const iconClasses = computed(() => {
  return `${props.iconSize} ${props.iconColor} mx-auto mb-4`
})

const titleClasses = computed(() => {
  return 'text-xl font-semibold text-[var(--color-text-primary)] mb-2'
})

const messageClasses = computed(() => {
  return 'text-[var(--color-text-secondary)]'
})
</script>
