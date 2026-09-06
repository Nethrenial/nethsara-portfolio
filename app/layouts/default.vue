<template>
  <div class="grain min-h-dvh bg-canvas text-ink">
    <a
      href="#main-content"
      class="sr-only z-skip focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-ink"
    >
      Skip to main content
    </a>

    <SiteNav />

    <main id="main-content">
      <slot />
    </main>

    <SiteFooter />
    <ScrollToTop />
  </div>
</template>
