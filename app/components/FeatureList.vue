<template>
  <ul class="space-y-3">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="group flex items-start gap-3 text-base text-ink-2 transition-colors duration-500 ease-out-expo hover:text-ink"
    >
      <Icon
        :name="item.icon || defaultIcon"
        class="mt-1 size-4 shrink-0 transition-transform duration-700 ease-out-expo group-hover:scale-125 group-hover:rotate-12"
        :style="{ color: `var(--color-${signalAt(index)})` }"
        aria-hidden="true"
      />
      <span class="transition-transform duration-700 ease-out-expo group-hover:translate-x-1">{{ item.text }}</span>
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
