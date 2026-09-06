<template>
  <a
    :href="contact.href"
    :target="contact.external ? '_blank' : undefined"
    :rel="contact.external ? 'noopener noreferrer' : undefined"
    :aria-label="`${contact.title}: ${contact.action}${contact.external ? ' (opens in a new tab)' : ''}`"
    class="group flex items-center gap-4 border-t border-line py-5 transition-colors duration-700 ease-out-expo"
  >
    <Icon
      :name="contact.icon"
      class="shrink-0 text-xl text-ink-3 transition-colors duration-700 ease-out-expo group-hover:text-accent"
      aria-hidden="true"
    />
    <div class="min-w-0 flex-1">
      <p class="font-mono text-xs tracking-wide text-ink-3 uppercase">
        {{ contact.title }}
      </p>
      <p class="mt-1 truncate text-base text-ink transition-colors duration-700 ease-out-expo group-hover:text-accent">
        {{ contact.action }}
      </p>
    </div>
    <Icon
      :name="contact.external ? 'ph:arrow-up-right' : 'ph:arrow-right'"
      class="shrink-0 text-base text-ink-3 transition-all duration-700 ease-out-expo group-hover:translate-x-0.5 group-hover:text-ink"
      aria-hidden="true"
    />
  </a>
</template>

<script setup lang="ts">
import type { ContactMethod } from '~/models/ContactMethod'

interface ContactCardProps {
  contact: ContactMethod
}

defineProps<ContactCardProps>()
</script>
