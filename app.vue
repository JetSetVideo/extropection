<template>
  <div class="relative min-h-screen">
    <!-- Background animation -->
    <div class="absolute inset-0 bg-black z-0" id="background"></div>

    <!-- Navbar -->
    <UNavbar class="fixed top-0 left-0 right-0 z-10 transition-all duration-300" :class="{ 'opacity-0 pointer-events-none': !atTop }">
      <template #center>
        <h1 class="text-4xl font-bold" style="font-family: 'Orbitron', sans-serif;">Extrospection</h1>
      </template>
    </UNavbar>

    <!-- Content -->
    <div class="relative z-10 p-4 text-white">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)
const atTop = computed(() => y.value === 0)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

#background {
  background: radial-gradient(circle at center, black 0%, #330000 50%, black 100%);
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
}

/* Add rays effect */
#background::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2) 1px, transparent 1px, transparent 20px);
  transform: translate(-50%, -50%) rotate(0deg);
  animation: rotate 10s linear infinite;
}

#background::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px);
  transform: translate(-50%, -50%) rotate(45deg);
  animation: rotate 15s linear infinite reverse;
}

@keyframes rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
</style>
