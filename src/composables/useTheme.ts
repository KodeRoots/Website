import { ref, onMounted, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const theme = ref<Theme>('system')
  const resolvedTheme = ref<'light' | 'dark'>('light')

  // Verificar preferência do sistema
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }

  // Aplicar tema ao DOM
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    const resolved = newTheme === 'system' ? getSystemTheme() : newTheme

    root.classList.remove('light', 'dark')
    root.classList.add(resolved)
    resolvedTheme.value = resolved
  }

  // Carregar tema salvo
  const loadTheme = () => {
    const saved = localStorage.getItem('koderoots-theme')
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      theme.value = saved as Theme
    } else {
      theme.value = 'system'
    }
    applyTheme(theme.value)
  }

  // Alternar tema
  const toggleTheme = () => {
    const currentResolved = theme.value === 'system' ? resolvedTheme.value : theme.value
    const newTheme: Theme = currentResolved === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Definir tema específico
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    localStorage.setItem('koderoots-theme', newTheme)
    applyTheme(newTheme)
  }

  // Detectar mudanças na preferência do sistema
  const setupSystemThemeListener = () => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', () => {
        if (theme.value === 'system') {
          applyTheme('system')
        }
      })
    }
  }

  // Inicializar
  onMounted(() => {
    loadTheme()
    setupSystemThemeListener()
  })

  // Watch para mudanças no tema
  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  })

  return {
    theme: theme.value,
    resolvedTheme: resolvedTheme.value,
    toggleTheme,
    setTheme,
    isDark: resolvedTheme.value === 'dark'
  }
}