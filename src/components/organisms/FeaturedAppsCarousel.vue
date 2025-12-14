<script setup lang="ts">
import { ref } from 'vue'
import { featuredApps } from '@/data'
import { Card } from '@/components/atoms'
import { CardContent, CardActions } from '@/components/molecules'
import { Github, Download, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { AppProject } from '@/types'

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % featuredApps.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? featuredApps.length - 1 : currentIndex.value - 1
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const getAppActions = (app: AppProject) => [
  {
    label: 'Source Code',
    icon: Github,
    variant: 'outline' as const,
    href: app.github_url
  },
  {
    label: 'Install',
    icon: Download,
    variant: 'default' as const,
    href: app.install_url
  }
]
</script>

<template>
  <section class="py-16 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Featured Applications</h2>
      
      <div class="relative max-w-4xl mx-auto">
        <!-- Carousel Container -->
        <div class="overflow-hidden rounded-lg">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="app in featuredApps"
              :key="app.id"
              class="w-full flex-shrink-0"
            >
              <Card class="mx-4">
                <CardContent
                  :title="app.title"
                  :description="app.description"
                  class="pt-6"
                />
                <div class="p-6 pt-0">
                  <CardActions :actions="getAppActions(app)" />
                </div>
              </Card>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label="Previous app"
        >
          <ChevronLeft class="w-6 h-6" />
        </button>
        
        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          aria-label="Next app"
        >
          <ChevronRight class="w-6 h-6" />
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center mt-6 gap-2">
          <button
            v-for="(_, index) in featuredApps"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-2 h-2 rounded-full transition-colors',
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>