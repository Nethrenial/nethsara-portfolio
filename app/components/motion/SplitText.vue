<template>
  <component
    :is="as"
    ref="root"
    class="split"
    :data-trigger="trigger"
    :style="rootStyle"
  >
    <span class="sr-only">{{ lines.join(' ') }}</span>
    <span aria-hidden="true">
      <span
        v-for="(line, lineIndex) in model"
        :key="lineIndex"
        :class="[forceLines ? 'block' : '', lineClass]"
      >
        <template
          v-for="(word, wordIndex) in line"
          :key="wordIndex"
        >
          <span class="split-mask">
            <template v-if="by === 'char'">
              <span
                v-for="piece in word"
                :key="piece.i"
                class="split-piece"
                :style="{ '--i': piece.i }"
              >
                <!-- Colour goes through a custom property so :hover can win -->
                <span
                  :class="[piece.color ? 'split-glyph' : '', hop ? 'hop' : '']"
                  :style="{ '--c': piece.color, '--hop-color': piece.hop }"
                >{{ piece.char }}</span>
              </span>
            </template>
            <span
              v-else
              class="split-piece"
              :style="{ '--i': word[0]?.i ?? 0 }"
            >{{ word.map(piece => piece.char).join('') }}</span>
          </span>
          <template v-if="wordIndex < line.length - 1">
            {{ ' ' }}
          </template>
        </template>
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
interface SplitTextProps {
  /** A single string, or explicit lines when the break is part of the design. */
  text: string | string[]
  as?: string
  by?: 'char' | 'word'
  /** `load` plays on first paint, `view` when scrolled into view. */
  trigger?: 'load' | 'view'
  delay?: number
  /** Milliseconds between consecutive pieces. */
  step?: number
  /**
   * Applies the hero heading gradient, #FFFFFF to #9B9B9B left to right, as
   * a per character blend. A clipped background cannot follow characters
   * that move independently, so the blend is resolved per glyph instead.
   */
  gradient?: boolean
  /** Letters hop and take a signal hue under the pointer. */
  hop?: boolean
  lineClass?: string
}

const props = withDefaults(defineProps<SplitTextProps>(), {
  as: 'span',
  by: 'char',
  trigger: 'view',
  delay: 0,
  step: undefined,
  gradient: false,
  hop: false,
  lineClass: '',
})

interface Piece {
  char: string
  i: number
  color?: string
  hop?: string
}

const lines = computed(() => (Array.isArray(props.text) ? props.text : [props.text]))
const forceLines = computed(() => Array.isArray(props.text))

const blend = (t: number): string => {
  const channel = Math.round(255 - (255 - 155) * t).toString(16).padStart(2, '0')
  return `#${channel}${channel}${channel}`
}

const model = computed((): Piece[][][] => {
  let index = 0
  return lines.value.map((line) => {
    const glyphCount = line.replace(/\s/g, '').length
    let glyph = 0
    return line.split(' ').map((word) => {
      const pieces = [...word].map((char) => {
        const t = glyphCount > 1 ? glyph / (glyphCount - 1) : 0
        const piece: Piece = {
          char,
          i: props.by === 'char' ? index : 0,
          color: props.gradient ? blend(t) : undefined,
          hop: props.hop ? `var(--color-${signalAt(glyph)})` : undefined,
        }
        glyph++
        if (props.by === 'char') index++
        return piece
      })
      if (props.by === 'word') {
        pieces.forEach(piece => (piece.i = index))
        index++
      }
      return pieces
    })
  })
})

const rootStyle = computed(() => ({
  '--d': `${props.delay}ms`,
  ...(props.step !== undefined ? { '--step': `${props.step}ms` } : {}),
}))

const root = ref<HTMLElement>()
let observer: IntersectionObserver | null = null
let doneTimer: number | undefined

const pieceCount = computed(() =>
  model.value.flat().reduce((sum, word) => sum + (props.by === 'char' ? word.length : 1), 0),
)

// Once every piece has landed the mask opens up, so a hopping letter is not
// clipped by the box it rose out of.
const scheduleDone = (el: HTMLElement, lead: number) => {
  const step = props.step ?? 40
  doneTimer = window.setTimeout(
    () => el.classList.add('is-done'),
    lead + pieceCount.value * step + 1400,
  )
}

onMounted(() => {
  const el = root.value
  if (!el) return

  if (props.trigger === 'load') {
    scheduleDone(el, props.delay)
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      el.classList.add('is-in')
      scheduleDone(el, 0)
      observer?.disconnect()
    },
    { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
  )
  observer.observe(el)
})

onUnmounted(() => {
  observer?.disconnect()
  window.clearTimeout(doneTimer)
})
</script>
