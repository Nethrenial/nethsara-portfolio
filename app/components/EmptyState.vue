<template>
  <!-- A composed prompt rather than a blank panel: it says what happened and
       offers the way out. -->
  <div class="dot-grid flex flex-col items-start gap-6 rounded-3xl border border-dashed border-line px-8 py-16">
    <span class="animate-float grid size-16 place-items-center rounded-2xl bg-surface-2 text-sky">
      <Icon
        :name="icon"
        class="size-8"
        aria-hidden="true"
      />
    </span>
    <div>
      <h3 class="text-2xl font-semibold tracking-display text-ink">
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
  icon: 'ph:folder-open-duotone',
})
</script>
