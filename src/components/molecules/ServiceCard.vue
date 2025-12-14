<script setup lang="ts">
import Button from '../atoms/Button.vue'
import Card from '../atoms/Card.vue'

interface Props {
  title: string
  description: string
  image: string
  sourceCodeUrl: string
  installationUrl: string
  direction?: 'row' | 'column'
  distributor?: 'flathub' | 'kde'
}

withDefaults(defineProps<Props>(), {
  direction: 'row',
  distributor: undefined,
})
</script>

<template>
  <Card :direction="direction">
    <img class="border-2 border-black" :src="image" :alt="`${title} image`" />

    <div class="flex flex-1 flex-col gap-4">
      <h3 class="text-xl font-semibold">{{ title }}</h3>

      <p class="line-clamp-2 text-pretty -mt-2 flex-1">
        {{ description }}
      </p>

      <div class="flex gap-4 self-end">
        <Button variant="underline" :href="sourceCodeUrl" target="_blank" rel="noopener noreferrer">
          <span class="flex">
            <icon-simple-icons-github class="mr-1" />
            Source Code
          </span>
        </Button>
        <Button :href="installationUrl" target="_blank" rel="noopener noreferrer">
          <span class="flex">
            <icon-simple-icons-flathub v-if="distributor === 'flathub'" class="mr-1" />
            <icon-simple-icons-kde v-if="distributor === 'kde'" class="mr-1" />
            Install
          </span>
        </Button>
      </div>
    </div>
  </Card>
</template>
