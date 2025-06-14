<template>
  <div
    class="flex flex-wrap justify-center gap-3"
    role="group"
    aria-label="Project category filters"
  >
    <button
      v-for="category in categories"
      :key="category"
      type="button"
      class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
      :class="selectedCategory === category
        ? 'bg-[var(--color-primary)] text-white'
        : 'bg-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]'"
      :aria-pressed="selectedCategory === category"
      :aria-label="`Filter projects by ${category} category${selectedCategory === category ? ' (currently selected)' : ''}`"
      @click="handleCategoryClick(category)"
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

const handleCategoryClick = (category: string) => {
  emit('update:selectedCategory', category)
}
</script>
