<template>
  <div class="mt-16 flex flex-col items-center space-y-6 animate-pulse">
    <!-- Pagination Info skeleton -->
    <div class="text-center">
      <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-48 mx-auto" />
    </div>

    <!-- Pagination Controls skeleton -->
    <div class="flex items-center space-x-2">
      <!-- Previous Button skeleton -->
      <div class="h-9 bg-gray-300 dark:bg-gray-700 rounded-lg w-20" />

      <!-- Page Numbers skeleton -->
      <div class="flex items-center space-x-1">
        <div class="h-9 bg-gray-300 dark:bg-gray-700 rounded-lg w-9" />
        <div class="h-9 bg-gray-300 dark:bg-gray-700 rounded-lg w-9" />
        <div class="h-9 bg-gray-300 dark:bg-gray-700 rounded-lg w-9" />
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-6" />
        <div class="h-9 bg-gray-300 dark:bg-gray-700 rounded-lg w-9" />
      </div>

      <!-- Next Button skeleton -->
      <div class="h-9 bg-gray-300 dark:bg-gray-700 rounded-lg w-16" />
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
