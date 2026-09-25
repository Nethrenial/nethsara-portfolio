<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    v-magnetic="isTertiary ? 0 : 0.28"
    :class="buttonClasses"
    :style="hueStyle(hue)"
    :aria-label="resolvedAriaLabel"
    :aria-describedby="ariaDescribedBy"
    :aria-busy="loading || undefined"
    @click="handleClick"
  >
    <!-- Liquid fill: rises from the bottom in the button's hue -->
    <span
      v-if="!isTertiary"
      class="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-full bg-(--hue) transition-transform duration-700 ease-out-expo group-hover:scale-y-100 group-focus-visible:scale-y-100"
      aria-hidden="true"
    />

    <!-- Loading: a bar sweeps the base of the button rather than a spinner -->
    <span
      v-if="loading"
      class="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden"
      aria-hidden="true"
    >
      <span class="animate-sweep block h-full w-full bg-(--hue)" />
    </span>

    <span
      data-magnetic-inner
      class="inline-flex items-center"
      :class="isLarge ? 'gap-4' : 'gap-2'"
    >
      <span v-if="$slots.default"><slot /></span>
      <MotionRollText
        v-else-if="text"
        :text="text"
      />

      <!-- Icon swaps out along its own direction and a copy follows it in -->
      <span
        v-if="icon"
        class="relative grid shrink-0 place-items-center overflow-hidden transition-colors duration-700 ease-out-expo"
        :class="chipClasses"
        aria-hidden="true"
      >
        <Icon
          :name="icon"
          :class="[iconSize, 'transition-transform duration-700 ease-out-expo', exit]"
        />
        <Icon
          :name="icon"
          :class="[iconSize, 'absolute transition-transform duration-700 ease-out-expo', enter]"
        />
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'
import { ButtonType } from '~/enums/ButtonType'
import type { Signal } from '~/utils/signal'

interface BaseButtonProps {
  href?: string | null
  external?: boolean
  type?: ButtonType
  disabled?: boolean
  loading?: boolean
  text?: string | null
  icon?: string | null
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  /** Signal hue for the hover fill. */
  hue?: Signal
  ariaLabel?: string
  ariaDescribedBy?: string
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  href: null,
  external: false,
  type: ButtonType.BUTTON,
  disabled: false,
  loading: false,
  text: null,
  icon: null,
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.DEFAULT,
  fullWidth: false,
  hue: 'saffron',
  ariaLabel: undefined,
  ariaDescribedBy: undefined,
})

const emit = defineEmits<{ click: [event: Event] }>()

const isTertiary = computed(() => props.variant === ButtonVariant.TERTIARY)
const isLarge = computed(() => props.size === ButtonSize.LARGE && !isTertiary.value)

const tag = computed(() => {
  if (!props.href) return 'button'
  return props.external || props.href.startsWith('#') ? 'a' : resolveComponent('NuxtLink')
})

const linkAttrs = computed(() => {
  if (props.href && (props.external || props.href.startsWith('#'))) {
    return props.external
      ? { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
      : { href: props.href }
  }
  if (props.href) return { to: props.href }
  return { type: props.type, disabled: props.disabled || props.loading }
})

const resolvedAriaLabel = computed(() => {
  if (props.ariaLabel) return props.ariaLabel
  if (props.external && props.text) return `${props.text} (opens in a new tab)`
  return undefined
})

const handleClick = (event: Event): void => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}

/** The swap follows the arrow, so a down arrow drops and a diagonal flies. */
const motionAxis = computed(() => {
  const name = props.icon ?? ''
  if (name.includes('up-right')) return 'diagonal'
  if (name.includes('down')) return 'down'
  if (name.includes('left') || name.includes('counter')) return 'left'
  if (name.includes('up')) return 'up'
  return 'right'
})

const exit = computed(() => ({
  right: 'group-hover:translate-x-[150%]',
  left: 'group-hover:-translate-x-[150%]',
  down: 'group-hover:translate-y-[150%]',
  up: 'group-hover:-translate-y-[150%]',
  diagonal: 'group-hover:translate-x-[150%] group-hover:-translate-y-[150%]',
}[motionAxis.value]))

const enter = computed(() => ({
  right: '-translate-x-[150%] group-hover:translate-x-0',
  left: 'translate-x-[150%] group-hover:translate-x-0',
  down: '-translate-y-[150%] group-hover:translate-y-0',
  up: 'translate-y-[150%] group-hover:translate-y-0',
  diagonal: '-translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0',
}[motionAxis.value]))

const iconSize = computed(() => (props.size === ButtonSize.SMALL ? 'text-sm' : 'text-base'))

const chipClasses = computed(() => {
  if (!isLarge.value) return 'size-4'
  // The chip inverts against the pill, and flips again under the fill.
  return props.variant === ButtonVariant.PRIMARY
    ? 'size-8 rounded-full bg-accent-ink text-accent'
    : 'size-8 rounded-full bg-surface-3 text-ink group-hover:bg-accent-ink group-hover:text-accent'
})

const variantClasses = computed((): string => {
  switch (props.variant) {
    case ButtonVariant.SECONDARY:
      return 'rounded-full border border-line text-ink hover:border-transparent hover:text-accent-ink'
    case ButtonVariant.TERTIARY:
      return 'text-ink-2 hover:text-ink'
    default:
      return 'rounded-full bg-accent text-accent-ink'
  }
})

const sizeClasses = computed((): string => {
  if (isTertiary.value) return props.size === ButtonSize.SMALL ? 'text-sm' : 'text-base'
  if (props.size === ButtonSize.SMALL) return 'px-3 py-2 text-sm'
  if (isLarge.value) return 'py-2 pr-2 pl-4 text-base'
  return 'px-3 py-2 text-base'
})

const buttonClasses = computed((): string => [
  'group relative isolate inline-flex items-center justify-center overflow-hidden font-semibold whitespace-nowrap',
  'transition-all duration-700 ease-out-expo active:scale-[0.97]',
  sizeClasses.value,
  variantClasses.value,
  props.disabled || props.loading ? 'pointer-events-none' : '',
  props.disabled ? 'opacity-40' : '',
  props.fullWidth ? 'w-full' : '',
].filter(Boolean).join(' '))
</script>
