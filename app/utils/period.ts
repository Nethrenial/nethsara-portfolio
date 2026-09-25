/**
 * Splits "February 2026 - Present" into its two ends, so the range can be
 * set with an arrow or a rule instead of a hyphen.
 */
export const periodParts = (period: string): [string, string] => {
  const [start = period, end = ''] = period.split(/\s+-\s+/)
  return [start, end]
}
