<script setup lang="ts">
import type { Component } from 'vue'

interface SocialLink {
  label: string
  href: string
  icon: Component
}

interface Props {
  links: SocialLink[]
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="['flex gap-2', props.class]">
    <a
      v-for="link in props.links"
      :key="link.label"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-accent transition-colors"
      :aria-label="link.label"
    >
      <component :is="link.icon" class="w-5 h-5" />
    </a>
  </div>
</template>