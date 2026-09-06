<template>
  <div>
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s',
  title: 'Nethsara Elvitigala | Senior Software Engineer (Full-Stack)',
  description: 'Senior Software Engineer specializing in distributed systems and cloud native architecture. Builds scalable backend services and modern web applications with TypeScript, Java and Python.',
  ogDescription: 'Senior Software Engineer specializing in distributed systems and cloud native architecture. Microservices, event driven platforms, and the teams that build them.',
})

defineOgImage('HomePage', {
  title: 'Nethsara Elvitigala',
  description: 'Senior Software Engineer specializing in distributed systems and cloud native architecture.',
})
</script>
