import projectPlaceholder from '../assets/projects/project-placeholder.svg'

export type ProjectImage = {
  src: string
  alt?: string
  /** Defaults to contain so screenshots are never cropped. */
  fit?: 'contain' | 'cover'
  position?: string
}

export type Project = {
  number: string
  category: string
  title: string
  description: string
  technologies: string
  image: string
  heroImage?: ProjectImage
  galleryImages?: ProjectImage[]
  problem?: string
  solution?: string
  features?: string[]
  duration?: string
  teamSize?: string
  role?: string
  githubUrl?: string
  demoUrl?: string
  linkedinUrl?: string
  youtubeUrl?: string
  videoThumbnail?: string
  videoTitle?: string
  videoDuration?: string
}

// The single source of truth for both the carousel and details modal.
// Add verified details to each record as they become available. Missing values
// render as "To be added" / "Coming soon", never as invented project facts.
// See docs/project-details.md for a complete field and image example.
export const projects: Project[] = [
  {
    number: '01',
    category: 'Web App',
    title: 'Campus Noticeboard Automation',
    description: 'Automating campus notices with a modern web pipeline.',
    technologies: 'React, Node.js, Express, MongoDB',
    image: projectPlaceholder,
  },
  {
    number: '02',
    category: 'Machine Learning',
    title: 'Image Classification Model',
    description: 'A deep learning model for real-world image classification.',
    technologies: 'Python, TensorFlow, OpenCV',
    image: projectPlaceholder,
  },
  {
    number: '03',
    category: 'Design',
    title: 'Restaurant Website',
    description: 'A modern and responsive website for a restaurant.',
    technologies: 'HTML, CSS, JavaScript, GSAP, Figma',
    image: projectPlaceholder,
  },
  {
    number: '04',
    category: 'Full Stack',
    title: 'Personal Finance Tracker',
    description: 'A web application for managing finances effectively.',
    technologies: 'React, Node.js, Express, PostgreSQL',
    image: projectPlaceholder,
  },
  {
    number: '05',
    category: 'Automation',
    title: 'Workflow Automation Suite',
    description: 'Streamlining repetitive tasks through practical automation.',
    technologies: 'Python, APIs, Process Automation',
    image: projectPlaceholder,
  },
  {
    number: '06',
    category: 'AI / ML',
    title: 'Travel Companion',
    description: 'A smart travel planner with AI-powered recommendations.',
    technologies: 'React, Python, Machine Learning',
    image: projectPlaceholder,
  },
]

export { projectPlaceholder }
