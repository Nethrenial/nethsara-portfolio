<template>
  <BaseSection
    id="contact"
    surface="raised"
  >
    <SectionHeader
      index="05 / Contact"
      title="Tell me what you are building"
      description="Open to senior and lead engineering roles, and a limited amount of architecture consulting."
      section-id="contact"
    />

    <div class="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
      <div
        v-reveal
        class="lg:col-span-7"
      >
        <ContactForm />
      </div>

      <div
        v-reveal="{ delay: 120 }"
        class="lg:col-span-5"
      >
        <div>
          <h3 class="font-mono text-xs tracking-wide text-ink-3 uppercase">
            Or reach me directly
          </h3>
          <div class="mt-4">
            <ContactCard
              v-for="contact in contactMethods"
              :key="contact.title"
              :contact="contact"
            />
          </div>
        </div>

        <div class="mt-12">
          <h3 class="font-mono text-xs tracking-wide text-ink-3 uppercase">
            Work I take on
          </h3>
          <FeatureList
            :items="helpWithItems"
            class="mt-4"
          />
        </div>

        <dl class="mt-12 grid grid-cols-2 gap-6">
          <div
            v-for="term in terms"
            :key="term.label"
          >
            <dt class="font-mono text-xs tracking-wide text-ink-3 uppercase">
              {{ term.label }}
            </dt>
            <dd class="mt-2 text-base text-ink">
              {{ term.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import type { ContactMethod } from '~/models/ContactMethod'

const helpWithItems = [
  { text: 'System design and architecture reviews' },
  { text: 'Distributed and event driven backend platforms' },
  { text: 'Cloud native delivery on AWS and Google Cloud' },
  { text: 'Leading and mentoring engineering teams' },
  { text: 'Full stack delivery in TypeScript, Java and Python' },
]

// Answers the questions people ask before they write, so they do not have to.
const terms = [
  { label: 'Reply time', value: 'Within a day' },
  { label: 'First call', value: 'Free, 30 minutes' },
  { label: 'Time zone', value: 'UTC+5:30, flexible' },
  { label: 'Remote', value: 'Remote across US and APAC teams' },
]

const contactMethods: ContactMethod[] = [
  {
    title: 'Email',
    action: 'nethsarasandeepaelvitigala@gmail.com',
    href: 'mailto:nethsarasandeepaelvitigala@gmail.com',
    icon: 'ph:envelope-simple',
    external: false,
  },
  {
    title: 'Phone',
    action: '+94 70 361 4315',
    href: 'tel:+94703614315',
    icon: 'ph:phone',
    external: false,
  },
  {
    title: 'LinkedIn',
    action: 'in/nethsara-elvitigala',
    href: 'https://www.linkedin.com/in/nethsara-elvitigala/',
    icon: 'ph:linkedin-logo',
    external: true,
  },
  {
    title: 'GitHub',
    action: '@Nethrenial',
    href: 'https://github.com/Nethrenial',
    icon: 'ph:github-logo',
    external: true,
  },
]
</script>
