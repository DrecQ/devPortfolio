<template>
  <div class="w-full bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo à gauche -->
        <NuxtLink 
          to="/" 
          class="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-slate-100/50 group"
        >
          <div class="relative">
            <span class="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
              Portfolio
            </span>
            <!-- Effet de soulignement au hover -->
            <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </div>
        </NuxtLink>
        
        <!-- Navigation au centre -->
        <nav class="hidden md:flex items-center space-x-1 bg-slate-100/50 rounded-2xl p-1.5 backdrop-blur-sm border border-slate-200/30">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to"
            :to="link.to"
            class="px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 relative group/nav"
            :class="{
              'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 transform scale-105': isActive(link.to),
              'text-slate-600 hover:text-slate-800 hover:bg-white/80 hover:shadow-md': !isActive(link.to)
            }"
          >
            <span class="relative z-10">{{ link.label }}</span>
            
            <!-- Effet de fond animé pour les liens inactifs -->
            <div 
              v-if="!isActive(link.to)"
              class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover/nav:opacity-100 transition-all duration-300 transform scale-95 group-hover/nav:scale-100"
            ></div>
          </NuxtLink>
        </nav>
        
        <!-- CTA à droite -->
        <div class="flex items-center space-x-3">
          <!-- Réseaux sociaux -->
          <div class="hidden md:flex items-center space-x-1">
            <a 
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="p-2.5 rounded-xl text-slate-600 hover:text-white transition-all duration-200 group/social"
              :class="social.hoverClass"
              :title="social.name"
            >
              <Icon :name="social.icon" class="w-4 h-4 group-hover/social:scale-110 transition-transform duration-200" />
            </a>
          </div>

          <!-- Email -->
          <a 
            href="mailto:ton@email.com"
            class="hidden md:flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 hover:scale-105 group/email"
          >
            <Icon name="heroicons:envelope" class="w-4 h-4 group-hover/email:animate-bounce" />
            <span>Email</span>
          </a>
          
          <!-- Bouton menu mobile - Disparaît quand le menu est ouvert -->
          <button 
            v-if="!showMobileMenu"
            @click="toggleMobileMenu"
            class="md:hidden p-3 rounded-xl text-slate-700 transition-all duration-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg"
          >
            <!-- Icône hamburger seulement visible quand le menu est fermé -->
            <Icon name="heroicons:bars-3" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    
    <!-- Menu mobile -->
    <Teleport to="body">
      <div 
        v-if="showMobileMenu" 
        class="fixed inset-0 z-50 md:hidden"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/20 backdrop-blur-sm"
          @click="closeMobileMenu"
        ></div>
        
        <!-- Panel mobile -->
        <div 
          ref="mobilePanel"
          class="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl border border-slate-200/50 transform transition-transform duration-300 max-h-[65vh] overflow-hidden"
          :class="mobileMenuVisible ? 'translate-y-0' : 'translate-y-full'"
        >
          <!-- En-tête avec bouton de fermeture -->
          <div class="flex justify-between items-center p-3 border-b border-slate-200/30">
            <h2 class="text-base font-semibold text-slate-700">Menu</h2>
            <button 
              @click="closeMobileMenu"
              class="p-2.5 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-600 text-slate-600 hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-lg active:scale-95"
              aria-label="Fermer le menu"
            >
              <!-- Croix plus grande -->
              <Icon name="heroicons:x-mark" class="w-5 h-5" />
            </button>
          </div>
          
          <!-- Contenu du menu -->
          <div class="overflow-y-auto">
            <div class="px-3 py-3 space-y-2">
              <NuxtLink 
                v-for="link in links" 
                :key="link.to"
                :to="link.to"
                class="flex items-center w-full px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 group/mobile"
                :class="{
                  'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg': isActive(link.to),
                  'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600': !isActive(link.to)
                }"
                @click="closeMobileMenu"
              >
                <div class="flex items-center space-x-3 w-full">
                  <div class="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                    <Icon :name="getLinkIcon(link.to)" class="w-5 h-5" />
                  </div>
                  <span class="flex-1 text-lg">{{ link.label }}</span>
                </div>
              </NuxtLink>
            </div>
            
            <!-- Réseaux sociaux mobile -->
            <div class="px-4 py-4 border-t border-slate-200/50">
              <div class="flex justify-center space-x-4 mb-4">
                <a 
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="p-3 rounded-xl text-slate-600 hover:text-white transition-all duration-200 group/social"
                  :class="social.hoverClass"
                  :title="social.name"
                >
                  <Icon :name="social.icon" class="w-5 h-5 group-hover/social:scale-110 transition-transform duration-200" />
                </a>
              </div>
              
              <!-- Email mobile -->
              <a 
                href="mailto:ton@email.com"
                class="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 active:scale-95"
                @click="closeMobileMenu"
              >
                <Icon name="heroicons:envelope" class="w-5 h-5 mr-2" />
                <span class="text-lg">Envoyer un email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'

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
    hoverClass: 'hover:bg-gray-900'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/evariste-credo-quist-44b177386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
    icon: 'simple-icons:linkedin',
    hoverClass: 'hover:bg-blue-600'
  },
  { 
    name: 'x', 
    url: 'https://x.com/drec_quist?t=sswvVIyxnMCfbKjZU2lalA&s=09',
    icon: 'simple-icons:x',
    hoverClass: 'hover:bg-sky-500'
  }
]

// Icônes pour le menu mobile
const getLinkIcon = (path) => {
  const icons = {
    '/': 'heroicons:home',
    '/about': 'heroicons:user',
    '/projects': 'heroicons:briefcase',
    '/contact': 'heroicons:envelope'
  }
  return icons[path] || 'heroicons:link'
}

const isActive = (path) => {
  return route.path === path
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
  }, 300)
}

// Fermer le menu mobile au changement de route
watch(() => route.path, () => {
  if (showMobileMenu.value) {
    closeMobileMenu()
  }
})

// Fermer le menu mobile au redimensionnement
const handleResize = () => {
  if (window.innerWidth >= 768 && showMobileMenu.value) {
    closeMobileMenu()
  }
}

// Gestion des événements clavier
const handleKeydown = (event) => {
  if (event.key === 'Escape' && showMobileMenu.value) {
    closeMobileMenu()
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
})
</script>

<style scoped>
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}
</style>