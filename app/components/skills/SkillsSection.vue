<template>
  <section
    id="toolkit"
    class="relative overflow-clip pt-20 pb-24 lg:pt-24"
    aria-labelledby="toolkit-heading"
  >
    <div class="shell">
      <SectionHeader
        index="04"
        label="Toolkit"
        title="What I reach for"
        description="Filter by the kind of work. Categories with nothing to show drop out."
        section-id="toolkit"
        hue="sky"
      />
    </div>

    <!-- Two bands of the toolkit itself, drifting against each other as the
         page scrolls. Decorative: the real list follows. -->
    <div
      class="mb-24 space-y-4 select-none"
      aria-hidden="true"
    >
      <div
        v-for="(band, bandIndex) in bands"
        :key="bandIndex"
        class="flex w-max gap-8 text-7xl font-semibold tracking-display whitespace-nowrap lg:text-9xl"
        :class="bandIndex === 0 ? 'scroll-drift-left' : 'scroll-drift-right'"
      >
        <span
          v-for="(word, wordIndex) in band"
          :key="wordIndex"
          class="flex items-center gap-8"
        >
          <span :class="wordIndex % 3 === 1 ? 'text-ink' : 'text-outline'">{{ word }}</span>
          <span
            class="size-4 rounded-full lg:size-6"
            :style="{ backgroundColor: `var(--color-${signalAt(wordIndex + bandIndex * 2)})` }"
          />
        </span>
      </div>
    </div>

    <div class="shell">
      <div
        v-reveal
        class="mb-16"
      >
        <FilterButtonGroup
          v-model="activeFilter"
          :options="filters"
          label="Filter the toolkit by discipline"
          hue="sky"
        />
      </div>

      <!-- Category name on the left, tools inline on the right. Chips move
           to their new places when the filter changes rather than jumping. -->
      <TransitionGroup
        v-if="filteredCategories.length"
        tag="div"
        move-class="transition-all duration-700 ease-out-expo"
        enter-active-class="transition-all duration-700 ease-out-expo"
        enter-from-class="opacity-0 -translate-y-4"
        leave-active-class="absolute transition-all duration-500 ease-out-expo"
        leave-to-class="opacity-0"
        class="relative"
      >
        <div
          v-for="category in filteredCategories"
          :key="category.name"
          v-reveal="{ variant: 'fade' }"
          class="group/row grid w-full grid-cols-1 items-start gap-x-12 gap-y-4 border-t border-line py-8 md:grid-cols-[14rem_1fr]"
          :style="hueStyle(category.hue)"
        >
          <h3 class="flex items-center gap-4 text-lg font-semibold text-ink">
            <span class="grid size-8 place-items-center rounded-lg bg-surface-2 text-(--hue) transition-all duration-700 ease-out-expo group-hover/row:bg-(--hue) group-hover/row:text-accent-ink">
              <Icon
                :name="category.icon"
                class="size-4"
                aria-hidden="true"
              />
            </span>
            {{ category.name }}
            <span class="tabular font-mono text-xs font-normal text-ink-3">{{ category.skills.length }}</span>
          </h3>
          <TransitionGroup
            tag="ul"
            class="relative flex flex-wrap gap-2"
            move-class="transition-all duration-700 ease-out-expo"
            enter-active-class="transition-all duration-700 ease-out-expo"
            enter-from-class="opacity-0 scale-75 blur-sm"
            leave-active-class="absolute transition-all duration-300 ease-out-expo"
            leave-to-class="opacity-0 scale-75"
          >
            <SkillsCard
              v-for="skill in category.skills"
              :key="skill.name"
              :skill="skill"
            />
          </TransitionGroup>
        </div>
      </TransitionGroup>

      <EmptyState
        v-else
        icon="ph:funnel-duotone"
        title="Nothing in this category"
        message="Pick another discipline to see what is there."
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Filter } from '~/models/Filter'
import type { SkillCategory } from '~/models/SkillCategory'
import { SkillFilterType } from '~/enums/SkillFilterType'

const activeFilter = ref<string>(SkillFilterType.ALL)

const filters: Filter[] = [
  { id: SkillFilterType.ALL, name: 'Everything' },
  { id: SkillFilterType.FRONTEND, name: 'Frontend' },
  { id: SkillFilterType.BACKEND, name: 'Backend' },
  { id: SkillFilterType.FULLSTACK, name: 'Full stack' },
  { id: SkillFilterType.DEVOPS, name: 'DevOps' },
  { id: SkillFilterType.MOBILE, name: 'Mobile' },
]

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
    icon: 'ph:tree-structure',
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

// Each category keeps its hue whichever filter is active.
const huedCategories = skillCategories.map((category, index) => ({
  ...category,
  hue: signalAt(index),
}))

// The drifting bands reuse the real toolkit, split in two.
const allSkills = [...new Set(skillCategories.flatMap(category => category.skills.map(skill => skill.name)))]
  .filter(name => name.length <= 12)
const bands = [allSkills.slice(0, 12), allSkills.slice(12, 24)]

const filteredCategories = computed(() => {
  if (activeFilter.value === SkillFilterType.ALL) return huedCategories

  return huedCategories
    .map(category => ({
      ...category,
      skills: category.skills.filter(skill => skill.tags.includes(activeFilter.value)),
    }))
    .filter(category => category.skills.length > 0)
})
</script>
