<script setup lang="ts">
import { widgets } from '@/data'
import { Card } from '@/components/atoms'
import { CardContent, CardActions } from '@/components/molecules'
import { Github, Download } from 'lucide-vue-next'
import type { WidgetProject } from '@/types'

const getWidgetActions = (widget: WidgetProject) => [
  {
    label: 'Source Code',
    icon: Github,
    variant: 'outline' as const,
    href: widget.github_url
  },
  {
    label: 'Install',
    icon: Download,
    variant: 'default' as const,
    href: widget.store_url
  }
]
</script>

<template>
  <section class="py-16 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">KDE Plasma Widgets</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="widget in widgets"
          :key="widget.id"
          class="hover:shadow-lg transition-shadow"
        >
          <CardContent
            :title="widget.title"
            :description="widget.description"
            class="pt-6"
          />
          <div class="p-6 pt-0">
            <CardActions :actions="getWidgetActions(widget)" />
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>