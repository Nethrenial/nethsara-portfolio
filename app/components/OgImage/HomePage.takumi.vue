<script setup lang="ts">
const {
  title = 'Nethsara Elvitigala',
  description = 'Senior Software Engineer specializing in distributed systems and cloud native architecture.',
} = defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    style="height: 100%; width: 100%; display: flex; align-items: center; background-color: #000000; font-family: Geist, sans-serif;"
  >
    <!-- Left rule, the only ornament -->
    <div style="width: 6px; height: 100%; background-color: #f5f1e8; flex-shrink: 0;" />

    <div
      style="display: flex; align-items: center; justify-content: space-between; width: 100%; height: 100%; padding: 64px 72px;"
    >
      <div style="display: flex; flex-direction: column; flex: 1; padding-right: 56px;">
        <span style="color: #6b6b6b; font-size: 15px; font-weight: 500; letter-spacing: 3px;">
          NETHSARA.ME
        </span>

        <div
          style="font-size: 68px; font-weight: 600; line-height: 1.02; color: #ffffff; letter-spacing: -2.5px; margin-top: 28px;"
        >
          {{ title }}
        </div>

        <div
          style="color: #9b9b9b; font-size: 21px; line-height: 1.5; max-width: 560px; margin-top: 24px;"
        >
          {{ description }}
        </div>

        <div style="display: flex; align-items: center; gap: 10px; margin-top: 40px;">
          <span style="border: 1px solid #313131; border-radius: 6px; padding: 6px 14px; color: #9b9b9b; font-size: 15px;">TypeScript</span>
          <span style="border: 1px solid #313131; border-radius: 6px; padding: 6px 14px; color: #9b9b9b; font-size: 15px;">Java</span>
          <span style="border: 1px solid #313131; border-radius: 6px; padding: 6px 14px; color: #9b9b9b; font-size: 15px;">Python</span>
          <span style="border: 1px solid #313131; border-radius: 6px; padding: 6px 14px; color: #9b9b9b; font-size: 15px;">Kubernetes</span>
        </div>
      </div>

      <div style="display: flex; flex-shrink: 0;">
        <img
          src="/images/profile/nethsara.jpg"
          width="260"
          height="325"
          style="width: 260px; height: 325px; object-fit: cover; object-position: top; border-radius: 20px;"
        >
      </div>
    </div>
  </div>
</template>
