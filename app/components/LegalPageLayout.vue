<template>
  <div>
    <section class="border-b border-line pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div class="mx-auto max-w-3xl px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-all duration-700 ease-out-expo hover:gap-3 hover:text-ink"
        >
          <Icon
            name="ph:arrow-left"
            class="text-base"
            aria-hidden="true"
          />
          Back to home
        </NuxtLink>

        <h1 class="mt-8 text-4xl font-semibold tracking-display text-ink lg:text-5xl">
          {{ title }}
        </h1>
        <p class="mt-4 text-base text-ink-3">
          Last updated <time :datetime="updatedIso">{{ updatedLabel }}</time>
        </p>
      </div>
    </section>

    <section class="border-b border-line py-16 lg:py-24">
      <div class="mx-auto max-w-3xl space-y-12 px-6 lg:px-8">
        <slot />
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

const updatedIso = computed(() => props.updated)
const updatedLabel = computed(() =>
  new Date(props.updated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
)
</script>
