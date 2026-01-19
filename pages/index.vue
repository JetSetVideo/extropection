<script setup>
import { ref } from 'vue'

// Meet-up data (can be updated when there's a planned meet-up)
const nextMeetup = ref(null) // Set to { date: '2026-02-15', time: '19:00', location: 'Paris', title: 'Nom du meet-up' } when planned
</script>

<template>
  <main class="main-content min-h-screen pb-24">
    <!-- Grey transparent background container -->
    <div class="page-background">
      <!-- Content Container with centered margins -->
      <div class="content-container">
        <!-- Hero Section -->
        <section class="hero-section mb-10 md:mb-14 text-center mx-4 md:mx-8 lg:mx-12">
          <h1 class="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Système politique décentralisé autonome
          </h1>
          <div class="hero-badge inline-block px-4 py-2 rounded-full mb-4 text-sm font-medium">
            🇫🇷 Parti Libertarien Parisien
          </div>
          <p class="hero-subtitle text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Bonté • Fierté • Force
          </p>
        </section>

        <!-- Quote Section -->
        <section class="quote-section mb-10 md:mb-14 p-5 md:p-7 rounded-2xl mx-4 md:mx-8 lg:mx-12">
          <blockquote class="text-lg md:text-xl italic text-center mb-3">
            « La justice sans la force est impuissante ; la force sans la justice est tyrannique. »
          </blockquote>
          <p class="text-sm md:text-base text-center opacity-70">— Blaise Pascal</p>
        </section>

        <!-- Next Meet-up Section -->
        <section class="meetup-section mb-10 md:mb-14 mx-4 md:mx-8 lg:mx-12">
          <h2 class="section-title text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Prochain Meet-up</h2>
        
          <div v-if="nextMeetup" class="meetup-card p-5 md:p-7 rounded-2xl">
            <div class="flex flex-col md:flex-row items-center md:items-start gap-5">
              <div class="meetup-date-badge flex flex-col items-center justify-center p-3 rounded-xl min-w-20">
                <span class="text-2xl font-bold">{{ new Date(nextMeetup.date).getDate() }}</span>
                <span class="text-xs uppercase">{{ new Date(nextMeetup.date).toLocaleDateString('fr-FR', { month: 'short' }) }}</span>
              </div>
              <div class="flex-1 text-center md:text-left">
                <h3 class="text-lg md:text-xl font-bold mb-1.5">{{ nextMeetup.title }}</h3>
                <div class="meetup-details flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 text-sm opacity-80">
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
          
          <div v-else class="meetup-empty p-6 md:p-10 rounded-2xl text-center">
            <div class="meetup-empty-icon mb-3">
              <FontAwesomeIcon icon="fa-solid fa-calendar-xmark" class="text-3xl md:text-4xl" />
            </div>
            <p class="text-base md:text-lg font-medium opacity-80">Aucun meet-up prévu</p>
            <p class="text-xs md:text-sm opacity-60 mt-1.5">Suivez-nous pour être informé des prochains événements</p>
          </div>
        </section>

        <!-- Mission Section -->
        <section class="mission-section mb-10 md:mb-14 text-center mx-4 md:mx-8 lg:mx-12">
          <h3 class="text-base md:text-lg font-semibold mb-1">Objectif:</h3> 
          <p class="text-sm md:text-base mb-4">Assurer la Gestion sociale optimale de la France</p>
          <h2 class="section-title text-xl sm:text-2xl md:text-3xl font-bold mb-5">Notre Mission</h2>
          <p class="text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Définir un nouveau modèle politique pour notre pays. Chaque génération devrait écrire ses lois. 
            Offrir un appareil administratif efficace et transparent pour garantir la bonne gouvernance citoyenne de la France.
            Dans notre société moderne, l'encre a été remplacée par le bit.
            Proposer une application pour offrir aux citoyens une maîtrise totale de la gestion de l'état.
          </p>
        </section>

        <!-- Values Grid -->
        <section class="values-section mb-10 md:mb-14 mx-4 md:mx-8 lg:mx-12">
          <h2 class="section-title text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Nos Valeurs</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <!-- Justice Card -->
            <div class="value-card p-5 rounded-2xl">
              <div class="card-header flex items-center gap-3 mb-2 px-3 py-2">
                <div class="card-icon-wrapper">
                  <FontAwesomeIcon icon="fa-solid fa-scale-balanced" class="text-xl md:text-2xl" />
                </div>
                <h3 class="text-lg md:text-xl font-bold">Justice</h3>
              </div>
              <p class="text-sm opacity-80 px-2">
                Instaurer un contrôle judiciaire strict des juges et des procureurs. 
                Un suivi rigoureux de leurs jugements et des conséquences sur la société.
              </p>
            </div>

            <!-- Liberté Card -->
            <div class="value-card p-5 rounded-2xl">
              <div class="card-header flex items-center gap-3 mb-2 px-3 py-2">
                <div class="card-icon-wrapper">
                  <FontAwesomeIcon icon="fa-solid fa-dove" class="text-xl md:text-2xl" />
                </div>
                <h3 class="text-lg md:text-xl font-bold">Liberté</h3>
              </div>
              <p class="text-sm opacity-80 px-2">
                Défendre les libertés individuelles fondamentales. 
                Réduire l'emprise de l'État sur la vie des citoyens.
              </p>
            </div>

            <!-- Technologie Card -->
            <div class="value-card p-5 rounded-2xl">
              <div class="card-header flex items-center gap-3 mb-2 px-3 py-2">
                <div class="card-icon-wrapper">
                  <FontAwesomeIcon icon="fa-solid fa-microchip" class="text-xl md:text-2xl" />
                </div>
                <h3 class="text-lg md:text-xl font-bold">Technologie</h3>
              </div>
              <p class="text-sm opacity-80 px-2">
                Intelligence artificielle pour la gestion de l'état et assister le citoyen dans la selection de ses opinions.
                Blockchain pour garantir la transparence et la sécurité de la gestion de l'état.
                Génétique pour l'agriculture et la médecine pour assurer la santé de la nation.
              </p>
            </div>

            <!-- Prospérité Card -->
            <div class="value-card p-5 rounded-2xl">
              <div class="card-header flex items-center gap-3 mb-2 px-3 py-2">
                <div class="card-icon-wrapper">
                  <FontAwesomeIcon icon="fa-solid fa-chart-line" class="text-xl md:text-2xl" />
                </div>
                <h3 class="text-lg md:text-xl font-bold">Prospérité</h3>
              </div>
              <p class="text-sm opacity-80 px-2">
                Favoriser l'entrepreneuriat et l'innovation. 
                Alléger la fiscalité pour libérer le potentiel économique.
              </p>
            </div>
          </div>
        </section>

        <!-- Call to Action -->
        <section class="cta-section text-center p-6 md:p-10 rounded-2xl mx-4 md:mx-8 lg:mx-12">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Rejoignez le Mouvement</h2>
          <p class="text-sm md:text-base mb-6 opacity-90">
            Suivez-nous sur les réseaux sociaux et participez à la construction d'une France prospère.
          </p>
          <p class="text-sm font-semibold mb-4">
            Donation:
          </p>
          <div class="crypto-donations flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <!-- Bitcoin -->
            <div class="crypto-card flex items-center gap-3 px-4 py-3 rounded-xl">
              <div class="crypto-icon">
                <FontAwesomeIcon icon="fa-brands fa-bitcoin" class="text-xl" />
              </div>
              <div class="crypto-info text-left">
                <span class="crypto-name text-sm font-semibold block">Bitcoin</span>
                <span class="crypto-address text-xs opacity-60">Adresse à venir...</span>
              </div>
            </div>
            
            <!-- Ethereum -->
            <div class="crypto-card flex items-center gap-3 px-4 py-3 rounded-xl">
              <div class="crypto-icon">
                <FontAwesomeIcon icon="fa-brands fa-ethereum" class="text-xl" />
              </div>
              <div class="crypto-info text-left">
                <span class="crypto-name text-sm font-semibold block">Ethereum</span>
                <span class="crypto-address text-xs opacity-60">Adresse à venir...</span>
              </div>
            </div>
            
            <!-- Solana -->
            <div class="crypto-card flex items-center gap-3 px-4 py-3 rounded-xl">
              <div class="crypto-icon">
                <FontAwesomeIcon icon="fa-solid fa-coins" class="text-xl" />
              </div>
              <div class="crypto-info text-left">
                <span class="crypto-name text-sm font-semibold block">Solana</span>
                <span class="crypto-address text-xs opacity-60">Adresse à venir...</span>
              </div>
            </div>
          </div>
        </section>
      </div>
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

/* Page Background - Grey transparent */
.page-background {
  background: rgba(128, 128, 128, 0.08);
  backdrop-filter: blur(2px);
  border-radius: 24px;
  margin: 0.5rem;
  padding: 1rem 0.5rem;
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.dark .page-background {
  background: rgba(0, 0, 0, 0.15);
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

@media (min-width: 640px) {
  .page-background {
    margin: 1rem;
    padding: 1.5rem 1rem;
  }
}

@media (min-width: 1024px) {
  .page-background {
    margin: 1.5rem 2rem;
    padding: 2rem 1.5rem;
  }
}

/* Content Container - Centers all content with proper margins */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;
}

@media (min-width: 640px) {
  .content-container {
    padding: 0 1rem;
  }
}

@media (min-width: 1024px) {
  .content-container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1280px) {
  .content-container {
    padding: 0 2rem;
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
  padding: 0.75rem 1.5rem;
  box-shadow: 
    0 4px 12px rgba(0, 51, 153, 0.12),
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.05);
}

.dark .hero-badge {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.2) 0%, rgba(255, 77, 109, 0.2) 100%);
  border: 1px solid rgba(77, 127, 191, 0.4);
  color: var(--text-dark);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.12),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15);
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
  display: block;
  width: 100%;
}

.dark .section-title {
  color: var(--text-dark);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #003399 15%, 
    #c8102e 85%, 
    transparent 100%
  );
  border-radius: 2px;
  box-shadow: 
    0 2px 8px rgba(0, 51, 153, 0.3),
    0 2px 8px rgba(200, 16, 46, 0.3);
}

.dark .section-title::after {
  background: linear-gradient(90deg, 
    transparent 0%, 
    #4d7fbf 15%, 
    #ff4d6d 85%, 
    transparent 100%
  );
  box-shadow: 
    0 2px 8px rgba(77, 127, 191, 0.4),
    0 2px 8px rgba(255, 77, 109, 0.4);
}

/* Value Cards - Icons and titles horizontally aligned */
.value-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%);
  border: 1px solid rgba(0, 51, 153, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  color: var(--text-light);
  box-shadow: 
    0 8px 24px rgba(0, 51, 153, 0.08),
    0 4px 12px rgba(200, 16, 46, 0.06),
    0 2px 6px rgba(0, 0, 0, 0.05),
    inset 0 1px 2px rgba(255, 255, 255, 0.9),
    inset 0 -1px 2px rgba(0, 0, 0, 0.03);
}

.dark .value-card {
  background: linear-gradient(180deg, rgba(40, 40, 55, 0.95) 0%, rgba(25, 25, 38, 0.9) 100%);
  border: 1px solid rgba(77, 127, 191, 0.25);
  color: var(--text-dark);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.25),
    0 4px 12px rgba(77, 127, 191, 0.1),
    0 2px 6px rgba(255, 77, 109, 0.08),
    inset 0 1px 2px rgba(255, 255, 255, 0.08),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15);
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 24px 48px rgba(0, 51, 153, 0.15),
    0 12px 24px rgba(200, 16, 46, 0.1),
    0 6px 12px rgba(0, 0, 0, 0.08),
    inset 0 1px 3px rgba(255, 255, 255, 1),
    inset 0 -1px 2px rgba(0, 0, 0, 0.05);
  border-color: rgba(200, 16, 46, 0.35);
}

.dark .value-card:hover {
  box-shadow: 
    0 24px 48px rgba(0, 0, 0, 0.35),
    0 12px 24px rgba(77, 127, 191, 0.2),
    0 6px 12px rgba(255, 77, 109, 0.15),
    inset 0 1px 3px rgba(255, 255, 255, 0.12),
    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 77, 109, 0.45);
}

.card-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.06) 0%, rgba(200, 16, 46, 0.06) 100%);
  border-radius: 12px;
  margin-bottom: 0.25rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.03);
}

.dark .card-header {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.12) 0%, rgba(255, 77, 109, 0.12) 100%);
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.08),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15);
}

.card-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.2) 0%, rgba(200, 16, 46, 0.2) 100%);
  flex-shrink: 0;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  box-shadow: 
    0 3px 8px rgba(0, 51, 153, 0.12),
    inset 0 1px 2px rgba(255, 255, 255, 0.4),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1);
}

.dark .card-icon-wrapper {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.25) 0%, rgba(255, 77, 109, 0.25) 100%);
  box-shadow: 
    0 3px 8px rgba(0, 0, 0, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.15),
    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
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
  padding: 0.75rem 1.5rem;
  margin: 0.25rem;
  box-shadow: 
    0 3px 10px rgba(0, 51, 153, 0.15),
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.08);
}

.dark .cta-tag {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.3) 0%, rgba(255, 77, 109, 0.3) 100%);
  border: 1px solid rgba(77, 127, 191, 0.5);
  color: var(--text-dark);
  box-shadow: 
    0 3px 10px rgba(0, 0, 0, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.15),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15);
}

.cta-tag:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 
    0 8px 20px rgba(200, 16, 46, 0.35),
    0 4px 10px rgba(0, 51, 153, 0.2),
    inset 0 1px 3px rgba(255, 255, 255, 0.6),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1);
}

.dark .cta-tag:hover {
  box-shadow: 
    0 8px 20px rgba(255, 77, 109, 0.35),
    0 4px 10px rgba(77, 127, 191, 0.25),
    inset 0 1px 3px rgba(255, 255, 255, 0.2),
    inset 0 -1px 2px rgba(0, 0, 0, 0.2);
}

/* Crypto Donation Cards */
.crypto-donations {
  gap: 1rem;
}

.crypto-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.85) 100%);
  border: 1px solid rgba(0, 51, 153, 0.2);
  border-radius: 14px;
  transition: all 0.3s ease;
  min-width: 180px;
  box-shadow: 
    0 4px 12px rgba(0, 51, 153, 0.08),
    inset 0 1px 2px rgba(255, 255, 255, 0.8),
    inset 0 -1px 2px rgba(0, 0, 0, 0.03);
}

.dark .crypto-card {
  background: linear-gradient(135deg, rgba(40, 40, 55, 0.9) 0%, rgba(25, 25, 38, 0.85) 100%);
  border: 1px solid rgba(77, 127, 191, 0.25);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.08),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1);
}

.crypto-card:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 8px 20px rgba(0, 51, 153, 0.15),
    inset 0 1px 3px rgba(255, 255, 255, 0.9),
    inset 0 -1px 2px rgba(0, 0, 0, 0.05);
}

.dark .crypto-card:hover {
  box-shadow: 
    0 8px 20px rgba(77, 127, 191, 0.2),
    inset 0 1px 3px rgba(255, 255, 255, 0.12),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15);
}

.crypto-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.15) 0%, rgba(200, 16, 46, 0.15) 100%);
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.05);
}

.dark .crypto-icon {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.2) 0%, rgba(255, 77, 109, 0.2) 100%);
}

.crypto-icon svg {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .crypto-icon svg {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.crypto-name {
  color: var(--text-light);
}

.dark .crypto-name {
  color: var(--text-dark);
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
