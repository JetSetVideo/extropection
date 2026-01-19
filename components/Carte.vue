<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    default: () => []
  }
})

// Default location (Paris)
const defaultCenter = { lat: 48.8566, lng: 2.3522 }

// Selected event for details
const selectedEvent = ref(null)

const selectEvent = (event) => {
  selectedEvent.value = event
}

const closeDetails = () => {
  selectedEvent.value = null
}

// Computed events with markers
const eventsWithLocation = computed(() => {
  return props.events.filter(e => e.location && e.coordinates)
})
</script>

<template>
  <div class="carte-container compact">
    <div class="carte-header mb-3">
      <h3 class="text-base md:text-lg font-bold flex items-center gap-2">
        <FontAwesomeIcon icon="fa-solid fa-map-location-dot" />
        Carte
      </h3>
    </div>

    <!-- Map Container - Compact -->
    <div class="map-wrapper compact rounded-xl overflow-hidden">
      <!-- Placeholder map with French regions -->
      <div class="map-placeholder compact">
        <svg viewBox="0 0 400 400" class="w-full h-full">
          <!-- Background -->
          <rect fill="currentColor" class="map-bg" width="400" height="400"/>
          
          <!-- Simplified France outline -->
          <path 
            d="M200,50 L280,80 L320,120 L340,180 L320,250 L280,300 L240,340 L180,350 L120,320 L80,260 L60,200 L80,140 L120,100 L160,70 Z" 
            class="france-outline"
            fill="none"
            stroke-width="3"
          />
          
          <!-- Event markers -->
          <g v-for="(event, index) in eventsWithLocation" :key="index">
            <circle 
              :cx="event.coordinates.x" 
              :cy="event.coordinates.y" 
              r="12"
              class="event-marker"
              @click="selectEvent(event)"
            />
            <circle 
              :cx="event.coordinates.x" 
              :cy="event.coordinates.y" 
              r="6"
              class="event-marker-inner"
            />
          </g>
          
          <!-- Default Paris marker if no events -->
          <g v-if="eventsWithLocation.length === 0">
            <circle cx="200" cy="150" r="15" class="default-marker pulse"/>
            <circle cx="200" cy="150" r="8" class="default-marker-inner"/>
            <text x="200" y="180" text-anchor="middle" class="city-label">Paris</text>
          </g>
          
          <!-- Major cities -->
          <text x="200" y="155" text-anchor="middle" class="city-label" v-if="eventsWithLocation.length > 0">Paris</text>
          <text x="130" y="280" text-anchor="middle" class="city-label">Bordeaux</text>
          <text x="280" y="200" text-anchor="middle" class="city-label">Lyon</text>
          <text x="320" y="280" text-anchor="middle" class="city-label">Marseille</text>
          <text x="100" y="180" text-anchor="middle" class="city-label">Nantes</text>
          <text x="270" y="120" text-anchor="middle" class="city-label">Strasbourg</text>
        </svg>

        <!-- Map legend -->
        <div class="map-legend">
          <div class="legend-item">
            <span class="legend-marker upcoming"></span>
            <span>Événement à venir</span>
          </div>
          <div class="legend-item">
            <span class="legend-marker past"></span>
            <span>Événement passé</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Event Details Popup -->
    <Transition name="popup">
      <div v-if="selectedEvent" class="event-popup" @click.self="closeDetails">
        <div class="popup-content">
          <button @click="closeDetails" class="close-btn">
            <FontAwesomeIcon icon="fa-solid fa-times" />
          </button>
          <h4 class="text-lg font-bold mb-2">{{ selectedEvent.title }}</h4>
          <div class="flex items-center gap-2 text-sm mb-2">
            <FontAwesomeIcon icon="fa-solid fa-calendar" />
            <span>{{ selectedEvent.date }}</span>
          </div>
          <div class="flex items-center gap-2 text-sm mb-2">
            <FontAwesomeIcon icon="fa-solid fa-clock" />
            <span>{{ selectedEvent.time }}</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            <span>{{ selectedEvent.location }}</span>
          </div>
          <p class="mt-3 text-sm opacity-80">{{ selectedEvent.description }}</p>
        </div>
      </div>
    </Transition>

    <!-- Events List - Compact -->
    <div class="events-list mt-4">
      <h4 class="text-sm font-semibold mb-2">Lieux de rencontre</h4>
      <div v-if="eventsWithLocation.length > 0" class="space-y-1.5">
        <div 
          v-for="event in eventsWithLocation.slice(0, 3)" 
          :key="event.id"
          class="event-item p-2 rounded-lg cursor-pointer"
          @click="selectEvent(event)"
        >
          <div class="flex items-center justify-between">
            <span class="font-medium text-xs truncate">{{ event.location.split(' - ')[0] }}</span>
            <span class="text-[10px] opacity-70">{{ new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) }}</span>
          </div>
        </div>
      </div>
      <div v-else class="no-events p-3 rounded-lg text-center">
        <FontAwesomeIcon icon="fa-solid fa-map-marker-alt" class="text-lg mb-1 opacity-50" />
        <p class="text-xs opacity-70">Aucun lieu prévu</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carte-container {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 51, 153, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 4px 16px rgba(0, 51, 153, 0.08),
    inset 0 1px 2px rgba(255, 255, 255, 0.5);
}

.carte-container.compact {
  padding: 0.875rem;
}

.dark .carte-container {
  background: rgba(30, 30, 45, 0.9);
  border: 1px solid rgba(77, 127, 191, 0.3);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.05);
}

.carte-header h3 {
  background: linear-gradient(135deg, #003399 0%, #c8102e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .carte-header h3 {
  background: linear-gradient(135deg, #4d7fbf 0%, #ff4d6d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.map-wrapper {
  border: 2px solid rgba(0, 51, 153, 0.2);
  height: 220px;
  position: relative;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.map-wrapper.compact {
  height: 180px;
}

.dark .map-wrapper {
  border-color: rgba(77, 127, 191, 0.3);
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.15);
}

.map-placeholder {
  width: 100%;
  height: 100%;
  position: relative;
}

.map-placeholder svg {
  position: absolute;
  inset: 0;
}

.map-bg {
  fill: #f0f4f8;
}

.dark .map-bg {
  fill: #1a1a2e;
}

.france-outline {
  stroke: #003399;
}

.dark .france-outline {
  stroke: #4d7fbf;
}

.event-marker {
  fill: #c8102e;
  cursor: pointer;
  transition: all 0.3s ease;
}

.event-marker:hover {
  fill: #ff4d6d;
  transform: scale(1.2);
}

.event-marker-inner {
  fill: white;
  pointer-events: none;
}

.default-marker {
  fill: #003399;
}

.dark .default-marker {
  fill: #4d7fbf;
}

.default-marker-inner {
  fill: white;
}

.city-label {
  font-size: 10px;
  fill: #666;
  font-weight: 500;
}

.dark .city-label {
  fill: #aaa;
}

.pulse {
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0%, 100% {
    opacity: 1;
    r: 15;
  }
  50% {
    opacity: 0.6;
    r: 20;
  }
}

.map-legend {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 11px;
}

.dark .map-legend {
  background: rgba(30, 30, 45, 0.9);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.legend-item:last-child {
  margin-bottom: 0;
}

.legend-marker {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.legend-marker.upcoming {
  background: #c8102e;
}

.legend-marker.past {
  background: #888;
}

.event-popup {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.popup-content {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  max-width: 320px;
  width: 90%;
  position: relative;
}

.dark .popup-content {
  background: #1e1e2d;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.close-btn:hover {
  opacity: 1;
}

.event-item {
  background: rgba(0, 51, 153, 0.1);
  border: 1px solid rgba(0, 51, 153, 0.2);
  transition: all 0.3s ease;
}

.dark .event-item {
  background: rgba(77, 127, 191, 0.1);
  border-color: rgba(77, 127, 191, 0.2);
}

.event-item:hover {
  background: rgba(0, 51, 153, 0.2);
  transform: translateX(5px);
}

.dark .event-item:hover {
  background: rgba(77, 127, 191, 0.2);
}

.no-events {
  background: rgba(0, 0, 0, 0.05);
}

.dark .no-events {
  background: rgba(255, 255, 255, 0.05);
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-from .popup-content,
.popup-leave-to .popup-content {
  transform: scale(0.9);
}
</style>
