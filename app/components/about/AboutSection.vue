<template>
  <BaseSection id="about">
    <SectionHeader
      index="03"
      label="About"
      title="A bit more than the job titles"
      section-id="about"
      hue="sage"
    />

    <!-- The statement lights up word by word as it crosses the viewport.
         Without scroll timelines it simply reads at full strength. -->
    <p
      class="scroll-words max-w-6xl text-4xl font-semibold tracking-display text-ink sm:text-5xl lg:text-7xl"
      :style="{ '--word-step': `${40 / statement.length}%` }"
    >
      <template
        v-for="(word, index) in statement"
        :key="index"
      >
        <span
          class="scroll-word"
          :class="word.accent ? 'text-sage' : ''"
          :style="{ '--i': index, '--lit': word.accent ? 'var(--color-sage)' : undefined }"
        >{{ word.text }}</span>{{ index < statement.length - 1 ? ' ' : '' }}
      </template>
    </p>

    <!-- Narrative wide on the left, the facts rail narrow on the right -->
    <div class="mt-24 grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <p
          v-reveal
          class="measure text-lg text-ink-2"
        >
          My work sits in the backend and in the architecture around it:
          microservices, event driven workflows, and the cloud platforms they
          run on. I have taken systems from an empty repository to production,
          and taken an engineering organization from two people to ten.
        </p>
        <p
          v-reveal="{ delay: 80 }"
          class="measure mt-6 text-lg text-ink-2"
        >
          I read the source when the documentation runs out, and I would rather
          spend a day on an unglamorous abstraction than a week on the outage it
          would have prevented. Outside work I maintain two open source projects
          and mentor engineers coming up behind me.
        </p>

        <div
          v-reveal="{ delay: 160 }"
          class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <BaseButton
            href="#contact"
            :variant="ButtonVariant.SECONDARY"
            :size="ButtonSize.LARGE"
            icon="ph:arrow-right"
            text="Start a conversation"
            hue="sage"
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

      <dl class="lg:col-span-4 lg:col-start-9">
        <div
          v-for="(fact, index) in facts"
          :key="fact.label"
          class="group relative py-4"
        >
          <span
            v-reveal="{ variant: 'line', delay: index * 90 }"
            class="absolute inset-x-0 top-0 h-px bg-line"
            aria-hidden="true"
          />
          <div v-reveal="{ variant: 'fade', delay: 120 + index * 90 }">
            <dt class="flex items-center gap-2 font-mono text-xs tracking-wide text-ink-3">
              <span
                class="size-1.5 rounded-full transition-transform duration-700 ease-out-expo group-hover:scale-150"
                :style="{ backgroundColor: `var(--color-${signalAt(index)})` }"
                aria-hidden="true"
              />
              {{ fact.label }}
            </dt>
            <dd class="mt-2 text-base text-ink transition-transform duration-700 ease-out-expo group-hover:translate-x-1">
              {{ fact.value }}
            </dd>
          </div>
        </div>
      </dl>
    </div>

    <!-- Story in two offset columns, so the grid never reads as four cards -->
    <div class="mt-24 grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
      <StoryCard
        v-for="(story, index) in storyCards"
        :key="story.title"
        v-reveal="{ delay: (index % 2) * 120 }"
        :index="index"
        :hue="signalAt(index)"
        :icon="story.icon"
        :title="story.title"
        :paragraphs="story.paragraphs"
        :class="index % 2 === 1 ? 'md:mt-24' : ''"
      />
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import type { StoryCard } from '~/models/StoryCard'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { ButtonSize } from '~/enums/ButtonSize'

const accents = new Set(['distributed', 'systems,', 'teams'])

const statement = 'I design distributed systems, and I have built the teams that ship them.'
  .split(' ')
  .map(text => ({ text, accent: accents.has(text) }))

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
    icon: 'ph:graduation-cap-duotone',
    paragraphs: [
      'A diploma in IT at Infortec International, then a BSc in Computer Science at the University of Colombo School of Computing, finished in 2024. I was already taking client work by the second year, so most of what I learned arrived out of order and under deadline.',
      'The rest came from courses, source code and a long list of things I got wrong the first time.',
    ],
  },
  {
    title: 'Building the team, not just the system',
    icon: 'ph:users-four-duotone',
    paragraphs: [
      'I co-founded ZaVolt in 2023 and led its engineering until 2024, growing it from the two of us to ten developers. Hiring, review standards, delivery pipelines and the roadmap were all part of the job.',
      'ZaVolt is at <a href="https://zavolt.com" target="_blank" rel="noopener noreferrer">zavolt.com</a> if you want to see the client side of what I do.',
    ],
  },
  {
    title: 'What I maintain',
    icon: 'ph:git-branch-duotone',
    paragraphs: [
      'Nethren UI, a component library for Vue and React, and BanhMi, a web framework for the Bun runtime. Both started because I wanted the tool and it did not exist in the shape I needed.',
      'Neither is finished. That is roughly the point.',
    ],
  },
  {
    title: 'Teaching',
    icon: 'ph:users-three-duotone',
    paragraphs: [
      'Mentoring was a formal part of the ZaVolt role and has stayed an informal one since. Explaining something is still the fastest way I find the gaps in my own understanding.',
      'I presented a generative AI prototype for test case generation to Sysco global technical leadership in 2024, which was the largest room so far.',
    ],
  },
]
</script>
