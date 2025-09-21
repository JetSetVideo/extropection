<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <footer class="fixed bottom-0 left-0 right-0 z-10 bg-gray-900 text-white p-4 transition-all duration-300 shadow-lg shadow-black/50" :class="{ 'opacity-0 pointer-events-none': !scrolled }" style="box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3);">
    <div class="max-w-7xl mx-auto flex justify-center space-x-6">
      <a href="https://twitter.com" target="_blank" class="text-white hover:text-gray-300">
        <FontAwesomeIcon icon="fa-brands fa-x-twitter" size="2x" />
      </a>
      <a href="https://facebook.com" target="_blank" class="text-white hover:text-gray-300">
        <FontAwesomeIcon icon="fa-brands fa-facebook" size="2x" />
      </a>
      <a href="https://instagram.com" target="_blank" class="text-white hover:text-gray-300">
        <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" />
      </a>
      <a href="https://linkedin.com" target="_blank" class="text-white hover:text-gray-300">
        <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
      </a>
      <a href="https://discord.com" target="_blank" class="text-white hover:text-gray-300">
        <FontAwesomeIcon icon="fa-brands fa-discord" size="2x" />
      </a>
      <a href="https://youtube.com" target="_blank" class="text-white hover:text-gray-300">
        <FontAwesomeIcon icon="fa-brands fa-youtube" size="2x" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin: 0 1rem 1rem;
}
</style>
