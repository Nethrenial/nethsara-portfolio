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
      { name: 'Java', logo: 'https://picsum.photos/80/80?random=4', tags: ['backend', 'mobile'] },
      { name: 'HTML/CSS', logo: 'https://picsum.photos/80/80?random=5', tags: ['frontend'] },
      { name: 'SQL', logo: 'https://picsum.photos/80/80?random=6', tags: ['backend', 'fullstack'] },
    ],
  },
  {
    name: 'Frontend Frameworks',
    icon: 'heroicons:rectangle-stack',
    skills: [
      { name: 'Vue.js', logo: 'https://picsum.photos/80/80?random=7', tags: ['frontend', 'fullstack'] },
      { name: 'Nuxt.js', logo: 'https://picsum.photos/80/80?random=8', tags: ['frontend', 'fullstack'] },
      { name: 'React', logo: 'https://picsum.photos/80/80?random=9', tags: ['frontend', 'fullstack'] },
      { name: 'Next.js', logo: 'https://picsum.photos/80/80?random=10', tags: ['frontend', 'fullstack'] },
      { name: 'Angular', logo: 'https://picsum.photos/80/80?random=11', tags: ['frontend', 'fullstack'] },
      { name: 'Tailwind CSS', logo: 'https://picsum.photos/80/80?random=12', tags: ['frontend'] },
    ],
  },
  {
    name: 'Backend Frameworks',
    icon: 'heroicons:server',
    skills: [
      { name: 'Node.js', logo: 'https://picsum.photos/80/80?random=13', tags: ['backend', 'fullstack'] },
      { name: 'Express.js', logo: 'https://picsum.photos/80/80?random=14', tags: ['backend', 'fullstack'] },
      { name: 'Django', logo: 'https://picsum.photos/80/80?random=15', tags: ['backend'] },
      { name: 'FastAPI', logo: 'https://picsum.photos/80/80?random=16', tags: ['backend'] },
      { name: 'Flask', logo: 'https://picsum.photos/80/80?random=17', tags: ['backend'] },
      { name: 'NestJS', logo: 'https://picsum.photos/80/80?random=18', tags: ['backend'] },
    ],
  },
  {
    name: 'Databases',
    icon: 'heroicons:circle-stack',
    skills: [
      { name: 'PostgreSQL', logo: 'https://picsum.photos/80/80?random=19', tags: ['backend', 'fullstack'] },
      { name: 'MongoDB', logo: 'https://picsum.photos/80/80?random=20', tags: ['backend', 'fullstack'] },
      { name: 'MySQL', logo: 'https://picsum.photos/80/80?random=21', tags: ['backend', 'fullstack'] },
      { name: 'Redis', logo: 'https://picsum.photos/80/80?random=22', tags: ['backend', 'fullstack'] },
      { name: 'SQLite', logo: 'https://picsum.photos/80/80?random=23', tags: ['backend', 'fullstack'] },
      { name: 'Firebase', logo: 'https://picsum.photos/80/80?random=24', tags: ['backend', 'fullstack', 'mobile'] },
    ],
  },
  {
    name: 'Cloud Technologies',
    icon: 'heroicons:cloud',
    skills: [
      { name: 'AWS', logo: 'https://picsum.photos/80/80?random=25', tags: ['devops', 'backend', 'fullstack'] },
      { name: 'Google Cloud', logo: 'https://picsum.photos/80/80?random=26', tags: ['devops', 'backend'] },
      { name: 'Azure', logo: 'https://picsum.photos/80/80?random=27', tags: ['devops', 'backend'] },
      { name: 'Vercel', logo: 'https://picsum.photos/80/80?random=28', tags: ['devops', 'frontend'] },
      { name: 'Netlify', logo: 'https://picsum.photos/80/80?random=29', tags: ['devops', 'frontend'] },
      { name: 'Heroku', logo: 'https://picsum.photos/80/80?random=30', tags: ['devops', 'backend'] },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: 'heroicons:wrench-screwdriver',
    skills: [
      { name: 'Docker', logo: 'https://picsum.photos/80/80?random=31', tags: ['devops', 'backend'] },
      { name: 'Kubernetes', logo: 'https://picsum.photos/80/80?random=32', tags: ['devops'] },
      { name: 'Git', logo: 'https://picsum.photos/80/80?random=33', tags: ['devops', 'fullstack'] },
      { name: 'GitHub Actions', logo: 'https://picsum.photos/80/80?random=34', tags: ['devops'] },
      { name: 'Jenkins', logo: 'https://picsum.photos/80/80?random=35', tags: ['devops'] },
      { name: 'Linux', logo: 'https://picsum.photos/80/80?random=36', tags: ['devops', 'backend'] },
    ],
  },
  {
    name: 'Mobile Development',
    icon: 'heroicons:device-phone-mobile',
    skills: [
      { name: 'React Native', logo: 'https://picsum.photos/80/80?random=37', tags: ['mobile', 'frontend'] },
      { name: 'Flutter', logo: 'https://picsum.photos/80/80?random=38', tags: ['mobile'] },
      { name: 'Expo', logo: 'https://picsum.photos/80/80?random=39', tags: ['mobile'] },
      { name: 'PWA', logo: 'https://picsum.photos/80/80?random=40', tags: ['mobile', 'frontend'] },
      { name: 'Ionic', logo: 'https://picsum.photos/80/80?random=41', tags: ['mobile', 'frontend'] },
      { name: 'Cordova', logo: 'https://picsum.photos/80/80?random=42', tags: ['mobile'] },
    ],
  },
  {
    name: 'Development Tools',
    icon: 'heroicons:wrench',
    skills: [
      { name: 'VS Code', logo: 'https://picsum.photos/80/80?random=43', tags: ['fullstack', 'frontend', 'backend'] },
      { name: 'Postman', logo: 'https://picsum.photos/80/80?random=44', tags: ['backend', 'fullstack'] },
      { name: 'Figma', logo: 'https://picsum.photos/80/80?random=45', tags: ['frontend'] },
      { name: 'Jest', logo: 'https://picsum.photos/80/80?random=46', tags: ['fullstack', 'frontend', 'backend'] },
      { name: 'Cypress', logo: 'https://picsum.photos/80/80?random=47', tags: ['frontend', 'fullstack'] },
      { name: 'Webpack', logo: 'https://picsum.photos/80/80?random=48', tags: ['frontend', 'fullstack'] },
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
    name: 'AWS Certified',
    issuer: 'Amazon Web Services',
    year: '2023',
    icon: 'heroicons:cloud',
  },
  {
    name: 'Google Analytics',
    issuer: 'Google',
    year: '2023',
    icon: 'heroicons:chart-bar',
  },
  {
    name: 'Scrum Master',
    issuer: 'Scrum Alliance',
    year: '2022',
    icon: 'heroicons:user-group',
  },
  {
    name: 'GitHub Expert',
    issuer: 'GitHub',
    year: '2022',
    icon: 'heroicons:code-bracket',
  },
]
</script>
