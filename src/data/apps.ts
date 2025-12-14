import type { AppProject } from '@/types'
import { appPlaceholder } from '@/lib/placeholder'

export const featuredApps: AppProject[] = [
  {
    id: 'kontainer',
    title: 'Kontainer',
    description: 'A modern container management application for KDE Plasma that simplifies Docker and Podman operations with an intuitive interface.',
    image: appPlaceholder('Kontainer'),
    github_url: 'https://github.com/koderoots/kontainer',
    install_url: 'https://flathub.org/apps/koderoots/kontainer',
    category: 'development',
    featured: true
  },
  {
    id: 'unify',
    title: 'Unify',
    description: 'A unified theming system that brings consistency across your KDE Plasma desktop environment.',
    image: appPlaceholder('Unify'),
    github_url: 'https://github.com/koderoots/unify',
    install_url: 'https://flathub.org/apps/koderoots/unify',
    category: 'productivity',
    featured: true
  },
  {
    id: 'klaro',
    title: 'Klaro',
    description: 'An elegant privacy-focused consent management solution that helps websites comply with privacy regulations.',
    image: appPlaceholder('Klaro'),
    github_url: 'https://github.com/kiprotect/klaro',
    install_url: 'https://flathub.org/apps/koderoots/klaro',
    category: 'productivity',
    featured: true
  }
]

export const otherApps: AppProject[] = [
  {
    id: 'plasma-themes',
    title: 'Plasma Themes Collection',
    description: 'A curated collection of beautiful KDE Plasma themes and customization tools.',
    image: appPlaceholder('Plasma Themes'),
    github_url: 'https://github.com/koderoots/plasma-themes',
    install_url: 'https://store.kde.org',
    category: 'productivity'
  },
  {
    id: 'widget-tools',
    title: 'Widget Development Tools',
    description: 'Essential tools and utilities for KDE Plasma widget development.',
    image: appPlaceholder('Widget Tools'),
    github_url: 'https://github.com/koderoots/widget-tools',
    install_url: 'https://flathub.org/apps/koderoots/widget-tools',
    category: 'development'
  },
  {
    id: 'system-monitor',
    title: 'System Monitor',
    description: 'Advanced system monitoring widgets with real-time metrics and beautiful visualizations.',
    image: appPlaceholder('System Monitor'),
    github_url: 'https://github.com/koderoots/system-monitor',
    install_url: 'https://store.kde.org',
    category: 'system'
  },
  {
    id: 'productivity-suite',
    title: 'Productivity Suite',
    description: 'A collection of productivity widgets to enhance your KDE Plasma workflow.',
    image: appPlaceholder('Productivity Suite'),
    github_url: 'https://github.com/koderoots/productivity-suite',
    install_url: 'https://store.kde.org',
    category: 'productivity'
  }
]

export const allApps = [...featuredApps, ...otherApps]