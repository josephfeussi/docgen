export type Project = {
  id: string
  title: string
  description?: string
  href?: string
  image?: string
  organisation?: string
  amount?: string
  contact?: string
  [key: string]: any
}

const sampleProjects: Project[] = [
  {
    id: 'p1',
    title: 'Website Redesign',
    description: 'Redesign company website and improve accessibility.',
    href: '/projects/website-redesign',
    image: '/images/illustrations/characters/1.png'
  },
  {
    id: 'p2',
    title: 'Mobile App',
    description: 'Build new mobile app for iOS and Android.',
    href: '/projects/mobile-app',
    image: '/images/illustrations/characters/2.png'
  },
  {
    id: 'p3',
    title: 'Internal Dashboard',
    description: 'Create internal analytics dashboard for teams.',
    href: '/projects/internal-dashboard',
    image: '/images/illustrations/characters/3.png'
  },
  {
    id: 'p4',
    title: 'Marketing Campaign',
    description: 'Launch Q2 marketing campaign.',
    href: '/projects/marketing-campaign',
    image: '/images/illustrations/characters/4.png'
  },
  {
    id: 'p5',
    title: 'Docs Migration',
    description: 'Migrate docs to new platform.',
    href: '/projects/docs-migration',
    image: '/images/illustrations/characters/5.png'
  },
  {
    id: 'p6',
    title: 'Security Audit',
    description: 'Conduct annual security audit.',
    href: '/projects/security-audit',
    image: '/images/illustrations/characters/6.png'
  }
]

const STORAGE_KEY = 'projects'

export function loadProjects(): Project[] {
  if (typeof window === 'undefined') return []

  try {
    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) return []
    const parsed = JSON.parse(raw)

    if (!Array.isArray(parsed)) return []

    return parsed
  } catch (e) {
    return []
  }
}

export function saveProject(project: Partial<Project>): Project {
  if (typeof window === 'undefined') throw new Error('saveProject must be called on client')
  const raw = localStorage.getItem(STORAGE_KEY)
  let arr: Project[] = []

  try {
    arr = raw ? JSON.parse(raw) : []
  } catch (e) {
    arr = []
  }

  const id = project.id ?? `p_${Date.now()}`

  const existing = arr.find(p => p.id === id) || {}

  const full: Project = {
    ...existing,
    ...project,
    id,
    href: project.href ?? existing.href ?? `/projects/${id}`
  } as Project

  const idx = arr.findIndex(p => p.id === id)

  if (idx >= 0) arr[idx] = full
  else arr.push(full)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))

  return full
}

export function getProjectById(id: string): Project | undefined {
  const arr = loadProjects()

  return arr.find(p => p.id === id)
}

export { sampleProjects }

export function deleteProject(id: string): boolean {
  if (typeof window === 'undefined') throw new Error('deleteProject must be called on client')

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const arr: Project[] = raw ? JSON.parse(raw) : []
    const newArr = arr.filter(p => p.id !== id)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newArr))

    return true
  } catch (e) {
    return false
  }
}
