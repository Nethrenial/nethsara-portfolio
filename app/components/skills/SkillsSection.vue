<template>
  <BaseSection id="toolkit">
    <SectionHeader
      index="04 / Toolkit"
      title="What I reach for"
      description="Filter by the kind of work. Categories with nothing to show drop out."
      section-id="toolkit"
    />

    <!-- Segmented control rather than another row of pills -->
    <div
      v-reveal
      class="mb-16 inline-flex flex-wrap gap-1 rounded-xl border border-line bg-surface-2 p-1"
      role="group"
      aria-label="Filter the toolkit by discipline"
    >
      <button
        v-for="filter in filters"
        :key="filter.id"
        type="button"
        class="rounded-lg px-3 py-2 text-sm font-medium transition-all duration-700 ease-out-expo active:scale-[0.98]"
        :class="activeFilter === filter.id
          ? 'bg-accent text-accent-ink'
          : 'text-ink-2 hover:bg-surface-3 hover:text-ink'"
        :aria-pressed="activeFilter === filter.id"
        @click="activeFilter = filter.id"
      >
        {{ filter.name }}
      </button>
    </div>

    <!-- Category name on the left, tools inline on the right -->
    <div v-if="filteredCategories.length">
      <div
        v-for="(category, index) in filteredCategories"
        :key="category.name"
        v-reveal="{ delay: index * 60 }"
        class="grid grid-cols-1 gap-x-10 gap-y-4 border-t border-line py-8 md:grid-cols-[12rem_1fr]"
      >
        <h3 class="flex items-center gap-2.5 text-base font-semibold text-ink">
          <Icon
            :name="category.icon"
            class="text-xl text-ink-3"
            aria-hidden="true"
          />
          {{ category.name }}
        </h3>
        <ul class="flex flex-wrap gap-2">
          <SkillsCard
            v-for="skill in category.skills"
            :key="skill.name"
            :skill="skill"
          />
        </ul>
      </div>
    </div>

    <EmptyState
      v-else
      icon="ph:funnel"
      title="Nothing in this category"
      message="Pick another discipline to see what is there."
    />
  </BaseSection>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Filter } from '~/models/Filter'
import type { SkillCategory } from '~/models/SkillCategory'
import { SkillFilterType } from '~/enums/SkillFilterType'

// Active filter state
const activeFilter = ref<string>(SkillFilterType.ALL)

// Filter options
const filters: Filter[] = [
  { id: SkillFilterType.ALL, name: 'Everything' },
  { id: SkillFilterType.FRONTEND, name: 'Frontend' },
  { id: SkillFilterType.BACKEND, name: 'Backend' },
  { id: SkillFilterType.FULLSTACK, name: 'Full stack' },
  { id: SkillFilterType.DEVOPS, name: 'DevOps' },
  { id: SkillFilterType.MOBILE, name: 'Mobile' },
]

// Skills categories with tags for filtering
const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'ph:code',
    skills: [
      { name: 'TypeScript', icon: 'skill-icons:typescript', tags: ['frontend', 'backend', 'fullstack'] },
      { name: 'JavaScript', icon: 'skill-icons:javascript', tags: ['frontend', 'backend', 'fullstack'] },
      { name: 'Python', icon: 'skill-icons:python-light', tags: ['backend', 'fullstack'] },
      { name: 'Java', icon: 'skill-icons:java-light', tags: ['backend'] },
      { name: 'PHP', icon: 'skill-icons:php-light', tags: ['backend'] },
      { name: 'C++', icon: 'skill-icons:cpp', tags: ['backend'] },
      { name: 'Dart', icon: 'skill-icons:dart-light', tags: ['mobile'] },
      { name: 'HTML/CSS', icon: 'skill-icons:html', tags: ['frontend'] },
    ],
  },
  {
    name: 'Frontend',
    icon: 'ph:browser',
    skills: [
      { name: 'React', icon: 'skill-icons:react-light', tags: ['frontend', 'fullstack'] },
      { name: 'Next.js', icon: 'skill-icons:nextjs-light', tags: ['frontend', 'fullstack'] },
      { name: 'Vue.js', icon: 'skill-icons:vuejs-light', tags: ['frontend', 'fullstack'] },
      { name: 'Nuxt.js', icon: 'skill-icons:nuxtjs-light', tags: ['frontend', 'fullstack'] },
      { name: 'Angular', icon: 'skill-icons:angular-light', tags: ['frontend', 'fullstack'] },
      { name: 'RxJS', icon: 'skill-icons:reactivex-light', tags: ['frontend', 'fullstack'] },
      { name: 'TailwindCSS', icon: 'skill-icons:tailwindcss-light', tags: ['frontend'] },
      { name: 'SCSS/SASS', icon: 'devicon:sass', tags: ['frontend'] },
    ],
  },
  {
    name: 'Backend',
    icon: 'ph:hard-drives',
    skills: [
      { name: 'Node.js', icon: 'skill-icons:nodejs-light', tags: ['backend', 'fullstack'] },
      { name: 'NestJS', icon: 'skill-icons:nestjs-light', tags: ['backend', 'fullstack'] },
      { name: 'Express.js', icon: 'skill-icons:expressjs-light', tags: ['backend', 'fullstack'] },
      { name: 'Spring Boot', icon: 'skill-icons:spring-light', tags: ['backend'] },
      { name: 'Laravel', icon: 'skill-icons:laravel-light', tags: ['backend'] },
      { name: 'Prisma', icon: 'skill-icons:prisma', tags: ['backend', 'fullstack'] },
      { name: 'Mongoose', icon: 'skill-icons:mongodb', tags: ['backend', 'fullstack'] },
      { name: 'Hibernate', icon: 'skill-icons:hibernate-light', tags: ['backend'] },
      { name: 'FastAPI', icon: 'skill-icons:fastapi', tags: ['backend', 'fullstack'] },
    ],
  },
  {
    name: 'Databases',
    icon: 'ph:database',
    skills: [
      { name: 'PostgreSQL', icon: 'skill-icons:postgresql-light', tags: ['backend', 'fullstack'] },
      { name: 'MySQL', icon: 'skill-icons:mysql-light', tags: ['backend', 'fullstack'] },
      { name: 'MongoDB', icon: 'skill-icons:mongodb', tags: ['backend', 'fullstack'] },
      { name: 'Firebase Firestore', icon: 'devicon:firebase', tags: ['backend', 'fullstack'] },
      { name: 'Redis', icon: 'skill-icons:redis-light', tags: ['backend', 'fullstack'] },
    ],
  },
  {
    name: 'Cloud and ops',
    icon: 'ph:cloud',
    skills: [
      { name: 'AWS (EC2, S3, RDS)', icon: 'skill-icons:aws-light', tags: ['devops', 'backend', 'fullstack'] },
      { name: 'Firebase', icon: 'devicon:firebase', tags: ['backend', 'fullstack', 'mobile'] },
      { name: 'Docker', icon: 'skill-icons:docker', tags: ['devops'] },
      { name: 'Kubernetes', icon: 'skill-icons:kubernetes', tags: ['devops'] },
      { name: 'Google Cloud', icon: 'skill-icons:gcp-light', tags: ['devops', 'backend'] },
      { name: 'Git', icon: 'skill-icons:git', tags: ['devops', 'fullstack'] },
      { name: 'GitHub Actions', icon: 'skill-icons:githubactions-light', tags: ['devops'] },
      { name: 'CI and CD', icon: 'ph:arrows-clockwise', tags: ['devops'] },
    ],
  },
  {
    name: 'Tooling',
    icon: 'ph:wrench',
    skills: [
      { name: 'JetBrains IDEs', icon: 'devicon:intellij', tags: ['fullstack', 'backend'] },
      { name: 'VS Code', icon: 'skill-icons:vscode-light', tags: ['fullstack', 'frontend', 'backend'] },
      { name: 'Postman', icon: 'skill-icons:postman', tags: ['backend', 'fullstack'] },
      { name: 'Figma', icon: 'skill-icons:figma-light', tags: ['frontend'] },
      { name: 'Storybook', icon: 'devicon:storybook', tags: ['frontend'] },
      { name: 'Docker Desktop', icon: 'skill-icons:docker', tags: ['devops'] },
    ],
  },
  {
    name: 'Architecture',
    icon: 'ph:sparkle',
    skills: [
      { name: 'Flutter', icon: 'skill-icons:flutter-light', tags: ['mobile'] },
      { name: 'GraphQL', icon: 'skill-icons:graphql-light', tags: ['backend', 'fullstack'] },
      { name: 'Temporal', icon: 'ph:clock-clockwise', tags: ['backend', 'fullstack'] },
      { name: 'MedusaJS', icon: 'ph:shopping-cart', tags: ['backend', 'fullstack'] },
      { name: 'LangChain', icon: 'ph:link-simple', tags: ['backend'] },
      { name: 'WebSockets', icon: 'ph:broadcast', tags: ['backend', 'fullstack'] },
      { name: 'Event driven architecture', icon: 'ph:tree-structure', tags: ['backend', 'fullstack', 'devops'] },
    ],
  },
]

// Computed property for filtered categories
const filteredCategories = computed((): SkillCategory[] => {
  if (activeFilter.value === SkillFilterType.ALL) {
    return skillCategories
  }

  return skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.tags.includes(activeFilter.value),
    ),
  })).filter(category => category.skills.length > 0)
})
</script>
