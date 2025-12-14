<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  direction?: 'row' | 'column'
}

const props = withDefaults(defineProps<Props>(), { direction: 'column' })

const flexDirection = props.direction === 'row' ? 'flex-row' : 'flex-col'

const cardClasses = computed(
  () =>
    `w-150 border-2 border-black bg-white p-4 shadow-[4px_4px_0_0] sm:p-6 gap-4 flex ${flexDirection}`
)
</script>

<template>
  <div :class="cardClasses">
    <slot></slot>
  </div>
</template>
