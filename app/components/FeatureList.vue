<template>
  <ul :class="listClasses">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="itemClasses"
    >
      <Icon
        :name="item.icon || defaultIcon"
        :class="iconClasses"
      />
      <span :class="textClasses">{{ item.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface FeatureItem {
  text: string
  icon?: string
}

interface FeatureListProps {
  items: FeatureItem[]
  defaultIcon?: string
  iconColor?: string
  textColor?: string
  spacing?: string
  iconSize?: string
}

const props = withDefaults(defineProps<FeatureListProps>(), {
  defaultIcon: 'heroicons:check',
  iconColor: 'text-[var(--color-primary)]',
  textColor: 'text-[var(--color-text-secondary)]',
  spacing: 'space-y-3',
  iconSize: 'w-5 h-5',
})

const listClasses = computed(() => {
  return props.spacing
})

const itemClasses = computed(() => {
  return 'flex items-start'
})

const iconClasses = computed(() => {
  return `${props.iconSize} mr-3 ${props.iconColor} mt-0.5`
})

const textClasses = computed(() => {
  return props.textColor
})
</script>
