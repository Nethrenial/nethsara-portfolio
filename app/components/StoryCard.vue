<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="glass-card p-8 rounded-2xl card-hover">
    <div class="flex items-center mb-6">
      <div class="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mr-4">
        <Icon
          :name="icon"
          class="w-6 h-6 text-[var(--color-primary)]"
        />
      </div>
      <h3 class="text-xl font-semibold text-[var(--color-primary)]">
        {{ title }}
      </h3>
    </div>
    <div class="space-y-4">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        class="text-[var(--color-text-secondary)] leading-relaxed"
        :class="{ 'mb-6': index < paragraphs.length - 1 }"
        v-html="paragraph"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface StoryCardProps {
  icon: string
  title: string
  paragraphs: string[]
}

defineProps<StoryCardProps>()
</script>
