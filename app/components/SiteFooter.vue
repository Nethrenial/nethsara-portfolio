<template>
  <footer class="border-t border-line bg-canvas">
    <div class="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <div class="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="max-w-md text-2xl font-semibold tracking-display text-ink">
            Open to senior engineering and architecture roles.
          </p>
          <a
            href="mailto:nethsarasandeepaelvitigala@gmail.com"
            class="mt-4 inline-flex items-center gap-2 text-base font-medium text-accent transition-all duration-700 ease-out-expo hover:gap-3"
          >
            nethsarasandeepaelvitigala@gmail.com
            <Icon
              name="ph:arrow-up-right"
              class="text-base"
              aria-hidden="true"
            />
          </a>
        </div>

        <ul class="flex gap-6">
          <li
            v-for="social in socials"
            :key="social.name"
          >
            <a
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="grid size-11 place-items-center rounded-xl border border-line text-ink-2 transition-all duration-700 ease-out-expo hover:-translate-y-0.5 hover:border-ink-3 hover:text-ink active:translate-y-0"
              :aria-label="`${social.name} (opens in a new tab)`"
            >
              <Icon
                :name="social.icon"
                class="text-xl"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <p class="tabular">
          © {{ year }} Nethsara Elvitigala. Colombo, Sri Lanka.
        </p>
        <nav
          class="flex gap-6"
          aria-label="Legal"
        >
          <NuxtLink
            to="/privacy"
            class="transition-colors duration-200 ease-out-expo hover:text-ink"
          >
            Privacy
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="transition-colors duration-200 ease-out-expo hover:text-ink"
          >
            Terms
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const socials = [
  { name: 'GitHub', href: 'https://github.com/Nethrenial', icon: 'ph:github-logo' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nethsara-elvitigala/', icon: 'ph:linkedin-logo' },
  { name: 'Email', href: 'mailto:nethsarasandeepaelvitigala@gmail.com', icon: 'ph:envelope-simple' },
]
</script>
