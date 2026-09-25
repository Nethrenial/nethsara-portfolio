/**
 * The signal palette, in the order it is handed out. Components set the
 * chosen hue as a `--hue` custom property and style against it, so Tailwind
 * never has to see a dynamically built class name.
 */
export const SIGNALS = ['coral', 'saffron', 'sage', 'sky', 'rose'] as const

export type Signal = typeof SIGNALS[number]

export const signalAt = (index: number): Signal =>
  SIGNALS[((index % SIGNALS.length) + SIGNALS.length) % SIGNALS.length]!

/** Inline style that exposes a hue to a subtree as `--hue`. */
export const hueStyle = (signal: Signal): Record<string, string> => ({
  '--hue': `var(--color-${signal})`,
})
