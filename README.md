# KodeRoots Website

A modern, responsive website for the KodeRoots organization showcasing KDE Plasma applications, widgets, and scripts.

## ✨ Features

### 🎨 Design System (Atomic Design)
- **Atoms**: Button, Card, Badge, Icon, Image components
- **Molecules**: CardContent, CardActions, NavigationItem, SocialLinks
- **Organisms**: HeroSection, FeaturedAppsCarousel, OtherAppsGrid, WidgetsSection, ScriptsUtilsSection, FooterSection
- **Templates**: MainLayout, CardGridLayout
- **Pages**: HomePage with complete integration

### 🌓 Dark Mode
- Complete dark/light theme system
- Auto-detect system preference
- Smooth transitions (0.3s)
- Persistent user preference (localStorage)
- Theme toggle in header

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: <768px (mobile), 768-1024px (tablet), >1024px (desktop)
- Adaptive grid layouts (1-4 columns)
- Mobile navigation menu

### 🚀 Performance Optimized
- Vue 3 + TypeScript + Vite
- Code splitting with lazy loading
- Build size: **86.28 kB** (33.53 kB gzipped)
- CSS: **21.08 kB** (4.72 kB gzipped)

## 🛠️ Technology Stack

- **Frontend**: Vue 3 (Composition API)
- **Styling**: Tailwind CSS + ShadCN Vue
- **Type Safety**: TypeScript (strict mode)
- **Routing**: Vue Router 4
- **Icons**: Lucide Vue
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 🎯 Content Structure

### Featured Applications (3)
- **Kontainer** - Container management for KDE Plasma
- **Unify** - Unified theming system
- **Klaro** - Privacy-focused consent management

### Other Applications (4)
- **Plasma Themes Collection** - KDE Plasma themes and tools
- **Widget Development Tools** - Essential widget dev utilities
- **System Monitor** - Advanced monitoring widgets
- **Productivity Suite** - Collection of productivity widgets

### KDE Plasma Widgets (5)
- **Weather Widget** - Weather information with forecasts
- **System Tray Enhancer** - Enhanced system tray
- **Desktop Notes** - Sticky notes widget
- **Advanced Clock** - Multi-timezone clock
- **Media Controller** - Unified media control

### Scripts & Utilities (5)
- **System Cleanup Script** - Automated system cleanup
- **Plasma Configuration Backup** - Backup/restore KDE config
- **Theme Installer** - One-click theme installer
- **Widget Auto-Updater** - Automated widget updates
- **Productivity Utils** - Window management utilities

## 🖼️ Visual Assets

### Placeholder Images
- **Apps**: 400x300px with blue background (#0EA5E9)
- **Widgets**: 300x200px with green background (#10B981)
- **Scripts**: 300x200px with purple background (#8B5CF6)
- **Source**: https://placehold.co/

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (preferred) or npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd koderoots-website

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic UI components
│   ├── molecules/       # Combined atoms
│   ├── organisms/       # Complete sections
│   ├── templates/       # Page layouts
│   └── ui/              # ShadCN Vue components
├── composables/         # Vue composables (useTheme, etc.)
├── data/                # Static content data
├── lib/                 # Utilities and helpers
├── pages/               # Route pages
├── router/              # Vue Router configuration
├── types/               # TypeScript interfaces
└── styles/              # Global styles
```

## 🎨 Color Scheme

### Primary Colors
- **Primary**: Green (#22C55E) - KodeRoots brand color
- **Background**: Light/Dark adaptive
- **Text**: High contrast for accessibility

### Semantic Colors
- **Success**: Green variants
- **Warning**: Yellow variants  
- **Error**: Red variants
- **Info**: Blue variants

## 🌐 Links & Resources

- **GitHub Organization**: https://github.com/koderoots
- **Flathub**: https://flathub.org/
- **KDE Store**: https://store.kde.org/
- **Contact**: contact@koderoots.org

## 📊 Build Statistics

- **Total Components**: 25+ Vue components
- **Bundle Size**: 86.28 kB (33.53 kB gzipped)
- **CSS Size**: 21.08 kB (4.72 kB gzipped)
- **HomePage Chunk**: 43.42 kB (14.41 kB gzipped)
- **Type Safety**: 100% TypeScript coverage

## 🔄 Future Enhancements

### Phase 8: Advanced Optimizations
- Skeleton loaders for better UX
- Error boundaries for fault tolerance
- Performance monitoring (Lighthouse CI)

### Phase 9: Internationalization (i18n)
- Vue I18n setup
- Multi-language support
- Translation management

### Phase 10: Production Deployment
- Vercel/Netlify configuration
- SEO optimization
- Meta tags and social sharing

---

**Status**: ✅ **Production Ready** - 95% Complete  
**Last Updated**: December 2024  
**Version**: 1.0.0