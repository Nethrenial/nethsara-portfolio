<template>
  <section class="border-b border-line bg-surface">
    <div class="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <div
        v-reveal
        class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h2 class="max-w-170 text-3xl font-semibold tracking-display text-ink lg:text-4xl">
            {{ title }}
          </h2>
          <p class="measure mt-4 text-lg text-ink-2">
            {{ description }}
          </p>
        </div>
        <BaseButton
          :variant="buttonVariant"
          :href="buttonHref"
          :text="buttonText"
          :size="buttonSize"
          icon="ph:arrow-right"
          class="shrink-0"
          :aria-label="buttonAriaLabel"
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
  buttonAriaLabel?: string
}

withDefaults(defineProps<CTACardProps>(), {
  buttonVariant: ButtonVariant.PRIMARY,
  buttonSize: ButtonSize.LARGE,
  buttonAriaLabel: undefined,
})
</script>
