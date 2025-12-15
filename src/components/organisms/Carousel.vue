<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '../atoms/Button.vue'
import IconArrowBack from '~icons/mdi/arrow-back'
import IconArrowForward from '~icons/mdi/arrow-forward'

interface CarouselItem {
  title: string
  description: string
  image: string
  sourceCodeUrl: string
  installationUrl: string
  distributor?: 'flathub' | 'kde'
}

interface Props {
  items: CarouselItem[]
}

const props = defineProps<Props>()

const currentIndex = ref(0)

const canGoPrevious = computed(() => currentIndex.value > 0)
const canGoNext = computed(() => currentIndex.value < props.items.length - 1)

const goToPrevious = (): void => {
  if (canGoPrevious.value) {
    currentIndex.value--
  } else {
    currentIndex.value = props.items.length - 1
  }
}

const goToNext = (): void => {
  if (canGoNext.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const currentItem = computed(() => props.items[currentIndex.value])
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="relative flex flex-1 items-center">
      <!-- Carousel Content -->
      <div class="flex-1 overflow-hidden">
        <transition name="slide" mode="out-in">
          <div :key="currentIndex" class="w-full">
            <slot :item="currentItem" :index="currentIndex"></slot>
          </div>
        </transition>
      </div>
    </div>
    <div class="flex gap-4">
      <Button class="flex flex-1 justify-center" @click="goToPrevious" aria-label="Previous slide">
        <icon-arrow-back class="h-6 w-6" />
        Previous
      </Button>

      <Button class="flex flex-1 justify-center" @click="goToNext" aria-label="Next slide">
        Next
        <icon-arrow-forward class="h-6 w-6" />
      </Button>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
