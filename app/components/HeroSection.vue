<template>
  <section
    id="hero"
    class="relative isolate overflow-clip"
    aria-labelledby="hero-heading"
  >
    <!-- Blueprint: a dot grid and a live event bus behind everything -->
    <div
      class="dot-grid absolute inset-0 -z-10 opacity-60"
      data-intro="fade"
      :style="{ '--d': '200ms' }"
      aria-hidden="true"
    />
    <div
      class="scroll-parallax absolute inset-0 -z-10 hidden md:block"
      :style="{ '--p-from': '0%', '--p-to': '24%' }"
      aria-hidden="true"
    >
      <MotionSystemDiagram />
    </div>

    <div class="scroll-hero-exit shell relative flex min-h-dvh flex-col pt-24 pb-16 lg:pb-12">
      <!-- Top rail -->
      <div
        class="flex items-center justify-between gap-6 pt-12 text-sm text-ink-2"
        data-intro="fade"
        :style="{ '--d': '300ms' }"
      >
        <p class="flex items-center gap-3 font-medium">
          <span
            class="relative flex size-2"
            aria-hidden="true"
          >
            <span class="animate-ping-slow absolute inset-0 rounded-full bg-sage" />
            <span class="relative size-2 rounded-full bg-sage" />
          </span>
          Open to new opportunities
        </p>
        <p class="hidden font-mono text-xs tracking-wide text-ink-3 sm:block">
          Colombo, Sri Lanka · remote with New York
        </p>
      </div>

      <div class="relative mt-12 flex-1 lg:mt-16">
        <!-- Portrait. Behind the name, so the letters cross it. -->
        <div class="relative mb-12 ml-auto w-3/5 max-w-xs sm:w-1/2 lg:absolute lg:top-0 lg:right-0 lg:mb-0 lg:w-80 xl:right-16 xl:w-88">
          <!-- Flat coral plate, offset so the portrait casts a colour shadow -->
          <div
            class="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-coral transition-transform duration-700 ease-out-expo lg:translate-x-6 lg:translate-y-6"
            data-intro="fade"
            :style="{ '--d': '1400ms' }"
            aria-hidden="true"
          />
          <div
            v-tilt="5"
            class="relative transition-transform duration-700 ease-out-expo"
            data-intro="wipe"
            :style="{ '--d': '500ms' }"
          >
            <div class="aspect-4/5 overflow-hidden rounded-3xl bg-surface-2">
              <div
                class="scroll-parallax size-full"
                :style="{ '--p-from': '-6%', '--p-to': '6%', '--p-scale': '1.16' }"
              >
                <NuxtImg
                  src="/images/profile/nethsara.jpg"
                  alt="Nethsara Elvitigala"
                  width="400"
                  height="400"
                  sizes="sm:320px lg:360px"
                  class="size-full object-cover object-top grayscale transition-all duration-700 ease-out-expo hover:grayscale-0"
                  data-intro="settle"
                  :style="{ '--d': '500ms' }"
                  preload
                />
              </div>
            </div>
          </div>

          <!-- The one number worth a caption, counting up from the founding pair -->
          <dl
            class="absolute -bottom-8 -left-8 rounded-2xl border border-line bg-surface p-4 shadow-lift lg:-bottom-12 lg:-left-16"
            data-intro="drop"
            :style="{ '--d': '1600ms' }"
          >
            <dt class="sr-only">
              Engineers led at ZaVolt
            </dt>
            <dd class="flex items-baseline gap-2">
              <span
                v-count="{ from: 2, to: 10, duration: 2400 }"
                class="tabular text-4xl font-semibold tracking-display text-ink"
              >10</span>
              <span class="text-sm text-ink-2">engineers led</span>
            </dd>
            <dd class="mt-2 flex items-center gap-2 text-xs text-ink-3">
              <span
                class="flex gap-0.5"
                aria-hidden="true"
              >
                <span
                  v-for="signal in SIGNALS"
                  :key="signal"
                  class="size-1.5 rounded-full"
                  :style="{ backgroundColor: `var(--color-${signal})` }"
                />
              </span>
              <MotionLocalTime />
            </dd>
          </dl>
        </div>

        <!-- Name, crossing the portrait -->
        <h1
          id="hero-heading"
          class="relative text-6xl font-semibold tracking-display sm:text-8xl lg:text-9xl lg:mix-blend-difference"
        >
          <MotionSplitText
            text="Nethsara"
            trigger="load"
            :delay="200"
            :step="45"
            gradient
            hop
            class="block"
          />
          <MotionSplitText
            text="Elvitigala"
            trigger="load"
            :delay="560"
            :step="45"
            gradient
            hop
            class="block lg:pl-24"
          />
        </h1>

        <div class="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12">
          <div class="lg:col-span-6 lg:col-start-1">
            <p
              class="max-w-170 text-xl font-medium text-ink sm:text-2xl"
              data-intro
              :style="{ '--d': '1000ms' }"
            >
              Senior Software Engineer. Distributed systems and cloud native
              architecture.
            </p>

            <p
              class="measure mt-6 text-lg text-ink-2"
              data-intro
              :style="{ '--d': '1120ms' }"
            >
              I architect and build platforms that hold up under load: microservices,
              event driven workflows, and the cloud infrastructure underneath them.
              Currently at HeyMilo AI in New York. Before that I co-founded ZaVolt
              and grew its engineering team from two people to ten.
            </p>

            <div
              class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
              data-intro
              :style="{ '--d': '1240ms' }"
            >
              <BaseButton
                href="#work"
                :size="ButtonSize.LARGE"
                icon="ph:arrow-down"
                text="See what I have built"
                hue="saffron"
                @click.prevent="scrollTo('work')"
              />
              <BaseButton
                href="/resume.pdf"
                external
                :variant="ButtonVariant.TERTIARY"
                icon="ph:arrow-down"
                text="Résumé"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll cue: a line that draws down and away, forever -->
      <div
        class="mt-16 hidden h-12 w-px overflow-hidden bg-surface-3 lg:block"
        data-intro="fade"
        :style="{ '--d': '1800ms' }"
        aria-hidden="true"
      >
        <span class="animate-scroll-cue block size-full bg-ink-2" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ButtonSize } from '~/enums/ButtonSize'
import { ButtonVariant } from '~/enums/ButtonVariant'
import { SIGNALS } from '~/utils/signal'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
