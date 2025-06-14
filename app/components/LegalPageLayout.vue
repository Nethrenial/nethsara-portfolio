<template>
  <div class="pt-20">
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-8">
            {{ titlePrefix }} <span class="gradient-text">{{ titleSuffix }}</span>
          </h1>

          <div class="prose prose-lg prose-invert max-w-none">
            <p class="text-[var(--color-text-secondary)] text-lg mb-8">
              Last updated: {{ new Date().toLocaleDateString() }}
            </p>

            <div class="space-y-8">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface LegalPageLayoutProps {
  titlePrefix: string
  titleSuffix: string
}

defineProps<LegalPageLayoutProps>()
</script>
