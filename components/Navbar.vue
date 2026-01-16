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
  <nav class="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg px-4 md:px-8" :class="{ 'opacity-0 pointer-events-none': !atTop }">
    <div class="navbar-content flex items-center justify-between h-16 md:h-20">
      <!-- Left spacer for centering -->
      <div class="w-10 md:w-12"></div>
      
      <!-- Centered Title -->
      <h1 class="title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center whitespace-nowrap">
        Radical Prospérité
      </h1>
      
      <!-- Settings on the right -->
      <div class="w-10 md:w-12 flex justify-end">
        <Settings />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(135deg, 
    rgba(0, 51, 153, 0.95) 0%, 
    rgba(0, 51, 153, 0.85) 25%,
    rgba(255, 255, 255, 0.95) 50%, 
    rgba(200, 16, 46, 0.85) 75%,
    rgba(200, 16, 46, 0.95) 100%
  );
  background-size: 300% 300%;
  animation: tricolorFlow 20s ease-in-out infinite;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.dark .navbar {
  background: linear-gradient(135deg, 
    rgba(0, 30, 100, 0.95) 0%, 
    rgba(0, 30, 100, 0.85) 25%,
    rgba(30, 30, 40, 0.95) 50%, 
    rgba(140, 10, 30, 0.85) 75%,
    rgba(140, 10, 30, 0.95) 100%
  );
  background-size: 300% 300%;
  animation: tricolorFlow 20s ease-in-out infinite;
}

.title {
  font-family: 'Ethnocentric', 'Orbitron', sans-serif;
  background: linear-gradient(90deg, #003399 0%, #ffffff 50%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.dark .title {
  background: linear-gradient(90deg, #4d7fbf 0%, #ffffff 50%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes tricolorFlow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Mobile responsiveness */
@media (max-width: 480px) {
  .title {
    font-size: 1.25rem;
  }
}
</style>
