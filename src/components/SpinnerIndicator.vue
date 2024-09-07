<template>
  <div class="flex flex-col justify-center items-center w-full h-96" v-if="isLoading">
    <span :class="spinnerClass"></span>
    <span v-if="loadingText" class="mt-2 text-lg">{{ loadingText }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'loading-lg'
  },
  color: {
    type: String,
    default: 'text-primary'
  },
  loadingText: {
    type: String,
    default: ''
  }
})

const spinnerClass = computed(() => {
  return `loading loading-dots ${props.size} ${props.color}`
})
</script>
