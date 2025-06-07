<template>
  <div class="group bg-[var(--color-secondary)] rounded-2xl overflow-hidden border border-[var(--color-border)] animate-pulse relative">
    <!-- Featured Badge Skeleton -->
    <div class="absolute top-4 left-4 z-10">
      <div class="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-full h-8 w-24" />
    </div>

    <!-- Image Skeleton -->
    <div class="relative overflow-hidden aspect-video bg-gray-300 dark:bg-gray-700" />

    <!-- Content Skeleton -->
    <div class="p-8 space-y-6">
      <!-- Meta info skeleton -->
      <div class="flex items-center gap-4">
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-20" />
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1" />
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16" />
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1" />
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-24" />
      </div>

      <!-- Title skeleton -->
      <div class="space-y-3">
        <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full" />
        <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded w-4/5" />
      </div>

      <!-- Description skeleton -->
      <div class="space-y-2">
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
      </div>

      <!-- Tags skeleton -->
      <div class="flex gap-2">
        <div class="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-20" />
        <div class="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-24" />
        <div class="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-18" />
      </div>

      <!-- Read more skeleton -->
      <div class="flex items-center justify-between">
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24" />
        <div class="h-5 bg-gray-300 dark:bg-gray-700 rounded w-5" />
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
