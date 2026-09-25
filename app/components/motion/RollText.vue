<template>
  <!-- The copy in ::after is decorative; the real label is read once. -->
  <span class="roll">
    <span :data-text="text">{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>
