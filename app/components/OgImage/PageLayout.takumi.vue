<script setup lang="ts">
const {
  title = 'Nethsara Elvitigala',
  description = 'A page on my portfolio.',
  section = 'Portfolio',
} = defineProps<{
  title?: string
  description?: string
  section?: string
}>()
</script>

<template>
  <div
    style="height: 100%; width: 100%; display: flex; background-color: #000000; font-family: Geist, sans-serif;"
  >
    <div style="width: 6px; height: 100%; background-color: #f5f1e8; flex-shrink: 0;" />

    <div
      style="display: flex; flex-direction: column; justify-content: space-between; width: 100%; height: 100%; padding: 64px 72px;"
    >
      <span style="color: #6b6b6b; font-size: 15px; font-weight: 500; letter-spacing: 3px;">
        {{ section.toUpperCase() }}
      </span>

      <div style="display: flex; flex-direction: column;">
        <div
          style="font-size: 76px; font-weight: 600; line-height: 1.02; color: #ffffff; letter-spacing: -3px; max-width: 900px;"
        >
          {{ title }}
        </div>
        <div
          style="color: #9b9b9b; font-size: 22px; line-height: 1.5; max-width: 760px; margin-top: 24px;"
        >
          {{ description }}
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 14px;">
        <img
          src="/images/profile/nethsara.jpg"
          width="44"
          height="44"
          style="width: 44px; height: 44px; object-fit: cover; object-position: top; border-radius: 10px;"
        >
        <span style="color: #ffffff; font-size: 17px; font-weight: 600;">Nethsara Elvitigala</span>
        <span style="color: #313131; font-size: 17px;">/</span>
        <span style="color: #9b9b9b; font-size: 17px;">nethsara.me</span>
      </div>
    </div>
  </div>
</template>
