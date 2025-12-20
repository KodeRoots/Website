<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'underline'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const buttonClasses = computed(() => {
  const baseClasses =
    'px-5 py-3 font-semibold text-black dark:text-white focus:outline-0 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black dark:disabled:hover:bg-black dark:disabled:hover:text-white'

  if (props.variant === 'underline') {
    return `${baseClasses} relative border-black dark:border-white bg-white dark:bg-black after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-black dark:after:bg-white hover:after:h-full focus:outline-0`
  }

  // Default variant
  return `${baseClasses} border-2 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_0] dark:shadow-[4px_4px_0_0_white] hover:shadow-none`
})
</script>

<template>
  <a :class="buttonClasses" v-bind="$attrs" target="_blank" rel="noopener noreferrer">
    <span class="relative z-10 flex">
      <slot></slot>
    </span>
  </a>
</template>
