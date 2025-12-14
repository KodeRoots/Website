<script setup lang="ts">
interface Props {
  title: string
  description?: string
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="['space-y-1', props.class]">
    <h3 class="text-lg font-semibold leading-none tracking-tight">
      {{ props.title }}
    </h3>
    <p 
      v-if="props.description"
      class="text-sm text-muted-foreground"
    >
      {{ props.description }}
    </p>
  </div>
</template>