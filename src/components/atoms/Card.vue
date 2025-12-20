<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  direction?: 'row' | 'column'
}

const props = withDefaults(defineProps<Props>(), { direction: 'column' })

const flexDirection = props.direction === 'row' ? 'flex-row' : 'flex-col'

const cardClasses = computed(
  () =>
    `border-2 border-black dark:border-white bg-white dark:bg-black p-4 shadow-[4px_4px_0_0] dark:shadow-[4px_4px_0_0_white] sm:p-6 gap-4 flex ${flexDirection}`
)
</script>

<template>
  <div :class="cardClasses">
    <slot></slot>
  </div>
</template>
