<template>
  <div class="group bg-[var(--color-secondary)] rounded-2xl overflow-hidden border border-[var(--color-border)] animate-pulse">
    <!-- Image Skeleton -->
    <div class="relative overflow-hidden aspect-video bg-gray-300 dark:bg-gray-700" />

    <!-- Content Skeleton -->
    <div class="p-6 space-y-4">
      <!-- Meta info skeleton -->
      <div class="flex items-center gap-3">
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16" />
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1" />
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-12" />
      </div>

      <!-- Title skeleton -->
      <div class="space-y-2">
        <div class="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full" />
        <div class="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
      </div>

      <!-- Description skeleton -->
      <div class="space-y-2">
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
      </div>

      <!-- Tags skeleton -->
      <div class="flex gap-2">
        <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16" />
        <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-20" />
      </div>

      <!-- Read more skeleton -->
      <div class="flex items-center justify-between pt-2">
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-20" />
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
