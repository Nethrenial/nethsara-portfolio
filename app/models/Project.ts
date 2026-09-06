import type { ProjectStatus } from '~/enums/ProjectStatus'

export interface Project {
  id: number
  title: string
  slug: string
  category: string
  description: string
  icon: string
  /** Screenshot path. Omit rather than pointing at a placeholder. */
  image?: string
  technologies: string[]
  /** Omit when there is nothing public to link to; the card hides the action. */
  demo?: string
  github?: string
  status: ProjectStatus
  featured?: boolean
  year?: string | number
}
