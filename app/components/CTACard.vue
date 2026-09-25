<template>
  <section class="pb-24">
    <div class="shell">
      <!-- A flat block of colour, the loudest object on the page, reserved
           for the one action that matters here. -->
      <div
        v-reveal="{ variant: 'scale' }"
        class="relative isolate overflow-hidden rounded-3xl bg-(--hue) p-8 text-accent-ink lg:p-16"
        :style="hueStyle(hue)"
      >
        <div
          class="dot-grid absolute inset-0 -z-10 opacity-40 mix-blend-multiply"
          aria-hidden="true"
        />
        <!-- Rings, slowly breathing, off the right edge -->
        <span
          v-for="ring in 4"
          :key="ring"
          class="animate-float absolute top-1/2 -right-24 -z-10 aspect-square -translate-y-1/2 rounded-full border border-accent-ink/15"
          :style="{ width: `${ring * 12}rem`, animationDelay: `${ring * 300}ms` }"
          aria-hidden="true"
        />

        <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 class="max-w-170 text-4xl font-semibold tracking-display lg:text-6xl">
              <MotionSplitText
                :text="title"
                by="word"
                :step="60"
              />
            </h2>
            <p class="measure mt-4 text-lg opacity-80">
              {{ description }}
            </p>
          </div>
          <BaseButton
            :href="buttonHref"
            :text="buttonText"
            :size="ButtonSize.LARGE"
            :variant="ButtonVariant.SECONDARY"
            icon="ph:arrow-right"
            hue="rose"
            class="shrink-0 border-accent-ink/30 text-accent-ink"
            :aria-label="buttonAriaLabel"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'
import type { Signal } from '~/utils/signal'

interface CTACardProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  buttonAriaLabel?: string
  hue?: Signal
}

withDefaults(defineProps<CTACardProps>(), {
  buttonAriaLabel: undefined,
  hue: 'saffron',
})
</script>
