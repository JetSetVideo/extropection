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
  <footer class="footer fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 mx-4 sm:mx-8 md:mx-12 lg:mx-20 mb-4 rounded-xl" :class="{ 'opacity-0 pointer-events-none': !scrolled }">
    <div class="footer-content py-4 px-6">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Brand -->
        <span class="brand-text text-sm font-medium hidden sm:block">Radical Prospérité</span>
        
        <!-- Social Icons -->
        <div class="social-icons flex justify-center items-center gap-4 sm:gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter/X">
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" class="text-xl sm:text-2xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
            <FontAwesomeIcon icon="fa-brands fa-facebook" class="text-xl sm:text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
            <FontAwesomeIcon icon="fa-brands fa-instagram" class="text-xl sm:text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" class="text-xl sm:text-2xl" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Discord">
            <FontAwesomeIcon icon="fa-brands fa-discord" class="text-xl sm:text-2xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="YouTube">
            <FontAwesomeIcon icon="fa-brands fa-youtube" class="text-xl sm:text-2xl" />
          </a>
        </div>
        
        <!-- Copyright -->
        <span class="copyright-text text-xs opacity-70 hidden sm:block">© 2026 Paris</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, 
    rgba(0, 51, 153, 0.95) 0%, 
    rgba(255, 255, 255, 0.95) 50%, 
    rgba(200, 16, 46, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .footer {
  background: linear-gradient(135deg, 
    rgba(0, 30, 100, 0.95) 0%, 
    rgba(30, 30, 40, 0.95) 50%, 
    rgba(140, 10, 30, 0.95) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.brand-text {
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(90deg, #ffffff 0%, #003399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .brand-text {
  background: linear-gradient(90deg, #4d7fbf 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.copyright-text {
  color: #ffffff;
}

.dark .copyright-text {
  color: rgba(255, 255, 255, 0.7);
}

.social-link {
  color: #1a1a2e;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark .social-link {
  color: #ffffff;
}

.social-link:hover {
  transform: scale(1.2) translateY(-2px);
  color: #003399;
  text-shadow: 0 0 20px rgba(0, 51, 153, 0.5);
}

.dark .social-link:hover {
  color: #ff4d6d;
  text-shadow: 0 0 20px rgba(255, 77, 109, 0.5);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .footer {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  
  .footer-content {
    padding: 0.75rem 1rem;
  }
  
  .social-icons {
    gap: 1rem;
  }
}
</style>
