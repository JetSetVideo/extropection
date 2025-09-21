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
  <footer class="fixed bottom-0 left-0 right-0 z-10 p-4 transition-all duration-300 shadow-lg" :class="{ 'opacity-0 pointer-events-none': !scrolled }" style="box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3);">
    <div class="max-w-7xl mx-auto flex justify-center space-x-6">
      <a href="https://twitter.com" target="_blank" class="hover:text-gray-700 dark:hover:text-gray-300">
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
  background-color: #f3f4f6; /* bg-gray-100 */
  color: #000000; /* text-black */
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -2px rgba(0,0,0,0.5); /* shadow-black/50 */
  margin: 0 1rem 1rem;
}

.dark footer {
  background-color: #111827; /* dark:bg-gray-900 */
  color: #ffffff; /* dark:text-white */
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -2px rgba(0,0,0,0.5); /* dark:shadow-black/50 */
}

a {
  color: #000000; /* text-black */
}

.dark a {
  color: #ffffff; /* dark:text-white */
}
</style>
