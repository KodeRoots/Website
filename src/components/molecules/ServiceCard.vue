<script setup lang="ts">
import { toRef } from 'vue'
import Button from '../atoms/Button.vue'
import Card from '../atoms/Card.vue'
import { useImageColor } from '../../composables/useImageColor'

interface Props {
  title: string
  description: string
  image: string
  sourceCodeUrl: string
  installationUrl: string
  direction?: 'row' | 'column'
  distributor?: 'flathub' | 'kde'
  noImage?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'row',
  distributor: undefined,
  noImage: false,
})

const imageSizeClass = props.direction === 'row' ? 'w-50 h-50 min-w-50 min-h-50' : 'w-full h-100'

const { backgroundColor } = useImageColor(toRef(props, 'image'))
</script>

<template>
  <Card :direction="direction">
    <div
      v-if="!noImage"
      class="flex items-center justify-center border-2 border-black dark:border-white"
      :class="imageSizeClass"
      :style="{ backgroundColor }"
    >
      <img
        class="object-contain p-12 w-full h-full"
        :src="image"
        :alt="`${title} image`"
        draggable="false"
      />
    </div>

    <div class="flex flex-1 flex-col gap-4">
      <h3 class="text-xl font-semibold">{{ title }}</h3>

      <p class="line-clamp-2 text-pretty -mt-2 flex-1">
        {{ description }}
      </p>

      <div class="flex gap-4 self-end">
        <Button variant="underline" :href="sourceCodeUrl" draggable="false">
          <span class="flex">
            <icon-simple-icons-github class="mr-1" />
            Source Code
          </span>
        </Button>
        <Button v-if="installationUrl" :href="installationUrl" draggable="false">
          <span class="flex">
            <icon-simple-icons-flathub v-if="distributor === 'flathub'" class="mr-1" />
            <icon-simple-icons-kde v-if="distributor === 'kde'" class="mr-1" />
            <slot name="install-button"> Install </slot>
          </span>
        </Button>
      </div>
    </div>
  </Card>
</template>
