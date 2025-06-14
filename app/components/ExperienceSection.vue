<template>
  <section
    id="experience"
    class="section-padding bg-[var(--color-secondary)] relative overflow-hidden"
  >
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-60 left-20 w-72 h-72 bg-[var(--color-primary)]/4 rounded-full blur-3xl floating" />
      <div class="absolute bottom-40 right-10 w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl floating-delayed" />
    </div>

    <div class="container-modern relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16 text-center">
        Professional <span class="gradient-text">Journey</span>
      </h2>

      <div class="relative">
        <!-- Enhanced Timeline Line -->
        <div class="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent" />

        <div class="space-y-16 md:space-y-20">
          <ExperienceCard
            v-for="(experience, index) in experiences"
            :key="index"
            :experience="experience"
            :index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '~/models/Experience'

const experiences: Experience[] = [
  {
    id: 1,
    position: 'Software Engineer - Intern',
    company: 'Sysco LABS',
    location: 'Colombo, Sri Lanka',
    period: 'October 2023 - Present',
    description: 'Working as a full-stack software engineer in a fast-paced agile environment with focus on quality code and innovative solutions.',
    achievements: [
      'Developed and maintained complex web applications using modern frameworks',
      'Collaborated with cross-functional teams in agile development processes',
      'Contributed to architecture decisions and technical documentation',
      'Mentored junior developers and shared knowledge through tech talks',
      'Presented innovative LLM-based solutions to global technical leadership',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 2,
    position: 'Co-Founder & CTO',
    company: 'ZaVolt',
    location: 'Colombo, Sri Lanka',
    period: 'March 2023 - Present',
    description: 'Founded a tech startup focused on innovative software solutions. Leading technical strategy and product development.',
    achievements: [
      'Led the technical vision and architecture for multiple products',
      'Built and managed a development team of 5+ engineers',
      'Successfully launched MVP products with positive user feedback',
      'Secured initial funding and established strategic partnerships',
      'Implemented best practices for code quality and deployment',
    ],
    technologies: ['Vue.js', 'NestJS', 'PostgreSQL', 'AWS', 'TypeScript', 'Docker'],
  },
  {
    id: 3,
    position: 'Full Stack Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2020 - 2023',
    description: 'Worked with various clients to deliver custom web applications, e-commerce platforms, and management systems.',
    achievements: [
      'Delivered 15+ projects ranging from simple websites to complex web applications',
      'Maintained 98% client satisfaction rate with on-time delivery',
      'Specialized in Vue.js, React, and Node.js development',
      'Provided ongoing maintenance and support for client applications',
      'Built custom solutions for educational institutions and small businesses',
    ],
    technologies: ['Vue.js', 'React', 'Node.js', 'PHP', 'MySQL', 'Laravel'],
  },
]
</script>
