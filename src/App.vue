<script setup lang="ts">
import { Card } from '@/components/atoms'
import { CardContent as MoleculeCardContent, CardActions as MoleculeCardActions, NavigationItem } from '@/components/molecules'
import { Github, Download } from 'lucide-vue-next'

const exampleActions = [
  {
    label: 'Source Code',
    icon: Github,
    variant: 'outline' as const,
    href: 'https://github.com/koderoots/kontainer'
  },
  {
    label: 'Install',
    icon: Download,
    variant: 'default' as const,
    href: 'https://flathub.org/apps/koderoots/kontainer'
  }
]
</script>

<template>
  <div class="container mx-auto py-8 space-y-8">
    <h1 class="text-3xl font-bold">Molecules Demo</h1>
    
    <!-- CardContent Molecule -->
    <Card>
      <MoleculeCardContent
        title="Kontainer"
        description="A modern container management application for KDE Plasma"
      />
    </Card>

    <!-- CardActions Molecule -->
    <Card>
      <CardContent>
        <h3>Available Actions</h3>
        <p>Click the buttons below to interact</p>
      </CardContent>
      <MoleculeCardActions :actions="exampleActions" />
    </Card>

    <!-- NavigationItem Molecule -->
    <div class="flex gap-4">
      <NavigationItem
        label="Home"
        href="#"
        :active="true"
      />
      <NavigationItem
        label="Apps"
        href="#apps"
      />
      <NavigationItem
        label="Widgets"
        href="#widgets"
      />
    </div>
  </div>
</template>