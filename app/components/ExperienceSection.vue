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
        <div class="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)]" />

        <div class="space-y-12 md:space-y-16">
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
    position: 'Software Engineer',
    company: 'Haulmatic Technologies',
    location: 'Colombo, Sri Lanka',
    period: 'July 2024 - Present',
    description: 'Working on a revolutionary platform for Supply Chain and Logistics, developing innovative solutions for complex business challenges.',
    achievements: [
      'Working on revolutionary supply chain and logistics platform development',
      'Utilizing modern tech stack including Angular, GraphQL, RxJS, and microservices',
      'Contributing to platform architecture and implementation decisions',
      'Collaborating with cross-functional teams to deliver business solutions',
    ],
    technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular', 'GraphQL', 'RxJS', 'Firebase', 'NestJS', 'MongoDB'],
  },
  {
    position: 'Co-Founder/Lead Software Engineer',
    company: 'ZaVolt',
    location: 'Colombo, Sri Lanka',
    period: 'January 2023 - Present',
    description: 'Played a lead role on several client projects ranging from simple landing pages to e-commerce platforms and LLM-based tools. Responsible for growing the company and client interactions.',
    achievements: [
      'Led multiple client projects from simple landing pages to complex e-commerce platforms',
      'Responsible for client requirement gathering and project management',
      'Helped grow company from zero to 10 people working together',
      'Delivered business solutions to an ever-growing set of clients',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'NuxtJS', 'VueJS', 'ReactJS', 'NextJS', 'NestJS', 'NodeJS', 'MedusaJS', 'Firebase', 'Dart', 'Flutter', 'Python'],
  },
  {
    position: 'Software Engineer (Internship)',
    company: 'Sysco LABS Technologies',
    location: 'Colombo 05, Sri Lanka',
    period: 'November 2023 - Present',
    description: 'Handling tech debt fixes in warehouse management systems, working on full-stack applications, and developing innovative LLM-based tools for intelligent test case generation.',
    achievements: [
      'Fixed various tech debt in warehouse management system',
      'Presented LLM-based intelligent test case generation tool to Sysco global technical leadership',
      'Converted Jupyter notebook data analysis project to deployable Python project on AWS',
      'Worked on full-stack B2B e-commerce application with microservices architecture',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'ReactJS', 'Java', 'Spring Boot', 'PostgreSQL', 'LangChain', 'VueJS', 'NestJS', 'Gemini'],
  },
  {
    position: 'Web Developer',
    company: 'PramixIT',
    location: 'Ragama, Sri Lanka',
    period: 'May 2022 - December 2022',
    description: 'Migrated VueJS matrimony website to NuxtJS for better SEO, implemented authentication flows, chat features, and worked on Laravel web applications.',
    achievements: [
      'Migrated VueJS matrimony website to NuxtJS for improved SEO performance',
      'Implemented authentication flow and real-time chat functionality',
      'Developed features for Laravel web applications',
      'Improved website performance and search engine optimization',
    ],
    technologies: ['HTML', 'SCSS', 'Bootstrap', 'TypeScript', 'VueJS', 'NuxtJS', 'Laravel'],
  },
]
</script>
