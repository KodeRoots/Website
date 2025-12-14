<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { Sun, Moon } from 'lucide-vue-next'

const { resolvedTheme, toggleTheme } = useTheme()

const isDark = computed(() => resolvedTheme === 'dark')
</script>

<template>
  <button
    @click="toggleTheme"
    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background hover:bg-accent transition-colors"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Sun v-if="isDark" class="w-5 h-5" />
    <Moon v-else class="w-5 h-5" />
  </button>
</template>