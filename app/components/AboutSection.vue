<template>
  <section
    id="about"
    class="py-20 px-8 bg-[var(--color-secondary)]"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16 text-center">
        About <span class="gradient-text">Me</span>
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <p class="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
            I'm an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions.
            My skills in modeling, coding, and debugging software come from my extensive experience in various tech
            stacks and fast moving environments. I'm highly adaptable and capable of working independently or
            collaboratively. Apart from that, I also enjoy teaching coding skills to my peers and geeking out on new technologies.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              class="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 text-center"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              class="border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="relative">
            <div class="w-80 h-80 rounded-full overflow-hidden border-4 border-[var(--color-primary)]/20">
              <NuxtImg
                src="/about-image.jpg"
                alt="About me"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
              <Icon
                name="heroicons:code-bracket"
                class="w-12 h-12 text-[var(--color-primary)]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- My Story -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div class="space-y-6">
          <h3 class="text-xl font-semibold text-[var(--color-primary)]">
            Education & Foundation
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            I'm currently completing my Bachelor of Science in Computer Science at the University of Colombo School of Computing
            (2021-2024), after completing my secondary education at Royal College. I also earned a Diploma in Information Technology
            from Infortec International, which gave me an early foundation in tech.
          </p>

          <h3 class="text-xl font-semibold text-[var(--color-primary)]">
            Professional Journey
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            Currently working as a Software Engineer at Haulmatic Technologies on revolutionary supply chain and logistics platforms,
            while also co-founding ZaVolt where I've led numerous client projects and helped grow the company from zero to a team of 10 people.
          </p>
        </div>

        <div class="space-y-6">
          <h3 class="text-xl font-semibold text-[var(--color-primary)]">
            Open Source & Innovation
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            I'm passionate about open source development, maintaining Nethren UI (a components library for React and Vue)
            and developing BanhMi Web Framework for the Bun runtime. I believe in building tools that help other developers
            be more productive.
          </p>

          <h3 class="text-xl font-semibold text-[var(--color-primary)]">
            Teaching & Mentoring
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            Beyond coding, I enjoy teaching and mentoring. I regularly share knowledge with peers and love geeking out about
            new technologies. I believe in the power of community and collaborative learning in the tech industry.
          </p>
        </div>
      </div>

      <!-- Achievements -->
      <div>
        <h3 class="text-2xl font-semibold text-[var(--color-text-primary)] mb-8">
          Key Achievements
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AchievementCard
            v-for="achievement in achievements"
            :key="achievement.title"
            :achievement="achievement"
          />
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
