<template>
  <div class="fixed inset-x-0 top-0 z-nav pointer-events-none">
    <!-- Floating island -->
    <!-- relative + z-raised keeps the island, and its close button, above the
         mobile overlay that follows it in the DOM -->
    <nav
      class="glass pointer-events-auto relative z-raised mx-auto mt-6 flex w-max max-w-[calc(100vw-2rem)] items-center gap-1 rounded-full p-1.5 pl-4"
      aria-label="Main"
    >
      <NuxtLink
        to="/"
        class="mr-2 shrink-0 rounded-full text-sm font-semibold text-ink transition-colors duration-200 ease-out-expo hover:text-accent"
      >
        Nethsara
      </NuxtLink>

      <!-- Section links, home page only -->
      <ul
        v-if="isHome"
        class="hidden items-center gap-0.5 md:flex"
      >
        <li
          v-for="link in sections"
          :key="link.id"
        >
          <a
            :href="`#${link.id}`"
            class="block rounded-full px-3 py-2 text-sm font-medium transition-all duration-700 ease-out-expo active:scale-[0.98]"
            :class="activeSection === link.id
              ? 'bg-surface-3 text-ink'
              : 'text-ink-2 hover:bg-surface-2 hover:text-ink'"
            :aria-current="activeSection === link.id ? 'true' : undefined"
            @click.prevent="goToSection(link.id)"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- Route links, everywhere else -->
      <ul
        v-else
        class="hidden items-center gap-0.5 md:flex"
      >
        <li>
          <NuxtLink
            to="/"
            class="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink-2 transition-all duration-700 ease-out-expo hover:bg-surface-2 hover:text-ink active:scale-[0.98]"
          >
            <Icon
              name="ph:arrow-left"
              class="text-base"
              aria-hidden="true"
            />
            Home
          </NuxtLink>
        </li>
        <li>
          <span
            class="block rounded-full bg-surface-3 px-3 py-2 text-sm font-medium text-ink"
            aria-current="page"
          >{{ currentPageName }}</span>
        </li>
      </ul>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-1 hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-all duration-700 ease-out-expo hover:bg-white active:scale-[0.98] sm:block"
      >
        Résumé
      </a>

      <!-- Hamburger: two lines that rotate into a true X -->
      <button
        ref="toggleRef"
        type="button"
        class="relative ml-1 grid size-9 shrink-0 place-items-center rounded-full text-ink transition-all duration-700 ease-out-expo hover:bg-surface-2 active:scale-95 md:hidden"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
        @click="isOpen = !isOpen"
      >
        <span
          class="absolute h-px w-4 bg-current transition-transform duration-700 ease-out-expo"
          :class="isOpen ? 'rotate-45' : '-translate-y-1'"
        />
        <span
          class="absolute h-px w-4 bg-current transition-transform duration-700 ease-out-expo"
          :class="isOpen ? '-rotate-45' : 'translate-y-1'"
        />
      </button>
    </nav>

    <!-- Screen-filling mobile overlay -->
    <Transition
      enter-active-class="transition-opacity duration-500 ease-out-expo"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-300 ease-out-expo"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        id="mobile-menu"
        ref="menuRef"
        class="pointer-events-auto fixed inset-0 bg-black/80 backdrop-blur-3xl md:hidden"
      >
        <div class="flex h-dvh flex-col justify-center px-8">
          <ul class="space-y-2">
            <li
              v-for="(link, index) in mobileLinks"
              :key="link.href"
              class="overflow-hidden"
            >
              <a
                :href="link.href"
                class="block py-2 text-4xl font-semibold tracking-display text-ink-2 transition-all duration-700 ease-out-expo hover:text-ink"
                :class="isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'"
                :style="{ transitionDelay: `${80 + index * 60}ms` }"
                @click="handleMobileNavigate(link)"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-12 w-max rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-ink transition-all duration-700 ease-out-expo active:scale-[0.98]"
            :class="isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'"
            :style="{ transitionDelay: `${80 + mobileLinks.length * 60}ms` }"
            @click="isOpen = false"
          >
            Download résumé
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { NavLink } from '~/models/NavLink'

const route = useRoute()
const isOpen = ref(false)
const toggleRef = ref<HTMLElement>()
const menuRef = ref<HTMLElement>()

const sections: NavLink[] = [
  { id: 'work', name: 'Work' },
  { id: 'projects', name: 'Projects' },
  { id: 'about', name: 'About' },
  { id: 'toolkit', name: 'Toolkit' },
  { id: 'contact', name: 'Contact' },
]

const isHome = computed(() => route.path === '/')

const currentPageName = computed(() => {
  if (route.path.startsWith('/projects')) return 'Projects'
  if (route.path === '/privacy') return 'Privacy'
  if (route.path === '/terms') return 'Terms'
  return 'Page'
})

const mobileLinks = computed(() =>
  isHome.value
    ? sections.map(section => ({ name: section.name, href: `#${section.id}`, id: section.id }))
    : [{ name: 'Home', href: '/', id: null }],
)

// Scroll spy only runs on the home page, where the sections exist.
const { activeSection } = useSectionSpy(sections.map(section => section.id))

const goToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}

const handleMobileNavigate = (link: { href: string, id: string | null }) => {
  isOpen.value = false
  if (link.id) {
    // Waits for the overlay to release the scroll lock before scrolling.
    nextTick(() => goToSection(link.id!))
  }
  else {
    navigateTo(link.href)
  }
}

// Locks background scroll and restores focus to the toggle on close.
watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (!open) toggleRef.value?.focus()
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) isOpen.value = false
})

watch(() => route.path, () => {
  isOpen.value = false
})
</script>
