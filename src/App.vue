<script setup lang="ts">
import ServiceCard from './components/molecules/ServiceCard.vue'

const applications = [
  {
    title: 'Kontainer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://placehold.co/200',
    sourceCodeUrl: 'https://github.com/DenysMb/Kontainer',
    installationUrl: 'https://npmjs.com',
  },
  {
    title: 'Klaro',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://placehold.co/200',
    sourceCodeUrl: 'https://github.com/DenysMb/Klaro',
    installationUrl: 'https://npmjs.com',
  },
  {
    title: 'Unify',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://placehold.co/200',
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
  <div class="section">
    <h1 class="text-4xl font-bold">KodeRoots</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nihil cumque, iste eaque qui
      asperiores recusandae? Aliquid facere officiis porro, suscipit officia blanditiis quis
      sapiente reiciendis similique laudantium quia provident?
    </p>
  </div>

  <div class="section">
    <h2>Highlights</h2>
    <!-- Carousel with ServiceCards -->
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
      />
    </div>
  </div>
</template>

<style scoped>
@import 'tailwindcss';

.section {
  @apply flex flex-col gap-4 pb-4;
}
</style>
