// Data exports
export { featuredApps, otherApps, allApps } from './apps'
export { widgets } from './widgets'
export { scripts } from './scripts'

// Future i18n structure placeholder
export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en'],
  translations: {
    en: {
      // Navigation
      nav: {
        home: 'Home',
        apps: 'Apps',
        widgets: 'Widgets',
        scripts: 'Scripts',
        about: 'About'
      },
      // Hero Section
      hero: {
        title: 'KodeRoots',
        subtitle: 'Building the future of KDE Plasma',
        description: 'Open source applications and widgets that enhance your KDE Plasma desktop experience.'
      },
      // Sections
      sections: {
        featuredApps: 'Featured Applications',
        otherApps: 'Other Applications',
        widgets: 'KDE Plasma Widgets',
        scripts: 'Scripts & Utilities',
        footer: {
          copyright: '© 2024 KodeRoots. All rights reserved.',
          contact: 'Contact'
        }
      }
    }
  }
}