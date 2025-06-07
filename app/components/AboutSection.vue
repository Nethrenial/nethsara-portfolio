<template>
  <section
    id="about"
    class="section-padding bg-[var(--color-secondary)] relative overflow-hidden"
  >
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-40 left-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl floating" />
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-primary)]/3 rounded-full blur-3xl floating-delayed" />
    </div>

    <div class="container-modern relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16 text-center">
        About <span class="gradient-text">Me</span>
      </h2>

      <!-- Main About Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Text Content -->
        <div class="space-y-8">
          <div class="glass-card p-8 rounded-2xl">
            <h3 class="text-xl font-semibold text-[var(--color-primary)] mb-4 flex items-center">
              <Icon
                name="heroicons:user-circle"
                class="w-6 h-6 mr-3"
              />
              Who I Am
            </h3>
            <p class="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
              I'm an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions.
              My skills in modeling, coding, and debugging software come from my extensive experience in various tech
              stacks and fast moving environments.
            </p>
            <p class="text-[var(--color-text-secondary)] leading-relaxed">
              I'm highly adaptable and capable of working independently or collaboratively. Apart from that, I also
              enjoy teaching coding skills to my peers and geeking out on new technologies.
            </p>
          </div>

          <!-- Enhanced CTAs -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              class="btn-primary glow-on-hover inline-flex items-center justify-center space-x-2"
            >
              <Icon
                name="heroicons:chat-bubble-left-right"
                class="w-5 h-5"
              />
              <span>Get In Touch</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              class="glass-card text-[var(--color-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 text-center inline-flex items-center justify-center space-x-2 glow-on-hover"
            >
              <Icon
                name="heroicons:document-arrow-down"
                class="w-5 h-5"
              />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <!-- Enhanced Profile Section -->
        <div class="flex justify-center">
          <div class="relative group">
            <!-- Main Profile Card -->
            <div class="glass-card p-8 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-all duration-500">
              <div class="w-72 h-72 rounded-2xl overflow-hidden border-4 border-[var(--color-primary)]/20 relative">
                <NuxtImg
                  src="/about-image.jpg"
                  alt="About me"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/50 to-transparent" />
              </div>

              <!-- Floating Badge -->
              <div class="absolute -bottom-4 -right-4 glass-card p-4 rounded-full border border-[var(--color-primary)]/30">
                <Icon
                  name="heroicons:code-bracket"
                  class="w-8 h-8 text-[var(--color-primary)]"
                />
              </div>

              <!-- Floating Stats -->
              <div class="absolute -top-4 -left-4 glass-card px-4 py-2 rounded-full">
                <span class="text-sm font-semibold text-[var(--color-primary)]">3+ Years</span>
              </div>
            </div>

            <!-- Background Decorations -->
            <div class="absolute inset-0 -z-10">
              <div class="absolute top-4 left-4 w-full h-full bg-[var(--color-primary)]/10 rounded-3xl transform rotate-6" />
              <div class="absolute top-8 left-8 w-full h-full bg-[var(--color-primary)]/5 rounded-3xl transform rotate-12" />
            </div>
          </div>
        </div>
      </div>

      <!-- My Story with Enhanced Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div class="glass-card p-8 rounded-2xl card-hover">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mr-4">
              <Icon
                name="heroicons:academic-cap"
                class="w-6 h-6 text-[var(--color-primary)]"
              />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-primary)]">
              Education & Foundation
            </h3>
          </div>
          <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            I'm currently completing my Bachelor of Science in Computer Science at the University of Colombo School of Computing
            (2021-2024), after completing my secondary education at Royal College.
          </p>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            I also earned a Diploma in Information Technology from Infortec International, which gave me an early foundation in tech.
          </p>
        </div>

        <div class="glass-card p-8 rounded-2xl card-hover">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mr-4">
              <Icon
                name="heroicons:briefcase"
                class="w-6 h-6 text-[var(--color-primary)]"
              />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-primary)]">
              Professional Journey
            </h3>
          </div>
          <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            Currently working as a Software Engineer at Haulmatic Technologies on revolutionary supply chain and logistics platforms,
            while also co-founding ZaVolt.
          </p>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            I've led numerous client projects and helped grow the company from zero to a team of 10 people.
          </p>
        </div>

        <div class="glass-card p-8 rounded-2xl card-hover">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mr-4">
              <Icon
                name="heroicons:code-bracket"
                class="w-6 h-6 text-[var(--color-primary)]"
              />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-primary)]">
              Open Source & Innovation
            </h3>
          </div>
          <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            I'm passionate about open source development, maintaining Nethren UI (a components library for React and Vue)
            and developing BanhMi Web Framework for the Bun runtime.
          </p>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            I believe in building tools that help other developers be more productive.
          </p>
        </div>

        <div class="glass-card p-8 rounded-2xl card-hover">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mr-4">
              <Icon
                name="heroicons:users"
                class="w-6 h-6 text-[var(--color-primary)]"
              />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-primary)]">
              Teaching & Mentoring
            </h3>
          </div>
          <p class="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            Beyond coding, I enjoy teaching and mentoring. I regularly share knowledge with peers and love geeking out about
            new technologies.
          </p>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            I believe in the power of community and collaborative learning in the tech industry.
          </p>
        </div>
      </div>

      <!-- Enhanced Achievements -->
      <div>
        <h3 class="text-2xl font-semibold text-[var(--color-text-primary)] mb-8 text-center">
          Key <span class="gradient-text">Achievements</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="achievement in achievements"
            :key="achievement.title"
            class="glass-card p-6 rounded-xl card-hover glow-on-hover group"
          >
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)]/30 transition-colors duration-300">
                <Icon
                  :name="achievement.icon"
                  class="w-6 h-6 text-[var(--color-primary)]"
                />
              </div>
              <div class="flex-1">
                <h4 class="text-[var(--color-text-primary)] font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {{ achievement.title }}
                </h4>
                <p class="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {{ achievement.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Achievements data
const achievements = [
  {
    title: 'Co-Founder at ZaVolt',
    description: 'Helped grow company from zero to 10 people team delivering business solutions',
    icon: 'heroicons:building-office',
  },
  {
    title: 'Open Source Maintainer',
    description: 'Maintaining Nethren UI components library and BanhMi Web Framework',
    icon: 'heroicons:code-bracket',
  },
  {
    title: 'LLM Project Presenter',
    description: 'Presented LLM-based intelligent test case generation to Sysco global leadership',
    icon: 'heroicons:microphone',
  },
  {
    title: 'University Project Leader',
    description: 'Led 3rd-year project developing LMS with focus on content protection',
    icon: 'heroicons:user-group',
  },
  {
    title: 'Full-Stack Developer',
    description: 'Experience across multiple tech stacks and client projects',
    icon: 'heroicons:cpu-chip',
  },
  {
    title: 'Teaching Enthusiast',
    description: 'Enjoys teaching coding skills to peers and sharing knowledge',
    icon: 'heroicons:academic-cap',
  },
]
</script>
