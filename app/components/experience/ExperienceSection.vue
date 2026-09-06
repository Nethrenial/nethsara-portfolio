<template>
  <BaseSection
    id="work"
    surface="raised"
  >
    <SectionHeader
      index="01 / Work"
      title="Where I have worked"
      description="Senior engineering on distributed platforms, and the consultancy I co-founded and scaled before it."
      section-id="work"
    />

    <div class="relative">
      <ExperienceCard
        v-for="(experience, index) in experiences"
        :key="experience.id"
        :experience="experience"
        :index="index"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import type { Experience } from '~/models/Experience'

const experiences: Experience[] = [
  {
    id: 1,
    position: 'Senior Software Engineer',
    company: 'HeyMilo AI',
    location: 'Remote, New York',
    period: 'February 2026 - Present',
    description: 'Building the automation layer of an AI hiring platform, across Python services and a React front end.',
    achievements: [
      'Built a configurable automation system from scratch, letting users define side effects for events across the product without a release',
    ],
    technologies: ['Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'MongoDB', 'Temporal.io', 'Docker', 'Kubernetes'],
  },
  {
    id: 2,
    position: 'Software Engineer',
    company: 'Haulmatic Technologies',
    location: 'Remote, Singapore',
    period: 'July 2024 - February 2026',
    description: 'Core platform engineering on a supply chain and logistics product serving carriers, shippers and warehouse operators.',
    achievements: [
      'Architected a multi tenant authentication and authorization system from scratch, enforcing role based access control across the platform',
      'Engineered the core organization module and the vessel and flight schedule management system that the rest of logistics operations sit on',
      'Implemented an event driven architecture on Temporal.io to orchestrate long running workflows, keeping critical transactions fault tolerant',
      'Designed a low code configuration mechanism for system events, so non technical stakeholders could define side effects themselves',
    ],
    technologies: ['TypeScript', 'Java', 'Angular', 'NestJS', 'GraphQL', 'Spring Boot', 'RxJS', 'MongoDB', 'Temporal.io', 'Docker', 'Kubernetes'],
  },
  {
    id: 3,
    position: 'Co-Founder & Lead Software Engineer',
    company: 'ZaVolt',
    location: 'Colombo, Sri Lanka',
    period: 'January 2023 - July 2024',
    description: 'Co-founded a software consultancy and led its engineering through the growth from a founding pair to a full team.',
    achievements: [
      'Scaled the engineering team from the two founders to ten developers, setting the engineering culture, review standards and CI/CD pipelines that came with it',
      'Led end to end technical delivery across e-commerce, CMS and AI client work as solution architect and technical lead',
      'Mentored junior engineers and owned the technical roadmap across React, Node.js and Spring Boot',
      'Ran requirements gathering and turned business goals into technical specifications the team could build against',
    ],
    technologies: ['Next.js', 'Nuxt.js', 'NestJS', 'Spring Boot', 'Python', 'MedusaJS', 'Flutter'],
  },
  {
    id: 4,
    position: 'Software Engineer Intern',
    company: 'Sysco LABS Technologies',
    location: 'Colombo, Sri Lanka',
    period: 'November 2023 - June 2024',
    description: 'Warehouse management at enterprise scale, plus a generative AI prototype that reached global leadership.',
    achievements: [
      'Built and presented a generative AI tool on LangChain and Gemini for intelligent test case generation, streamlining QA for global technical leadership',
      'Modernized legacy data workflows by refactoring Python analysis scripts into a containerized FastAPI service on AWS EC2',
      'Made the core warehouse management system more resilient with centralized error handling',
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'LangChain', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    id: 5,
    position: 'Web Developer',
    company: 'PramixIT',
    location: 'Ragama, Sri Lanka',
    period: 'May 2022 - December 2022',
    description: 'Front end and backend work across a matrimony platform and a coupon publishing product.',
    achievements: [
      'Led the full migration of a matrimony platform from Vue.js to Nuxt.js, lifting server side rendering performance and technical SEO',
      'Engineered a real time chat application on WebSockets, with low latency delivery and secure authentication',
      'Contributed backend work on a coupon publishing platform in Laravel, focused on API optimization and schema design',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'TypeScript', 'WebSockets', 'SCSS'],
  },
]
</script>
