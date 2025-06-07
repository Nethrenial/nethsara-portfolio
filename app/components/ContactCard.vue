<template>
  <a
    :href="contact.href"
    :target="contact.external ? '_blank' : undefined"
    :rel="contact.external ? 'noopener noreferrer' : undefined"
    class="group p-8 bg-[var(--color-accent)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 text-center card-hover"
  >
    <div class="w-16 h-16 mx-auto mb-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
      <Icon
        :name="contact.icon"
        class="w-8 h-8 text-[var(--color-primary)]"
      />
    </div>
    <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
      {{ contact.title }}
    </h3>
    <p class="text-[var(--color-text-secondary)] mb-4">
      {{ contact.description }}
    </p>
    <p class="text-[var(--color-primary)] font-medium">
      {{ contact.action }}
    </p>
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
