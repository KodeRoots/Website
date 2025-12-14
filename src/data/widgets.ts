import type { WidgetProject } from '@/types'
import { widgetPlaceholder } from '@/lib/placeholder'

export const widgets: WidgetProject[] = [
  {
    id: 'weather-widget',
    title: 'Weather Widget',
    description: 'Beautiful weather information widget with forecasts and current conditions.',
    image: widgetPlaceholder('Weather'),
    github_url: 'https://github.com/koderoots/weather-widget',
    store_url: 'https://store.kde.org/p/1234567/',
    category: 'panel'
  },
  {
    id: 'system-tray-enhancer',
    title: 'System Tray Enhancer',
    description: 'Enhanced system tray with customizable icons and quick actions.',
    image: widgetPlaceholder('System Tray'),
    github_url: 'https://github.com/koderoots/system-tray-enhancer',
    store_url: 'https://store.kde.org/p/1234568/',
    category: 'panel'
  },
  {
    id: 'desktop-notes',
    title: 'Desktop Notes',
    description: 'Sticky notes widget for your desktop with rich text support.',
    image: widgetPlaceholder('Desktop Notes'),
    github_url: 'https://github.com/koderoots/desktop-notes',
    store_url: 'https://store.kde.org/p/1234569/',
    category: 'desktop'
  },
  {
    id: 'clock-widget',
    title: 'Advanced Clock',
    description: 'Feature-rich clock widget with multiple time zones and themes.',
    image: widgetPlaceholder('Clock'),
    github_url: 'https://github.com/koderoots/clock-widget',
    store_url: 'https://store.kde.org/p/1234570/',
    category: 'panel'
  },
  {
    id: 'media-controller',
    title: 'Media Controller',
    description: 'Unified media control widget supporting multiple music players.',
    image: widgetPlaceholder('Media Controller'),
    github_url: 'https://github.com/koderoots/media-controller',
    store_url: 'https://store.kde.org/p/1234571/',
    category: 'panel'
  }
]