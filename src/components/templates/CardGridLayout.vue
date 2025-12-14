<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Grid Layout',
  subtitle: 'Responsive grid for displaying content'
})
</script>

<template>
  <div :class="['container mx-auto px-4 py-8', props.class]">
    <!-- Layout Header -->
    <div v-if="props.title || props.subtitle" class="text-center mb-12">
      <h1 v-if="props.title" class="text-4xl font-bold mb-4">
        {{ props.title }}
      </h1>
      <p v-if="props.subtitle" class="text-lg text-muted-foreground">
        {{ props.subtitle }}
      </p>
    </div>

    <!-- Grid Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <slot />
    </div>
  </div>
</template>