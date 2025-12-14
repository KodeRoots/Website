export interface BaseProject {
  id: string
  title: string
  description: string
  image?: string
  github_url: string
}

export interface AppProject extends BaseProject {
  install_url: string
  category?: 'productivity' | 'development' | 'entertainment' | 'system'
  featured?: boolean
}

export interface WidgetProject extends BaseProject {
  store_url: string
  category?: 'system' | 'panel' | 'desktop' | 'widget'
}

export interface ScriptProject {
  id: string
  title: string
  description: string
  image?: string
  github_url: string
  category?: 'automation' | 'productivity' | 'system' | 'development'
}

export type ProjectCategory = AppProject['category'] | WidgetProject['category'] | ScriptProject['category']

export interface SocialLink {
  label: string
  href: string
  icon: string
}