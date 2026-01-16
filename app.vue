<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <!-- Background animation -->
    <div class="absolute inset-0 z-0" id="background"></div>
    
    <!-- Diagonal bands overlay -->
    <div class="absolute inset-0 z-0 pointer-events-none" id="bands"></div>

    <Navbar />
    <!-- Content -->
    <div class="relative z-10 px-4 sm:px-8 md:px-12 lg:px-20 pt-20 md:pt-24">
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

@font-face {
  font-family: 'Ethnocentric';
  src: url('~assets/fonts/Ethnocentric Rg It.otf') format('opentype');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Ethnocentric';
  src: url('~assets/fonts/Ethnocentric Rg.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  --bg-dark: #0a0a14;
  --bg-light: #f8f9fa;
  --text-dark: #ffffff;
  --text-light: #1a1a2e;
  --french-blue: #003399;
  --french-blue-light: #4d7fbf;
  --french-red: #c8102e;
  --french-red-light: #ff4d6d;
  --accent-blue-dark: rgba(0, 51, 153, 0.3);
  --accent-blue-light: rgba(0, 51, 153, 0.15);
  --accent-red-dark: rgba(200, 16, 46, 0.3);
  --accent-red-light: rgba(200, 16, 46, 0.15);
  --shadow-color: rgba(0, 0, 0, 0.5);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--bg-light);
  color: var(--text-light);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.dark body {
  background-color: var(--bg-dark);
  color: var(--text-dark);
}

/* Main background with slow pulsing gradient */
#background {
  background: radial-gradient(
    ellipse at center,
    var(--bg-light) 0%,
    rgba(0, 51, 153, 0.08) 30%,
    rgba(200, 16, 46, 0.08) 60%,
    var(--bg-light) 100%
  );
  animation: pulse 25s ease-in-out infinite;
}

.dark #background {
  background: radial-gradient(
    ellipse at center,
    var(--bg-dark) 0%,
    rgba(0, 51, 153, 0.15) 30%,
    rgba(200, 16, 46, 0.15) 60%,
    var(--bg-dark) 100%
  );
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
}

/* Diagonal bands with blue and red - MUCH SLOWER */
#bands {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

#bands::before {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  width: 400%;
  height: 400%;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 80px,
    var(--accent-blue-light) 80px,
    var(--accent-blue-light) 82px,
    transparent 82px,
    transparent 160px,
    var(--accent-red-light) 160px,
    var(--accent-red-light) 162px
  );
  animation: moveBands 120s linear infinite;
}

.dark #bands::before {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 80px,
    var(--accent-blue-dark) 80px,
    var(--accent-blue-dark) 82px,
    transparent 82px,
    transparent 160px,
    var(--accent-red-dark) 160px,
    var(--accent-red-dark) 162px
  );
}

#bands::after {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  width: 400%;
  height: 400%;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 120px,
    rgba(0, 51, 153, 0.05) 120px,
    rgba(0, 51, 153, 0.05) 122px,
    transparent 122px,
    transparent 240px,
    rgba(200, 16, 46, 0.05) 240px,
    rgba(200, 16, 46, 0.05) 242px
  );
  animation: moveBandsReverse 180s linear infinite;
}

.dark #bands::after {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 120px,
    rgba(77, 127, 191, 0.1) 120px,
    rgba(77, 127, 191, 0.1) 122px,
    transparent 122px,
    transparent 240px,
    rgba(255, 77, 109, 0.1) 240px,
    rgba(255, 77, 109, 0.1) 242px
  );
}

@keyframes moveBands {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(160px, 160px);
  }
}

@keyframes moveBandsReverse {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-240px, 240px);
  }
}

/* Subtle rotating rays effect - MUCH SLOWER */
#background::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    var(--accent-blue-light) 15deg,
    transparent 30deg,
    transparent 90deg,
    var(--accent-red-light) 105deg,
    transparent 120deg,
    transparent 180deg,
    var(--accent-blue-light) 195deg,
    transparent 210deg,
    transparent 270deg,
    var(--accent-red-light) 285deg,
    transparent 300deg,
    transparent 360deg
  );
  transform: translate(-50%, -50%);
  animation: rotateRays 90s linear infinite;
  opacity: 0.4;
}

.dark #background::before {
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    var(--accent-blue-dark) 15deg,
    transparent 30deg,
    transparent 90deg,
    var(--accent-red-dark) 105deg,
    transparent 120deg,
    transparent 180deg,
    var(--accent-blue-dark) 195deg,
    transparent 210deg,
    transparent 270deg,
    var(--accent-red-dark) 285deg,
    transparent 300deg,
    transparent 360deg
  );
  opacity: 0.5;
}

@keyframes rotateRays {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Secondary subtle overlay */
#background::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    transparent 30%,
    rgba(0, 51, 153, 0.03) 50%,
    rgba(200, 16, 46, 0.03) 70%,
    transparent 100%
  );
  transform: translate(-50%, -50%);
  animation: pulseOverlay 30s ease-in-out infinite;
}

.dark #background::after {
  background: radial-gradient(
    circle at center,
    transparent 0%,
    transparent 30%,
    rgba(77, 127, 191, 0.08) 50%,
    rgba(255, 77, 109, 0.08) 70%,
    transparent 100%
  );
}

@keyframes pulseOverlay {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Orbitron', 'Ethnocentric', sans-serif;
}

/* Responsive padding utility */
@media (max-width: 640px) {
  .responsive-padding {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .responsive-padding {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1025px) {
  .responsive-padding {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
