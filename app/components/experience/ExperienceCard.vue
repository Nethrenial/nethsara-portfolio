<template>
  <div
    class="relative flex flex-col md:flex-row items-start md:items-center"
    :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
  >
    <!-- Enhanced Timeline Dot with Glow -->
    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full border-4 md:border-6 border-[var(--color-surface)] z-10 shadow-lg pulse-glow" />

    <!-- Enhanced Content Card -->
    <div
      class="ml-8 md:ml-0 md:w-[calc(50%-2rem)] glass-card rounded-2xl p-6 md:p-8 card-hover glow-on-hover group relative overflow-hidden"
      :class="index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'"
    >
      <!-- Background Pattern -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16" />

      <!-- Company Logo Placeholder -->
      <div class="absolute top-6 right-6 w-12 h-12 glass-card rounded-lg flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <Icon
          name="heroicons:building-office-2"
          class="w-6 h-6 text-[var(--color-primary)]"
        />
      </div>

      <!-- Desktop Layout -->
      <div class="hidden md:block relative z-10">
        <div class="flex items-start justify-between mb-6">
          <div class="flex-1 pr-16">
            <h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
              {{ experience.position }}
            </h3>
            <p class="text-[var(--color-primary)] font-semibold text-lg mb-1">
              {{ experience.company }}
            </p>
            <p class="text-[var(--color-text-secondary)] text-sm flex items-center">
              <Icon
                name="heroicons:map-pin"
                class="w-4 h-4 mr-1"
              />
              {{ experience.location }}
            </p>
          </div>
          <div class="flex flex-col items-end">
            <span class="text-[var(--color-text-secondary)] text-sm glass-card px-4 py-2 rounded-full whitespace-nowrap mb-2">
              {{ experience.period }}
            </span>
            <div class="flex items-center text-xs text-[var(--color-primary)]">
              <div class="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-2 animate-pulse" />
              <span>{{ getStatus(experience.period) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="md:hidden mb-6 relative z-10">
        <div class="pr-16">
          <h3 class="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
            {{ experience.position }}
          </h3>
          <p class="text-[var(--color-primary)] font-semibold text-base mb-1">
            {{ experience.company }}
          </p>
          <p class="text-[var(--color-text-secondary)] text-sm flex items-center mb-2">
            <Icon
              name="heroicons:map-pin"
              class="w-4 h-4 mr-1"
            />
            {{ experience.location }}
          </p>
          <div class="flex items-center justify-between">
            <span class="text-[var(--color-text-secondary)] text-xs glass-card px-3 py-1 rounded-full">
              {{ experience.period }}
            </span>
            <div class="flex items-center text-xs text-[var(--color-primary)]">
              <div class="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-2 animate-pulse" />
              <span>{{ getStatus(experience.period) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-[var(--color-text-secondary)] mb-6 leading-relaxed relative z-10">
        {{ experience.description }}
      </p>

      <!-- Enhanced Key Achievements -->
      <div class="mb-6 relative z-10">
        <h4 class="text-[var(--color-text-primary)] font-semibold mb-4 flex items-center">
          <Icon
            name="heroicons:trophy"
            class="w-5 h-5 mr-2 text-[var(--color-primary)]"
          />
          Key Achievements
        </h4>
        <ul class="space-y-3">
          <li
            v-for="achievement in experience.achievements"
            :key="achievement"
            class="flex items-start text-[var(--color-text-secondary)] text-sm"
          >
            <div class="w-5 h-5 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              <Icon
                name="heroicons:check"
                class="w-3 h-3 text-[var(--color-primary)]"
              />
            </div>
            <span class="leading-relaxed">{{ achievement }}</span>
          </li>
        </ul>
      </div>

      <!-- Enhanced Technologies -->
      <div class="relative z-10">
        <h4 class="text-[var(--color-text-primary)] font-semibold mb-3 flex items-center">
          <Icon
            name="heroicons:cog-6-tooth"
            class="w-5 h-5 mr-2 text-[var(--color-primary)]"
          />
          Technologies Used
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in experience.technologies"
            :key="tech"
            class="px-3 py-1.5 glass-card text-[var(--color-text-secondary)] text-xs rounded-full hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 cursor-default"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '~/models/Experience'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

defineProps<ExperienceCardProps>()

// Helper function to determine if position is current
const getStatus = (period: string): string => {
  if (period.toLowerCase().includes('present')) {
    return 'Current'
  }
  return 'Completed'
}
</script>
