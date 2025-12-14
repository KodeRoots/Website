<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  description?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'KodeRoots',
  subtitle: 'Building the future of KDE Plasma',
  description: 'Open source applications and widgets that enhance your KDE Plasma desktop experience.'
})
</script>

<template>
  <section :class="['text-center py-16 px-4', props.class]">
    <div class="container mx-auto max-w-4xl">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        {{ props.title }}
      </h1>
      <h2 class="text-xl md:text-2xl text-muted-foreground mb-8">
        {{ props.subtitle }}
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        {{ props.description }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.bg-gradient-to-r {
  background: linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.8));
}
</style>