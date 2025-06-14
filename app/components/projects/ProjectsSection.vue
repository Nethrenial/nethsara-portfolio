<template>
  <BaseSection
    id="projects"
    background="secondary"
  >
    <template #background>
      <div class="absolute top-32 right-20 w-96 h-96 bg-[var(--color-primary)]/4 rounded-full blur-3xl floating" />
      <div class="absolute bottom-20 left-10 w-80 h-80 bg-[var(--color-primary)]/6 rounded-full blur-3xl floating-delayed" />
    </template>

    <SectionHeader
      title="Featured Projects"
      highlighted-word="Projects"
      section-id="projects"
    />

    <ProjectsPreview />
  </BaseSection>
</template>
