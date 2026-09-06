<template>
  <li class="flex items-center gap-2.5 rounded-lg border border-line bg-surface-2 py-2 pr-3 pl-2.5 transition-all duration-700 ease-out-expo hover:-translate-y-0.5 hover:border-ink-3 hover:bg-surface-3">
    <Icon
      :name="skill.icon"
      class="size-5 shrink-0"
      aria-hidden="true"
    />
    <span class="text-sm whitespace-nowrap text-ink-2">
      {{ skill.name }}
    </span>
  </li>
</template>

<script setup lang="ts">
import type { Skill } from '~/models/Skill'

interface SkillsCardProps {
  skill: Skill
}

defineProps<SkillsCardProps>()
</script>
