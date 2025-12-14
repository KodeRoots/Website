<script setup lang="ts">
import type { Component } from 'vue'

interface Action {
  label: string
  icon?: Component
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  onClick?: () => void
  href?: string
  target?: string
}

interface Props {
  actions: Action[]
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="['flex gap-2 flex-wrap', props.class]">
    <component
      v-for="(action, index) in props.actions"
      :key="index"
      :is="action.href ? 'a' : 'button'"
      :href="action.href"
      :target="action.target"
      :variant="action.variant || 'default'"
      :size="action.size || 'default'"
      class="inline-flex items-center gap-1"
      @click="action.onClick"
    >
      <component
        v-if="action.icon"
        :is="action.icon"
        class="w-4 h-4"
      />
      {{ action.label }}
    </component>
  </div>
</template>