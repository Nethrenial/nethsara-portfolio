import type { Project } from '~/models/Project'
import { ProjectStatus } from '~/enums/ProjectStatus'

/**
 * Every project, in display order. The home page shows the featured ones;
 * /projects shows all of them. Kept in one place so the two cannot drift.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Nethren UI',
    slug: 'nethren-ui',
    category: 'Open source',
    description: 'A component library for Vue and React. The Vue edition shipped several pre-release versions and became the UI layer for the SailingPen build, which is where most of its API decisions came from.',
    icon: 'ph:stack-duotone',
    technologies: ['Vue', 'TypeScript', 'SCSS', 'React'],
    demo: 'https://nethren-ui-vue-docs.pages.dev',
    github: 'https://github.com/Nethrenial/nethren-ui-vue',
    status: ProjectStatus.ACTIVE,
    featured: true,
  },
  {
    id: 2,
    title: 'BanhMi',
    slug: 'banh-mi-framework',
    category: 'Open source',
    description: 'A web framework for the Bun runtime, written from scratch. The API borrows from Express and diverges where Bun makes something cheaper. The published version handles routing, middleware and static serving.',
    icon: 'ph:cube-duotone',
    technologies: ['Bun', 'TypeScript'],
    demo: 'https://github.com/banh-mi-org/examples',
    github: 'https://github.com/banh-mi-org/framework',
    status: ProjectStatus.ACTIVE,
    featured: true,
  },
  {
    id: 3,
    title: 'AIESEC Opportunities Portal',
    slug: 'aiesec-portal',
    category: 'Client platform',
    description: 'The opportunity listing and admin dashboard for AIESEC in Colombo Central, with Firebase behind it and Algolia handling search.',
    icon: 'ph:compass-duotone',
    technologies: ['Vue', 'TypeScript', 'SCSS', 'Firebase', 'Algolia'],
    demo: 'https://opps.uoc.aiesec.lk/',
    github: 'https://github.com/Nethrenial/aiesec-opportunities',
    status: ProjectStatus.LIVE,
  },
  {
    id: 4,
    title: 'SailingPen',
    slug: 'sailingpen-lms',
    category: 'Client platform',
    description: 'A learning management and institute admin system for a private tuition provider, built around protecting paid video content. I led the project through my third year at university.',
    icon: 'ph:graduation-cap-duotone',
    technologies: ['Vue', 'NestJS', 'Prisma', 'PostgreSQL', 'TypeScript', 'Cloudflare Stream'],
    status: ProjectStatus.COMPLETED,
    featured: true,
  },
  {
    id: 5,
    title: 'B2B Wholesale Ordering',
    slug: 'ecommerce-b2b',
    category: 'Client platform',
    description: 'A sales portal and inventory system for wholesale food distribution, built as microfrontends over a Spring Boot service estate during my time at Sysco LABS.',
    icon: 'ph:shopping-cart-duotone',
    technologies: ['React', 'Single-SPA', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    status: ProjectStatus.COMPLETED,
  },
  {
    id: 6,
    title: 'AutoRealm',
    slug: 'autorealm',
    category: 'Client platform',
    description: 'A management system for a vehicle service centre, with a storefront and staff dashboards. Built on a PHP framework I wrote from scratch, which taught me why frameworks exist.',
    icon: 'ph:wrench-duotone',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    status: ProjectStatus.ARCHIVED,
  },
  {
    id: 7,
    title: 'Test Case Generator',
    slug: 'llm-test-generator',
    category: 'Tooling',
    description: 'A prototype that reads a requirement and drafts the test cases for it, built on Gemini and LangChain. Presented to Sysco global leadership in 2024.',
    icon: 'ph:flask-duotone',
    technologies: ['Python', 'LangChain', 'Gemini'],
    status: ProjectStatus.DEMO,
  },
]

export const projectCategories: string[] = ['All', 'Open source', 'Client platform', 'Tooling']

export const featuredProjects = projects.filter(project => project.featured)
