<template>
  <NuxtLayout>
    <section class="relative isolate flex min-h-dvh items-center overflow-clip">
      <div
        class="dot-grid absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 -z-10 hidden md:block"
        aria-hidden="true"
      >
        <MotionSystemDiagram />
      </div>

      <div class="shell py-24">
        <p
          class="flex items-center gap-4 font-mono text-xs tracking-wide text-ink-2"
          data-intro="fade"
        >
          <span class="tabular grid h-8 place-items-center rounded-lg bg-coral px-2 font-medium text-accent-ink">
            {{ error?.statusCode ?? 500 }}
          </span>
          Error
        </p>
        <h1 class="mt-8 max-w-4xl text-5xl font-semibold tracking-display lg:text-8xl">
          <MotionSplitText
            :text="heading"
            trigger="load"
            :delay="150"
            :step="24"
            gradient
            hop
          />
        </h1>
        <p
          class="measure mt-8 text-lg text-ink-2"
          data-intro
          :style="{ '--d': '700ms' }"
        >
          {{ body }}
        </p>

        <div
          class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          data-intro
          :style="{ '--d': '850ms' }"
        >
          <BaseButton
            :size="ButtonSize.LARGE"
            icon="ph:arrow-left"
            text="Back to home"
            hue="sage"
            @click="handleClearError"
          />
          <BaseButton
            :variant="ButtonVariant.TERTIARY"
            icon="ph:arrow-right"
            text="See the projects instead"
            @click="clearError({ redirect: '/projects' })"
          />
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'

const props = defineProps<{ error?: NuxtError }>()

const isNotFound = computed(() => props.error?.statusCode === 404)

const heading = computed(() =>
  isNotFound.value ? 'This page does not exist' : 'Something broke on my end',
)

const body = computed(() =>
  isNotFound.value
    ? 'The link may be old, or I may have moved the page. Everything worth reading is one click away.'
    : 'The server failed to render this page. Try again in a moment, or head back to the start.',
)

const handleClearError = () => clearError({ redirect: '/' })

useSeoMeta({
  title: () => (isNotFound.value ? 'Page not found' : 'Something went wrong'),
  robots: 'noindex',
})
</script>
