<script setup lang="ts">
import ServiceCard from './components/molecules/ServiceCard.vue'
import Carousel from './components/organisms/Carousel.vue'

const applications = [
  {
    title: 'Kontainer',
    description:
      'Graphical user interface (GUI) application built with KDE Kirigami that provides a user-friendly way to manage Distrobox containers.',
    image: 'src/assets/Kontainer.png',
    sourceCodeUrl: 'https://github.com/DenysMb/Kontainer',
    installationUrl: 'https://flathub.org/en/apps/io.github.DenysMb.Kontainer',
  },
  {
    title: 'Klaro',
    description:
      ' A simple and fast translation app for KDE Plasma that helps you translate text between different languages.',
    image: 'src/assets/Klaro.png',
    sourceCodeUrl: 'https://github.com/DenysMb/Klaro',
    installationUrl: 'https://flathub.org/en/apps/io.github.denysmb.klaro',
  },
  {
    title: 'Unify',
    description: 'Web app aggregator built with Qt 6, Qt WebEngine, and Kirigami.',
    image: 'src/assets/Unify.png',
    sourceCodeUrl: 'https://github.com/DenysMb/Unify',
    installationUrl: 'https://npmjs.com',
  },
]

const widgets = [
  {
    title: 'Widget 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://placehold.co/200',
    sourceCodeUrl: 'https://github.com/DenysMb/Widget1',
    installationUrl: 'https://npmjs.com',
  },
  {
    title: 'Widget 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://placehold.co/200',
    sourceCodeUrl: 'https://github.com/DenysMb/Widget2',
    installationUrl: 'https://npmjs.com',
  },
]

const utils = [
  {
    title: 'Utility 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://placehold.co/200',
    sourceCodeUrl: 'https://github.com/DenysMb/Utility1',
    installationUrl: 'https://npmjs.com',
  },
  {
    title: 'Utility 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://placehold.co/200',
    sourceCodeUrl: 'https://github.com/DenysMb/Utility2',
    installationUrl: 'https://npmjs.com',
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

    <div class="grid grid-cols-2 gap-4">
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
        :key="widget.title"
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
        :installation-url="utility.installationUrl"
      >
        <template #install-button> Download </template>
      </ServiceCard>
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss';

.section {
  @apply flex flex-col gap-4 pb-4;
}
</style>
