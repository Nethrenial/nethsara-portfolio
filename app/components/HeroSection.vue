<template>
  <section
    id="hero"
    class="relative overflow-hidden border-b border-line"
  >
    <div class="mx-auto grid min-h-dvh max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-32 pb-24 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-40 lg:pb-32">
      <!-- Copy sits left and slightly above centre; the portrait hangs lower
           and bleeds right, so the composition is never symmetrical. -->
      <div class="lg:col-span-7 lg:-mt-16">
        <p class="flex items-center gap-2.5 text-sm font-medium text-ink-2">
          <span
            class="size-1.5 rounded-full bg-accent"
            aria-hidden="true"
          />
          Open to new opportunities
        </p>

        <h1
          id="hero-heading"
          class="mt-8 max-w-170 text-6xl font-semibold tracking-display text-display sm:text-7xl lg:text-8xl"
        >
          Nethsara Elvitigala
        </h1>

        <p class="mt-6 max-w-170 text-xl font-medium text-ink sm:text-2xl">
          Senior Software Engineer. Distributed systems and cloud native
          architecture.
        </p>

        <p class="measure mt-6 text-lg text-ink-2">
          I architect and build platforms that hold up under load: microservices,
          event driven workflows, and the cloud infrastructure underneath them.
          Currently at HeyMilo AI in New York. Before that I co-founded ZaVolt
          and grew its engineering team from two people to ten.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#work"
            class="rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-ink transition-all duration-700 ease-out-expo hover:bg-white active:scale-[0.98]"
            @click.prevent="scrollTo('work')"
          >
            See what I have built
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 text-base font-medium text-ink-2 transition-colors duration-200 ease-out-expo hover:text-ink"
          >
            Résumé
            <Icon
              name="ph:arrow-down"
              class="text-base transition-transform duration-700 ease-out-expo group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <!-- Portrait, offset and bleeding past the container on large screens -->
      <div class="lg:col-span-5 lg:mt-24 lg:-mr-16 xl:-mr-24">
        <div class="relative w-full max-w-sm lg:max-w-none">
          <NuxtImg
            src="/images/profile/nethsara.jpg"
            alt="Nethsara Elvitigala"
            width="640"
            height="800"
            sizes="sm:320px lg:480px"
            class="aspect-4/5 w-full rounded-3xl object-cover object-top grayscale transition-all duration-700 ease-out-expo hover:grayscale-0"
            preload
          />
          <!-- Facts read as a caption on the image rather than a stat row -->
          <dl class="absolute bottom-4 left-4 rounded-2xl border border-line bg-surface p-5 shadow-lift lg:-bottom-6 lg:-left-6">
            <div class="flex items-baseline gap-2">
              <dt class="sr-only">
                Engineers led at ZaVolt
              </dt>
              <dd class="tabular text-3xl font-semibold text-ink">
                10
              </dd>
              <span class="text-sm text-ink-2">engineers led</span>
            </div>
            <div class="mt-1 text-sm text-ink-3">
              Colombo, Sri Lanka · remote with New York
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
