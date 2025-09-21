<template>
  <div class="relative min-h-screen bg-black">
    <!-- Background animation -->
    <div class="absolute inset-0 bg-black z-0" id="background"></div>

    <Navbar />
    <!-- Content -->
    <div class="relative z-10 p-4 text-white">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)
const atTop = computed(() => y.value === 0)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

@font-face {
       font-family: 'Ethnocentric'; /* Name it whatever you want to reference it by */
       src: url('~assets/fonts/Ethnocentric Rg It.otf') format('otf'); /* Adjust file name/extension as needed */
       font-weight: 700; /* Match the weight you need, e.g., bold */
       font-style: normal; /* Or italic if applicable */
       font-display: swap; /* Recommended for better performance */
     }

:root {
  --bg-dark: #000000;
  --text-light: #ffffff;
  --accent-red: rgba(255, 0, 0, 0.2);
  --shadow-color: rgba(0,0,0,0.5);
}

#background {
  background: radial-gradient(circle at center, var(--bg-dark) 0%, #330000 50%, var(--bg-dark) 100%);
  animation: pulse 10s infinite;
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
  background: repeating-linear-gradient(0deg, var(--accent-red), var(--accent-red) 1px, transparent 1px, transparent 20px);
  transform: translate(-50%, -50%) rotate(0deg);
  animation: rotate 30s linear infinite, colorMorph 15s ease-in-out infinite;
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
  animation: rotate 45s linear infinite reverse;
}

@keyframes rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes colorMorph {
  0% { --accent-red: rgba(255, 0, 0, 0.1); }
  25% { --accent-red: rgba(255, 0, 0, 0.3); } /* sin approx */
  50% { --accent-red: rgba(255, 0, 0, 0.1); }
  75% { --accent-red: rgba(255, 0, 0, 0.3); } /* cos approx */
  100% { --accent-red: rgba(255, 0, 0, 0.1); }
}
</style>
