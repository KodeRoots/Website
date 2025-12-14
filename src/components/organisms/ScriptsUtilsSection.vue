<script setup lang="ts">
import { scripts } from '@/data'
import { Card } from '@/components/atoms'
import { CardContent, CardActions } from '@/components/molecules'
import { Github } from 'lucide-vue-next'

const getScriptActions = (script: any) => [
  {
    label: 'View on GitHub',
    icon: Github,
    variant: 'default' as const,
    href: script.github_url
  }
]
</script>

<template>
  <section class="py-16 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Scripts & Utilities</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="script in scripts"
          :key="script.id"
          class="hover:shadow-lg transition-shadow"
        >
          <CardContent
            :title="script.title"
            :description="script.description"
            class="pt-6"
          />
          <div class="p-6 pt-0">
            <CardActions :actions="getScriptActions(script)" />
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>