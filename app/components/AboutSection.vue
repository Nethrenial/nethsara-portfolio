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
            I'm a passionate full-stack software engineer with a love for creating digital solutions
            that make a real difference. My journey in technology started with curiosity and has
            evolved into a career dedicated to innovation and excellence.
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
            The Beginning
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            My fascination with technology began in high school when I first discovered programming.
            What started as curiosity about how websites work quickly turned into a passion for
            creating digital solutions that solve real-world problems.
          </p>

          <h3 class="text-xl font-semibold text-[var(--color-primary)]">
            Education & Growth
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            I pursued Computer Science at university, where I learned the fundamentals of software
            engineering, algorithms, and system design. But my real education came from building
            projects, contributing to open source, and learning from the developer community.
          </p>
        </div>

        <div class="space-y-6">
          <h3 class="text-xl font-semibold text-[var(--color-primary)]">
            Professional Journey
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            Over the past 3+ years, I've had the privilege of working with amazing teams and clients,
            from startups to established companies. Each project has taught me something new and
            reinforced my belief in the power of well-crafted software.
          </p>

          <h3 class="text-xl font-semibold text-[var(--color-primary)]">
            Today & Tomorrow
          </h3>
          <p class="text-[var(--color-text-secondary)] leading-relaxed">
            Today, I'm focused on creating scalable, maintainable applications using modern
            technologies. I'm always learning, whether it's a new framework, design pattern,
            or approach to solving complex problems.
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
    title: 'AWS Certified Solutions Architect',
    description: 'Certified in designing distributed systems on AWS',
    icon: 'heroicons:cloud',
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to various open source projects',
    icon: 'heroicons:code-bracket',
  },
  {
    title: 'Tech Speaker',
    description: 'Spoken at local meetups and conferences about web development',
    icon: 'heroicons:microphone',
  },
  {
    title: 'Hackathon Winner',
    description: 'First place at TechCrunch Disrupt Hackathon 2023',
    icon: 'heroicons:trophy',
  },
  {
    title: 'Team Lead',
    description: 'Led development teams of 5+ engineers',
    icon: 'heroicons:user-group',
  },
  {
    title: 'Mentor',
    description: 'Mentoring junior developers and bootcamp graduates',
    icon: 'heroicons:academic-cap',
  },
]
</script>
