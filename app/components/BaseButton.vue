<template>
  <!-- External Link -->
  <a
    v-if="href && external"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="buttonClasses"
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
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
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
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
    @click="handleClick"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
    />
    <span v-if="$slots.default">
      <slot />
    </span>
    <span v-else-if="text">{{ text }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  // Element type
  href: {
    type: String,
    default: null,
  },
  external: {
    type: Boolean,
    default: false,
  },

  // Button specific
  type: {
    type: String,
    default: 'button',
    validator: value => ['button', 'submit', 'reset'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },

  // Content
  text: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },

  // Design variants
  variant: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'glass'].includes(value),
  },

  // Size variants
  size: {
    type: String,
    default: 'default',
    validator: value => ['sm', 'default', 'lg'].includes(value),
  },

  // Additional styling
  fullWidth: {
    type: Boolean,
    default: false,
  },
  glow: {
    type: Boolean,
    default: true,
  },
  circular: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

// Handle click events
const handleClick = (event) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}

// Base classes that apply to all buttons
const baseClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50'
  const spacing = props.circular ? '' : 'space-x-2'
  const shape = 'rounded-full'
  return [base, spacing, shape].filter(Boolean).join(' ')
})

// Size-specific classes
const sizeClasses = computed(() => {
  if (props.circular) {
    switch (props.size) {
      case 'sm':
        return 'w-10 h-10 text-sm'
      case 'lg':
        return 'w-16 h-16 text-lg'
      default:
        return 'w-12 h-12'
    }
  }
  switch (props.size) {
    case 'sm':
      return 'px-6 py-2 text-sm'
    case 'lg':
      return 'px-10 py-4 text-lg'
    default:
      return 'px-8 py-3'
  }
})

// Variant-specific classes
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'btn-primary text-white'
    case 'secondary':
      return 'glass-card text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
    case 'glass':
      return 'glass-card text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
    default:
      return 'btn-primary text-white'
  }
})

// Glow effect classes
const glowClasses = computed(() => {
  return props.glow ? 'glow-on-hover' : ''
})

// Disabled classes
const disabledClasses = computed(() => {
  return props.disabled ? 'opacity-50 cursor-not-allowed' : ''
})

// Full width classes
const widthClasses = computed(() => {
  return props.fullWidth ? 'w-full' : ''
})

// Combine all classes
const buttonClasses = computed(() => {
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
const iconClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-4 h-4'
    case 'lg':
      return 'w-6 h-6'
    default:
      return 'w-5 h-5'
  }
})
</script>
