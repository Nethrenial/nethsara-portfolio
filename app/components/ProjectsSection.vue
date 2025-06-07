<template>
  <section
    id="projects"
    class="section-padding bg-[var(--color-secondary)] relative overflow-hidden"
  >
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-32 right-20 w-96 h-96 bg-[var(--color-primary)]/4 rounded-full blur-3xl floating" />
      <div class="absolute bottom-20 left-10 w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl floating-delayed" />
    </div>

    <div class="container-modern relative z-10">
      <h2 class="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16 text-center">
        Featured <span class="gradient-text">Projects</span>
      </h2>

      <ProjectsPreview />
    </div>
  </section>
</template>
