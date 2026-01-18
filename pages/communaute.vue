<script setup>
import { ref } from 'vue'

// Sample community members data
const teamMembers = ref([
  {
    id: 1,
    name: 'Alexandre Dupont',
    role: 'Fondateur & Président',
    bio: 'Entrepreneur et visionnaire, passionné par la transformation politique de la France.',
    avatar: null
  },
  {
    id: 2,
    name: 'Marie Laurent',
    role: 'Vice-Présidente',
    bio: 'Experte en économie et défenseure des libertés individuelles.',
    avatar: null
  },
  {
    id: 3,
    name: 'Thomas Bernard',
    role: 'Secrétaire Général',
    bio: 'Spécialiste en organisation et communication politique.',
    avatar: null
  },
  {
    id: 4,
    name: 'Sophie Martin',
    role: 'Trésorière',
    bio: 'Comptable de formation, garante de la transparence financière.',
    avatar: null
  }
])

// Regional groups
const regionalGroups = ref([
  { name: 'Île-de-France', members: 150, leader: 'Jean-Pierre Moreau' },
  { name: 'Auvergne-Rhône-Alpes', members: 85, leader: 'Claire Rousseau' },
  { name: 'Nouvelle-Aquitaine', members: 60, leader: 'Michel Blanc' },
  { name: 'Occitanie', members: 55, leader: 'Anne-Marie Petit' },
  { name: 'Provence-Alpes-Côte d\'Azur', members: 70, leader: 'Robert Duval' },
  { name: 'Grand Est', members: 45, leader: 'François Weber' }
])

// Social links
const socialLinks = [
  { name: 'Twitter / X', icon: 'fa-brands fa-x-twitter', url: '#' },
  { name: 'Facebook', icon: 'fa-brands fa-facebook', url: '#' },
  { name: 'Instagram', icon: 'fa-brands fa-instagram', url: '#' },
  { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: '#' },
  { name: 'YouTube', icon: 'fa-brands fa-youtube', url: '#' },
  { name: 'Telegram', icon: 'fa-brands fa-telegram', url: '#' },
  { name: 'Discord', icon: 'fa-brands fa-discord', url: '#' }
]
</script>

<template>
  <main class="main-content min-h-screen pb-24">
    <div class="content-container">
      <!-- Page Header -->
      <section class="page-header mb-12 text-center">
        <div class="header-badge inline-block px-4 py-2 rounded-full mb-4 text-sm font-medium">
          <FontAwesomeIcon icon="fa-solid fa-users" class="mr-2" />
          Notre Communauté
        </div>
        <h1 class="page-title text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Communauté
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Rejoignez une communauté de citoyens engagés pour une France prospère et libre
        </p>
      </section>

      <!-- Team Section -->
      <section class="team-section mb-12">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon="fa-solid fa-user-tie" class="mr-3" />
          L'Équipe Dirigeante
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="member in teamMembers" :key="member.id" class="team-card p-6 rounded-xl text-center">
            <div class="avatar-wrapper mb-4 mx-auto">
              <div class="avatar-placeholder">
                <FontAwesomeIcon icon="fa-solid fa-user" class="text-3xl" />
              </div>
            </div>
            <h3 class="font-bold text-lg mb-1">{{ member.name }}</h3>
            <p class="role-badge inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2">
              {{ member.role }}
            </p>
            <p class="text-sm opacity-70">{{ member.bio }}</p>
          </div>
        </div>
      </section>

      <!-- Regional Groups -->
      <section class="regional-section mb-12">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon="fa-solid fa-map-marked-alt" class="mr-3" />
          Groupes Régionaux
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="group in regionalGroups" :key="group.name" class="regional-card p-5 rounded-xl">
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-bold text-lg">{{ group.name }}</h3>
              <span class="member-count px-2 py-1 rounded-full text-xs font-bold">
                {{ group.members }} membres
              </span>
            </div>
            <div class="flex items-center gap-2 text-sm opacity-70">
              <FontAwesomeIcon icon="fa-solid fa-user-shield" />
              <span>Responsable: {{ group.leader }}</span>
            </div>
            <button class="join-btn mt-4 w-full py-2 rounded-lg text-sm font-semibold">
              Rejoindre le groupe
            </button>
          </div>
        </div>
      </section>

      <!-- Community Values -->
      <section class="values-section mb-12">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon="fa-solid fa-heart" class="mr-3" />
          Nos Valeurs Communautaires
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="value-card p-6 rounded-xl text-center">
            <div class="value-icon mb-4">
              <FontAwesomeIcon icon="fa-solid fa-handshake" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-2">Solidarité</h3>
            <p class="text-sm opacity-70">
              Nous nous entraidons et nous soutenons mutuellement dans nos actions et projets.
            </p>
          </div>
          
          <div class="value-card p-6 rounded-xl text-center">
            <div class="value-icon mb-4">
              <FontAwesomeIcon icon="fa-solid fa-comments" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-2">Dialogue</h3>
            <p class="text-sm opacity-70">
              Le débat constructif et le respect des opinions sont au cœur de notre communauté.
            </p>
          </div>
          
          <div class="value-card p-6 rounded-xl text-center">
            <div class="value-icon mb-4">
              <FontAwesomeIcon icon="fa-solid fa-rocket" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-2">Action</h3>
            <p class="text-sm opacity-70">
              Ensemble, nous passons à l'action pour transformer nos idées en réalité.
            </p>
          </div>
        </div>
      </section>

      <!-- Social Media Section -->
      <section class="social-section mb-12">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-6 text-center">
          <FontAwesomeIcon icon="fa-solid fa-share-nodes" class="mr-3" />
          Suivez-nous
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            class="social-btn p-4 rounded-xl flex flex-col items-center gap-2"
            target="_blank"
          >
            <FontAwesomeIcon :icon="social.icon" class="text-2xl" />
            <span class="text-sm font-medium">{{ social.name }}</span>
          </a>
        </div>
      </section>

      <!-- Join CTA -->
      <section class="join-cta-section p-8 rounded-2xl text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">
          <FontAwesomeIcon icon="fa-solid fa-user-plus" class="mr-3" />
          Rejoignez la Communauté
        </h2>
        <p class="text-lg mb-6 opacity-80 max-w-2xl mx-auto">
          Faites partie du mouvement. Adhérez dès aujourd'hui et participez activement à la construction d'une nouvelle France.
        </p>
        <NuxtLink to="/adhesion" class="cta-btn inline-block px-8 py-4 rounded-lg font-bold text-lg">
          Devenir Membre
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" class="ml-2" />
        </NuxtLink>
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

.page-header {
  padding-top: 2rem;
}

.header-badge {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.15) 0%, rgba(200, 16, 46, 0.15) 100%);
  border: 1px solid rgba(0, 51, 153, 0.3);
}

.dark .header-badge {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.2) 0%, rgba(255, 77, 109, 0.2) 100%);
  border-color: rgba(77, 127, 191, 0.4);
}

.page-title {
  font-family: 'Ethnocentric', 'Orbitron', sans-serif;
  background: linear-gradient(135deg, #003399 0%, #1a1a2e 50%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .page-title {
  background: linear-gradient(135deg, #4d7fbf 0%, #ffffff 50%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-title {
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .section-title {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Team Cards */
.team-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 51, 153, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.dark .team-card {
  background: rgba(30, 30, 45, 0.9);
  border-color: rgba(77, 127, 191, 0.2);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 51, 153, 0.15);
}

.dark .team-card:hover {
  box-shadow: 0 15px 30px rgba(77, 127, 191, 0.2);
}

.avatar-wrapper {
  width: 80px;
  height: 80px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.2) 0%, rgba(200, 16, 46, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #003399;
}

.dark .avatar-placeholder {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.2) 0%, rgba(255, 77, 109, 0.2) 100%);
  border-color: #4d7fbf;
}

.role-badge {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
}

.dark .role-badge {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

/* Regional Cards */
.regional-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 51, 153, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.dark .regional-card {
  background: rgba(30, 30, 45, 0.9);
  border-color: rgba(77, 127, 191, 0.2);
}

.regional-card:hover {
  border-color: rgba(200, 16, 46, 0.4);
}

.dark .regional-card:hover {
  border-color: rgba(255, 77, 109, 0.4);
}

.member-count {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
}

.dark .member-count {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

.join-btn {
  background: transparent;
  border: 2px solid #003399;
  color: #003399;
  transition: all 0.3s ease;
}

.dark .join-btn {
  border-color: #4d7fbf;
  color: #4d7fbf;
}

.join-btn:hover {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
  border-color: transparent;
}

.dark .join-btn:hover {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

/* Value Cards */
.value-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 51, 153, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.dark .value-card {
  background: rgba(30, 30, 45, 0.9);
  border-color: rgba(77, 127, 191, 0.2);
}

.value-card:hover {
  transform: translateY(-3px);
}

.value-icon {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .value-icon {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Social Buttons */
.social-btn {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 51, 153, 0.15);
  color: var(--text-light);
  min-width: 100px;
  transition: all 0.3s ease;
}

.dark .social-btn {
  background: rgba(30, 30, 45, 0.9);
  border-color: rgba(77, 127, 191, 0.2);
  color: var(--text-dark);
}

.social-btn:hover {
  transform: translateY(-3px);
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.1) 0%, rgba(200, 16, 46, 0.1) 100%);
  border-color: rgba(200, 16, 46, 0.4);
}

.dark .social-btn:hover {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.1) 0%, rgba(255, 77, 109, 0.1) 100%);
  border-color: rgba(255, 77, 109, 0.4);
}

/* Join CTA */
.join-cta-section {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(200, 16, 46, 0.1) 100%);
  border: 2px solid rgba(0, 51, 153, 0.2);
}

.dark .join-cta-section {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.15) 0%, rgba(30, 30, 45, 0.95) 50%, rgba(255, 77, 109, 0.15) 100%);
  border-color: rgba(77, 127, 191, 0.3);
}

.cta-btn {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
  transition: all 0.3s ease;
}

.dark .cta-btn {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 51, 153, 0.3);
}

.dark .cta-btn:hover {
  box-shadow: 0 10px 30px rgba(77, 127, 191, 0.3);
}
</style>
