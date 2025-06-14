<template>
  <BaseSection
    id="experience"
    background="secondary"
  >
    <template #background>
      <div class="absolute top-60 left-20 w-72 h-72 bg-[var(--color-primary)]/4 rounded-full blur-3xl floating" />
      <div
        class="absolute bottom-40 right-10 w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl floating-delayed"
      />
    </template>

    <SectionHeader
      title="Professional Journey"
      highlighted-word="Journey"
      section-id="experience"
    />

    <div class="relative">
      <!-- Enhanced Timeline Line -->
      <div
        class="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent"
      />

      <div class="space-y-16 md:space-y-20">
        <ExperienceCard
          v-for="(experience, index) in experiences"
          :key="index"
          :experience="experience"
          :index="index"
        />
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import type { Experience } from '~/models/Experience'

const experiences: Experience[] = [
  {
    id: 1,
    position: 'Software Engineer',
    company: 'Haulmatic Technologies',
    location: 'Colombo, Sri Lanka',
    period: 'July 2024 - Present',
    description: 'Developing robust, scalable systems for a multi-tenant logistics platform with focus on security and performance.',
    achievements: [
      'Architected and implemented a robust authentication and authorization system from the ground up',
      'Led end-to-end development of critical order management module within microservices architecture',
      'Enhanced platform security and user access control for multi-tenant logistics platform',
      'Improved data consistency and processing efficiency across the supply chain',
      'Utilized Temporal.io to orchestrate complex, long-running business workflows',
    ],
    technologies: ['TypeScript', 'Angular', 'NestJS', 'GraphQL', 'RxJS', 'MongoDB', 'Firebase', 'Temporal'],
  },
  {
    id: 2,
    position: 'Co-Founder & Lead Software Engineer',
    company: 'ZaVolt',
    location: 'Colombo, Sri Lanka',
    period: 'January 2023 - Present',
    description: 'Co-founded a software consultancy and scaled operations from a 2-person concept to a 10-person team, securing and delivering projects across diverse industries.',
    achievements: [
      'Scaled operations from a 2-person concept to a 10-person team',
      'Secured and delivered projects for diverse client portfolio across e-commerce, CMS, and AI',
      'Acted as primary technical point of contact for clients, leading requirements gathering and solution architecture',
      'Directed technical strategy, establishing best practices for code quality, testing, and deployment',
      'Achieved high client satisfaction and retention through successful delivery of complex software solutions',
    ],
    technologies: ['Next.js', 'Nuxt.js', 'React', 'Vue.js', 'NestJS', 'Node.js', 'MedusaJS', 'Python', 'Flutter', 'Firebase'],
  },
  {
    id: 3,
    position: 'Software Engineer Intern',
    company: 'Sysco LABS Technologies',
    location: 'Colombo, Sri Lanka',
    period: 'November 2023 - June 2024',
    description: 'Contributed to large-scale B2B e-commerce platform development and prototyped innovative LLM-based solutions.',
    achievements: [
      'Prototyped and presented innovative LLM-based tool for intelligent test case generation to Global Technical Leadership',
      'Demonstrated potential 30% reduction in manual QA effort through AI-powered testing tools',
      'Developed new features within microfrontend (React) and microservices (Spring Boot) architecture',
      'Improved maintainability of core warehouse management system by refactoring legacy Java code',
      'Containerized Python data analysis tool with Docker and deployed to AWS',
    ],
    technologies: ['React', 'Java', 'Spring Boot', 'Python', 'LangChain', 'PostgreSQL', 'Gemini', 'TypeScript', 'Docker'],
  },
  {
    id: 4,
    position: 'Web Developer',
    company: 'PramixIT',
    location: 'Ragama, Sri Lanka',
    period: 'May 2022 - December 2022',
    description: 'Led migration of high-traffic matrimony website and developed secure authentication systems with real-time features.',
    achievements: [
      'Led migration of high-traffic matrimony website from Vue.js to Nuxt.js',
      'Achieved 40% improvement in Lighthouse SEO scores and increased organic search traffic',
      'Designed and developed secure authentication system',
      'Implemented real-time, WebSocket-based chat feature, boosting user engagement metrics by 25%',
      'Enhanced website performance and user experience through modern framework adoption',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'TypeScript', 'WebSockets', 'SCSS'],
  },
]
</script>
