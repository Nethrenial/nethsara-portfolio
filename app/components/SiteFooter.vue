<template>
  <footer class="relative overflow-clip border-t border-line bg-canvas">
    <div class="shell pt-24 pb-8">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-8">
          <p class="max-w-3xl text-4xl font-semibold tracking-display text-ink lg:text-6xl">
            <MotionSplitText
              text="Open to senior engineering and architecture roles."
              by="word"
              :step="50"
            />
          </p>
          <a
            v-reveal="{ delay: 300 }"
            href="mailto:nethsarasandeepaelvitigala@gmail.com"
            class="group mt-8 inline-flex items-center gap-3 text-lg font-medium text-ink-2 transition-colors duration-500 ease-out-expo hover:text-ink sm:text-xl"
          >
            <MotionRollText text="nethsarasandeepaelvitigala@gmail.com" />
            <span class="relative grid size-8 place-items-center overflow-hidden rounded-full bg-rose text-accent-ink transition-transform duration-700 ease-out-expo group-hover:scale-110 group-hover:rotate-45">
              <Icon
                name="ph:arrow-up-right"
                class="size-4"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>

        <ul
          v-reveal="{ delay: 400 }"
          class="flex gap-4 lg:col-span-4 lg:justify-end"
        >
          <li
            v-for="(social, index) in socials"
            :key="social.name"
          >
            <a
              v-magnetic="0.4"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative isolate grid size-14 place-items-center overflow-hidden rounded-2xl border border-line text-ink-2 transition-all duration-700 ease-out-expo hover:border-transparent hover:text-accent-ink active:scale-95"
              :style="hueStyle(signalAt(index + 2))"
              :aria-label="`${social.name} (opens in a new tab)`"
            >
              <span
                class="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-(--hue) transition-transform duration-700 ease-out-expo group-hover:scale-y-100"
                aria-hidden="true"
              />
              <Icon
                :name="social.icon"
                data-magnetic-inner
                class="size-6"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>

      <!-- Wordmark: an outline, then five bands of warm white slide in one
           after another as the page runs out, and close into a solid word.
           The bands are cut per letter so each letter can still hop and
           take a hue of its own under the pointer. Glyph positions are Geist
           SemiBold at this size, measured once. -->
      <svg
        class="mt-24 block w-full overflow-visible"
        viewBox="-4 36 870 176"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath
            v-for="(band, bandIndex) in bands"
            :id="`band-${uid}-${bandIndex}`"
            :key="bandIndex"
          >
            <rect
              x="-20"
              :y="band.y"
              width="910"
              :height="band.height"
            />
          </clipPath>
        </defs>

        <g
          v-for="(letter, index) in wordmark"
          :key="index"
          class="wordmark-letter"
          :style="{ '--hop-color': `var(--color-${signalAt(index)})` }"
        >
          <!-- Hit area, so the whole cell responds, not only the ink -->
          <rect
            :x="letter.x"
            y="36"
            :width="letter.width"
            height="176"
            fill="transparent"
          />
          <text
            :x="letter.x"
            y="200"
            font-size="210"
            class="fill-none stroke-line font-semibold"
            stroke-width="1"
          >{{ letter.char }}</text>
          <g
            v-for="(band, bandIndex) in bands"
            :key="bandIndex"
            :clip-path="`url(#band-${uid}-${bandIndex})`"
          >
            <!-- Bottom band lands first -->
            <text
              :x="letter.x"
              y="200"
              font-size="210"
              class="scroll-band wordmark-fill font-semibold"
              :style="{ '--i': bands.length - 1 - bandIndex }"
            >{{ letter.char }}</text>
          </g>
        </g>
      </svg>

      <div class="mt-12 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <p class="tabular">
          © {{ year }} Nethsara Elvitigala. Colombo, Sri Lanka.
        </p>
        <MotionLocalTime />
        <nav
          class="flex gap-6"
          aria-label="Legal"
        >
          <NuxtLink
            to="/privacy"
            class="group transition-colors duration-200 ease-out-expo hover:text-ink"
          >
            <MotionRollText text="Privacy" />
          </NuxtLink>
          <NuxtLink
            to="/terms"
            class="group transition-colors duration-200 ease-out-expo hover:text-ink"
          >
            <MotionRollText text="Terms" />
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const uid = useId()
const year = new Date().getFullYear()

// Start and end of each glyph in "Nethsara", Geist SemiBold at 210 units
// with -8 tracking.
const starts = [0, 146.9, 257.2, 336.2, 451.7, 559.5, 673, 743.4]
const ends = [147, 257.2, 336.2, 451.7, 559.6, 673, 743.4, 857.2]
const wordmark = [...'Nethsara'].map((char, index) => ({
  char,
  x: starts[index]!,
  width: ends[index]! - starts[index]!,
}))

// Five equal bands across the cap height (baseline 200, cap top near 50).
// The outer two run past the glyphs to catch overshoot, and each overlaps
// its neighbours by two units so antialiased clip edges never leave a seam
// once they have closed.
const bands = [
  { y: 20, height: 62 },
  { y: 78, height: 34 },
  { y: 108, height: 34 },
  { y: 138, height: 34 },
  { y: 168, height: 47 },
]

const socials = [
  { name: 'GitHub', href: 'https://github.com/Nethrenial', icon: 'ph:github-logo' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nethsara-elvitigala/', icon: 'ph:linkedin-logo' },
  { name: 'Email', href: 'mailto:nethsarasandeepaelvitigala@gmail.com', icon: 'ph:envelope-simple' },
]
</script>
