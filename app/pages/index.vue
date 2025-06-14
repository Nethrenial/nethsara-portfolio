<template>
  <div
    class="space-y-0 pt-16 lg:pt-0"
  >
    <!-- Hero Section -->
    <HeroSection />
    <!-- About Section -->
    <AboutSection />
    <!-- Experience Section -->
    <ExperienceSection />
    <!-- Projects Section -->
    <ProjectsSection />
    <!-- Skills Section -->
    <SkillsSectionWrapper />
    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: '',
  description: 'I\'m an enthusiastic and motivated Software Engineer with a passion for developing innovative solutions. Experienced in various tech stacks and fast moving environments.',
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
