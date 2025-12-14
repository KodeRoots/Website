<script setup lang="ts">
import { otherApps } from '@/data'
import { Card } from '@/components/atoms'
import { CardContent, CardActions } from '@/components/molecules'
import { Github, Download } from 'lucide-vue-next'
import type { AppProject } from '@/types'

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
      <h2 class="text-3xl font-bold text-center mb-12">Other Applications</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card
          v-for="app in otherApps"
          :key="app.id"
          class="hover:shadow-lg transition-shadow"
        >
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
  </section>
</template>