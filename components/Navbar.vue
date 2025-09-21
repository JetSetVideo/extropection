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
    <UNavbar class="navbar fixed top-0 left-0 right-0 z-10 transition-all duration-300 bg-gray-900 text-white shadow-lg shadow-black/50" :class="{ 'opacity-0 pointer-events-none': !atTop }" style="box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);">
      <template #left>
        <h1 class="text-4xl font-bold" style="font-family: 'Ethnocentric', sans-serif;">Extrospection</h1>
      </template>
    </UNavbar>
</template>

<style scoped>
.navbar {
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%);
  background-size: 200% 200%;
  animation: reflect 10s linear infinite;
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