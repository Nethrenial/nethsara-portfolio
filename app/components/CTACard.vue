<template>
  <section :class="sectionClasses">
    <div class="max-w-4xl mx-auto">
      <div class="text-center bg-[var(--color-accent)] rounded-xl p-8 border border-[var(--color-border)]">
        <h2 class="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          {{ title }}
        </h2>
        <p class="text-[var(--color-text-secondary)] mb-6">
          {{ description }}
        </p>
        <BaseButton
          :variant="buttonVariant"
          :href="buttonHref"
          :text="buttonText"
          :size="buttonSize"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'

interface CTACardProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  buttonVariant?: ButtonVariant
  buttonSize?: ButtonSize
  background?: 'secondary' | 'transparent'
}

const props = withDefaults(defineProps<CTACardProps>(), {
  buttonVariant: ButtonVariant.PRIMARY,
  buttonSize: ButtonSize.LARGE,
  background: 'secondary',
})

const sectionClasses = computed(() => {
  const classes = ['py-16', 'px-8']

  if (props.background === 'secondary') {
    classes.push('bg-[var(--color-secondary)]')
  }

  return classes.join(' ')
})
</script>
