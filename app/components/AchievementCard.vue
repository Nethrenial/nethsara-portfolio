<template>
  <div class="flex items-start space-x-4 p-6 bg-[var(--color-accent)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300">
    <div class="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon
        :name="achievement.icon"
        class="w-6 h-6 text-[var(--color-primary)]"
      />
    </div>
    <div>
      <h4 class="text-[var(--color-text-primary)] font-semibold mb-1">
        {{ achievement.title }}
      </h4>
      <p class="text-[var(--color-text-secondary)] text-sm">
        {{ achievement.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  achievement: {
    type: Object,
    required: true,
  },
})
</script>
