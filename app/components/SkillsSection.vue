<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Technical Skills -->
      <div>
        <h3 class="text-2xl font-semibold text-[var(--color-text-primary)] mb-8">
          Technical Skills
        </h3>
        <div class="space-y-6">
          <div
            v-for="skill in technicalSkills"
            :key="skill.name"
            class="group"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-[var(--color-text-primary)] font-medium">{{ skill.name }}</span>
              <span class="text-[var(--color-primary)] text-sm">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-[var(--color-accent)] rounded-full h-2">
              <div
                class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] h-2 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: `${skill.level}%` }"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Stack -->
      <div>
        <h3 class="text-2xl font-semibold text-[var(--color-text-primary)] mb-8">
          Technology Stack
        </h3>
        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="category in techStack"
            :key="category.name"
            class="space-y-4"
          >
            <h4 class="text-[var(--color-primary)] font-semibold text-lg">
              {{ category.name }}
            </h4>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="tech in category.technologies"
                :key="tech.name"
                class="flex flex-col items-center p-4 bg-[var(--color-secondary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:scale-105 transition-all duration-300 group"
              >
                <Icon
                  :name="tech.icon"
                  class="w-8 h-8 mb-2 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300"
                />
                <span class="text-[var(--color-text-secondary)] text-sm text-center">{{ tech.name }}</span>
              </div>
            </div>
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
const technicalSkills = [
  { name: 'JavaScript/TypeScript', level: 95 },
  { name: 'Vue.js/Nuxt.js', level: 90 },
  { name: 'React/Next.js', level: 85 },
  { name: 'Node.js/Express', level: 88 },
  { name: 'Python/Django', level: 80 },
  { name: 'Database Design', level: 85 },
  { name: 'Cloud Platforms (AWS)', level: 75 },
  { name: 'DevOps/Docker', level: 70 },
]

const techStack = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'Vue.js', icon: 'heroicons:rectangle-stack' },
      { name: 'React', icon: 'heroicons:rectangle-stack' },
      { name: 'TypeScript', icon: 'heroicons:code-bracket' },
      { name: 'Tailwind', icon: 'heroicons:paint-brush' },
    ],
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Node.js', icon: 'heroicons:server' },
      { name: 'Python', icon: 'heroicons:command-line' },
      { name: 'PostgreSQL', icon: 'heroicons:circle-stack' },
      { name: 'MongoDB', icon: 'heroicons:circle-stack' },
    ],
  },
  {
    name: 'Tools',
    technologies: [
      { name: 'Git', icon: 'heroicons:code-bracket-square' },
      { name: 'Docker', icon: 'heroicons:cube' },
      { name: 'AWS', icon: 'heroicons:cloud' },
      { name: 'Design', icon: 'heroicons:paint-brush' },
    ],
  },
  {
    name: 'Mobile',
    technologies: [
      { name: 'React Native', icon: 'heroicons:device-phone-mobile' },
      { name: 'Mobile Dev', icon: 'heroicons:device-phone-mobile' },
      { name: 'iOS', icon: 'heroicons:device-phone-mobile' },
      { name: 'Android', icon: 'heroicons:device-phone-mobile' },
    ],
  },
]

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
