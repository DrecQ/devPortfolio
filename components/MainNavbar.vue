<template>
  <div class="w-full bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo à gauche -->
        <NuxtLink 
          to="/" 
          class="flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-slate-100/50 group/logo"
          prefetch
        >
          <div class="relative">
            <span class="text-2xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent group-hover/logo:scale-105 transition-transform duration-300 group-hover/logo:bg-gradient-to-r group-hover/logo:from-blue-500 group-hover/logo:to-blue-300">
              Portfolio
            </span>
            <!-- Effet de soulignement au hover -->
            <div class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-purple-500 group-hover/logo:w-full transition-all duration-500 ease-out"></div>
          </div>
        </NuxtLink>
        
        <!-- Navigation au centre - SANS ICÔNES -->
        <nav class="hidden md:flex items-center space-x-1 bg-white/60 backdrop-blur-md rounded-2xl p-1.5 shadow-sm border border-slate-200/50">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to"
            :to="link.to"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 relative group/nav overflow-hidden"
            :class="{
              'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/25 transform scale-[1.02]': isActive(link.to),
              'text-slate-700 hover:text-white hover:shadow-md': !isActive(link.to)
            }"
            prefetch
          >
            <span class="relative z-10">
              {{ link.label }}
            </span>
            
            <!-- Effet de background slide pour hover -->
            <div 
              v-if="!isActive(link.to)"
              class="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90 rounded-xl -translate-y-full group-hover/nav:translate-y-0 transition-transform duration-300"
            ></div>
            
            <!-- Indicateur de page active amélioré -->
            <div 
              v-if="isActive(link.to)"
              class="absolute -bottom-1 left-1/2 w-4 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full -translate-x-1/2"
            ></div>
          </NuxtLink>
        </nav>
        
        <!-- CTA à droite -->
        <div class="flex items-center space-x-3">
          <!-- Réseaux sociaux -->
          <div class="hidden md:flex items-center space-x-1 bg-white/60 backdrop-blur-sm rounded-2xl p-1.5 border border-slate-200/30">
            <a 
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="p-2.5 rounded-xl text-slate-600 hover:text-white transition-all duration-300 group/social relative overflow-hidden"
              :class="social.hoverClass"
              :title="social.name"
              aria-label="Lien vers mon profil"
            >
              <!-- Effet de background -->
              <div class="absolute inset-0 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" :class="social.bgClass"></div>
              <Icon :name="social.icon" class="w-4 h-4 relative z-10 group-hover/social:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <!-- Email -->
          <NuxtLink 
            to="/contact"
            class="hidden md:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 hover:scale-105 group/email relative overflow-hidden"
            prefetch
          >
            <!-- Effet de brillance au hover -->
            <div class="absolute inset-0 -translate-x-full group-hover/email:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <Icon name="heroicons:envelope" class="w-4 h-4 relative z-10 group-hover/email:animate-bounce-slow" />
            <span class="relative z-10">Contact</span>
            
            <!-- Pulse animation subtile -->
            <div class="absolute inset-0 rounded-xl border border-blue-400/50 animate-pulse-slow opacity-0 group-hover/email:opacity-100"></div>
          </NuxtLink>
          
          <!-- Bouton menu mobile -->
          <button 
            v-if="!showMobileMenu"
            @click="toggleMobileMenu"
            class="md:hidden p-3 rounded-xl text-slate-700 transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Menu navigation mobile"
            :aria-expanded="showMobileMenu"
            aria-controls="mobile-menu"
          >
            <!-- Icône hamburger avec animation -->
            <div class="relative w-8 h-6 flex flex-col justify-between group/hamburger">
              <!-- Barre supérieure -->
              <div class="w-full h-1 bg-slate-700 rounded-full transform transition-all duration-300 group-hover/hamburger:bg-white group-hover/hamburger:translate-y-2 group-hover/hamburger:rotate-45"></div>
              <!-- Barre médiane -->
              <div class="w-full h-1 bg-slate-700 rounded-full transform transition-all duration-300 group-hover/hamburger:bg-white group-hover/hamburger:opacity-0"></div>
              <!-- Barre inférieure -->
              <div class="w-full h-1 bg-slate-700 rounded-full transform transition-all duration-300 group-hover/hamburger:bg-white group-hover/hamburger:-translate-y-2 group-hover/hamburger:-rotate-45"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Menu mobile -->
    <Teleport to="body">
      <div 
        v-if="showMobileMenu" 
        class="fixed inset-0 z-50 md:hidden"
        id="mobile-menu"
      >
        <!-- Backdrop avec effet de flou gradient -->
        <div 
          class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm"
          @click="closeMobileMenu"
        ></div>
        
        <!-- Panel avec effet glass morphism amélioré -->
        <div 
          ref="mobilePanel"
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/95 via-white/90 to-white/85 backdrop-blur-xl rounded-t-3xl shadow-2xl border border-white/20 transform transition-transform duration-500 ease-out max-h-[70vh] overflow-hidden mobile-menu"
          :class="mobileMenuVisible ? 'translate-y-0' : 'translate-y-full'"
        >
          <!-- En-tête avec bouton de fermeture -->
          <div class="flex justify-between items-center p-6 border-b border-slate-200/30 bg-gradient-to-r from-white/80 to-white/60">
            <div class="flex items-center space-x-3">
              <div class="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
                <Icon name="heroicons:bars-3" class="w-6 h-6 text-white" />
              </div>
              <h2 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Navigation</h2>
            </div>
            <button 
              @click="closeMobileMenu"
              class="p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group/close focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Fermer le menu"
            >
              <!-- Croix avec animation -->
              <div class="relative w-6 h-6">
                <div class="absolute top-1/2 left-1/2 w-4/5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45 group-hover/close:scale-110 transition-transform duration-300"></div>
                <div class="absolute top-1/2 left-1/2 w-4/5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45 group-hover/close:scale-110 transition-transform duration-300"></div>
              </div>
            </button>
          </div>
          
          <!-- Contenu du menu -->
          <div class="overflow-y-auto h-full">
            <div class="px-3 py-4 space-y-2">
              <NuxtLink 
                v-for="link in links" 
                :key="link.to"
                :to="link.to"
                class="flex items-center w-full px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group/mobile relative overflow-hidden"
                :class="{
                  'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg scale-[1.02]': isActive(link.to),
                  'text-slate-700 hover:text-white': !isActive(link.to)
                }"
                @click="closeMobileMenu"
                prefetch
              >
                <!-- Effet de hover pour liens inactifs -->
                <div 
                  v-if="!isActive(link.to)"
                  class="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90 rounded-xl translate-x-full group-hover/mobile:translate-x-0 transition-transform duration-300"
                ></div>
                
                <div class="flex items-center space-x-3 w-full relative z-10">
                  <div class="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-sm">
                    <Icon :name="getLinkIcon(link.to)" class="w-5 h-5" :class="isActive(link.to) ? 'text-white' : 'text-blue-600'" />
                  </div>
                  <span class="flex-1 text-lg font-medium">{{ link.label }}</span>
                  <Icon 
                    name="heroicons:chevron-right" 
                    class="w-5 h-5 opacity-0 group-hover/mobile:opacity-100 transform -translate-x-2 group-hover/mobile:translate-x-0 transition-all duration-300" 
                    :class="isActive(link.to) ? 'text-white' : 'text-blue-600'"
                  />
                </div>
              </NuxtLink>
            </div>
            
            <!-- Séparateur -->
            <div class="px-6 py-2">
              <div class="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
            </div>
            
            <!-- Réseaux sociaux mobile -->
            <div class="px-4 py-4">
              <div class="flex justify-center space-x-4 mb-6">
                <a 
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="p-3 rounded-xl text-slate-600 hover:text-white transition-all duration-300 group/social relative overflow-hidden"
                  :class="social.hoverClass"
                  :title="social.name"
                  aria-label="Lien vers mon profil"
                >
                  <!-- Effet de background -->
                  <div class="absolute inset-0 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" :class="social.bgClass"></div>
                  <Icon :name="social.icon" class="w-5 h-5 relative z-10 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
              </div>
              
              <!-- CTA mobile -->
              <NuxtLink 
                to="/contact"
                class="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 active:scale-95 group/cta relative overflow-hidden"
                @click="closeMobileMenu"
                prefetch
              >
                <!-- Effet de brillance -->
                <div class="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <Icon name="heroicons:envelope" class="w-5 h-5 mr-3 relative z-10 group-hover/cta:animate-bounce-slow" />
                <span class="text-lg font-medium relative z-10">Me Contacter</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, nextTick, watch, onMounted, onUnmounted } from 'vue'

const route = useRoute()

// État du menu mobile
const showMobileMenu = ref(false)
const mobileMenuVisible = ref(false)
const mobilePanel = ref(null)

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À Propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' }
]

// Réseaux sociaux
const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/DrecQ', 
    icon: 'simple-icons:github',
    hoverClass: 'hover:bg-gray-900',
    bgClass: 'bg-gray-900'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/evariste-credo-quist-44b177386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
    icon: 'simple-icons:linkedin',
    hoverClass: 'hover:bg-blue-600',
    bgClass: 'bg-blue-600'
  },
  { 
    name: 'X (Twitter)', 
    url: 'https://x.com/drec_quist?t=sswvVIyxnMCfbKjZU2lalA&s=09',
    icon: 'simple-icons:x',
    hoverClass: 'hover:bg-sky-500',
    bgClass: 'bg-sky-500'
  }
]

// Icônes pour le menu mobile (toujours utilisées dans la version mobile)
const getLinkIcon = (path) => {
  const icons = {
    '/': 'heroicons:home',
    '/about': 'heroicons:user-circle',
    '/projects': 'heroicons:briefcase',
    '/contact': 'heroicons:chat-bubble-left-right'
  }
  return icons[path] || 'heroicons:link'
}

const isActive = (path) => {
  return route.path === path
}

// Debounce function pour optimiser les performances
const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Logique de menu mobile
const toggleMobileMenu = async () => {
  if (showMobileMenu.value) {
    closeMobileMenu()
  } else {
    openMobileMenu()
  }
}

const openMobileMenu = async () => {
  showMobileMenu.value = true
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  
  await nextTick()
  setTimeout(() => {
    mobileMenuVisible.value = true
  }, 10)
}

const closeMobileMenu = () => {
  mobileMenuVisible.value = false
  setTimeout(() => {
    showMobileMenu.value = false
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }, 300)
}

// Fermer le menu mobile au changement de route
watch(() => route.path, () => {
  if (showMobileMenu.value) {
    closeMobileMenu()
  }
})

// Fermer le menu mobile au redimensionnement
const handleResize = debounce(() => {
  if (window.innerWidth >= 768 && showMobileMenu.value) {
    closeMobileMenu()
  }
}, 150)

// Gestion des événements clavier
const handleKeydown = (event) => {
  if (event.key === 'Escape' && showMobileMenu.value) {
    closeMobileMenu()
  }
  
  // Navigation au clavier dans le menu mobile
  if (showMobileMenu.value && (event.key === 'Tab' || event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
    event.preventDefault()
    const focusableElements = mobilePanel.value?.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )
    
    if (!focusableElements || focusableElements.length === 0) return
    
    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement)
    let nextIndex = 0
    
    if (event.key === 'Tab' || event.key === 'ArrowDown') {
      nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0
    } else if (event.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1
    }
    
    focusableElements[nextIndex]?.focus()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
/* Animations CSS personnalisées */
@keyframes bounce-slow {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-4px); 
  }
}

@keyframes pulse-slow {
  0%, 100% { 
    opacity: 0.3; 
  }
  50% { 
    opacity: 0.8; 
  }
}

@keyframes slide-in {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.mobile-menu {
  animation: slide-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.mobile-menu-leave {
  animation: slide-out 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Smooth scrolling pour le menu mobile */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

/* Amélioration des transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Effet de pression sur les boutons */
.active\:scale-95:active {
  transform: scale(0.95);
}

/* Optimisation pour les appareils mobiles */
@media (max-height: 600px) {
  .max-h-\[70vh\] {
    max-height: 80vh;
  }
}

/* Support pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transform,
  .animate-bounce-slow,
  .animate-pulse-slow,
  .mobile-menu {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .hover\:scale-105:hover,
  .group:hover .group-hover\/logo:scale-105,
  .group\/email:hover .group-hover\/email:scale-105 {
    transform: none !important;
  }
}
</style>