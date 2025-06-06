<template>
  <div class="space-y-0 pt-16 lg:pt-0">
    <!-- Hero Section -->
    <section
      id="hero"
      class="min-h-screen flex items-center justify-center px-8 py-16"
    >
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <p class="text-[var(--color-primary)] text-lg mb-4 opacity-0 animate-fade-in">
            Hello, I'm
          </p>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-4 opacity-0 animate-fade-in animation-delay-200">
            Your <span class="gradient-text">Name</span>
          </h1>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text-secondary)] mb-6 opacity-0 animate-fade-in animation-delay-400">
            Full-Stack <span class="text-[var(--color-primary)]">Software Engineer</span>
          </h2>
        </div>

        <p class="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-600">
          I create exceptional digital experiences through clean code, innovative solutions, and cutting-edge technologies.
          Passionate about building scalable applications that make a difference.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animation-delay-800">
          <a
            href="#projects"
            class="bg-[var(--color-primary)] text-[var(--color-surface)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            class="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-[var(--color-surface)] transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
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
                class="bg-[var(--color-primary)] text-[var(--color-surface)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 text-center"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                class="border border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-[var(--color-surface)] transition-colors duration-300 text-center"
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
            <div
              v-for="achievement in achievements"
              :key="achievement.title"
              class="flex items-start space-x-4 p-6 bg-[var(--color-accent)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300"
            >
              <div class="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon
                  :name="achievement.icon"
                  class="w-6 h-6 text-[var(--color-primary)]"
                />
              </div>
              <div>
                <h4 class="text-[var(--color-text-primary)] font-semibold mb-1">
                  {{ achievement.title }}
                </h4>
                <p class="text-[var(--color-text-secondary)] text-sm">
                  {{ achievement.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section
      id="experience"
      class="py-20 px-8"
    >
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16 text-center">
          Professional <span class="gradient-text">Journey</span>
        </h2>

        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)]" />

          <div class="space-y-16">
            <div
              v-for="(experience, index) in experiences"
              :key="index"
              class="relative flex flex-col md:flex-row items-start md:items-center"
              :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
            >
              <!-- Timeline Dot -->
              <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-[var(--color-primary)] rounded-full border-4 border-[var(--color-surface)] z-10" />

              <!-- Content Card -->
              <div
                class="ml-16 md:ml-0 md:w-5/12 bg-[var(--color-secondary)] rounded-xl p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 card-hover"
                :class="index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'"
              >
                <div class="flex items-start justify-between mb-6">
                  <div>
                    <h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                      {{ experience.position }}
                    </h3>
                    <p class="text-[var(--color-primary)] font-semibold text-lg">
                      {{ experience.company }}
                    </p>
                    <p class="text-[var(--color-text-secondary)] text-sm">
                      {{ experience.location }}
                    </p>
                  </div>
                  <span class="text-[var(--color-text-secondary)] text-sm bg-[var(--color-accent)] px-4 py-2 rounded-full whitespace-nowrap">
                    {{ experience.period }}
                  </span>
                </div>

                <p class="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {{ experience.description }}
                </p>

                <!-- Key Achievements -->
                <div class="mb-6">
                  <h4 class="text-[var(--color-text-primary)] font-semibold mb-3">
                    Key Achievements:
                  </h4>
                  <ul class="space-y-2">
                    <li
                      v-for="achievement in experience.achievements"
                      :key="achievement"
                      class="flex items-start text-[var(--color-text-secondary)] text-sm"
                    >
                      <Icon
                        name="heroicons:check-circle"
                        class="w-4 h-4 text-[var(--color-primary)] mr-2 mt-0.5 flex-shrink-0"
                      />
                      {{ achievement }}
                    </li>
                  </ul>
                </div>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in experience.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-text-secondary)] text-xs rounded-full hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section
      id="projects"
      class="py-20 px-8 bg-[var(--color-secondary)]"
    >
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16 text-center">
          Featured <span class="gradient-text">Projects</span>
        </h2>

        <ProjectsPreview />
      </div>
    </section>

    <!-- Skills Section -->
    <section
      id="skills"
      class="py-20 px-8"
    >
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16 text-center">
          Technical <span class="gradient-text">Expertise</span>
        </h2>

        <SkillsSection />
      </div>
    </section>

    <!-- Contact Section -->
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Email -->
          <a
            href="mailto:your.email@example.com"
            class="group p-8 bg-[var(--color-accent)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 text-center card-hover"
          >
            <div class="w-16 h-16 mx-auto mb-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
              <Icon
                name="heroicons:envelope"
                class="w-8 h-8 text-[var(--color-primary)]"
              />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Email</h3>
            <p class="text-[var(--color-text-secondary)] mb-4">
              Drop me a line and I'll get back to you within 24 hours.
            </p>
            <p class="text-[var(--color-primary)] font-medium">your.email@example.com</p>
          </a>

          <!-- Phone -->
          <a
            href="tel:+1234567890"
            class="group p-8 bg-[var(--color-accent)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 text-center card-hover"
          >
            <div class="w-16 h-16 mx-auto mb-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
              <Icon
                name="heroicons:phone"
                class="w-8 h-8 text-[var(--color-primary)]"
              />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Phone</h3>
            <p class="text-[var(--color-text-secondary)] mb-4">
              Available for calls Monday to Friday, 9 AM - 6 PM EST.
            </p>
            <p class="text-[var(--color-primary)] font-medium">+1 (234) 567-890</p>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            class="group p-8 bg-[var(--color-accent)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 text-center card-hover"
          >
            <div class="w-16 h-16 mx-auto mb-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
              <Icon
                name="heroicons:link"
                class="w-8 h-8 text-[var(--color-primary)]"
              />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">LinkedIn</h3>
            <p class="text-[var(--color-text-secondary)] mb-4">
              Connect with me professionally and see my latest updates.
            </p>
            <p class="text-[var(--color-primary)] font-medium">Connect on LinkedIn</p>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            class="group p-8 bg-[var(--color-accent)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-300 text-center card-hover"
          >
            <div class="w-16 h-16 mx-auto mb-6 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
              <Icon
                name="heroicons:code-bracket"
                class="w-8 h-8 text-[var(--color-primary)]"
              />
            </div>
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] mb-2">GitHub</h3>
            <p class="text-[var(--color-text-secondary)] mb-4">
              Check out my open-source contributions and projects.
            </p>
            <p class="text-[var(--color-primary)] font-medium">View on GitHub</p>
          </a>
        </div>

        <!-- Contact Form -->
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Form -->
            <div>
              <h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
                Send Me a <span class="gradient-text">Message</span>
              </h3>

              <form
                class="space-y-6"
                @submit.prevent="submitForm"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="name"
                      class="block text-[var(--color-text-primary)] font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
                      placeholder="Your name"
                    >
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-[var(--color-text-primary)] font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
                      placeholder="your.email@example.com"
                    >
                  </div>
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-[var(--color-text-primary)] font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
                    placeholder="What's this about?"
                  >
                </div>

                <div>
                  <label
                    for="budget"
                    class="block text-[var(--color-text-primary)] font-medium mb-2"
                  >
                    Project Budget (Optional)
                  </label>
                  <select
                    id="budget"
                    v-model="form.budget"
                    class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
                  >
                    <option value="">
                      Select budget range
                    </option>
                    <option value="< $5,000">
                      Less than $5,000
                    </option>
                    <option value="$5,000 - $10,000">
                      $5,000 - $10,000
                    </option>
                    <option value="$10,000 - $25,000">
                      $10,000 - $25,000
                    </option>
                    <option value="$25,000 - $50,000">
                      $25,000 - $50,000
                    </option>
                    <option value="> $50,000">
                      More than $50,000
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-[var(--color-text-primary)] font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    class="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300 resize-vertical"
                    placeholder="Tell me about your project, goals, timeline, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-[var(--color-primary)] text-[var(--color-surface)] py-4 rounded-lg font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-300 hover:shadow-[var(--shadow-glow)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Icon
                    v-if="isSubmitting"
                    name="heroicons:arrow-path"
                    class="w-5 h-5 mr-2 animate-spin"
                  />
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>

              <!-- Success/Error Messages -->
              <div
                v-if="formStatus === 'success'"
                class="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
              >
                <p class="text-green-400 flex items-center">
                  <Icon
                    name="heroicons:check-circle"
                    class="w-5 h-5 mr-2"
                  />
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </p>
              </div>

              <div
                v-if="formStatus === 'error'"
                class="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
              >
                <p class="text-red-400 flex items-center">
                  <Icon
                    name="heroicons:exclamation-circle"
                    class="w-5 h-5 mr-2"
                  />
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </p>
              </div>
            </div>

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
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Experience data
const experiences = [
  {
    position: 'Senior Full-Stack Developer',
    company: 'Tech Innovation Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications using modern technologies. Mentoring junior developers and architecting cloud-native solutions for enterprise clients.',
    achievements: [
      'Led a team of 5 developers to deliver a $2M enterprise project 2 weeks ahead of schedule',
      'Improved application performance by 40% through code optimization and caching strategies',
      'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
      'Mentored 3 junior developers who were promoted to mid-level positions',
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript'],
  },
  {
    position: 'Full-Stack Developer',
    company: 'Digital Solutions LLC',
    location: 'New York, NY',
    period: '2021 - 2022',
    description: 'Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements. Collaborated with design teams to create pixel-perfect implementations.',
    achievements: [
      'Delivered 15+ client projects with 100% on-time completion rate',
      'Reduced page load times by 60% through image optimization and lazy loading',
      'Implemented responsive designs that improved mobile engagement by 35%',
      'Built reusable component library used across 10+ projects',
    ],
    technologies: ['React', 'Next.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
  },
  {
    position: 'Frontend Developer',
    company: 'StartupCo',
    location: 'Austin, TX',
    period: '2020 - 2021',
    description: 'Built responsive web applications and collaborated with designers to create engaging user interfaces. Focused on modern JavaScript frameworks and best practices.',
    achievements: [
      'Converted 5 static designs into interactive React applications',
      'Implemented state management solutions improving app stability',
      'Achieved 95+ Lighthouse scores across all projects',
      'Collaborated with UX team to improve user onboarding flow',
    ],
    technologies: ['JavaScript', 'React', 'Redux', 'CSS3', 'HTML5', 'Git', 'Webpack'],
  },
]

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

// Contact form
const form = ref({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: '',
})

const isSubmitting = ref(false)
const formStatus = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  formStatus.value = ''

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    formStatus.value = 'success'

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      budget: '',
      message: '',
    }
  }
  catch {
    formStatus.value = 'error'
  }
  finally {
    isSubmitting.value = false
  }
}

// SEO
useSeoMeta({
  title: 'Your Name - Full-Stack Software Engineer',
  description: 'Passionate full-stack software engineer specializing in modern web technologies. Explore my projects, skills, and experience.',
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
