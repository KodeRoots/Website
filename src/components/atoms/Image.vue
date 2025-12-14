<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt: string
  fallback?: string
  class?: string
  loading?: 'lazy' | 'eager'
}

const props = withDefaults(defineProps<Props>(), {
  loading: 'lazy'
})

const imageSrc = ref(props.src)
const isLoaded = ref(false)
const hasError = ref(false)

const handleLoad = () => {
  isLoaded.value = true
}

const handleError = () => {
  hasError.value = true
  if (props.fallback) {
    imageSrc.value = props.fallback
  }
}
</script>

<template>
  <div class="relative overflow-hidden">
    <img
      v-if="!hasError || (hasError && !props.fallback)"
      :src="imageSrc"
      :alt="props.alt"
      :loading="props.loading"
      :class="[
        'transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-0',
        props.class
      ]"
      @load="handleLoad"
      @error="handleError"
    />
    <div
      v-if="!isLoaded && !hasError"
      class="absolute inset-0 flex items-center justify-center bg-muted animate-pulse"
    >
      <div class="w-8 h-8 bg-muted-foreground/20 rounded" />
    </div>
  </div>
</template>