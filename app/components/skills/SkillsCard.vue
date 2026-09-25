<template>
  <!-- Logos rest in greyscale so the row reads as one system, then bloom into
       their own colour under the pointer. -->
  <li class="group/chip flex items-center gap-2 rounded-lg border border-line bg-surface py-2 pr-3 pl-2 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-(--hue) hover:bg-surface-2">
    <Icon
      :name="skill.icon"
      class="size-5 shrink-0 opacity-70 grayscale transition-all duration-500 ease-out-expo group-hover/chip:scale-110 group-hover/chip:rotate-[-8deg] group-hover/chip:opacity-100 group-hover/chip:grayscale-0"
      aria-hidden="true"
    />
    <span class="text-sm whitespace-nowrap text-ink-2 transition-colors duration-500 ease-out-expo group-hover/chip:text-ink">
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
