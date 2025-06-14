<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center px-8 py-16 relative overflow-hidden"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[var(--color-primary)]/10 to-transparent rounded-full blur-3xl floating" />
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent rounded-full blur-3xl floating-delayed" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--gradient-glow)] rounded-full blur-3xl opacity-30" />
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <!-- Status Badge -->
      <div class="inline-flex items-center gap-2 mb-8 px-4 py-2 glass-card rounded-full opacity-0 animate-fade-in">
        <div class="w-2 h-2 bg-green-400 rounded-full pulse-glow" />
        <span class="text-[var(--color-text-secondary)] text-sm font-medium">Available for new opportunities</span>
      </div>

      <div class="mb-8">
        <p class="text-[var(--color-primary)] text-lg mb-4 opacity-0 animate-fade-in animation-delay-200">
          Hello, I'm
        </p>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-4 opacity-0 animate-fade-in animation-delay-400">
          Nethsara <span class="gradient-text-animated">Elvitigala</span>
        </h1>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-text-secondary)] mb-6 opacity-0 animate-fade-in animation-delay-600">
          <span class="text-[var(--color-primary)]">Software Engineer</span>
        </h2>
      </div>

      <!-- Enhanced Description -->
      <div class="max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in animation-delay-800">
        <p class="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
          I'm an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions.
          My skills in modeling, coding, and debugging software come from my extensive experience in various tech stacks
          and fast moving environments.
        </p>

        <!-- Key Stats -->
        <!-- <div class="grid grid-cols-3 gap-6 mt-8">
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-1">
              3+
            </div>
            <div class="text-sm text-[var(--color-text-secondary)]">
              Years Experience
            </div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-1">
              15+
            </div>
            <div class="text-sm text-[var(--color-text-secondary)]">
              Projects Completed
            </div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-1">
              2
            </div>
            <div class="text-sm text-[var(--color-text-secondary)]">
              Open Source
            </div>
          </div>
        </div> -->
      </div>

      <!-- Enhanced CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animation-delay-1000">
        <BaseButton
          href="#projects"
          :variant="ButtonVariant.PRIMARY"
          icon="heroicons:eye"
          text="View My Work"
        />
        <BaseButton
          href="#contact"
          :variant="ButtonVariant.SECONDARY"
          icon="heroicons:chat-bubble-left-ellipsis"
          text="Get In Touch"
        />
      </div>
    </div>

    <!-- Scroll Indicator - positioned relative to section, not content container -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1200 z-20">
      <div class="flex flex-col items-center space-y-2">
        <span class="text-[var(--color-text-secondary)] text-xs">Scroll to explore</span>
        <div class="w-6 h-10 border-2 border-[var(--color-primary)]/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-[var(--color-primary)] rounded-full animate-pulse mt-2" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ButtonVariant } from '~/enums/ButtonVariant'
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

.animation-delay-1000 {
  animation-delay: 1.0s;
}

.animation-delay-1200 {
  animation-delay: 1.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
