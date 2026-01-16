<script setup>
</script>

<template>
  <main class="main-content min-h-screen pb-24">
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
    <section class="quote-section mb-12 md:mb-16 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
      <blockquote class="text-xl md:text-2xl italic text-center mb-4">
        « La justice sans la force est impuissante ; la force sans la justice est tyrannique. »
      </blockquote>
      <p class="text-base md:text-lg text-center opacity-70">— Blaise Pascal</p>
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
          <div class="card-icon mb-4">
            <FontAwesomeIcon icon="fa-solid fa-scale-balanced" class="text-3xl md:text-4xl" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold mb-3">Justice</h3>
          <p class="text-sm md:text-base opacity-80">
            Instaurer un contrôle judiciaire strict des juges et des procureurs. 
            Un suivi rigoureux de leurs jugements et des conséquences sur la société.
          </p>
        </div>

        <!-- Liberté Card -->
        <div class="value-card p-6 rounded-2xl">
          <div class="card-icon mb-4">
            <FontAwesomeIcon icon="fa-solid fa-dove" class="text-3xl md:text-4xl" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold mb-3">Liberté</h3>
          <p class="text-sm md:text-base opacity-80">
            Défendre les libertés individuelles fondamentales. 
            Réduire l'emprise de l'État sur la vie des citoyens.
          </p>
        </div>

        <!-- Prospérité Card -->
        <div class="value-card p-6 rounded-2xl">
          <div class="card-icon mb-4">
            <FontAwesomeIcon icon="fa-solid fa-chart-line" class="text-3xl md:text-4xl" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold mb-3">Prospérité</h3>
          <p class="text-sm md:text-base opacity-80">
            Favoriser l'entrepreneuriat et l'innovation. 
            Alléger la fiscalité pour libérer le potentiel économique.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section text-center p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
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
  </main>
</template>

<style scoped>
.main-content {
  color: var(--text-light);
}

.dark .main-content {
  color: var(--text-dark);
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

/* Value Cards */
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

.card-icon {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .card-icon {
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
}

@media (min-width: 641px) and (max-width: 1024px) {
  .hero-title {
    font-size: 3.5rem;
  }
}
</style>
