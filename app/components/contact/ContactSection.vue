<template>
  <BaseSection id="contact">
    <SectionHeader
      index="05"
      label="Contact"
      title="Tell me what you are building"
      description="Open to senior and lead engineering roles, and a limited amount of architecture consulting."
      section-id="contact"
      hue="rose"
    />

    <div class="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
      <div
        v-reveal
        class="lg:col-span-7"
      >
        <ContactForm />
      </div>

      <div class="lg:col-span-5">
        <h3
          v-reveal="{ variant: 'fade' }"
          class="font-mono text-xs tracking-wide text-ink-3"
        >
          Or reach me directly
        </h3>
        <div class="mt-4">
          <ContactCard
            v-for="(contact, index) in contactMethods"
            :key="contact.title"
            v-reveal="{ delay: 80 + index * 80 }"
            :contact="contact"
            :hue="signalAt(index)"
          />
        </div>

        <div
          v-reveal="{ delay: 120 }"
          class="mt-16"
        >
          <h3 class="font-mono text-xs tracking-wide text-ink-3">
            Work I take on
          </h3>
          <FeatureList
            :items="helpWithItems"
            class="mt-4"
          />
        </div>

        <dl
          v-reveal="{ delay: 160 }"
          class="mt-16 grid grid-cols-2 gap-4"
        >
          <div
            v-for="(term, index) in terms"
            :key="term.label"
            class="group rounded-2xl bg-surface p-4 transition-colors duration-700 ease-out-expo hover:bg-surface-2"
            :style="hueStyle(signalAt(index + 1))"
          >
            <dt class="flex items-center gap-2 font-mono text-xs tracking-wide text-ink-3">
              <span
                class="size-1.5 rounded-full bg-(--hue) transition-transform duration-700 ease-out-expo group-hover:scale-150"
                aria-hidden="true"
              />
              {{ term.label }}
            </dt>
            <dd class="mt-2 text-base font-medium text-ink">
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
