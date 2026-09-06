<template>
  <div
    class="inline-flex flex-wrap gap-1 rounded-xl border border-line bg-surface-2 p-1"
    role="group"
    aria-label="Filter projects by category"
  >
    <button
      v-for="category in categories"
      :key="category"
      type="button"
      class="rounded-lg px-3 py-2 text-sm font-medium transition-all duration-700 ease-out-expo active:scale-[0.98]"
      :class="selectedCategory === category
        ? 'bg-accent text-accent-ink'
        : 'text-ink-2 hover:bg-surface-3 hover:text-ink'"
      :aria-pressed="selectedCategory === category"
      @click="emit('update:selectedCategory', category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface FilterButtonGroupProps {
  categories: string[]
  selectedCategory: string
}

defineProps<FilterButtonGroupProps>()

const emit = defineEmits<{
  'update:selectedCategory': [category: string]
}>()
</script>
