<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    :class="buttonClasses"
    :aria-label="resolvedAriaLabel"
    :aria-describedby="ariaDescribedBy"
    @click="handleClick"
  >
    <Icon
      v-if="icon && !loading"
      :name="icon"
      :class="iconClasses"
      aria-hidden="true"
    />
    <Icon
      v-if="loading"
      name="ph:circle-notch"
      :class="[iconClasses, 'animate-spin']"
      aria-hidden="true"
    />
    <span v-if="$slots.default"><slot /></span>
    <span v-else-if="text">{{ text }}</span>
  </component>
</template>

<script setup lang="ts">
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'
import { ButtonType } from '~/enums/ButtonType'

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
  circular?: boolean
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
  circular: false,
  ariaLabel: undefined,
  ariaDescribedBy: undefined,
})

const emit = defineEmits<{ click: [event: Event] }>()

const tag = computed(() => {
  if (!props.href) return 'button'
  return props.external ? 'a' : resolveComponent('NuxtLink')
})

const linkAttrs = computed(() => {
  if (props.external) {
    return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
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

const sizeClasses = computed((): string => {
  if (props.circular) {
    switch (props.size) {
      case ButtonSize.SMALL: return 'size-9'
      case ButtonSize.LARGE: return 'size-14'
      default: return 'size-11'
    }
  }
  switch (props.size) {
    // Header and inline actions
    case ButtonSize.SMALL: return 'px-3 py-2 text-sm'
    // Hero and section CTAs
    case ButtonSize.LARGE: return 'px-6 py-3 text-base'
    default: return 'px-3 py-2 text-base'
  }
})

const variantClasses = computed((): string => {
  switch (props.variant) {
    case ButtonVariant.SECONDARY:
      return 'border border-line text-ink hover:border-ink-3 hover:bg-surface-2'
    case ButtonVariant.TERTIARY:
      return 'text-ink-2 hover:text-ink'
    default:
      return 'bg-accent text-accent-ink hover:bg-white'
  }
})

const buttonClasses = computed((): string => {
  const isText = props.variant === ButtonVariant.TERTIARY
  return [
    'inline-flex items-center justify-center font-semibold',
    'transition-all duration-700 ease-out-expo',
    // Real pressed feedback, not just a colour shift
    'active:scale-[0.98]',
    props.circular ? 'gap-0' : 'gap-2',
    // A text button carries no chrome: no radius, no padding box.
    isText
      ? (props.size === ButtonSize.SMALL ? 'text-sm' : 'text-base')
      : `rounded-full ${sizeClasses.value}`,
    variantClasses.value,
    props.disabled || props.loading ? 'pointer-events-none opacity-40' : '',
    props.fullWidth ? 'w-full' : '',
  ].filter(Boolean).join(' ')
})

const iconClasses = computed((): string => {
  switch (props.size) {
    case ButtonSize.SMALL: return 'text-base'
    case ButtonSize.LARGE: return 'text-xl'
    default: return 'text-lg'
  }
})
</script>
