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
const transitionName = ref('slide-next')

const canGoPrevious = computed(() => currentIndex.value > 0)
const canGoNext = computed(() => currentIndex.value < props.items.length - 1)

const goToPrevious = (): void => {
  transitionName.value = 'slide-prev'
  if (canGoPrevious.value) {
    currentIndex.value--
  } else {
    currentIndex.value = props.items.length - 1
  }
}

const goToNext = (): void => {
  transitionName.value = 'slide-next'
  if (canGoNext.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const currentItem = computed(() => props.items[currentIndex.value])

const touchStartX = ref(0)
const touchEndX = ref(0)

const onTouchStart = (e: TouchEvent) => {
  if (e.changedTouches[0]) {
    touchStartX.value = e.changedTouches[0].screenX
  }
}

const onTouchEnd = (e: TouchEvent) => {
  if (e.changedTouches[0]) {
    touchEndX.value = e.changedTouches[0].screenX
    handleSwipe()
  }
}

const onMouseDown = (e: MouseEvent) => {
  touchStartX.value = e.screenX
}

const onMouseUp = (e: MouseEvent) => {
  touchEndX.value = e.screenX
  handleSwipe()
}

const handleSwipe = () => {
  const diff = touchStartX.value - touchEndX.value
  const threshold = 50

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      goToNext()
    } else {
      goToPrevious()
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      class="relative flex flex-1 items-center select-none"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    >
      <!-- Carousel Content -->
      <div class="flex-1 overflow-hidden">
        <transition :name="transitionName" mode="out-in">
          <div :key="currentIndex" class="w-full">
            <slot :item="currentItem" :index="currentIndex"></slot>
          </div>
        </transition>
      </div>
    </div>
    <div class="flex gap-4">
      <Button class="flex flex-1 justify-center" aria-label="Previous slide" @click="goToPrevious">
        <icon-arrow-back class="h-6 w-6" />
        Previous
      </Button>

      <Button class="flex flex-1 justify-center" aria-label="Next slide" @click="goToNext">
        Next
        <icon-arrow-forward class="h-6 w-6" />
      </Button>
    </div>
  </div>
</template>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.3s ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
