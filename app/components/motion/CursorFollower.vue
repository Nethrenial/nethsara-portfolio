<template>
  <div
    v-if="enabled"
    class="pointer-events-none fixed top-0 left-0 z-overlay"
    aria-hidden="true"
  >
    <div
      ref="dot"
      class="absolute top-0 left-0 will-change-transform"
    >
      <!-- Ring: a dot at rest, a ring over anything interactive, a filled
           disc in the target's hue when it carries a label. -->
      <span
        class="absolute -top-6 -left-6 block size-12 rounded-full transition-all duration-700 ease-out-expo"
        :class="ringClass"
        :style="{ backgroundColor: mode === 'label' ? hue : undefined }"
      />
      <span
        class="absolute top-0 left-0 block -translate-x-1/2 -translate-y-1/2 text-xs font-semibold whitespace-nowrap text-accent-ink transition-all duration-500 ease-out-expo"
        :class="mode === 'label' ? 'scale-100 opacity-100' : 'scale-50 opacity-0'"
      >{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
type Mode = 'rest' | 'hover' | 'label' | 'hidden'

const enabled = ref(false)
const dot = ref<HTMLElement>()
const mode = ref<Mode>('hidden')
const label = ref('')
const hue = ref('var(--color-accent)')

const ringClass = computed(() => {
  switch (mode.value) {
    case 'hover': return 'scale-100 border border-ink/60 bg-transparent'
    case 'label': return 'scale-150'
    case 'hidden': return 'scale-0 bg-accent'
    default: return 'scale-[0.2] bg-accent'
  }
})

let frame = 0
let x = -100
let y = -100
let targetX = -100
let targetY = -100

// Follows with a short lag rather than sitting under the pointer: the ring
// covers a fraction of the remaining distance each frame, which reads as a
// light spring.
const loop = () => {
  x += (targetX - x) * 0.22
  y += (targetY - y) * 0.22
  if (dot.value) dot.value.style.transform = `translate3d(${x}px, ${y}px, 0)`
  frame = requestAnimationFrame(loop)
}

const onMove = (event: PointerEvent) => {
  targetX = event.clientX
  targetY = event.clientY
  if (mode.value === 'hidden') {
    x = targetX
    y = targetY
  }

  const target = event.target as Element | null
  const labelled = target?.closest<HTMLElement>('[data-cursor]')
  if (labelled) {
    label.value = labelled.dataset.cursor ?? ''
    const resolved = getComputedStyle(labelled).getPropertyValue('--hue').trim()
    hue.value = resolved || 'var(--color-accent)'
    mode.value = 'label'
    return
  }

  mode.value = target?.closest('a, button, [role="button"], label, input, textarea, select')
    ? 'hover'
    : 'rest'
}

const onLeave = () => {
  mode.value = 'hidden'
}

onMounted(() => {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!fine || still) return

  enabled.value = true
  document.documentElement.classList.add('has-cursor')
  window.addEventListener('pointermove', onMove, { passive: true })
  document.documentElement.addEventListener('pointerleave', onLeave)
  frame = requestAnimationFrame(loop)
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  document.documentElement.classList.remove('has-cursor')
  window.removeEventListener('pointermove', onMove)
  document.documentElement.removeEventListener('pointerleave', onLeave)
})
</script>
