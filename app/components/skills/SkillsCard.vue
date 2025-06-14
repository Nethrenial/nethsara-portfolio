<template>
  <div class="flex flex-col items-center justify-between p-3 bg-[var(--color-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:scale-105 transition-all duration-300 group h-24 min-h-[96px]">
    <div class="flex-1 flex items-center justify-center mb-2">
      <Icon
        :name="skill.icon"
        class="text-3xl group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <span class="text-[var(--color-text-secondary)] text-xs text-center group-hover:text-[var(--color-text-primary)] transition-colors duration-300 leading-tight">
      {{ skill.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/models/Skill'

interface SkillsCardProps {
  skill: Skill
}

defineProps<SkillsCardProps>()
</script>
