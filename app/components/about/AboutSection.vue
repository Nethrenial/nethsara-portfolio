<template>
  <BaseSection
    id="about"
    surface="raised"
  >
    <SectionHeader
      index="03 / About"
      title="A bit more than the job titles"
      section-id="about"
    />

    <!-- Narrative sits wide on the left, the facts rail narrow on the right -->
    <div class="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
      <div
        v-reveal
        class="lg:col-span-7"
      >
        <p class="measure text-2xl font-medium text-ink">
          I design distributed systems, and I have built the teams that ship
          them.
        </p>
        <p class="measure mt-6 text-lg text-ink-2">
          My work sits in the backend and in the architecture around it:
          microservices, event driven workflows, and the cloud platforms they
          run on. I have taken systems from an empty repository to production,
          and taken an engineering organization from two people to ten.
        </p>
        <p class="measure mt-6 text-lg text-ink-2">
          I read the source when the documentation runs out, and I would rather
          spend a day on an unglamorous abstraction than a week on the outage it
          would have prevented. Outside work I maintain two open source projects
          and mentor engineers coming up behind me.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <BaseButton
            href="#contact"
            :variant="ButtonVariant.SECONDARY"
            :size="ButtonSize.LARGE"
            icon="ph:arrow-right"
            text="Start a conversation"
          />
          <BaseButton
            href="/resume.pdf"
            external
            :variant="ButtonVariant.TERTIARY"
            icon="ph:arrow-down"
            text="Résumé"
          />
        </div>
      </div>

      <dl
        v-reveal="{ delay: 120 }"
        class="lg:col-span-4 lg:col-start-9"
      >
        <div
          v-for="fact in facts"
          :key="fact.label"
          class="border-t border-line py-5"
        >
          <dt class="font-mono text-xs tracking-wide text-ink-3 uppercase">
            {{ fact.label }}
          </dt>
          <dd class="mt-2 text-base text-ink">
            {{ fact.value }}
          </dd>
        </div>
      </dl>
    </div>

    <!-- Story, laid out as two columns of prose rather than four cards -->
    <div class="mt-24 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
      <StoryCard
        v-for="(story, index) in storyCards"
        :key="story.title"
        v-reveal="{ delay: index * 80 }"
        :icon="story.icon"
        :title="story.title"
        :paragraphs="story.paragraphs"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import type { StoryCard } from '~/models/StoryCard'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'

const facts = [
  { label: 'Based in', value: 'Colombo, Sri Lanka · UTC+5:30' },
  { label: 'Currently', value: 'Senior Software Engineer at HeyMilo AI, New York' },
  { label: 'Previously', value: 'Co-founder and Lead Engineer at ZaVolt' },
  { label: 'Studied', value: 'BSc Computer Science, University of Colombo School of Computing' },
  { label: 'Focus', value: 'Microservices, event driven architecture, cloud native platforms' },
]

const storyCards: StoryCard[] = [
  {
    title: 'How I got here',
    icon: 'ph:graduation-cap',
    paragraphs: [
      'A diploma in IT at Infortec International, then a BSc in Computer Science at the University of Colombo School of Computing, finished in 2024. I was already taking client work by the second year, so most of what I learned arrived out of order and under deadline.',
      'The rest came from courses, source code and a long list of things I got wrong the first time.',
    ],
  },
  {
    title: 'Building the team, not just the system',
    icon: 'ph:users-four',
    paragraphs: [
      'I co-founded ZaVolt in 2023 and led its engineering until 2024, growing it from the two of us to ten developers. Hiring, review standards, delivery pipelines and the roadmap were all part of the job.',
      'ZaVolt is at <a href="https://zavolt.com" target="_blank" rel="noopener noreferrer">zavolt.com</a> if you want to see the client side of what I do.',
    ],
  },
  {
    title: 'What I maintain',
    icon: 'ph:git-branch',
    paragraphs: [
      'Nethren UI, a component library for Vue and React, and BanhMi, a web framework for the Bun runtime. Both started because I wanted the tool and it did not exist in the shape I needed.',
      'Neither is finished. That is roughly the point.',
    ],
  },
  {
    title: 'Teaching',
    icon: 'ph:users-three',
    paragraphs: [
      'Mentoring was a formal part of the ZaVolt role and has stayed an informal one since. Explaining something is still the fastest way I find the gaps in my own understanding.',
      'I presented a generative AI prototype for test case generation to Sysco global technical leadership in 2024, which was the largest room so far.',
    ],
  },
]
</script>
