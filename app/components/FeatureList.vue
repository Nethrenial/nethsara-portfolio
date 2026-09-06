<template>
  <ul class="space-y-3">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex items-start gap-3 text-base text-ink-2"
    >
      <Icon
        :name="item.icon || defaultIcon"
        class="mt-1 shrink-0 text-base text-ink-3"
        aria-hidden="true"
      />
      <span>{{ item.text }}</span>
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
}

withDefaults(defineProps<FeatureListProps>(), {
  defaultIcon: 'ph:check',
})
</script>
