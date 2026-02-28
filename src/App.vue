<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import ServiceCard from './components/molecules/ServiceCard.vue'
import Carousel from './components/organisms/Carousel.vue'

const isDarkMode = ref(false)

const updateDarkMode = () => {
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
}

onMounted(() => {
  updateDarkMode()
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateDarkMode)
})

onUnmounted(() => {
  window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateDarkMode)
})

const widgets = computed(() => [
  {
    title: 'ChatAI',
    description: 'A range of chatbots as Plasmoid for your KDE Plasma desktop.',
    image: isDarkMode.value
      ? new URL('./assets/ChatAI-Plasmoid-Light.svg', import.meta.url).href
      : new URL('./assets/ChatAI-Plasmoid.svg', import.meta.url).href,
    sourceCodeUrl: 'https://github.com/DenysMb/ChatAI-Plasmoid/',
    installationUrl: 'https://www.pling.com/p/2163340/',
  },
  {
    title: 'Klaro',
    description: 'Quick translation applet for KDE Plasma powered by Translate Shell.',
    image: isDarkMode.value
      ? new URL('./assets/Klaro-Plasmoid-Light.svg', import.meta.url).href
      : new URL('./assets/Klaro-Plasmoid.svg', import.meta.url).href,
    sourceCodeUrl: 'https://github.com/DenysMb/Klaro-Plasmoid',
    installationUrl: 'https://www.pling.com/p/2321269/',
  },
  {
    title: 'ChatQT',
    description:
      'ChatQT is an Ollama client where you can quickly chat with all your local models downloaded with Ollama.',
    image: isDarkMode.value
      ? new URL('./assets/ChatQT-Plasmoid-Light.svg', import.meta.url).href
      : new URL('./assets/ChatQT-Plasmoid.svg', import.meta.url).href,
    sourceCodeUrl: 'https://github.com/DenysMb/ChatQT-Plasmoid',
    installationUrl: 'https://www.pling.com/p/2184747/',
  },
  {
    title: 'Kicker-AppsOnly',
    description:
      'The original Kicker Dashboard but with only the application list. No favorites and no categories.',
    image: isDarkMode.value
      ? new URL('./assets/Kicker-AppsOnly-Plasmoid-Light.svg', import.meta.url).href
      : new URL('./assets/Kicker-AppsOnly-Plasmoid.svg', import.meta.url).href,
    sourceCodeUrl: 'https://github.com/DenysMb/Kicker-AppsOnly',
    installationUrl: 'https://www.pling.com/p/2145280/',
  },
])

const applications = [
  {
    title: 'Kontainer',
    description:
      'A native KDE application that provides a user-friendly graphical interface for managing Distrobox containers.',
    image: new URL('./assets/Kontainer.svg', import.meta.url).href,
    sourceCodeUrl: 'https://invent.kde.org/denysmb/Kontainer',
    installationUrl: 'https://flathub.org/en/apps/io.github.DenysMb.Kontainer',
  },
  {
    title: 'Klaro',
    description:
      'A native KDE application that provides quick and easy text translation with a simple and intuitive interface.',
    image: new URL('./assets/Klaro.svg', import.meta.url).href,
    sourceCodeUrl: 'https://invent.kde.org/denysmb/Klaro',
    installationUrl: 'https://flathub.org/en/apps/io.github.denysmb.klaro',
  },
  {
    title: 'Unify',
    description:
      'A native KDE application that brings your favorite web services to the desktop with seamless integration.',
    image: new URL('./assets/Unify.svg', import.meta.url).href,
    sourceCodeUrl: 'https://invent.kde.org/denysmb/Unify',
    installationUrl: 'https://flathub.org/en/apps/io.github.denysmb.unify',
  },
  {
    title: 'Diktate',
    description:
      "A native KDE application that provides accurate speech-to-text transcription using OpenAI's Whisper AI model.",
    image: new URL('./assets/Diktate.svg', import.meta.url).href,
    sourceCodeUrl: 'https://invent.kde.org/denysmb/Diktate',
    installationUrl: '',
  },
  {
    title: 'Musik',
    description:
      'A native KDE application that provides a simple and intuitive audio playback experience.',
    image: new URL('./assets/Musik.svg', import.meta.url).href,
    sourceCodeUrl: 'https://invent.kde.org/denysmb/Musik',
    installationUrl: '',
  },
  {
    title: 'TimeTracker',
    description:
      'A native KDE application that provides a simple and intuitive way to track time spent on tasks and projects.',
    image: new URL('./assets/TimeTracker.svg', import.meta.url).href,
    sourceCodeUrl: 'https://invent.kde.org/denysmb/TimeTracker',
    installationUrl: '',
  },
]

const utils = [
  {
    title: 'TKP - Tile Color Picker',
    description:
      'With this script you can set the header/tile color of a window to match with their main window color.',
    image: new URL('./assets/TKP.jpg', import.meta.url).href,
    sourceCodeUrl: 'https://github.com/DenysMb/TKP-TileColorPicker',
    installationUrl: '',
  },
  {
    title: 'CSG - Color Scheme Generator',
    description: 'KDE Plasma color scheme generator script.',
    image: new URL('./assets/CSG.jpg', import.meta.url).href,
    sourceCodeUrl: 'https://github.com/DenysMb/CSG-ColorSchemeGenerator',
    installationUrl: '',
  },
  {
    title: 'WCG - Wallpaper Color Scheme Generator',
    description: 'KDE Plasma color scheme generator script based on your wallpaper.',
    image: new URL('./assets/WCG.jpg', import.meta.url).href,
    sourceCodeUrl: 'https://github.com/DenysMb/WCG-WallpaperColorSchemeGenerator',
    installationUrl: '',
  },
]
</script>
<template>
  <div class="section flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold">KodeRoots</h1>

    <p>Cultivating open-source software for a powerful and cohesive desktop environment</p>
  </div>

  <div class="section">
    <Carousel :items="applications">
      <template #default="{ item }">
        <ServiceCard
          v-if="item"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :source-code-url="item.sourceCodeUrl"
          :installation-url="item.installationUrl"
          :distributor="item.distributor || 'flathub'"
          direction="column"
        />
      </template>
    </Carousel>
  </div>

  <div class="section">
    <h2>Applications</h2>

    <div class="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <ServiceCard
        v-for="application in applications"
        :key="application.title"
        :title="application.title"
        :description="application.description"
        :image="application.image"
        :source-code-url="application.sourceCodeUrl"
        :installation-url="application.installationUrl"
        distributor="flathub"
      />
    </div>
  </div>

  <div class="section">
    <h2>Widgets</h2>

    <div class="grid grid-cols-2 gap-4">
      <ServiceCard
        v-for="widget in widgets"
        :key="`${widget.title}-${isDarkMode ? 'dark' : 'light'}`"
        :title="widget.title"
        :description="widget.description"
        :image="widget.image"
        :source-code-url="widget.sourceCodeUrl"
        :installation-url="widget.installationUrl"
        distributor="kde"
      />
    </div>
  </div>

  <div class="section">
    <h2>Scripts & Utilities</h2>

    <div class="grid grid-cols-2 gap-4">
      <ServiceCard
        v-for="utility in utils"
        :key="utility.title"
        :title="utility.title"
        :description="utility.description"
        :image="utility.image"
        :source-code-url="utility.sourceCodeUrl"
        :installation-url="utility.installationUrl || ''"
        no-image
      >
        <template #install-button> Download </template>
      </ServiceCard>
    </div>
  </div>

  <footer class="flex flex-col items-center text-center pt-4 pb-8 gap-2">
    <p class="font-semibold">
      KodeRoots
      <br />
      Cultivating a cohesive desktop environment
    </p>

    <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>

    <div class="flex gap-4 text-xl mt-4">
      <a href="https://invent.kde.org/denysmb" target="_blank" rel="noopener noreferrer">
        <icon-simple-icons-gitlab />
      </a>
      <a
        href="https://flathub.org/en/apps/search?q=DenysMb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icon-simple-icons-flathub />
      </a>
    </div>
  </footer>
</template>

<style scoped>
@import 'tailwindcss';

.section {
  @apply flex flex-col gap-4 p-4;
}
</style>
