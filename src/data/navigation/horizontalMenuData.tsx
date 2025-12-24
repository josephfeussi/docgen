// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes'

const horizontalMenuData = (): HorizontalMenuDataType[] => [
   {
    label: 'Home',
    href: '/home',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: 'ri-folder-3-line'
  },
  {
    label: 'About',
    href: '/about',
    icon: 'ri-information-line'
  }
  ,
]

export default horizontalMenuData
