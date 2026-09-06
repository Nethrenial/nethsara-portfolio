<template>
  <!-- A composed prompt rather than a blank panel: it says what happened and
       offers the way out. -->
  <div class="flex flex-col items-start gap-4 rounded-2xl border border-line border-dashed px-8 py-16">
    <Icon
      :name="icon"
      class="text-3xl text-ink-3"
      aria-hidden="true"
    />
    <div>
      <h3 class="text-lg font-semibold text-ink">
        {{ title }}
      </h3>
      <p class="measure mt-2 text-base text-ink-2">
        {{ message }}
      </p>
    </div>
    <slot name="action" />
  </div>
</template>

<script setup lang="ts">
interface EmptyStateProps {
  icon?: string
  title: string
  message: string
}

withDefaults(defineProps<EmptyStateProps>(), {
  icon: 'ph:folder-open',
})
</script>
