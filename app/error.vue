<template>
  <NuxtLayout>
    <section class="flex min-h-dvh items-center border-b border-line">
      <div class="mx-auto w-full max-w-6xl px-6 py-32 lg:px-8">
        <p class="font-mono text-xs tracking-widest text-ink-3 uppercase">
          Error {{ error?.statusCode ?? 500 }}
        </p>
        <h1 class="mt-6 max-w-170 text-5xl font-semibold tracking-display text-display lg:text-7xl">
          {{ heading }}
        </h1>
        <p class="measure mt-6 text-lg text-ink-2">
          {{ body }}
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <BaseButton
            :variant="ButtonVariant.PRIMARY"
            :size="ButtonSize.LARGE"
            icon="ph:arrow-left"
            text="Back to home"
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
