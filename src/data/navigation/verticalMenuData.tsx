// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'Projects',
    href: '/projects',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'About',
    href: '/about',
    icon: 'ri-information-line'
  },
  {
    label: 'Test',
    href: '/test',
    icon: 'ri-information-line'
  }
]

export default verticalMenuData
