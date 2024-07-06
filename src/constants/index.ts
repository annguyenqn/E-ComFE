import { INavItem } from '@/interfaces/dashboard.interface'

export const STATUS = {
  STATUS_FAKE: 121
}

/**
 * Minimum 8 characters, must include a capital and
 * lowercase letter and a number or a symbol
 */
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#\$%\^&\*\(\)_\+,\.\-]).{8,}$/
/* eslint-enable no-useless-escape */

export const navItems: INavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/dashboard/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Employee',
    href: '/dashboard/employee',
    icon: 'employee',
    label: 'employee'
  },
  {
    title: 'Profile',
    href: '/dashboard/profile',
    icon: 'profile',
    label: 'profile'
  },
  {
    title: 'Kanban',
    href: '/dashboard/kanban',
    icon: 'kanban',
    label: 'kanban'
  },
  {
    title: 'Logout',
    href: '#',
    icon: 'login',
    label: 'logout'
  }
]

export const CookieKey = {
  AUTH: 'Authenication',
  REFRESH: 'Refresh'
}

export const LocalStorageKey = {
  ACCESS_TOKEN: 'accessToken'
}

export const PagePath = {
  MAIN: '/dashboard',
  LOG_IN: '/signin',
  RESET_PASSWORD: 'reset-password',
  RECOVER: '/recover'
}

export const PublicPaths = [PagePath.LOG_IN, PagePath.RESET_PASSWORD, PagePath.RECOVER]
