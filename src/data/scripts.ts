import type { ScriptProject } from '@/types'
import { scriptPlaceholder } from '@/lib/placeholder'

export const scripts: ScriptProject[] = [
  {
    id: 'system-cleanup',
    title: 'System Cleanup Script',
    description: 'Automated system cleanup script that removes temporary files, cache, and optimizes your KDE system.',
    image: scriptPlaceholder('System Cleanup'),
    github_url: 'https://github.com/koderoots/system-cleanup',
    category: 'system'
  },
  {
    id: 'plasma-backup',
    title: 'Plasma Configuration Backup',
    description: 'Easy backup and restore script for your KDE Plasma configuration and customizations.',
    image: scriptPlaceholder('Plasma Backup'),
    github_url: 'https://github.com/koderoots/plasma-backup',
    category: 'productivity'
  },
  {
    id: 'theme-installer',
    title: 'Theme Installer',
    description: 'One-click installer for popular KDE themes, icons, and wallpapers.',
    image: scriptPlaceholder('Theme Installer'),
    github_url: 'https://github.com/koderoots/theme-installer',
    category: 'automation'
  },
  {
    id: 'widget-updater',
    title: 'Widget Auto-Updater',
    description: 'Automated script to update all your KDE Plasma widgets to the latest versions.',
    image: scriptPlaceholder('Widget Updater'),
    github_url: 'https://github.com/koderoots/widget-updater',
    category: 'automation'
  },
  {
    id: 'productivity-tools',
    title: 'Productivity Utils',
    description: 'Collection of productivity utilities for KDE including window management and app launchers.',
    image: scriptPlaceholder('Productivity Tools'),
    github_url: 'https://github.com/koderoots/productivity-tools',
    category: 'productivity'
  }
]