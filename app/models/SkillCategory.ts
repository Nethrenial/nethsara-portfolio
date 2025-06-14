import type { Skill } from './Skill'

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}
