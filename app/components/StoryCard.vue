<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="border-t border-line pt-8">
    <div class="flex items-center gap-3">
      <Icon
        :name="icon"
        class="text-xl text-ink-3"
        aria-hidden="true"
      />
      <h3 class="text-base font-semibold text-ink">
        {{ title }}
      </h3>
    </div>
    <div class="mt-4 space-y-4">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        class="measure text-base text-ink-2 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-ink"
        v-html="paragraph"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
interface StoryCardProps {
  icon: string
  title: string
  paragraphs: string[]
}

defineProps<StoryCardProps>()
</script>
