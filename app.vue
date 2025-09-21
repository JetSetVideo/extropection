<template>
  <div class="relative min-h-screen">
    <!-- Background animation -->
    <div class="absolute inset-0 z-0" id="background"></div>

    <Navbar />
    <!-- Content -->
    <div class="relative z-10 p-4">
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
  --bg-light: #ffffff;
  --text-dark: #ffffff;
  --text-light: #000000;
  --accent-red-dark: rgba(255, 0, 0, 0.2);
  --accent-red-light: rgba(255, 0, 0, 0.1);
  --shadow-color: rgba(0,0,0,0.5);
}

body {
  background-color: var(--bg-light);
  color: var(--text-light);
}

.dark body {
  background-color: var(--bg-dark);
  color: var(--text-dark);
}

#background {
  background: radial-gradient(circle at center, var(--bg-light) 0%, #ffcccc 50%, var(--bg-light) 100%);
  animation: pulse 10s infinite;
}

.dark #background {
  background: radial-gradient(circle at center, var(--bg-dark) 0%, #330000 50%, var(--bg-dark) 100%);
}

/* Add rays effect */
#background::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg, var(--accent-red-light), var(--accent-red-light) 1px, transparent 1px, transparent 20px);
  transform: translate(-50%, -50%) rotate(0deg);
  animation: rotate 30s linear infinite, colorMorph 15s ease-in-out infinite;
}

.dark #background::before {
  background: repeating-linear-gradient(0deg, var(--accent-red-dark), var(--accent-red-dark) 1px, transparent 1px, transparent 20px);
}

#background::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px);
  transform: translate(-50%, -50%) rotate(45deg);
  animation: rotate 45s linear infinite reverse;
}

.dark #background::after {
  background: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px);
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
