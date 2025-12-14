<script setup lang="ts">
import { SocialLinks } from '@/components/molecules'
import { Github, Mail, Globe } from 'lucide-vue-next'

const socialLinks = [
  {
    label: 'GitHub Organization',
    href: 'https://github.com/koderoots',
    icon: Github
  },
  {
    label: 'Email Contact',
    href: 'mailto:contact@koderoots.org',
    icon: Mail
  },
  {
    label: 'Website',
    href: 'https://koderoots.org',
    icon: Globe
  }
]
</script>

<template>
  <footer class="bg-muted/50 py-12 px-4 mt-16">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold mb-2">KodeRoots</h3>
          <p class="text-sm text-muted-foreground">
            © 2024 KodeRoots. All rights reserved.
          </p>
        </div>
        
        <SocialLinks :links="socialLinks" />
      </div>
    </div>
  </footer>
</template>