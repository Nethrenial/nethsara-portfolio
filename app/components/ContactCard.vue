<template>
  <a
    :href="contact.href"
    :target="contact.external ? '_blank' : undefined"
    :rel="contact.external ? 'noopener noreferrer' : undefined"
    class="group flex items-center p-4 bg-[var(--color-accent)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 card-hover hover:shadow-lg"
  >
    <div class="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300 flex-shrink-0 mr-4">
      <Icon
        :name="contact.icon"
        class="w-6 h-6 text-[var(--color-primary)]"
      />
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="text-lg font-semibold text-[var(--color-text-primary)] mb-1 truncate">
        {{ contact.title }}
      </h3>
      <p class="text-sm text-[var(--color-text-secondary)] mb-2 line-clamp-2">
        {{ contact.description }}
      </p>
      <p class="text-sm text-[var(--color-primary)] font-medium truncate">
        {{ contact.action }}
      </p>
    </div>
    <div class="ml-3 flex-shrink-0">
      <Icon
        v-if="contact.external"
        name="heroicons:arrow-top-right-on-square"
        class="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300"
      />
      <Icon
        v-else
        name="heroicons:chevron-right"
        class="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300"
      />
    </div>
  </a>
</template>

<script setup>
defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
