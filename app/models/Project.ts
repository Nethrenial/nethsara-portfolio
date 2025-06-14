export interface Project {
  id: number
  title: string
  slug: string
  category: string
  description: string
  icon: string
  image: string
  technologies: string[]
  demo: string
  github: string
  status: string
  featured?: boolean
  year?: string | number
}
