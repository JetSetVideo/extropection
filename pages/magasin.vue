<script setup>
import { ref } from 'vue'

// Product categories
const categories = ref(['Tous', 'Vêtements', 'Accessoires', 'Livres', 'Affiches'])
const selectedCategory = ref('Tous')

// Products
const products = ref([
  {
    id: 1,
    name: 'T-Shirt Radical Prospérité',
    description: 'T-shirt officiel avec le logo du parti.',
    price: 25.00,
    category: 'Vêtements',
    image: null,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true
  },
  {
    id: 2,
    name: 'Casquette Tricolore',
    description: 'Casquette aux couleurs de la France.',
    price: 18.00,
    category: 'Accessoires',
    image: null,
    inStock: true
  },
  {
    id: 3,
    name: 'Sweat à Capuche',
    description: 'Sweat confortable avec broderie du logo.',
    price: 45.00,
    category: 'Vêtements',
    image: null,
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 4,
    name: 'Pin\'s Officiel',
    description: 'Pin\'s émaillé avec le logo du parti.',
    price: 8.00,
    category: 'Accessoires',
    image: null,
    inStock: true
  },
  {
    id: 5,
    name: 'Manifeste de la Prospérité',
    description: 'Livre fondateur présentant notre vision politique.',
    price: 15.00,
    category: 'Livres',
    image: null,
    inStock: true
  },
  {
    id: 6,
    name: 'Affiche "Liberté"',
    description: 'Affiche de propagande artistique, format A2.',
    price: 12.00,
    category: 'Affiches',
    image: null,
    inStock: false
  },
  {
    id: 7,
    name: 'Mug Tricolore',
    description: 'Mug en céramique avec citation inspirante.',
    price: 14.00,
    category: 'Accessoires',
    image: null,
    inStock: true
  },
  {
    id: 8,
    name: 'Drapeau du Parti',
    description: 'Drapeau officiel, 150x90cm.',
    price: 35.00,
    category: 'Accessoires',
    image: null,
    inStock: true
  }
])

// Filtered products
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return products.value
  }
  return products.value.filter(p => p.category === selectedCategory.value)
})

// Cart (simplified)
const cart = ref([])

const addToCart = (product) => {
  const existing = cart.value.find(item => item.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
}

const cartTotal = computed(() => {
  return cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const cartCount = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.quantity, 0)
})
</script>

<template>
  <main class="main-content min-h-screen pb-24">
    <div class="content-container">
      <!-- Page Header -->
      <section class="page-header mb-12 text-center">
        <div class="header-badge inline-block px-4 py-2 rounded-full mb-4 text-sm font-medium">
          <FontAwesomeIcon icon="fa-solid fa-store" class="mr-2" />
          Boutique Officielle
        </div>
        <h1 class="page-title text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Magasin
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Soutenez le mouvement en portant fièrement nos couleurs
        </p>
      </section>

      <!-- Cart Summary -->
      <section class="cart-summary mb-8">
        <div class="cart-bar p-4 rounded-xl flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="cart-icon-wrapper p-3 rounded-full">
              <FontAwesomeIcon icon="fa-solid fa-shopping-cart" class="text-xl" />
            </div>
            <div>
              <span class="font-bold">{{ cartCount }}</span> article(s) dans le panier
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-lg font-bold">{{ cartTotal.toFixed(2) }} €</span>
            <button class="checkout-btn px-6 py-2 rounded-lg font-semibold" :disabled="cartCount === 0">
              Commander
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" class="ml-2" />
            </button>
          </div>
        </div>
      </section>

      <!-- Category Filter -->
      <section class="filter-section mb-8">
        <div class="flex flex-wrap justify-center gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectedCategory = cat"
            class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-all"
            :class="{ 'active': selectedCategory === cat }"
          >
            {{ cat }}
          </button>
        </div>
      </section>

      <!-- Products Grid -->
      <section class="products-section mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="product in filteredProducts" :key="product.id" class="product-card rounded-xl overflow-hidden">
            <!-- Product Image Placeholder -->
            <div class="product-image aspect-square flex items-center justify-center">
              <FontAwesomeIcon 
                :icon="product.category === 'Vêtements' ? 'fa-solid fa-shirt' : 
                       product.category === 'Livres' ? 'fa-solid fa-book' :
                       product.category === 'Affiches' ? 'fa-solid fa-image' :
                       'fa-solid fa-gift'" 
                class="text-5xl opacity-30" 
              />
            </div>
            
            <!-- Product Info -->
            <div class="product-info p-4">
              <div class="flex items-start justify-between mb-2">
                <h3 class="font-bold text-lg">{{ product.name }}</h3>
                <span v-if="!product.inStock" class="out-of-stock-badge px-2 py-0.5 rounded text-xs">
                  Rupture
                </span>
              </div>
              <p class="text-sm opacity-70 mb-3">{{ product.description }}</p>
              
              <!-- Sizes if applicable -->
              <div v-if="product.sizes" class="sizes mb-3">
                <span class="text-xs opacity-50 block mb-1">Tailles:</span>
                <div class="flex gap-1">
                  <span v-for="size in product.sizes" :key="size" class="size-tag px-2 py-0.5 rounded text-xs">
                    {{ size }}
                  </span>
                </div>
              </div>
              
              <div class="flex items-center justify-between mt-4">
                <span class="price text-xl font-bold">{{ product.price.toFixed(2) }} €</span>
                <button 
                  @click="addToCart(product)"
                  class="add-btn px-4 py-2 rounded-lg text-sm font-semibold"
                  :disabled="!product.inStock"
                >
                  <FontAwesomeIcon icon="fa-solid fa-cart-plus" class="mr-1" />
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Info Section -->
      <section class="info-section grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="info-card p-5 rounded-xl text-center">
          <div class="info-icon mb-3">
            <FontAwesomeIcon icon="fa-solid fa-truck" class="text-3xl" />
          </div>
          <h3 class="font-bold mb-2">Livraison Gratuite</h3>
          <p class="text-sm opacity-70">À partir de 50€ d'achat en France métropolitaine</p>
        </div>
        
        <div class="info-card p-5 rounded-xl text-center">
          <div class="info-icon mb-3">
            <FontAwesomeIcon icon="fa-solid fa-shield-check" class="text-3xl" />
          </div>
          <h3 class="font-bold mb-2">Paiement Sécurisé</h3>
          <p class="text-sm opacity-70">Vos transactions sont 100% sécurisées</p>
        </div>
        
        <div class="info-card p-5 rounded-xl text-center">
          <div class="info-icon mb-3">
            <FontAwesomeIcon icon="fa-solid fa-rotate-left" class="text-3xl" />
          </div>
          <h3 class="font-bold mb-2">Retours Faciles</h3>
          <p class="text-sm opacity-70">30 jours pour changer d'avis</p>
        </div>
      </section>

      <!-- Support Note -->
      <section class="support-section p-6 rounded-2xl text-center">
        <FontAwesomeIcon icon="fa-solid fa-heart" class="text-3xl mb-4" style="color: #c8102e" />
        <h2 class="text-xl font-bold mb-2">Vos achats soutiennent notre cause</h2>
        <p class="text-sm opacity-70 max-w-xl mx-auto">
          100% des bénéfices de la boutique sont réinvestis dans les actions du parti. 
          En achetant nos produits, vous contribuez directement à la construction d'une France prospère.
        </p>
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

/* Cart Bar */
.cart-bar {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.1) 0%, rgba(200, 16, 46, 0.1) 100%);
  border: 1px solid rgba(0, 51, 153, 0.2);
}

.dark .cart-bar {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.15) 0%, rgba(255, 77, 109, 0.15) 100%);
  border-color: rgba(77, 127, 191, 0.3);
}

.cart-icon-wrapper {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
}

.dark .cart-icon-wrapper {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

.checkout-btn {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
  transition: all 0.3s ease;
}

.dark .checkout-btn {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

.checkout-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 51, 153, 0.3);
}

.checkout-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Filter Buttons */
.filter-btn {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 51, 153, 0.2);
  color: var(--text-light);
}

.dark .filter-btn {
  background: rgba(30, 30, 45, 0.9);
  border-color: rgba(77, 127, 191, 0.2);
  color: var(--text-dark);
}

.filter-btn:hover {
  border-color: rgba(200, 16, 46, 0.5);
}

.dark .filter-btn:hover {
  border-color: rgba(255, 77, 109, 0.5);
}

.filter-btn.active {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
  border-color: transparent;
}

.dark .filter-btn.active {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

/* Product Cards */
.product-card {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 51, 153, 0.15);
  transition: all 0.3s ease;
}

.dark .product-card {
  background: rgba(30, 30, 45, 0.95);
  border-color: rgba(77, 127, 191, 0.2);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 51, 153, 0.15);
  border-color: rgba(200, 16, 46, 0.3);
}

.dark .product-card:hover {
  box-shadow: 0 15px 30px rgba(77, 127, 191, 0.2);
  border-color: rgba(255, 77, 109, 0.4);
}

.product-image {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.05) 0%, rgba(200, 16, 46, 0.05) 100%);
}

.dark .product-image {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.1) 0%, rgba(255, 77, 109, 0.1) 100%);
}

.out-of-stock-badge {
  background: #c8102e;
  color: white;
}

.size-tag {
  background: rgba(0, 51, 153, 0.1);
  border: 1px solid rgba(0, 51, 153, 0.2);
}

.dark .size-tag {
  background: rgba(77, 127, 191, 0.1);
  border-color: rgba(77, 127, 191, 0.2);
}

.price {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .price {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.add-btn {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  color: white;
  transition: all 0.3s ease;
}

.dark .add-btn {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
}

.add-btn:hover:not(:disabled) {
  transform: scale(1.05);
}

.add-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Info Cards */
.info-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 51, 153, 0.15);
}

.dark .info-card {
  background: rgba(30, 30, 45, 0.9);
  border-color: rgba(77, 127, 191, 0.2);
}

.info-icon {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .info-icon {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Support Section */
.support-section {
  background: linear-gradient(135deg, rgba(0, 51, 153, 0.08) 0%, rgba(200, 16, 46, 0.08) 100%);
  border: 2px solid rgba(200, 16, 46, 0.2);
}

.dark .support-section {
  background: linear-gradient(135deg, rgba(77, 127, 191, 0.1) 0%, rgba(255, 77, 109, 0.1) 100%);
  border-color: rgba(255, 77, 109, 0.3);
}
</style>
