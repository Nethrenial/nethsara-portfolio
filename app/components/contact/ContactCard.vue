<template>
  <a
    :href="contact.href"
    :target="contact.external ? '_blank' : undefined"
    :rel="contact.external ? 'noopener noreferrer' : undefined"
    :aria-label="`${contact.title}: ${contact.action}${contact.external ? ' (opens in a new tab)' : ''}`"
    class="group relative isolate flex items-center gap-4 border-t border-line py-4 transition-colors duration-700 ease-out-expo"
    :style="hueStyle(hue)"
  >
    <!-- A band of the row's hue sweeps in from the left on hover. It bleeds
         past the column and floats between the rules, so the content can
         stay where it is. -->
    <span
      class="absolute -inset-x-4 inset-y-1 -z-10 origin-left scale-x-0 rounded-2xl bg-(--hue) transition-transform duration-700 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100"
      aria-hidden="true"
    />

    <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-(--hue) transition-all duration-700 ease-out-expo group-hover:bg-accent-ink">
      <Icon
        :name="contact.icon"
        class="size-5"
        aria-hidden="true"
      />
    </span>
    <div class="min-w-0 flex-1 transition-transform duration-700 ease-out-expo group-hover:translate-x-1">
      <p class="font-mono text-xs tracking-wide text-ink-3 transition-colors duration-700 ease-out-expo group-hover:text-accent-ink/70">
        {{ contact.title }}
      </p>
      <p class="mt-1 truncate text-base font-medium text-ink transition-colors duration-700 ease-out-expo group-hover:text-accent-ink">
        {{ contact.action }}
      </p>
    </div>
    <Icon
      :name="contact.external ? 'ph:arrow-up-right' : 'ph:arrow-right'"
      class="size-5 shrink-0 text-ink-3 transition-all duration-700 ease-out-expo group-hover:translate-x-1 group-hover:scale-125 group-hover:text-accent-ink"
      aria-hidden="true"
    />
  </a>
</template>

<script setup lang="ts">
import type { ContactMethod } from '~/models/ContactMethod'
import type { Signal } from '~/utils/signal'

interface ContactCardProps {
  contact: ContactMethod
  hue: Signal
}

defineProps<ContactCardProps>()
</script>
