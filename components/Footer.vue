<template>
  <footer class="bg-slate-900 border-t border-slate-800">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      
      <!-- Section principale avec séparation visible -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        <!-- Logo et copyright -->
        <div class="flex flex-col items-center md:items-start space-y-4">
          <NuxtLink 
            to="/" 
            class="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            aria-label="Retour à l'accueil"
          >
            Portfolio
          </NuxtLink>
          <div class="text-slate-400 text-sm">
            &copy; {{ currentYear }} Evariste Credo
          </div>
        </div>

        <!-- Navigation rapide -->
        <div class="flex flex-col items-center space-y-3">
          <h3 class="text-sm font-semibold text-white mb-2">Navigation</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink 
              v-for="link in footerLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              active-class="text-blue-400 font-medium"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div class="flex flex-col items-center md:items-end space-y-3">
          <h3 class="text-sm font-semibold text-white mb-2">Réseaux sociaux</h3>
          <div class="flex items-center space-x-3">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="p-2 rounded-lg text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 border border-slate-700 hover:border-blue-500"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Barre de séparation VISIBLE -->
      <div class="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 my-8 rounded-full"></div>

      <!-- Bas de page simple -->
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <!-- Contact -->
        <div class="text-center md:text-left">
          <a 
            href="mailto:quistevaristecredo@gmail.com" 
            class="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2"
          >
            <Icon name="heroicons:envelope" class="w-4 h-4" />
            <span>quistevaristecredo@gmail.com</span>
          </a>
        </div>

        <!-- Retour en haut simple -->
        <button
          @click="scrollToTop"
          class="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 border border-slate-700 rounded-lg hover:border-blue-500"
          aria-label="Retour en haut de la page"
        >
          <Icon name="heroicons:arrow-up" class="w-4 h-4" />
          <span>Retour en haut</span>
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const footerLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' }
]

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: 'simple-icons:github', 
    url: 'https://github.com/DrecQ'
  },
  { 
    name: 'LinkedIn', 
    icon: 'simple-icons:linkedin', 
    url: 'https://www.linkedin.com/in/evariste-credo-quist'
  },
  { 
    name: 'X', 
    icon: 'simple-icons:x', 
    url: 'https://x.com/drec_quist'
  }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Styles simples et propres */
.border-t {
  border-top-width: 1px;
}

.h-px {
  height: 1px;
}

/* Animation de scroll smooth */
html {
  scroll-behavior: smooth;
}
</style>