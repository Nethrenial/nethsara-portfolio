<template>
  <!-- Rendered after mount only: the server has no idea what time the
       reader will arrive, and a mismatched clock is worse than none. -->
  <time
    class="tabular inline-flex items-center gap-2 transition-opacity duration-700 ease-out-expo"
    :datetime="iso"
    :class="now ? 'opacity-100' : 'opacity-0'"
  >
    <span
      class="relative flex size-2"
      aria-hidden="true"
    >
      <span class="animate-ping-slow absolute inset-0 rounded-full bg-sage" />
      <span class="relative size-2 rounded-full bg-sage" />
    </span>
    <span>{{ label }}</span>
  </time>
</template>

<script setup lang="ts">
const now = ref<Date | null>(null)
let timer: number | undefined

const formatter = import.meta.client
  ? new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Colombo',
    })
  : null

const label = computed(() =>
  now.value && formatter ? `${formatter.format(now.value)} in Colombo` : 'Colombo',
)

const iso = computed(() => now.value?.toISOString())

onMounted(() => {
  now.value = new Date()
  timer = window.setInterval(() => (now.value = new Date()), 15_000)
})

onUnmounted(() => window.clearInterval(timer))
</script>
