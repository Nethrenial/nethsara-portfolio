<template>
  <div
    class="relative flex flex-col md:flex-row items-start md:items-center"
    :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
  >
    <!-- Timeline Dot -->
    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-[var(--color-primary)] rounded-full border-2 md:border-4 border-[var(--color-surface)] z-10" />

    <!-- Content Card -->
    <div
      class="ml-6 md:ml-0 md:w-[calc(50%-1.5rem)] bg-[var(--color-secondary)] rounded-xl p-4 md:p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 card-hover"
      :class="index % 2 === 0 ? 'md:mr-3' : 'md:ml-3'"
    >
      <!-- Desktop Layout -->
      <div class="hidden md:flex items-start justify-between mb-6">
        <div>
          <h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            {{ experience.position }}
          </h3>
          <p class="text-[var(--color-primary)] font-semibold text-lg">
            {{ experience.company }}
          </p>
          <p class="text-[var(--color-text-secondary)] text-sm">
            {{ experience.location }}
          </p>
        </div>
        <span class="text-[var(--color-text-secondary)] text-sm bg-[var(--color-accent)] px-4 py-2 rounded-full whitespace-nowrap">
          {{ experience.period }}
        </span>
      </div>

      <!-- Mobile Layout -->
      <div class="md:hidden mb-6">
        <h3 class="text-xl font-bold text-[var(--color-text-primary)] mb-2">
          {{ experience.position }}
        </h3>
        <p class="text-[var(--color-primary)] font-semibold text-base">
          {{ experience.company }}
        </p>
        <p class="text-[var(--color-text-secondary)] text-sm">
          {{ experience.location }}
        </p>
        <span class="inline-block mt-2 text-[var(--color-text-secondary)] text-xs bg-[var(--color-accent)] px-3 py-1 rounded-full">
          {{ experience.period }}
        </span>
      </div>

      <p class="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
        {{ experience.description }}
      </p>

      <!-- Key Achievements -->
      <div class="mb-6">
        <h4 class="text-[var(--color-text-primary)] font-semibold mb-3">
          Key Achievements:
        </h4>
        <ul class="space-y-2">
          <li
            v-for="achievement in experience.achievements"
            :key="achievement"
            class="flex items-start text-[var(--color-text-secondary)] text-sm"
          >
            <Icon
              name="heroicons:check-circle"
              class="w-4 h-4 text-[var(--color-primary)] mr-2 mt-0.5 flex-shrink-0"
            />
            {{ achievement }}
          </li>
        </ul>
      </div>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in experience.technologies"
          :key="tech"
          class="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-text-secondary)] text-xs rounded-full hover:text-[var(--color-primary)] transition-colors duration-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
</script>
