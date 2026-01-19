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

// Navigation links for sub-bar
const navLinks = [
  { name: 'Informations', path: '/informations', icon: 'fa-solid fa-circle-info' },
  { name: 'Communauté', path: '/communaute', icon: 'fa-solid fa-users' },
  { name: 'Forum', path: '/forum', icon: 'fa-solid fa-comments' },
  { name: 'Magasin', path: '/magasin', icon: 'fa-solid fa-store' },
  { name: 'Aides', path: '/aides', icon: 'fa-solid fa-handshake-angle' }
]
</script>

<template>
  <!-- Main Navbar -->
  <nav class="navbar fixed top-0 z-50 transition-all duration-300 mx-4 md:mx-8 lg:mx-12 mt-3 rounded-2xl" :class="{ 'opacity-0 pointer-events-none': !atTop }">
    <div class="navbar-content flex items-center justify-between h-16 md:h-20 px-4 md:px-6 lg:px-8">
      <!-- Logo/Home link -->
      <NuxtLink to="/" class="home-link flex-shrink-0">
        <FontAwesomeIcon icon="fa-solid fa-house" class="text-xl md:text-2xl" />
      </NuxtLink>
      
      <!-- Centered Title -->
      <NuxtLink to="/" class="title-link absolute left-1/2 transform -translate-x-1/2">
        <h1 class="title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center whitespace-nowrap">
          Radical Prospérité
        </h1>
      </NuxtLink>
      
      <!-- Right side: Adhesion button + Settings -->
      <div class="flex items-center gap-3 md:gap-4 flex-shrink-0">
        <!-- Adhesion Button -->
        <NuxtLink to="/adhesion" class="adhesion-btn px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105">
          <FontAwesomeIcon icon="fa-solid fa-user-plus" class="mr-1 md:mr-2" />
          <span class="hidden sm:inline">Adhésion</span>
        </NuxtLink>
        
        <!-- Settings -->
        <Settings />
      </div>
    </div>

    <!-- Sub Navigation Bar -->
    <div class="sub-navbar border-t border-white/20">
      <div class="flex items-center justify-center gap-1 sm:gap-2 md:gap-6 py-2 px-4 overflow-x-auto">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="nav-link flex items-center gap-1 md:gap-2 px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap"
        >
          <FontAwesomeIcon :icon="link.icon" class="text-sm md:text-base" />
          <span>{{ link.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  left: 0;
  right: 0;
  background: linear-gradient(135deg, 
    rgba(0, 51, 153, 0.95) 0%, 
    rgba(0, 51, 153, 0.85) 25%,
    rgba(255, 255, 255, 0.95) 50%, 
    rgba(200, 16, 46, 0.85) 75%,
    rgba(200, 16, 46, 0.95) 100%
  );
  background-size: 300% 300%;
  animation: tricolorFlow 20s ease-in-out infinite;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.25),
    0 4px 16px rgba(0, 51, 153, 0.2),
    0 2px 8px rgba(200, 16, 46, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
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
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.5),
    0 4px 16px rgba(0, 30, 100, 0.3),
    0 2px 8px rgba(140, 10, 30, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.title-link {
  text-decoration: none;
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

.home-link {
  color: #003399;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.6rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 3px 8px rgba(0, 0, 0, 0.15),
    inset 0 1px 2px rgba(255, 255, 255, 0.8),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1);
}

.dark .home-link {
  color: #4d7fbf;
  background: rgba(30, 30, 45, 0.9);
  box-shadow: 
    0 3px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.15),
    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
}

.home-link:hover {
  transform: scale(1.1);
  box-shadow: 
    0 0 15px rgba(0, 51, 153, 0.5),
    0 5px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 3px rgba(255, 255, 255, 0.9),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1);
}

.dark .home-link:hover {
  box-shadow: 
    0 0 15px rgba(77, 127, 191, 0.5),
    0 5px 15px rgba(0, 0, 0, 0.4),
    inset 0 1px 3px rgba(255, 255, 255, 0.2),
    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
}

.adhesion-btn {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 4px 15px rgba(0, 51, 153, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.4),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15);
}

.dark .adhesion-btn {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 4px 15px rgba(77, 127, 191, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.3),
    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
}

.adhesion-btn:hover {
  box-shadow: 
    0 6px 25px rgba(200, 16, 46, 0.5),
    0 4px 12px rgba(0, 0, 0, 0.25),
    inset 0 1px 3px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

.sub-navbar {
  background: rgba(0, 0, 0, 0.1);
}

.dark .sub-navbar {
  background: rgba(0, 0, 0, 0.2);
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.2),
    inset 0 -1px 1px rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.35),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15);
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.6) 0%, rgba(200, 16, 46, 0.6) 100%);
  box-shadow: 
    0 2px 10px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.3),
    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
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
  
  .nav-link {
    padding: 0.375rem 0.5rem;
    font-size: 0.7rem;
  }
}

@media (max-width: 640px) {
  .sub-navbar {
    padding: 0 0.25rem;
  }
  
  .sub-navbar .flex {
    gap: 0.25rem;
  }
}
</style>
