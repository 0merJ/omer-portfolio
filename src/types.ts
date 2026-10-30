export type MediaKind = 'image' | 'video' | 'diagram'

export interface ProjectMedia {
  src: string
  alt: string
  caption: string
  kind?: MediaKind
  poster?: string
}

export interface Project {
  id: string
  number: string
  title: string
  type: string
  status: 'Completed' | 'In progress'
  institution: string
  summary: string
  role: string
  technologies: string[]
  contributions: string[]
  media: ProjectMedia[]
  links?: { label: string; href: string }[]
  metric?: { value: string; label: string }
  caseStudy?: { label: string; text: string }[]
}
