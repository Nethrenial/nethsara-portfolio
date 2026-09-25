<template>
  <div
    ref="groupRef"
    class="relative inline-flex max-w-full flex-wrap gap-1 rounded-2xl border border-line bg-surface p-1"
    role="group"
    :aria-label="label"
    :style="hueStyle(hue)"
  >
    <!-- One indicator, clipped to the selected option. Until it is measured
         the selected button carries its own fill. Clip path is paint
         only, so the slide never triggers layout. -->
    <span
      class="pointer-events-none absolute inset-1 rounded-xl bg-(--hue) transition-all duration-700 ease-out-expo"
      :style="indicatorStyle"
      aria-hidden="true"
    />
    <button
      v-for="option in options"
      :key="option.id"
      :ref="el => setRef(option.id, el as HTMLElement | null)"
      type="button"
      class="group relative rounded-xl px-3 py-2 text-sm font-medium transition-all duration-500 ease-out-expo active:scale-[0.97]"
      :class="[
        modelValue === option.id ? 'text-accent-ink' : 'text-ink-2 hover:text-ink',
        modelValue === option.id && !box ? 'bg-(--hue)' : '',
      ]"
      :aria-pressed="modelValue === option.id"
      @click="emit('update:modelValue', option.id)"
    >
      <MotionRollText :text="option.name" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Signal } from '~/utils/signal'

interface FilterOption {
  id: string
  name: string
}

interface FilterButtonGroupProps {
  options: FilterOption[]
  modelValue: string
  label: string
  hue?: Signal
}

const props = withDefaults(defineProps<FilterButtonGroupProps>(), {
  hue: 'saffron',
})

const emit = defineEmits<{
  'update:modelValue': [id: string]
}>()

const groupRef = ref<HTMLElement>()
const refs = new Map<string, HTMLElement>()
const setRef = (id: string, el: HTMLElement | null) => {
  if (el) refs.set(id, el)
  else refs.delete(id)
}

const box = ref<{ top: number, right: number, bottom: number, left: number } | null>(null)

// Measured against the inset-1 indicator box, so the offsets are relative
// to the group's padding edge.
const measure = () => {
  const group = groupRef.value
  const el = refs.get(props.modelValue)
  if (!group || !el) return
  const inset = 4
  const width = group.clientWidth - inset * 2
  const height = group.clientHeight - inset * 2
  const left = el.offsetLeft - inset
  const top = el.offsetTop - inset
  box.value = {
    top,
    left,
    right: width - left - el.offsetWidth,
    bottom: height - top - el.offsetHeight,
  }
}

useResizeObserver(groupRef, measure)
watch(() => props.modelValue, () => nextTick(measure))
onMounted(() => document.fonts?.ready.then(measure))

const indicatorStyle = computed(() => {
  if (!box.value) return { opacity: 0 }
  const { top, right, bottom, left } = box.value
  return { clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round 12px)` }
})
</script>
