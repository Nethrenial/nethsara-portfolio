<template>
  <div>
    <!-- Filter Tags -->
    <div class="mb-12">
      <div class="flex flex-wrap gap-3 justify-center">
        <button
          v-for="filter in filters"
          :key="filter.id"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="activeFilter === filter.id
            ? 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-glow)]'
            : 'bg-[var(--color-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]'"
          @click="activeFilter = filter.id"
        >
          {{ filter.name }}
        </button>
      </div>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="category in filteredCategories"
        :key="category.name"
        class="space-y-4"
      >
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
            <Icon
              :name="category.icon"
              class="text-sm text-[var(--color-primary)]"
            />
          </div>
          <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
            {{ category.name }}
          </h3>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="flex flex-col items-center justify-between p-3 bg-[var(--color-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:scale-105 transition-all duration-300 group h-24 min-h-[96px]"
          >
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
        </div>
      </div>
    </div>

    <!-- Certifications & Achievements -->
    <div class="mt-20">
      <h3 class="text-2xl font-semibold text-[var(--color-text-primary)] mb-8 text-center">
        Certifications & Achievements
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="cert in certifications"
          :key="cert.name"
          class="text-center p-6 bg-[var(--color-secondary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 card-hover"
        >
          <div class="w-16 h-16 mx-auto mb-4 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
            <Icon
              :name="cert.icon"
              class="w-8 h-8 text-[var(--color-primary)]"
            />
          </div>
          <h4 class="text-[var(--color-text-primary)] font-semibold mb-2">
            {{ cert.name }}
          </h4>
          <p class="text-[var(--color-text-secondary)] text-sm mb-2">
            {{ cert.issuer }}
          </p>
          <span class="text-[var(--color-primary)] text-xs">{{ cert.year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Active filter state
const activeFilter = ref('all')

// Filter options
const filters = [
  { id: 'all', name: 'All Skills' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'devops', name: 'DevOps' },
  { id: 'mobile', name: 'Mobile' },
]

// Skills categories with tags for filtering
const skillCategories = [
  {
    name: 'Languages',
    icon: 'heroicons:code-bracket',
    skills: [
      { name: 'JavaScript', icon: 'skill-icons:javascript', tags: ['frontend', 'backend', 'fullstack'] },
      { name: 'TypeScript', icon: 'skill-icons:typescript', tags: ['frontend', 'backend', 'fullstack'] },
      { name: 'Python', icon: 'skill-icons:python-light', tags: ['backend', 'fullstack'] },
      { name: 'Java', icon: 'skill-icons:java-light', tags: ['backend'] },
      { name: 'PHP', icon: 'skill-icons:php-light', tags: ['backend'] },
      { name: 'C/C++', icon: 'skill-icons:cpp', tags: ['backend'] },
      { name: 'Dart', icon: 'skill-icons:dart-light', tags: ['mobile'] },
      { name: 'HTML/CSS', icon: 'skill-icons:html', tags: ['frontend'] },
    ],
  },
  {
    name: 'Frontend Frameworks',
    icon: 'heroicons:rectangle-stack',
    skills: [
      { name: 'Vue.js', icon: 'skill-icons:vuejs-light', tags: ['frontend', 'fullstack'] },
      { name: 'Nuxt.js', icon: 'skill-icons:nuxtjs-light', tags: ['frontend', 'fullstack'] },
      { name: 'React', icon: 'skill-icons:react-light', tags: ['frontend', 'fullstack'] },
      { name: 'Next.js', icon: 'skill-icons:nextjs-light', tags: ['frontend', 'fullstack'] },
      { name: 'Angular', icon: 'skill-icons:angular-light', tags: ['frontend', 'fullstack'] },
      { name: 'SCSS', icon: 'devicon:sass', tags: ['frontend'] },
    ],
  },
  {
    name: 'Backend Frameworks',
    icon: 'heroicons:server',
    skills: [
      { name: 'Node.js', icon: 'skill-icons:nodejs-light', tags: ['backend', 'fullstack'] },
      { name: 'Express.js', icon: 'skill-icons:expressjs-light', tags: ['backend', 'fullstack'] },
      { name: 'NestJS', icon: 'skill-icons:nestjs-light', tags: ['backend', 'fullstack'] },
      { name: 'Spring Boot', icon: 'skill-icons:spring-light', tags: ['backend'] },
      { name: 'Laravel', icon: 'skill-icons:laravel-light', tags: ['backend'] },
    ],
  },
  {
    name: 'Databases & ORMs',
    icon: 'heroicons:circle-stack',
    skills: [
      { name: 'PostgreSQL', icon: 'skill-icons:postgresql-light', tags: ['backend', 'fullstack'] },
      { name: 'MongoDB', icon: 'skill-icons:mongodb', tags: ['backend', 'fullstack'] },
      { name: 'MySQL', icon: 'skill-icons:mysql-light', tags: ['backend', 'fullstack'] },
      { name: 'Firestore', icon: 'devicon:firebase', tags: ['backend', 'fullstack'] },
      { name: 'Prisma', icon: 'skill-icons:prisma', tags: ['backend', 'fullstack'] },
      { name: 'Mongoose', icon: 'skill-icons:mongodb', tags: ['backend', 'fullstack'] },
      { name: 'Hibernate', icon: 'skill-icons:hibernate-light', tags: ['backend'] },
    ],
  },
  {
    name: 'Cloud & Services',
    icon: 'heroicons:cloud',
    skills: [
      { name: 'AWS', icon: 'skill-icons:aws-light', tags: ['devops', 'backend', 'fullstack'] },
      { name: 'Firebase', icon: 'devicon:firebase', tags: ['backend', 'fullstack', 'mobile'] },
      { name: 'VPS Deployment', icon: 'skill-icons:gcp-light', tags: ['devops'] },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: 'heroicons:wrench-screwdriver',
    skills: [
      { name: 'Git & GitHub', icon: 'skill-icons:git', tags: ['devops', 'fullstack'] },
      { name: 'Visual Studio Code', icon: 'skill-icons:vscode-light', tags: ['fullstack', 'frontend', 'backend'] },
      { name: 'JetBrains IDEs', icon: 'devicon:intellij', tags: ['fullstack', 'backend'] },
      { name: 'Postman', icon: 'skill-icons:postman', tags: ['backend', 'fullstack'] },
    ],
  },
  {
    name: 'Mobile & Other',
    icon: 'heroicons:device-phone-mobile',
    skills: [
      { name: 'Flutter', icon: 'skill-icons:flutter-light', tags: ['mobile'] },
      { name: 'RxJS', icon: 'skill-icons:reactivex-light', tags: ['frontend', 'fullstack'] },
      { name: 'GraphQL', icon: 'skill-icons:graphql-light', tags: ['backend', 'fullstack'] },
    ],
  },
]

// Computed property for filtered categories
const filteredCategories = computed(() => {
  if (activeFilter.value === 'all') {
    return skillCategories
  }

  return skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.tags.includes(activeFilter.value),
    ),
  })).filter(category => category.skills.length > 0)
})

const certifications = [
  {
    name: 'Computer Science Degree',
    issuer: 'University of Colombo',
    year: '2021-2024',
    icon: 'heroicons:academic-cap',
  },
  {
    name: 'Open Source Projects',
    issuer: 'GitHub',
    year: '2023+',
    icon: 'heroicons:code-bracket',
  },
  {
    name: 'Sysco Presentation',
    issuer: 'Sysco Global Leadership',
    year: '2024',
    icon: 'heroicons:presentation-chart-line',
  },
  {
    name: 'Co-Founder',
    issuer: 'ZaVolt',
    year: '2023+',
    icon: 'heroicons:building-office',
  },
]
</script>
