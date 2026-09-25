<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-nav">
    <!-- relative + z-raised keeps the island, and its close button, above
         the mobile overlay that follows it in the DOM -->
    <nav
      data-intro="drop"
      class="glass pointer-events-auto relative z-raised mx-auto mt-6 flex w-max max-w-[calc(100vw-2rem)] items-center gap-1 overflow-hidden rounded-full p-1 pl-4"
      :style="{ '--d': '1100ms', ...hueStyle(brandHue) }"
      aria-label="Main"
    >
      <NuxtLink
        to="/"
        class="group mr-2 flex shrink-0 items-baseline text-sm font-semibold text-ink"
        aria-label="Nethsara Elvitigala, home"
      >
        <MotionRollText text="Nethsara" />
        <span
          class="text-(--hue) transition-colors duration-700 ease-out-expo"
          aria-hidden="true"
        >.</span>
      </NuxtLink>

      <!-- Section links, home page only -->
      <ul
        v-if="isHome"
        ref="listRef"
        class="relative hidden items-center md:flex"
        @pointerleave="hovered = null"
      >
        <!-- One indicator for the whole list, clipped to the target link -->
        <span
          class="absolute inset-0 rounded-full transition-all duration-700 ease-out-expo"
          :style="indicatorStyle"
          aria-hidden="true"
        />
        <li
          v-for="link in sections"
          :key="link.id"
          class="relative"
        >
          <a
            :ref="el => setLinkRef(link.id, el as HTMLElement | null)"
            :href="`#${link.id}`"
            class="group block rounded-full px-3 py-2 text-sm font-medium transition-colors duration-500 ease-out-expo"
            :class="target === link.id ? 'text-accent-ink' : 'text-ink-2 hover:text-ink'"
            :aria-current="activeSection === link.id ? 'true' : undefined"
            @pointerenter="hovered = link.id"
            @focus="hovered = link.id"
            @blur="hovered = null"
            @click.prevent="goToSection(link.id)"
          >
            <MotionRollText :text="link.name" />
          </a>
        </li>
      </ul>

      <!-- Route links, everywhere else -->
      <ul
        v-else
        class="hidden items-center gap-1 md:flex"
      >
        <li>
          <NuxtLink
            to="/"
            class="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-ink-2 transition-all duration-700 ease-out-expo hover:bg-surface-2 hover:text-ink active:scale-[0.98]"
          >
            <Icon
              name="ph:arrow-left"
              class="text-sm transition-transform duration-700 ease-out-expo group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            <MotionRollText text="Home" />
          </NuxtLink>
        </li>
        <li>
          <span
            class="block rounded-full bg-(--hue) px-3 py-2 text-sm font-medium text-accent-ink"
            aria-current="page"
          >{{ currentPageName }}</span>
        </li>
      </ul>

      <BaseButton
        href="/resume.pdf"
        external
        :size="ButtonSize.SMALL"
        text="Résumé"
        :hue="brandHue"
        class="ml-1 hidden sm:inline-flex"
      />

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

      <!-- Read progress, drawn by the page's own scroll timeline -->
      <span
        class="scroll-progress absolute inset-x-4 bottom-0 hidden h-px bg-(--hue) opacity-70 transition-colors duration-700 ease-out-expo supports-[animation-timeline:scroll()]:block motion-reduce:hidden"
        aria-hidden="true"
      />
    </nav>

    <!-- Screen filling mobile overlay -->
    <Transition
      enter-active-class="transition-all duration-700 ease-out-expo"
      enter-from-class="opacity-0"
      leave-active-class="transition-all duration-500 ease-out-expo"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        id="mobile-menu"
        class="pointer-events-auto fixed inset-0 bg-black/80 backdrop-blur-3xl md:hidden"
      >
        <div class="flex h-dvh flex-col justify-between px-8 pt-32 pb-12">
          <ul class="space-y-2">
            <li
              v-for="(link, index) in mobileLinks"
              :key="link.href"
              class="overflow-hidden"
              :style="hueStyle(signalAt(index))"
            >
              <a
                :href="link.href"
                class="group flex items-baseline gap-4 py-2 text-5xl font-semibold tracking-display text-ink transition-all duration-700 ease-out-expo"
                :class="revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'"
                :style="{ transitionDelay: `${120 + index * 70}ms` }"
                @click.prevent="handleMobileNavigate(link)"
              >
                <span class="tabular font-mono text-xs font-medium tracking-normal text-(--hue)">
                  0{{ index + 1 }}
                </span>
                {{ link.name }}
              </a>
            </li>
          </ul>

          <div
            class="flex items-end justify-between gap-6 transition-all duration-700 ease-out-expo"
            :class="revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'"
            :style="{ transitionDelay: `${120 + mobileLinks.length * 70}ms` }"
          >
            <BaseButton
              href="/resume.pdf"
              external
              :size="ButtonSize.LARGE"
              icon="ph:arrow-down"
              text="Download résumé"
            />
            <MotionLocalTime class="text-sm text-ink-2" />
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import type { NavLink } from '~/models/NavLink'
import { ButtonSize } from '~/enums/ButtonSize'
import type { Signal } from '~/utils/signal'

const route = useRoute()
const isOpen = ref(false)
const revealed = ref(false)
const toggleRef = ref<HTMLElement>()
const listRef = ref<HTMLElement>()
const hovered = ref<string | null>(null)

const sections: (NavLink & { hue: Signal })[] = [
  { id: 'work', name: 'Work', hue: 'coral' },
  { id: 'projects', name: 'Projects', hue: 'saffron' },
  { id: 'about', name: 'About', hue: 'sage' },
  { id: 'toolkit', name: 'Toolkit', hue: 'sky' },
  { id: 'contact', name: 'Contact', hue: 'rose' },
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

// Scroll spy only finds sections on the home page, where they exist.
const { activeSection } = useSectionSpy(sections.map(section => section.id))

const target = computed(() => hovered.value ?? activeSection.value)

const hueFor = (id: string | null | undefined): Signal | null =>
  sections.find(section => section.id === id)?.hue ?? null

// The brand full stop wears the colour of wherever the reader is.
const brandHue = computed((): Signal => {
  if (!isHome.value) return route.path.startsWith('/projects') ? 'saffron' : 'sage'
  return hueFor(activeSection.value) ?? 'saffron'
})

// Indicator geometry, measured from the links themselves
const linkRefs = new Map<string, HTMLElement>()
const setLinkRef = (id: string, el: HTMLElement | null) => {
  if (el) linkRefs.set(id, el)
  else linkRefs.delete(id)
}

const listWidth = ref(0)
const geometry = ref<Record<string, { left: number, width: number }>>({})

const measure = () => {
  if (!listRef.value) return
  // Layout offsets, not rects, so the island's entrance transform does not
  // skew the numbers. Each link sits in its own positioned <li>, so the
  // offset that matters is the <li>'s.
  listWidth.value = listRef.value.offsetWidth
  const next: Record<string, { left: number, width: number }> = {}
  for (const [id, el] of linkRefs) {
    const item = el.parentElement ?? el
    next[id] = { left: item.offsetLeft + el.offsetLeft, width: el.offsetWidth }
  }
  geometry.value = next
}

useResizeObserver(listRef, measure)
onMounted(() => document.fonts?.ready.then(measure))

const indicatorStyle = computed(() => {
  const box = target.value ? geometry.value[target.value] : undefined
  const hue = hueFor(target.value)
  if (!box || !hue) {
    return { clipPath: 'inset(0 50% 0 50% round 9999px)', opacity: 0 }
  }
  const right = listWidth.value - box.left - box.width
  return {
    clipPath: `inset(0 ${right}px 0 ${box.left}px round 9999px)`,
    backgroundColor: `var(--color-${hue})`,
    opacity: 1,
  }
})

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

// Locks background scroll, staggers the links in, and restores focus to the
// toggle on close.
watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    requestAnimationFrame(() => requestAnimationFrame(() => (revealed.value = true)))
  }
  else {
    revealed.value = false
    toggleRef.value?.focus()
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) isOpen.value = false
})

watch(() => route.path, () => {
  isOpen.value = false
  nextTick(measure)
})
</script>
