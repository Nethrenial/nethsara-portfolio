<template>
  <!-- External Link -->
  <a
    v-if="href && external"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="buttonClasses"
    :aria-label="ariaLabel || (text ? `${text} (opens in new tab)` : undefined)"
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
      aria-hidden="true"
    />
    <span v-if="$slots.default">
      <slot />
    </span>
    <span v-else-if="text">{{ text }}</span>
  </a>

  <!-- Internal Link -->
  <NuxtLink
    v-else-if="href"
    :to="href"
    :class="buttonClasses"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
      aria-hidden="true"
    />
    <span v-if="$slots.default">
      <slot />
    </span>
    <span v-else-if="text">{{ text }}</span>
  </NuxtLink>

  <!-- Button -->
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    :aria-label="ariaLabel"
    :aria-describedby="ariaDescribedBy"
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
      aria-hidden="true"
    />
    <span v-if="$slots.default">
      <slot />
    </span>
    <span v-else-if="text">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'
import { ButtonType } from '~/enums/ButtonType'

interface BaseButtonProps {
  // Element type
  href?: string | null
  external?: boolean

  // Button specific
  type?: ButtonType
  disabled?: boolean

  // Content
  text?: string | null
  icon?: string | null

  // Design variants
  variant?: ButtonVariant

  // Size variants
  size?: ButtonSize

  // Additional styling
  fullWidth?: boolean
  glow?: boolean
  circular?: boolean

  // Accessibility
  ariaLabel?: string
  ariaDescribedBy?: string
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  href: null,
  external: false,
  type: ButtonType.BUTTON,
  disabled: false,
  text: null,
  icon: null,
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.DEFAULT,
  fullWidth: false,
  glow: true,
  circular: false,
  ariaLabel: undefined,
  ariaDescribedBy: undefined,
})

const emit = defineEmits<{
  click: [event: Event]
}>()

// Handle click events
const handleClick = (event: Event): void => {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}

// Base classes that apply to all buttons
const baseClasses = computed((): string => {
  const base = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50'
  const spacing = props.circular ? '' : 'space-x-2'
  const shape = 'rounded-full'
  return [base, spacing, shape].filter(Boolean).join(' ')
})

// Size-specific classes
const sizeClasses = computed((): string => {
  if (props.circular) {
    switch (props.size) {
      case ButtonSize.SMALL:
        return 'w-10 h-10 text-sm'
      case ButtonSize.LARGE:
        return 'w-16 h-16 text-lg'
      default:
        return 'w-12 h-12'
    }
  }
  switch (props.size) {
    case ButtonSize.SMALL:
      return 'px-6 py-2 text-sm'
    case ButtonSize.LARGE:
      return 'px-10 py-4 text-lg'
    default:
      return 'px-8 py-3'
  }
})

// Variant-specific classes
const variantClasses = computed((): string => {
  switch (props.variant) {
    case ButtonVariant.PRIMARY:
      return 'btn-primary text-white'
    case ButtonVariant.SECONDARY:
      return 'glass-card text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
    case ButtonVariant.GLASS:
      return 'glass-card text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
    default:
      return 'btn-primary text-white'
  }
})

// Glow effect classes
const glowClasses = computed((): string => {
  return props.glow ? 'glow-on-hover' : ''
})

// Disabled classes
const disabledClasses = computed((): string => {
  return props.disabled ? 'opacity-50 cursor-not-allowed' : ''
})

// Full width classes
const widthClasses = computed((): string => {
  return props.fullWidth ? 'w-full' : ''
})

// Combine all classes
const buttonClasses = computed((): string => {
  return [
    baseClasses.value,
    sizeClasses.value,
    variantClasses.value,
    glowClasses.value,
    disabledClasses.value,
    widthClasses.value,
  ].filter(Boolean).join(' ')
})

// Icon size based on button size
const iconClasses = computed((): string => {
  switch (props.size) {
    case ButtonSize.SMALL:
      return 'text-sm'
    case ButtonSize.LARGE:
      return 'text-xl'
    default:
      return 'text-lg'
  }
})
</script>
