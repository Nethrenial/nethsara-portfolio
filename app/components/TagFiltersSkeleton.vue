<template>
  <div class="flex flex-wrap justify-center gap-2 animate-pulse">
    <!-- All Topics skeleton -->
    <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-24" />

    <!-- Tag buttons skeleton -->
    <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-16" />
    <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-20" />
    <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-18" />
    <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-14" />
    <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-22" />
    <div class="h-8 bg-gray-300 dark:bg-gray-700 rounded-full w-16" />
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
