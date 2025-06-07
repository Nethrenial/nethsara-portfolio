<template>
  <section
    id="contact"
    class="py-20 px-8 bg-[var(--color-secondary)]"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
          Let's <span class="gradient-text">Connect</span>
        </h2>
        <p class="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm always excited to discuss new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

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

              <div class="space-y-4">
                <div class="flex items-center text-[var(--color-text-secondary)]">
                  <Icon
                    name="heroicons:clock"
                    class="w-5 h-5 mr-3 text-[var(--color-primary)]"
                  />
                  <span>Usually responds within 24 hours</span>
                </div>
                <div class="flex items-center text-[var(--color-text-secondary)]">
                  <Icon
                    name="heroicons:globe-alt"
                    class="w-5 h-5 mr-3 text-[var(--color-primary)]"
                  />
                  <span>Available for remote work worldwide</span>
                </div>
                <div class="flex items-center text-[var(--color-text-secondary)]">
                  <Icon
                    name="heroicons:chat-bubble-left-right"
                    class="w-5 h-5 mr-3 text-[var(--color-primary)]"
                  />
                  <span>Free consultation for new projects</span>
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                What I Can Help With
              </h4>
              <ul class="space-y-3 text-[var(--color-text-secondary)]">
                <li class="flex items-start">
                  <Icon
                    name="heroicons:check"
                    class="w-5 h-5 mr-3 text-[var(--color-primary)] mt-0.5"
                  />
                  <span>Full-stack web application development</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    name="heroicons:check"
                    class="w-5 h-5 mr-3 text-[var(--color-primary)] mt-0.5"
                  />
                  <span>API design and development</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    name="heroicons:check"
                    class="w-5 h-5 mr-3 text-[var(--color-primary)] mt-0.5"
                  />
                  <span>Code review and optimization</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    name="heroicons:check"
                    class="w-5 h-5 mr-3 text-[var(--color-primary)] mt-0.5"
                  />
                  <span>Technical consulting and architecture</span>
                </li>
                <li class="flex items-start">
                  <Icon
                    name="heroicons:check"
                    class="w-5 h-5 mr-3 text-[var(--color-primary)] mt-0.5"
                  />
                  <span>Team mentoring and code reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Contact methods data
const contactMethods = [
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
