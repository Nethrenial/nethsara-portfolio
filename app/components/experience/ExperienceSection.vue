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
    description: 'Developing robust, scalable systems for a Supply Chain & Logistics platform with focus on security, reliability and performance.',
    achievements: [
      'Architected and implemented a robust authentication & authorization system from the ground up',
      'Led end-to-end development of critical features within a microservices architecture',
      'Enhanced platform security and user access control for multi-tenant logistics platform',
      'Implemented Temporal.io to orchestrate complex workflows and improve data consistency across the supply chain',
    ],
    technologies: ['TypeScript', 'Angular', 'NestJS', 'GraphQL', 'RxJS', 'MongoDB', 'Firebase', 'Temporal'],
  },
  {
    id: 2,
    position: 'Co-Founder & Lead Software Engineer',
    company: 'ZaVolt',
    location: 'Colombo, Sri Lanka',
    period: 'January 2023 - Present',
    description: 'Co-founded a software consultancy and scaled operations from a friend group to a 10+ person team, securing and delivering projects across diverse industries.',
    achievements: [
      'Secured and delivered projects for diverse client portfolio across e-commerce, CMS, AI and other domains',
      'Acted as primary technical point of contact for clients, leading requirements gathering and solution architecture',
      'Directed technical strategy, establishing best practices for code quality, testing, and deployment.',
      'Achieved high client satisfaction and retention through successful delivery of complex software solutions.',
    ],
    technologies: ['Next.js', 'Nuxt.js', 'React', 'Vue.js', 'NestJS', 'Node.js', 'MedusaJS', 'Python', 'Flutter', 'Firebase', 'Spring Boot'],
  },
  {
    id: 3,
    position: 'Software Engineer Intern',
    company: 'Sysco LABS Technologies',
    location: 'Colombo, Sri Lanka',
    period: 'November 2023 - June 2024',
    description: 'Contributed to large-scale wearhouse management system development and prototyped innovative LLM-based solutions.',
    achievements: [
      'Prototyped LLM-based test case generation tool, demonstrating a significant reduction in manual QA effort',
      'Developed features within microfrontend (React) and microservices (Spring Boot) architecture for B2B e-commerce platform',
      'Enhanced error handling logic for React frontend in warehouse management system',
      'Containerized Python data analysis tool with Docker and deployed to AWS for Sysco',
      'Worked with Power BI to create a dashboard to showcase advantages of a new ML-powered solution',
    ],
    technologies: ['React', 'Java', 'Spring Boot', 'Python', 'LangChain', 'PostgreSQL', 'Gemini', 'TypeScript', 'Docker'],
  },
  {
    id: 4,
    position: 'Web Developer',
    company: 'PramixIT',
    location: 'Ragama, Sri Lanka',
    period: 'May 2022 - December 2022',
    description: 'Led migration of matrimony website and developed secure authentication systems with real-time features.',
    achievements: [
      'Led migration of matrimony website from Vue.js(JS based project) to Nuxt.js (TS based project) to facilitate SEO and better code quality',
      'Achieved ~30% improvement in Lighthouse scores through thorough performance optimization',
      'Designed and developed secure authentication system on top existing Laravel backend',
      'Implemented real-time, WebSocket-based chat feature with WhatsApp-like UI',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'TypeScript', 'WebSockets', 'SCSS'],
  },
  {
    id: 5,
    position: 'Full Stack Developer',
    company: 'Freelance/Self-Employed',
    location: 'Colombo, Sri Lanka',
    period: 'January 2021 - Present',
    description: 'Developed various websites/software/scripts for clients across diverse industries.',
    achievements: [
    ],
    technologies: ['HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Python', 'Laravel', 'MySQL', 'PostgreSQL', 'Docker'],
  },
]
</script>
