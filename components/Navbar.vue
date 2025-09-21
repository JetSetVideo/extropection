<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const atTop = ref(true)

const handleScroll = () => {
  atTop.value = window.scrollY === 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <!-- Navbar -->
    <UNavbar class="navbar fixed top-0 left-0 right-0 z-10 transition-all duration-300 shadow-lg" :class="{ 'opacity-0 pointer-events-none': !atTop }" style="box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);">
      <template #left>
        <h1 class="text-4xl font-bold" style="font-family: 'Ethnocentric', sans-serif;">Extrospection</h1>
      </template>
      <template #right>
        <Settings />
      </template>
    </UNavbar>
</template>

<style scoped>
.navbar {
  @apply bg-gray-100 text-black dark:bg-gray-900 dark:text-white shadow-black/50 dark:shadow-black/50;
  background: linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.1) 100%);
  background-size: 200% 200%;
  animation: reflect 10s linear infinite;
}

.dark .navbar {
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%);
}

@keyframes reflect {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 200%;
  }
}
</style>