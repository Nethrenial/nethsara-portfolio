<template>
  <!-- Inline, specific, and it slides in rather than shoving the layout -->
  <Transition
    enter-active-class="transition-all duration-500 ease-out-expo"
    enter-from-class="opacity-0 -translate-y-2"
    leave-active-class="transition-all duration-300 ease-out-expo"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <p
      v-if="message"
      :id="id"
      class="mt-2 flex items-center gap-2 text-sm text-coral"
      role="alert"
    >
      <Icon
        name="ph:warning-circle"
        class="size-4 shrink-0"
        aria-hidden="true"
      />
      {{ message }}
    </p>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  message?: string
}>()
</script>
