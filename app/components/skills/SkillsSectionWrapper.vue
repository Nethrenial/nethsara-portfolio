<template>
  <BaseSection
    id="skills"
    background="transparent"
  >
    <template #background>
      <div class="absolute top-20 right-10 w-80 h-80 bg-[var(--color-primary)]/3 rounded-full blur-3xl floating" />
      <div class="absolute bottom-40 left-20 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl floating-delayed" />
    </template>

    <SectionHeader
      title="Technical Expertise"
      highlighted-word="Expertise"
    />

    <SkillsSection />
  </BaseSection>
</template>
