<template>
  <div>
    <section class="relative isolate overflow-clip pt-24 pb-16">
      <div
        class="dot-grid absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
      />
      <div class="shell pt-16">
        <div class="max-w-3xl">
          <NuxtLink
            to="/"
            class="group inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors duration-500 ease-out-expo hover:text-ink"
            data-intro="fade"
          >
            <Icon
              name="ph:arrow-left"
              class="size-4 transition-transform duration-700 ease-out-expo group-hover:-translate-x-1"
              aria-hidden="true"
            />
            <MotionRollText text="Back to home" />
          </NuxtLink>

          <h1 class="mt-8 text-5xl font-semibold tracking-display lg:text-7xl">
            <MotionSplitText
              :text="title"
              trigger="load"
              :delay="150"
              :step="28"
              gradient
            />
          </h1>
          <p
            class="mt-6 flex items-center gap-2 text-base text-ink-3"
            data-intro
            :style="{ '--d': '600ms' }"
          >
            <span
              class="size-1.5 rounded-full bg-sage"
              aria-hidden="true"
            />
            Last updated <time :datetime="updated">{{ updatedLabel }}</time>
          </p>
        </div>
      </div>
    </section>

    <section class="pb-24">
      <div class="shell">
        <div
          class="max-w-3xl space-y-12 border-t border-line pt-16"
          data-intro
          :style="{ '--d': '750ms' }"
        >
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface LegalPageLayoutProps {
  title: string
  /** ISO date the document was last revised. */
  updated: string
}

const props = defineProps<LegalPageLayoutProps>()

const updatedLabel = computed(() =>
  new Date(props.updated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
)
</script>
