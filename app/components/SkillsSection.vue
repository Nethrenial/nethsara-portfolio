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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div
        v-for="category in filteredCategories"
        :key="category.name"
        class="space-y-6"
      >
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
            <Icon
              :name="category.icon"
              class="w-8 h-8 text-[var(--color-primary)]"
            />
          </div>
          <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
            {{ category.name }}
          </h3>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="flex flex-col items-center justify-between p-4 bg-[var(--color-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:scale-105 transition-all duration-300 group h-32 min-h-[128px]"
          >
            <div class="flex-1 flex items-center justify-center mb-3">
              <NuxtImg
                :src="skill.logo"
                :alt="`${skill.name} logo`"
                class="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <span class="text-[var(--color-text-secondary)] text-sm text-center group-hover:text-[var(--color-text-primary)] transition-colors duration-300 leading-tight">
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
      { name: 'JavaScript', logo: 'https://picsum.photos/80/80?random=1', tags: ['frontend', 'backend', 'fullstack'] },
      { name: 'TypeScript', logo: 'https://picsum.photos/80/80?random=2', tags: ['frontend', 'backend', 'fullstack'] },
      { name: 'Python', logo: 'https://picsum.photos/80/80?random=3', tags: ['backend', 'fullstack'] },
      { name: 'Java', logo: 'https://picsum.photos/80/80?random=4', tags: ['backend'] },
      { name: 'PHP', logo: 'https://picsum.photos/80/80?random=5', tags: ['backend'] },
      { name: 'C/C++', logo: 'https://picsum.photos/80/80?random=6', tags: ['backend'] },
      { name: 'Dart', logo: 'https://picsum.photos/80/80?random=7', tags: ['mobile'] },
      { name: 'HTML/CSS', logo: 'https://picsum.photos/80/80?random=8', tags: ['frontend'] },
    ],
  },
  {
    name: 'Frontend Frameworks',
    icon: 'heroicons:rectangle-stack',
    skills: [
      { name: 'Vue.js', logo: 'https://picsum.photos/80/80?random=9', tags: ['frontend', 'fullstack'] },
      { name: 'Nuxt.js', logo: 'https://picsum.photos/80/80?random=10', tags: ['frontend', 'fullstack'] },
      { name: 'React', logo: 'https://picsum.photos/80/80?random=11', tags: ['frontend', 'fullstack'] },
      { name: 'Next.js', logo: 'https://picsum.photos/80/80?random=12', tags: ['frontend', 'fullstack'] },
      { name: 'Angular', logo: 'https://picsum.photos/80/80?random=13', tags: ['frontend', 'fullstack'] },
      { name: 'SCSS', logo: 'https://picsum.photos/80/80?random=14', tags: ['frontend'] },
    ],
  },
  {
    name: 'Backend Frameworks',
    icon: 'heroicons:server',
    skills: [
      { name: 'Node.js', logo: 'https://picsum.photos/80/80?random=15', tags: ['backend', 'fullstack'] },
      { name: 'Express.js', logo: 'https://picsum.photos/80/80?random=16', tags: ['backend', 'fullstack'] },
      { name: 'NestJS', logo: 'https://picsum.photos/80/80?random=17', tags: ['backend', 'fullstack'] },
      { name: 'Spring Boot', logo: 'https://picsum.photos/80/80?random=18', tags: ['backend'] },
      { name: 'Laravel', logo: 'https://picsum.photos/80/80?random=19', tags: ['backend'] },
    ],
  },
  {
    name: 'Databases & ORMs',
    icon: 'heroicons:circle-stack',
    skills: [
      { name: 'PostgreSQL', logo: 'https://picsum.photos/80/80?random=20', tags: ['backend', 'fullstack'] },
      { name: 'MongoDB', logo: 'https://picsum.photos/80/80?random=21', tags: ['backend', 'fullstack'] },
      { name: 'MySQL', logo: 'https://picsum.photos/80/80?random=22', tags: ['backend', 'fullstack'] },
      { name: 'Firestore', logo: 'https://picsum.photos/80/80?random=23', tags: ['backend', 'fullstack'] },
      { name: 'Prisma', logo: 'https://picsum.photos/80/80?random=24', tags: ['backend', 'fullstack'] },
      { name: 'Mongoose', logo: 'https://picsum.photos/80/80?random=25', tags: ['backend', 'fullstack'] },
      { name: 'Hibernate', logo: 'https://picsum.photos/80/80?random=26', tags: ['backend'] },
    ],
  },
  {
    name: 'Cloud & Services',
    icon: 'heroicons:cloud',
    skills: [
      { name: 'AWS', logo: 'https://picsum.photos/80/80?random=27', tags: ['devops', 'backend', 'fullstack'] },
      { name: 'Firebase', logo: 'https://picsum.photos/80/80?random=28', tags: ['backend', 'fullstack', 'mobile'] },
      { name: 'VPS Deployment', logo: 'https://picsum.photos/80/80?random=29', tags: ['devops'] },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: 'heroicons:wrench-screwdriver',
    skills: [
      { name: 'Git & GitHub', logo: 'https://picsum.photos/80/80?random=30', tags: ['devops', 'fullstack'] },
      { name: 'Visual Studio Code', logo: 'https://picsum.photos/80/80?random=31', tags: ['fullstack', 'frontend', 'backend'] },
      { name: 'JetBrains IDEs', logo: 'https://picsum.photos/80/80?random=32', tags: ['fullstack', 'backend'] },
      { name: 'Postman', logo: 'https://picsum.photos/80/80?random=33', tags: ['backend', 'fullstack'] },
      { name: 'Draw.io', logo: 'https://picsum.photos/80/80?random=34', tags: ['fullstack'] },
    ],
  },
  {
    name: 'Mobile & Other',
    icon: 'heroicons:device-phone-mobile',
    skills: [
      { name: 'Flutter', logo: 'https://picsum.photos/80/80?random=35', tags: ['mobile'] },
      { name: 'RxJS', logo: 'https://picsum.photos/80/80?random=36', tags: ['frontend', 'fullstack'] },
      { name: 'GraphQL', logo: 'https://picsum.photos/80/80?random=37', tags: ['backend', 'fullstack'] },
      { name: 'Socket Programming', logo: 'https://picsum.photos/80/80?random=38', tags: ['backend'] },
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
