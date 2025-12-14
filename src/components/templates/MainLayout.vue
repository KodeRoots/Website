<script setup lang="ts">
import { NavigationItem } from '@/components/molecules'
import { FooterSection } from '@/components/organisms'
import { ThemeToggle } from '@/components/ui/theme-toggle'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Navigation Header -->
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container mx-auto px-4">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-primary-foreground font-bold text-sm">K</span>
            </div>
            <span class="font-bold text-xl">KodeRoots</span>
          </div>
          
          <nav class="hidden md:flex items-center gap-1">
            <NavigationItem
              label="Home"
              href="/"
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
            <NavigationItem
              label="Scripts"
              href="#scripts"
            />
          </nav>

          <div class="flex items-center gap-2">
            <!-- Theme Toggle -->
            <ThemeToggle />

            <!-- Mobile Navigation Toggle -->
            <button class="md:hidden p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>