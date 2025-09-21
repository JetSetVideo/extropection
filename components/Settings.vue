<script setup>
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

const toggleMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <UButton 
    :icon="colorMode.preference === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'" 
    color="gray" 
    variant="ghost" 
    @click="toggleMode" 
  />
</template>
