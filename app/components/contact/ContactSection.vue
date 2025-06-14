<template>
  <BaseSection
    id="contact"
    background="secondary"
  >
    <SectionHeader
      title="Let's Connect"
      highlighted-word="Connect"
      description="Ready to bring your ideas to life? I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision."
      section-id="contact"
    />

    <!-- Contact Methods -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
      <ContactCard
        v-for="contact in contactMethods"
        :key="contact.title"
        :contact="contact"
      />
    </div>

    <!-- Contact Form -->
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Form -->
        <ContactForm />

        <!-- Additional Info -->
        <div class="space-y-8">
          <div>
            <h4 class="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              Let's Work Together
            </h4>
            <p class="text-[var(--color-text-secondary)] mb-6">
              I'm currently available for freelance projects and full-time opportunities.
              Whether you need a complete web application, want to improve your existing
              codebase, or just have questions about technology, I'd love to help.
            </p>

            <FeatureList
              :items="availabilityInfo"
              spacing="space-y-4"
              text-color="text-[var(--color-text-secondary)]"
            />
          </div>

          <div>
            <h4 class="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              What I Can Help With
            </h4>
            <FeatureList :items="helpWithItems" />
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import type { ContactMethod } from '~/models/ContactMethod'

// Availability info data
const availabilityInfo = [
  { text: 'Usually responds within 24 hours', icon: 'heroicons:clock' },
  { text: 'Available for remote work worldwide', icon: 'heroicons:globe-alt' },
  { text: 'Free consultation for new projects', icon: 'heroicons:chat-bubble-left-right' },
]

// Help with items data
const helpWithItems = [
  { text: 'Full-stack web application development' },
  { text: 'API design and development' },
  { text: 'Code review and optimization' },
  { text: 'Technical consulting and architecture' },
  { text: 'Team mentoring and code reviews' },
]

// Contact methods data
const contactMethods: ContactMethod[] = [
  {
    title: 'Email',
    description: 'Drop me a line and I\'ll get back to you within 24 hours.',
    action: 'nethsara...@gmail.com',
    href: 'mailto:nethsarasandeepaelvitigala@gmail.com',
    icon: 'heroicons:envelope',
    external: false,
  },
  {
    title: 'Phone',
    description: 'Available for calls. Located in Sri Lanka (UTC+5:30).',
    action: '+94 70 361 4315',
    href: 'tel:+94703614315',
    icon: 'heroicons:phone',
    external: false,
  },
  {
    title: 'LinkedIn',
    description: 'Connect with me professionally and see my latest updates.',
    action: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/nethsara-elvitigala/',
    icon: 'heroicons:link',
    external: true,
  },
  {
    title: 'GitHub',
    description: 'Check out my open-source contributions and projects.',
    action: 'View on GitHub',
    href: 'https://github.com/Nethrenial',
    icon: 'heroicons:code-bracket',
    external: true,
  },
]
</script>
