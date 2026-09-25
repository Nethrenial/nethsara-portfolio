<template>
  <svg
    class="pointer-events-none absolute inset-0 size-full"
    viewBox="0 0 1440 960"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <!-- Edges: services wired to one event bus -->
    <g
      fill="none"
      stroke="var(--color-line)"
      stroke-width="1"
    >
      <path
        v-for="(edge, index) in edges"
        :id="`edge-${uid}-${index}`"
        :key="edge.d"
        :d="edge.d"
        pathLength="1"
        class="diagram-draw"
        :style="{ '--d': `${900 + index * 140}ms` }"
      />
    </g>

    <!-- Service nodes -->
    <g
      v-for="(node, index) in nodes"
      :key="`${node.x}-${node.y}`"
      data-intro="fade"
      :style="{ '--d': `${1300 + index * 90}ms` }"
    >
      <circle
        :cx="node.x"
        :cy="node.y"
        r="4"
        :fill="`var(--color-${node.hue})`"
        class="animate-ping-slow"
        :style="{ transformBox: 'fill-box', transformOrigin: 'center', animationDelay: `${index * 400}ms` }"
      />
      <rect
        :x="node.x - 8"
        :y="node.y - 8"
        width="16"
        height="16"
        rx="4"
        fill="var(--color-canvas)"
        stroke="var(--color-ink-3)"
      />
      <circle
        :cx="node.x"
        :cy="node.y"
        r="2.5"
        :fill="`var(--color-${node.hue})`"
      />
    </g>

    <!-- Packets travel each edge on the system curve. Rendered only once
         motion is confirmed, because SMIL ignores reduced motion. -->
    <g v-if="animate">
      <circle
        v-for="packet in packets"
        :key="packet.key"
        r="3"
        :fill="`var(--color-${packet.hue})`"
        opacity="0"
      >
        <animateMotion
          :dur="`${packet.dur}s`"
          :begin="`${packet.begin}s`"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.32 0.72 0 1"
        >
          <mpath :href="`#edge-${uid}-${packet.edge}`" />
        </animateMotion>
        <animate
          attributeName="opacity"
          :dur="`${packet.dur}s`"
          :begin="`${packet.begin}s`"
          repeatCount="indefinite"
          values="0;1;1;0"
          keyTimes="0;0.1;0.8;1"
        />
      </circle>
    </g>
  </svg>
</template>

<script setup lang="ts">
import type { Signal } from '~/utils/signal'

const uid = useId()

const nodes: { x: number, y: number, hue: Signal }[] = [
  { x: 880, y: 120, hue: 'coral' },
  { x: 1136, y: 120, hue: 'saffron' },
  { x: 1376, y: 312, hue: 'sage' },
  { x: 1376, y: 648, hue: 'sky' },
  { x: 1040, y: 888, hue: 'rose' },
  { x: 624, y: 888, hue: 'saffron' },
  { x: 208, y: 888, hue: 'sage' },
]

// Orthogonal routing with 16px radius corners, like an architecture drawing.
const edges = [
  { d: 'M 624 0 V 104 Q 624 120 640 120 H 880' },
  { d: 'M 880 120 H 1136' },
  { d: 'M 1136 120 H 1360 Q 1376 120 1376 136 V 312' },
  { d: 'M 1376 312 V 648' },
  { d: 'M 1376 648 V 872 Q 1376 888 1360 888 H 1040' },
  { d: 'M 1040 888 H 624' },
  { d: 'M 624 888 H 208' },
  { d: 'M 208 888 H 0' },
  { d: 'M 1440 648 H 1376' },
  { d: 'M 1136 120 V 0' },
]

const packets = [
  { edge: 0, dur: 3.2, begin: 2.2, hue: 'coral' },
  { edge: 1, dur: 2.4, begin: 3.0, hue: 'saffron' },
  { edge: 2, dur: 3.6, begin: 2.6, hue: 'sage' },
  { edge: 3, dur: 2.8, begin: 3.4, hue: 'sky' },
  { edge: 4, dur: 3.4, begin: 2.9, hue: 'rose' },
  { edge: 5, dur: 3.0, begin: 3.8, hue: 'saffron' },
  { edge: 6, dur: 3.8, begin: 2.4, hue: 'coral' },
  { edge: 7, dur: 2.2, begin: 4.2, hue: 'sage' },
  { edge: 8, dur: 2.6, begin: 3.1, hue: 'sky' },
  { edge: 3, dur: 2.8, begin: 4.8, hue: 'rose' },
  { edge: 6, dur: 3.8, begin: 4.4, hue: 'sky' },
].map((packet, index) => ({ ...packet, key: index }))

const animate = ref(false)

onMounted(() => {
  animate.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>
