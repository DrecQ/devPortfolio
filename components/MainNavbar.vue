<template>
  <div class="w-full bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo avec dégradé bleu-violet -->
        <NuxtLink 
          to="/" 
          class="flex items-center p-2 rounded-lg transition-colors"
        >
          <span class="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </NuxtLink>
        
        <!-- Navigation desktop avec survol bleu-violet -->
        <nav class="hidden md:flex items-center space-x-1">
          <NuxtLink 
            v-for="link in links" 
            :key="link.to"
            :to="link.to"
            class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            :class="{
              'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-sm': isActive(link.to),
              'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600': !isActive(link.to)
            }"
          >
            {{ $t(link.key) }}
          </NuxtLink>
        </nav>
        
        <!-- Contrôles droite -->
        <div class="flex items-center space-x-2">
          <!-- Sélecteur de langue avec survol bleu-violet -->
          <div class="relative group hidden sm:block">
            <button 
              class="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 transition-all duration-200"
              :class="{
                'text-white bg-gradient-to-r from-blue-600 to-purple-600': isLanguageDropdownOpen,
                'hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600': !isLanguageDropdownOpen
              }"
              @mouseenter="isLanguageDropdownOpen = true"
              @mouseleave="isLanguageDropdownOpen = false"
            >
              <span>{{ currentLanguage.flag }}</span>
              <span class="font-medium">{{ currentLanguage.code.toUpperCase() }}</span>
            </button>
            
            <div 
              class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              @mouseenter="isLanguageDropdownOpen = true"
              @mouseleave="isLanguageDropdownOpen = false"
            >
              <div class="p-1">
                <button 
                  v-for="lang in availableLanguages" 
                  :key="lang.code"
                  @click="setLanguage(lang.code)"
                  class="flex items-center w-full px-3 py-2 text-sm rounded-md transition-all duration-200"
                  :class="{ 
                    'text-white bg-gradient-to-r from-blue-600 to-purple-600': lang.code === locale,
                    'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600': lang.code !== locale
                  }"
                >
                  <span class="mr-2">{{ lang.flag }}</span>
                  {{ lang.name }}
                </button>
              </div>
            </div>
          </div>
          
          <!-- Bouton menu mobile avec survol bleu-violet -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg text-slate-700 transition-all duration-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
          >
            <div class="w-5 h-5 relative">
              <span 
                class="absolute top-1 left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-200"
                :class="showMobileMenu ? 'rotate-45 top-2' : ''"
              ></span>
              <span 
                class="absolute top-2 left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-200"
                :class="showMobileMenu ? 'opacity-0' : ''"
              ></span>
              <span 
                class="absolute top-3 left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-200"
                :class="showMobileMenu ? '-rotate-45 top-2' : ''"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Menu mobile avec survol bleu-violet -->
    <Teleport to="body">
      <div 
        v-if="showMobileMenu" 
        class="fixed inset-0 z-50 md:hidden"
      >
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-black/20"
          @click="closeMobileMenu"
        ></div>
        
        <!-- Panel mobile -->
        <div 
          class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg border border-slate-200 transform transition-transform duration-300 max-h-[70vh] overflow-hidden"
          :class="mobileMenuVisible ? 'translate-y-0' : 'translate-y-full'"
        >
          <!-- Poignée -->
          <div class="flex justify-center pt-3 pb-2">
            <div class="w-12 h-1 bg-slate-300 rounded-full"></div>
          </div>
          
          <!-- Contenu du menu -->
          <div class="overflow-y-auto">
            <div class="px-4 pb-4 space-y-1">
              <NuxtLink 
                v-for="link in links" 
                :key="link.to"
                :to="link.to"
                class="flex items-center w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
                :class="{
                  'text-white bg-gradient-to-r from-blue-600 to-purple-600': isActive(link.to),
                  'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600': !isActive(link.to)
                }"
                @click="closeMobileMenu"
              >
                <div class="flex items-center space-x-3">
                  <Icon :name="getLinkIcon(link.to)" class="w-5 h-5" />
                  <span>{{ $t(link.key) }}</span>
                </div>
              </NuxtLink>
            </div>
            
            <!-- Langues -->
            <div class="px-4 pb-4 pt-3 border-t border-slate-200">
              <div class="flex items-center justify-between mb-3">
                <span class="text-sm font-medium text-slate-600">Langue</span>
              </div>
              <div class="flex space-x-2">
                <button 
                  v-for="lang in availableLanguages" 
                  :key="lang.code"
                  @click="setLanguage(lang.code); closeMobileMenu();"
                  class="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-1 justify-center"
                  :class="{ 
                    'text-white bg-gradient-to-r from-blue-600 to-purple-600': lang.code === locale,
                    'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600': lang.code !== locale
                  }"
                >
                  <span>{{ lang.flag }}</span>
                  <span>{{ lang.name }}</span>
                </button>
              </div>
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
const { locale, setLocale } = useI18n()

// État du menu mobile
const showMobileMenu = ref(false)
const mobileMenuVisible = ref(false)
const isLanguageDropdownOpen = ref(false)

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

// Logique de menu mobile simplifiée
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