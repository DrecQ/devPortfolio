<template>
  <div class="w-full bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo avec animation améliorée -->
        <NuxtLink 
          to="/" 
          class="group relative flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl p-2 -m-2 transition-all duration-300"
        >
          <span class="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
            Portfolio
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
        </NuxtLink>
        
        <!-- Navigation desktop épurée avec meilleurs espaces -->
        <nav class="hidden md:flex items-center space-x-3">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to"
            :to="link.to"
            class="relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            :class="{
              'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 scale-105': isActive(link.to),
              'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 hover:scale-105': !isActive(link.to)
            }"
          >
            {{ $t(link.key) }}
            <!-- Effet de brillance pour le lien actif -->
            <div 
              v-if="isActive(link.to)"
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"
            ></div>
            <!-- Animation hover subtile pour les liens inactifs -->
            <div 
              v-else
              class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
            ></div>
          </NuxtLink>
        </nav>
        
        <!-- Contrôles droite optimisés -->
        <div class="flex items-center space-x-3">
          <!-- Sélecteur de langue moderne -->
          <div class="relative group hidden sm:block">
            <button 
              class="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105"
              :aria-label="$t('language')"
            >
              <span class="text-base">{{ currentLanguage.flag }}</span>
              <span class="font-semibold">{{ currentLanguage.code.toUpperCase() }}</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Dropdown amélioré -->
            <div class="absolute right-0 mt-3 w-48 origin-top-right bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div class="p-2">
                <button 
                  v-for="lang in availableLanguages" 
                  :key="lang.code"
                  @click="setLanguage(lang.code)"
                  class="flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:scale-[1.02]"
                  :class="{ 
                    'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg': lang.code === locale,
                    'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900': lang.code !== locale
                  }"
                >
                  <span class="mr-3 text-base">{{ lang.flag }}</span>
                  {{ lang.name }}
                  <div 
                    v-if="lang.code === locale"
                    class="ml-auto w-2 h-2 bg-white rounded-full"
                  ></div>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Bouton thème amélioré -->
          <button 
            @click="toggleTheme" 
            class="relative p-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105 group"
            :aria-label="colorMode.value === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'"
          >
            <div class="w-5 h-5 relative">
              <svg 
                v-if="colorMode.value === 'dark'" 
                class="w-5 h-5 transition-all duration-500 group-hover:rotate-90" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <svg 
                v-else 
                class="w-5 h-5 transition-all duration-500 group-hover:-rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </div>
          </button>
          
          <!-- Bouton menu mobile élégant -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden relative p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105"
            :aria-label="showMobileMenu ? 'Fermer le menu' : 'Ouvrir le menu'"
          >
            <div class="w-5 h-5 relative">
              <span 
                class="absolute top-1 left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                :class="showMobileMenu ? 'rotate-45 top-2' : ''"
              ></span>
              <span 
                class="absolute top-2 left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300"
                :class="showMobileMenu ? 'opacity-0' : ''"
              ></span>
              <span 
                class="absolute top-3 left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                :class="showMobileMenu ? '-rotate-45 top-2' : ''"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Menu mobile repensé -->
    <Teleport to="body">
      <div 
        v-if="showMobileMenu" 
        class="fixed inset-0 z-50 md:hidden"
        @click="closeMobileMenu"
      >
        <!-- Backdrop amélioré -->
        <div 
          class="absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-300"
          :class="mobileMenuVisible ? 'opacity-100' : 'opacity-0'"
        ></div>
        
        <!-- Menu flottant redessiné -->
        <div 
          class="absolute top-20 right-4 left-4 max-w-sm mx-auto bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 transform transition-all duration-400 ease-out"
          :class="mobileMenuVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'"
          @click.stop
        >
          <!-- Header avec animation magique -->
          <div class="flex items-center justify-between p-6 pb-4 relative">
            <div class="relative overflow-hidden z-10">
              <!-- Titre principal avec effet typewriter -->
              <h3 
                class="text-xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative"
                :class="mobileMenuVisible ? 'animate-typewriter' : 'opacity-0'"
              >
                Mon menu
              </h3>
              
              <!-- Barre de progression décorative -->
              <div class="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-progressBar" 
                   :class="mobileMenuVisible ? 'w-full' : 'w-0'"
                   style="animation-delay: 0.3s;"
              ></div>
            </div>
            
            <!-- Éléments de background flous -->
            <div class="absolute inset-0 pointer-events-none overflow-hidden">
              <!-- Particules flottantes en arrière-plan -->
              <div class="absolute top-3 right-16">
                <div 
                  class="w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-float blur-[1px]"
                  style="animation-delay: 0.8s;"
                ></div>
              </div>
              <div class="absolute top-6 left-20">
                <div 
                  class="w-1.5 h-1.5 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-float blur-[1px]"
                  style="animation-delay: 1.2s; animation-duration: 3s;"
                ></div>
              </div>
              <div class="absolute bottom-2 right-24">
                <div 
                  class="w-1 h-1 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full animate-float blur-[1px]"
                  style="animation-delay: 1.6s; animation-duration: 2.5s;"
                ></div>
              </div>
              <div class="absolute top-1 left-12">
                <div 
                  class="w-1.5 h-1.5 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float blur-[1px]"
                  style="animation-delay: 2s; animation-duration: 4s;"
                ></div>
              </div>
              <div class="absolute bottom-4 left-8">
                <div 
                  class="w-1 h-1 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full animate-float blur-[1px]"
                  style="animation-delay: 2.4s; animation-duration: 3.5s;"
                ></div>
              </div>
              
              <!-- Formes géométriques décoratives -->
              <div class="absolute top-2 left-16">
                <div 
                  class="w-3 h-0.5 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full animate-float blur-[0.5px] rotate-45"
                  style="animation-delay: 1s; animation-duration: 5s;"
                ></div>
              </div>
              <div class="absolute bottom-3 right-20">
                <div 
                  class="w-2 h-0.5 bg-gradient-to-r from-pink-300/15 to-blue-300/15 rounded-full animate-float blur-[0.5px] -rotate-12"
                  style="animation-delay: 1.8s; animation-duration: 6s;"
                ></div>
              </div>
            </div>
            
            <button 
              @click="closeMobileMenu"
              class="p-2 rounded-xl hover:bg-slate-100/80 text-slate-500 hover:text-slate-700 transition-all duration-200 hover:scale-110 hover:rotate-90 relative z-10"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Navigation épurée -->
          <div class="px-6 pb-6 space-y-2">
            <NuxtLink 
              v-for="(link, index) in links" 
              :key="link.to"
              :to="link.to"
              class="group flex items-center justify-between w-full px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
              :class="{
                'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25': isActive(link.to),
                'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900': !isActive(link.to)
              }"
              :style="{ animationDelay: `${index * 50}ms` }"
              @click="closeMobileMenu"
            >
              <span>{{ $t(link.key) }}</span>
              
              <!-- Indicateurs visuels -->
              <div class="flex items-center">
                <div 
                  v-if="isActive(link.to)"
                  class="w-2.5 h-2.5 bg-white rounded-full shadow-sm"
                ></div>
                <svg 
                  v-else
                  class="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
              
              <!-- Effet de brillance pour le lien actif -->
              <div 
                v-if="isActive(link.to)"
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"
              ></div>
            </NuxtLink>
          </div>
          
          <!-- Contrôles en bas redessinés -->
          <div class="px-6 pb-6 pt-4 border-t border-slate-200/50 space-y-4">
            <!-- Langues -->
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-slate-600">Langue</span>
              <div class="flex space-x-2">
                <button 
                  v-for="lang in availableLanguages" 
                  :key="lang.code"
                  @click="setLanguage(lang.code)"
                  class="flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:scale-105"
                  :class="{ 
                    'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg': lang.code === locale,
                    'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80': lang.code !== locale
                  }"
                >
                  <span>{{ lang.flag }}</span>
                  <span class="text-xs font-bold">{{ lang.code.toUpperCase() }}</span>
                </button>
              </div>
            </div>
            
            <!-- Thème -->
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-slate-600">Thème</span>
              <button 
                @click="toggleTheme" 
                class="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105 focus:outline-none focus:scale-105"
              >
                <span class="text-sm">{{ colorMode.value === 'dark' ? '☀️' : '🌙' }}</span>
                <span class="text-xs font-medium">
                  {{ colorMode.value === 'dark' ? 'Clair' : 'Sombre' }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue'

const route = useRoute()
const colorMode = useColorMode()
const { locale, t } = useI18n()

// État du menu mobile
const showMobileMenu = ref(false)
const mobileMenuVisible = ref(false)
const isTransitioning = ref(false)

const availableLanguages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
]

const links = [
  { to: '/', key: 'Acceuil' },
  { to: '/about', key: 'A Propos' },
  { to: '/projects', key: 'Projets' },
  { to: '/contact', key: 'Contact' }
]

const currentLanguage = computed(() => {
  return availableLanguages.find(l => l.code === locale.value) || availableLanguages[0]
})

const isActive = (path) => {
  return route.path === path
}

const setLanguage = (lang) => {
  locale.value = lang
}

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Logique corrigée pour le menu mobile
const toggleMobileMenu = async () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  
  if (showMobileMenu.value) {
    // Fermer le menu
    mobileMenuVisible.value = false
    await new Promise(resolve => setTimeout(resolve, 300))
    showMobileMenu.value = false
  } else {
    // Ouvrir le menu
    showMobileMenu.value = true
    await nextTick()
    mobileMenuVisible.value = true
  }
  
  isTransitioning.value = false
}

const closeMobileMenu = async () => {
  if (isTransitioning.value || !showMobileMenu.value) return
  
  isTransitioning.value = true
  mobileMenuVisible.value = false
  await new Promise(resolve => setTimeout(resolve, 300))
  showMobileMenu.value = false
  isTransitioning.value = false
}

// Fermer le menu mobile quand la route change
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
})
</script>

<style scoped>
/* Animations fluides */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* Effet de brillance amélioré */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Gradients et effets visuels */
.bg-gradient-to-r.from-blue-600.to-purple-600 {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%);
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Amélioration du backdrop blur */
@supports (backdrop-filter: blur(20px)) {
  .backdrop-blur-xl {
    backdrop-filter: blur(20px);
  }
}

/* Focus et accessibilité */
.focus\:ring-2:focus {
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 0 2px var(--tw-ring-color);
}

/* Transitions personnalisées */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* États hover améliorés */
.group:hover .group-hover\:scale-x-100 {
  transform: scaleX(1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:translate-x-full {
  transform: translateX(100%);
}

/* Menu mobile animations */
.animate-fadeInUp {
  animation: fadeInUp 0.3s ease-out forwards;
}

/* Améliorations des ombres */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Bouton hamburger amélioré */
.hamburger-line {
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>