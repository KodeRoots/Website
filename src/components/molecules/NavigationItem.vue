<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  label: string
  href?: string
  icon?: Component
  active?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  active: false
})

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    :class="[
      'inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors',
      props.active 
        ? 'bg-primary text-primary-foreground' 
        : 'text-muted-foreground hover:text-foreground hover:bg-accent',
      props.class
    ]"
    @click="!props.href && emit('click')"
  >
    <component
      v-if="props.icon"
      :is="props.icon"
      class="w-4 h-4"
    />
    {{ props.label }}
  </component>
</template>