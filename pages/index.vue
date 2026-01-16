<script setup>
import { ref } from 'vue'

// Meet-up data (can be updated when there's a planned meet-up)
const nextMeetup = ref(null) // Set to { date: '2026-02-15', time: '19:00', location: 'Paris', title: 'Nom du meet-up' } when planned
</script>

<template>
  <main class="main-content min-h-screen pb-24">
    <!-- Content Container with centered margins -->
    <div class="content-container">
      <!-- Hero Section -->
      <section class="hero-section mb-12 md:mb-16 text-center">
        <div class="hero-badge inline-block px-4 py-2 rounded-full mb-6 text-sm font-medium">
          🇫🇷 Parti Libertarien Parisien
        </div>
        <h1 class="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Radical Prospérité
        </h1>
        <p class="hero-subtitle text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
          Liberté • Responsabilité • Prospérité
        </p>
      </section>

      <!-- Quote Section -->
      <section class="quote-section mb-12 md:mb-16 p-6 md:p-8 rounded-2xl">
        <blockquote class="text-xl md:text-2xl italic text-center mb-4">
          « La justice sans la force est impuissante ; la force sans la justice est tyrannique. »
        </blockquote>
        <p class="text-base md:text-lg text-center opacity-70">— Blaise Pascal</p>
      </section>

      <!-- Next Meet-up Section -->
      <section class="meetup-section mb-12 md:mb-16">
        <h2 class="section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Prochain Meet-up</h2>
        
        <div v-if="nextMeetup" class="meetup-card p-6 md:p-8 rounded-2xl">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div class="meetup-date-badge flex flex-col items-center justify-center p-4 rounded-xl min-w-24">
              <span class="text-3xl font-bold">{{ new Date(nextMeetup.date).getDate() }}</span>
              <span class="text-sm uppercase">{{ new Date(nextMeetup.date).toLocaleDateString('fr-FR', { month: 'short' }) }}</span>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-xl md:text-2xl font-bold mb-2">{{ nextMeetup.title }}</h3>
              <div class="meetup-details flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 text-sm opacity-80">
                <span class="flex items-center justify-center md:justify-start gap-2">
                  <FontAwesomeIcon icon="fa-solid fa-clock" />
                  {{ nextMeetup.time }}
                </span>
                <span class="flex items-center justify-center md:justify-start gap-2">
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  {{ nextMeetup.location }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="meetup-empty p-8 md:p-12 rounded-2xl text-center">
          <div class="meetup-empty-icon mb-4">
            <FontAwesomeIcon icon="fa-solid fa-calendar-xmark" class="text-4xl md:text-5xl" />
          </div>
          <p class="text-lg md:text-xl font-medium opacity-80">Aucun meet-up prévu</p>
          <p class="text-sm md:text-base opacity-60 mt-2">Suivez-nous pour être informé des prochains événements</p>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section mb-12 md:mb-16 text-center">
        <h2 class="section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Notre Mission</h2>
        <p class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Définir un nouveau modèle politique pour notre pays. Chaque génération devrait écrire ses lois. 
          Dans notre société moderne, l'encre a été remplacée par le bit.
        </p>
      </section>

      <!-- Values Grid -->
      <section class="values-section mb-12 md:mb-16">
        <h2 class="section-title text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">Nos Valeurs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Justice Card -->
          <div class="value-card p-6 rounded-2xl">
            <div class="card-header flex items-center gap-4 mb-4">
              <div class="card-icon-wrapper">
                <FontAwesomeIcon icon="fa-solid fa-scale-balanced" class="text-2xl md:text-3xl" />
              </div>
              <h3 class="text-xl md:text-2xl font-bold">Justice</h3>
            </div>
            <p class="text-sm md:text-base opacity-80">
              Instaurer un contrôle judiciaire strict des juges et des procureurs. 
              Un suivi rigoureux de leurs jugements et des conséquences sur la société.
            </p>
          </div>

          <!-- Liberté Card -->
          <div class="value-card p-6 rounded-2xl">
            <div class="card-header flex items-center gap-4 mb-4">
              <div class="card-icon-wrapper">
                <FontAwesomeIcon icon="fa-solid fa-dove" class="text-2xl md:text-3xl" />
              </div>
              <h3 class="text-xl md:text-2xl font-bold">Liberté</h3>
            </div>
            <p class="text-sm md:text-base opacity-80">
              Défendre les libertés individuelles fondamentales. 
              Réduire l'emprise de l'État sur la vie des citoyens.
            </p>
          </div>

          <!-- Prospérité Card -->
          <div class="value-card p-6 rounded-2xl">
            <div class="card-header flex items-center gap-4 mb-4">
              <div class="card-icon-wrapper">
                <FontAwesomeIcon icon="fa-solid fa-chart-line" class="text-2xl md:text-3xl" />
              </div>
              <h3 class="text-xl md:text-2xl font-bold">Prospérité</h3>
            </div>
            <p class="text-sm md:text-base opacity-80">
              Favoriser l'entrepreneuriat et l'innovation. 
              Alléger la fiscalité pour libérer le potentiel économique.
            </p>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="cta-section text-center p-8 md:p-12 rounded-2xl">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Rejoignez le Mouvement</h2>
        <p class="text-lg md:text-xl mb-8 opacity-90">
          Suivez-nous sur les réseaux sociaux et participez à la construction d'une France prospère.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="cta-tag px-4 py-2 rounded-full text-sm font-medium">#RadicalProspérité</span>
          <span class="cta-tag px-4 py-2 rounded-full text-sm font-medium">#LibertéParis</span>
          <span class="cta-tag px-4 py-2 rounded-full text-sm font-medium">#FranceLibre</span>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  color: var(--text-light);
}

.dark .main-content {
  color: var(--text-dark);
}

/* Content Container - Centers all content with proper margins */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .content-container {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .content-container {
    padding: 0 3rem;
  }
}

@media (min-width: 1280px) {
  .content-container {
    padding: 0 4rem;
  }
}

/* Hero Section */
.hero-section {
  padding-top: 2rem;
}

.hero-badge {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.15) 0%, rgba(200, 16, 46, 0.15) 100%);
  border: 1px solid rgba(0, 51, 153, 0.3);
  color: var(--text-light);
}

.dark .hero-badge {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.2) 0%, rgba(255, 77, 109, 0.2) 100%);
  border: 1px solid rgba(77, 127, 191, 0.4);
  color: var(--text-dark);
}

.hero-title {
  font-family: 'Ethnocentric', 'Orbitron', sans-serif;
  background: linear-gradient(135deg, #003399 0%, #1a1a2e 50%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.dark .hero-title {
  background: linear-gradient(135deg, #4d7fbf 0%, #ffffff 50%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  color: var(--text-light);
  letter-spacing: 0.3em;
}

.dark .hero-subtitle {
  color: var(--text-dark);
}

/* Quote Section */
.quote-section {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.08) 0%, rgba(200, 16, 46, 0.08) 100%);
  border-left: 4px solid #003399;
  border-right: 4px solid #c8102e;
}

.dark .quote-section {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.15) 0%, rgba(255, 77, 109, 0.15) 100%);
  border-left: 4px solid #4d7fbf;
  border-right: 4px solid #ff4d6d;
}

/* Meet-up Section */
.meetup-card {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.1) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(200, 16, 46, 0.1) 100%);
  border: 2px solid rgba(0, 51, 153, 0.3);
  backdrop-filter: blur(10px);
}

.dark .meetup-card {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.15) 0%, rgba(30, 30, 45, 0.95) 50%, rgba(255, 77, 109, 0.15) 100%);
  border: 2px solid rgba(77, 127, 191, 0.4);
}

.meetup-date-badge {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
}

.dark .meetup-date-badge {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

.meetup-empty {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.05) 0%, rgba(200, 16, 46, 0.05) 100%);
  border: 2px dashed rgba(0, 51, 153, 0.3);
}

.dark .meetup-empty {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.1) 0%, rgba(255, 77, 109, 0.1) 100%);
  border: 2px dashed rgba(77, 127, 191, 0.4);
}

.meetup-empty-icon {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.6;
}

.dark .meetup-empty-icon {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Section Titles */
.section-title {
  font-family: 'Orbitron', sans-serif;
  color: var(--text-light);
  position: relative;
  display: inline-block;
}

.dark .section-title {
  color: var(--text-dark);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #003399 0%, #c8102e 100%);
  border-radius: 2px;
}

/* Value Cards - Icons and titles horizontally aligned */
.value-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 51, 153, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  color: var(--text-light);
}

.dark .value-card {
  background: rgba(30, 30, 45, 0.9);
  border: 1px solid rgba(77, 127, 191, 0.3);
  color: var(--text-dark);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 51, 153, 0.15), 0 10px 20px rgba(200, 16, 46, 0.1);
  border-color: rgba(200, 16, 46, 0.4);
}

.dark .value-card:hover {
  box-shadow: 0 20px 40px rgba(77, 127, 191, 0.2), 0 10px 20px rgba(255, 77, 109, 0.15);
  border-color: rgba(255, 77, 109, 0.5);
}

.card-header {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.card-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.15) 0%, rgba(200, 16, 46, 0.15) 100%);
  flex-shrink: 0;
}

.dark .card-icon-wrapper {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.2) 0%, rgba(255, 77, 109, 0.2) 100%);
}

.card-icon-wrapper svg {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .card-icon-wrapper svg {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(200, 16, 46, 0.1) 100%);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
}

.cta-section::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(135deg, #003399 0%, #ffffff 50%, #c8102e 100%);
  z-index: -1;
  border-radius: 1rem;
}

.dark .cta-section {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.15) 0%, rgba(30, 30, 45, 0.95) 50%, rgba(255, 77, 109, 0.15) 100%);
}

.dark .cta-section::before {
  background: linear-gradient(135deg, #4d7fbf 0%, #333344 50%, #ff4d6d 100%);
}

.cta-tag {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.2) 0%, rgba(200, 16, 46, 0.2) 100%);
  border: 1px solid rgba(0, 51, 153, 0.4);
  color: var(--text-light);
  transition: all 0.3s ease;
}

.dark .cta-tag {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.3) 0%, rgba(255, 77, 109, 0.3) 100%);
  border: 1px solid rgba(77, 127, 191, 0.5);
  color: var(--text-dark);
}

.cta-tag:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(200, 16, 46, 0.3);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .hero-section {
    padding-top: 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    letter-spacing: 0.15em;
    font-size: 1rem;
  }
  
  .quote-section blockquote {
    font-size: 1.1rem;
  }
  
  .card-icon-wrapper {
    width: 40px;
    height: 40px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
}
</style>
