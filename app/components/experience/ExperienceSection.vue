<template>
  <BaseSection id="work">
    <SectionHeader
      index="01"
      label="Work"
      title="Where I have worked"
      description="Senior engineering on distributed platforms, and the consultancy I co-founded and scaled before it."
      section-id="work"
      hue="coral"
    />

    <div class="grid grid-cols-1 gap-x-8 lg:grid-cols-12">
      <!-- Sticky colour panel: takes the hue of whichever role is in focus -->
      <aside
        class="hidden lg:col-span-5 lg:block"
        aria-hidden="true"
      >
        <div
          v-reveal="{ variant: 'mask' }"
          class="sticky top-24"
        >
          <div
            class="relative flex h-[calc(100dvh-8rem)] max-h-176 min-h-120 flex-col justify-between overflow-hidden rounded-3xl p-8 text-accent-ink transition-colors duration-700 ease-out-expo"
            :style="{ backgroundColor: `var(--color-${activeHue})` }"
          >
            <div class="dot-grid absolute inset-0 opacity-30 mix-blend-multiply" />

            <!-- Role title rolls in above the counter -->
            <div class="relative h-4 overflow-hidden">
              <p
                v-for="(experience, index) in experiences"
                :key="experience.id"
                class="absolute inset-x-0 top-0 truncate font-mono text-xs font-medium tracking-wide transition-all duration-700 ease-out-expo"
                :class="rollClass(index)"
              >
                {{ experience.position }}
              </p>
            </div>

            <!-- Odometer: the units digit is a column that slides -->
            <div class="relative flex items-end text-9xl leading-none font-semibold tracking-display">
              <span>0</span>
              <span class="relative inline-block h-[1em] overflow-hidden">
                <span
                  class="flex flex-col transition-transform duration-1000 ease-out-expo"
                  :style="{ transform: `translateY(-${active}em)` }"
                >
                  <span
                    v-for="(experience, index) in experiences"
                    :key="experience.id"
                    class="block h-[1em]"
                  >{{ index + 1 }}</span>
                </span>
              </span>
              <!-- Total, set with normal tracking and a real gap: the display
                   tracking above would pull the digits into each other -->
              <span class="tabular mb-4 ml-4 flex items-baseline gap-2 text-2xl font-medium tracking-normal opacity-60">
                <span aria-hidden="true">/</span>
                <span>{{ String(experiences.length).padStart(2, '0') }}</span>
              </span>
            </div>

            <div class="relative">
              <div class="relative h-10 overflow-hidden">
                <p
                  v-for="(experience, index) in experiences"
                  :key="experience.id"
                  class="absolute inset-x-0 top-0 truncate text-4xl font-semibold tracking-display transition-all duration-700 ease-out-expo"
                  :class="rollClass(index)"
                >
                  {{ experience.company }}
                </p>
              </div>
              <div class="relative mt-2 h-6 overflow-hidden">
                <p
                  v-for="(experience, index) in experiences"
                  :key="experience.id"
                  class="tabular absolute inset-x-0 top-0 truncate text-base font-medium opacity-70 transition-all duration-700 ease-out-expo"
                  :class="rollClass(index)"
                >
                  {{ experience.location }} · {{ periodParts(experience.period).join(' → ') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Roles, with a rail that fills as the reader moves through them -->
      <div class="scroll-rail relative lg:col-span-7 lg:pl-12">
        <span
          class="absolute top-0 bottom-0 left-0 hidden w-px bg-line lg:block"
          aria-hidden="true"
        >
          <span
            class="scroll-rail-fill block size-full transition-colors duration-700 ease-out-expo"
            :style="{ backgroundColor: `var(--color-${activeHue})` }"
          />
        </span>

        <ExperienceCard
          v-for="(experience, index) in experiences"
          :key="experience.id"
          :ref="el => setCardRef(index, el)"
          :experience="experience"
          :index="index"
          :hue="signalAt(index)"
          :active="active === index"
        />
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
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

const active = ref(0)
const activeHue = computed(() => signalAt(active.value))

/** Rolls a stacked label: past ones leave upward, future ones wait below. */
const rollClass = (index: number): string => {
  if (index === active.value) return 'translate-y-0 opacity-100'
  return index < active.value ? '-translate-y-full opacity-0' : 'translate-y-full opacity-0'
}

// A role is "in focus" when it crosses a band through the middle of the
// viewport. The observer only fires when that changes.
const cards: (HTMLElement | null)[] = []
const setCardRef = (index: number, el: Element | ComponentPublicInstance | null) => {
  cards[index] = el ? ((el as ComponentPublicInstance).$el ?? el) as HTMLElement : null
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = cards.indexOf(entry.target as HTMLElement)
        if (index >= 0) active.value = index
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  )
  cards.forEach(card => card && observer?.observe(card))
})

onUnmounted(() => observer?.disconnect())
</script>
