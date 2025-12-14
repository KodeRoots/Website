<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  icon: Component
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClasses = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4', 
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
}
</script>

<template>
  <component
    :is="icon"
    :class="[sizeClasses[props.size], props.class]"
  />
</template>