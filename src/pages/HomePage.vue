<script setup lang="ts">
import { MainLayout } from '@/components/templates'
import { 
  HeroSection, 
  FeaturedAppsCarousel, 
  OtherAppsGrid, 
  WidgetsSection, 
  ScriptsUtilsSection 
} from '@/components/organisms'
</script>

<template>
  <MainLayout>
    <HeroSection />
    <FeaturedAppsCarousel />
    <OtherAppsGrid />
    <WidgetsSection />
    <ScriptsUtilsSection />
  </MainLayout>
</template>