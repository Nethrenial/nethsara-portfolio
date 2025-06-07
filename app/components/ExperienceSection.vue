<template>
  <section
    id="experience"
    class="py-20 px-8"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16 text-center">
        Professional <span class="gradient-text">Journey</span>
      </h2>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)]" />

        <div class="space-y-16">
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

<script setup>
// Experience data
const experiences = [
  {
    position: 'Senior Full-Stack Developer',
    company: 'Tech Innovation Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using modern technologies. Mentoring junior developers and architecting cloud-native solutions for enterprise clients.',
    achievements: [
      'Led a team of 5 developers to deliver a $2M enterprise project 2 weeks ahead of schedule',
      'Improved application performance by 40% through code optimization and caching strategies',
      'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
      'Mentored 3 junior developers who were promoted to mid-level positions',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'],
  },
  {
    position: 'Full-Stack Developer',
    company: 'Digital Solutions LLC',
    location: 'New York, NY',
    period: '2021 - 2022',
    description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements. Collaborated with design teams to create pixel-perfect implementations.',
    achievements: [
      'Delivered 15+ client projects with 100% on-time completion rate',
      'Reduced page load times by 60% through image optimization and lazy loading',
      'Implemented responsive designs that improved mobile engagement by 35%',
      'Built reusable component library used across 10+ projects',
    ],
    technologies: ['React', 'Next.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
  },
  {
    position: 'Frontend Developer',
    company: 'StartupCo',
    location: 'Austin, TX',
    period: '2020 - 2021',
    description: 'Built responsive web applications and collaborated with designers to create engaging user interfaces. Focused on modern JavaScript frameworks and best practices.',
    achievements: [
      'Converted 5 static designs into interactive React applications',
      'Implemented state management solutions improving app stability',
      'Achieved 95+ Lighthouse scores across all projects',
      'Collaborated with UX team to improve user onboarding flow',
    ],
    technologies: ['JavaScript', 'React', 'Redux', 'CSS3', 'HTML5', 'Git', 'Webpack'],
  },
]
</script>
