<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'underline'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const handleClick = (event: Event) => {
  emit('click', event)
}

const buttonClasses = computed(() => {
  const baseClasses = 'px-5 py-3 font-semibold text-black focus:outline-0'

  if (props.variant === 'underline') {
    return `${baseClasses} relative border-black bg-white after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-black hover:text-white hover:after:h-full focus:ring-2 focus:ring-green-300 focus:outline-0`
  }

  // Default variant
  return `${baseClasses} border-2 border-black bg-white shadow-[4px_4px_0_0] hover:bg-green-300 focus:ring-2 focus:ring-green-300`
})
</script>

<template>
  <button :class="buttonClasses" @click="handleClick">
    <span class="relative z-10">
      <slot></slot>
    </span>
  </button>
</template>
