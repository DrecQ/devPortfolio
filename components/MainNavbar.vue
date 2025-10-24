<template>
  <div class="w-full bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo avec animation améliorée -->
        <NuxtLink 
          to="/" 
          class="group relative flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl p-2 -m-2 transition-all duration-300"
          @click="closeMobileMenu"
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
            @click="handleNavClick"
          >
            {{ $t(link.key) }}
            <!-- Effet de brillance pour le lien actif -->
            <div 
              v-if="isActive(link.to)"
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"
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
          
          <!-- Bouton menu mobile élégant -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden relative p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105"
            :aria-label="showMobileMenu ? 'Fermer le menu' : 'Ouvrir le menu'"
            :disabled="isTransitioning"
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
    
    <!-- Menu mobile moderne - Bottom Sheet -->
    <Teleport to="body">
      <div 
        v-if="showMobileMenu" 
        class="fixed inset-0 z-50 md:hidden"
        @click="closeMobileMenu"
      >
        <!-- Backdrop amélioré avec animation -->
        <div 
          class="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          :class="mobileMenuVisible ? 'opacity-100' : 'opacity-0'"
          @click="closeMobileMenu"
        ></div>
        
        <!-- Bottom Sheet moderne -->
        <div 
          class="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl border border-slate-200/50 transform transition-all duration-300 ease-out max-h-[85vh] overflow-hidden"
          :class="mobileMenuVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'"
          @click.stop
        >
          <!-- Poignée de drag -->
          <div class="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing" @mousedown="startDrag" @touchstart="startDrag">
            <div class="w-12 h-1.5 bg-slate-300 rounded-full"></div>
          </div>
          
          <!-- Contenu du menu -->
          <div class="overflow-y-auto max-h-[calc(85vh-120px)]">
            <!-- Navigation principale -->
            <div class="px-6 pb-4 space-y-2">
              <NuxtLink 
                v-for="(link, index) in links" 
                :key="link.to"
                :to="link.to"
                class="group flex items-center justify-between w-full px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95"
                :class="{
                  'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25': isActive(link.to),
                  'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900': !isActive(link.to)
                }"
                :style="{ animationDelay: `${index * 50}ms` }"
                @click="handleMobileNavClick(link.to)"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon :name="getLinkIcon(link.to)" class="w-4 h-4" :class="isActive(link.to) ? 'text-white' : 'text-slate-500'" />
                  </div>
                  <span>{{ $t(link.key) }}</span>
                </div>
                
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
              </NuxtLink>
            </div>
            
            <!-- Contrôles en bas - langues et bouton fermeture -->
            <div class="px-6 pb-6 pt-4 border-t border-slate-200/50 space-y-4 bg-slate-50/50">
              <!-- Langues -->
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-slate-600">Langue</span>
                <div class="flex space-x-2">
                  <button 
                    v-for="lang in availableLanguages" 
                    :key="lang.code"
                    @click="handleLanguageChange(lang.code)"
                    class="flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:scale-105"
                    :class="{ 
                      'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg': lang.code === locale,
                      'bg-white text-slate-700 hover:bg-slate-100/80': lang.code !== locale
                    }"
                  >
                    <span>{{ lang.flag }}</span>
                    <span class="text-xs font-bold">{{ lang.code.toUpperCase() }}</span>
                  </button>
                </div>
              </div>
              
              <!-- Bouton de fermeture avec animation -->
              <button 
                @click="handleCloseButton"
                class="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:scale-105"
                :class="closeButtonHover ? 
                  'bg-red-500 text-white shadow-lg shadow-red-500/25' : 
                  'bg-red-100 hover:bg-red-200 text-red-700 hover:text-red-900'"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span class="text-sm font-medium">Fermer le menu</span>
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
const { locale, t } = useI18n()

// État du menu mobile - CORRIGÉ
const showMobileMenu = ref(false)
const mobileMenuVisible = ref(false)
const isTransitioning = ref(false)
const closeButtonHover = ref(false)

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

const currentLanguage = computed(() => {
  return availableLanguages.find(l => l.code === locale.value) || availableLanguages[0]
})

const isActive = (path) => {
  return route.path === path
}

const setLanguage = (lang) => {
  locale.value = lang
}

// CORRECTION : Gestion simplifiée des clics
const handleNavClick = () => {
  if (showMobileMenu.value) {
    closeMobileMenu()
  }
}

const handleMobileNavClick = (path) => {
  closeMobileMenu()
}

const handleLanguageChange = (lang) => {
  setLanguage(lang)
  closeMobileMenu()
}

// CORRECTION : Logique de menu mobile complètement refaite
const toggleMobileMenu = async () => {
  // Si déjà en transition, on ignore
  if (isTransitioning.value) {
    return
  }

  if (showMobileMenu.value) {
    await closeMobileMenu()
  } else {
    await openMobileMenu()
  }
}

const openMobileMenu = async () => {
  isTransitioning.value = true
  showMobileMenu.value = true
  document.body.style.overflow = 'hidden'
  
  // Petit délai pour permettre le rendu DOM
  await nextTick()
  
  // Animation après le rendu
  requestAnimationFrame(() => {
    mobileMenuVisible.value = true
    // Réinitialiser l'état de transition après l'animation
    setTimeout(() => {
      isTransitioning.value = false
    }, 300)
  })
}

const closeMobileMenu = async () => {
  if (!showMobileMenu.value || isTransitioning.value) {
    return
  }

  isTransitioning.value = true
  mobileMenuVisible.value = false
  
  // Attendre la fin de l'animation avant de cacher l'élément
  setTimeout(() => {
    showMobileMenu.value = false
    document.body.style.overflow = ''
    isTransitioning.value = false
  }, 300)
}

// Animation du bouton fermer
const handleCloseButton = () => {
  closeButtonHover.value = true
  setTimeout(() => {
    closeButtonHover.value = false
  }, 300)
  closeMobileMenu()
}

// Fonction de drag pour le bottom sheet
const startDrag = (e) => {
  e.preventDefault()
  let startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY
  let dragStarted = false
  
  const handleMove = (moveEvent) => {
    if (dragStarted) return
    
    const currentY = moveEvent.type === 'mousemove' ? moveEvent.clientY : moveEvent.touches[0].clientY
    const deltaY = currentY - startY
    
    if (deltaY > 80) { // Seuil augmenté pour plus de précision
      dragStarted = true
      closeMobileMenu()
      removeListeners()
    }
  }
  
  const removeListeners = () => {
    document.removeEventListener('mousemove', handleMove)
    document.removeEventListener('touchmove', handleMove)
    document.removeEventListener('mouseup', removeListeners)
    document.removeEventListener('touchend', removeListeners)
  }
  
  document.addEventListener('mousemove', handleMove, { passive: false })
  document.addEventListener('touchmove', handleMove, { passive: false })
  document.addEventListener('mouseup', removeListeners, { once: true })
  document.addEventListener('touchend', removeListeners, { once: true })
}

// CORRECTION : Watcher optimisé
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
/* Animation pour le bottom sheet */
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

/* Amélioration du scroll sur mobile */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Transition smooth pour le bouton fermer */
.close-button-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>