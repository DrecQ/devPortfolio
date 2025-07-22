<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    <!-- Particules animées -->
    <div class="absolute inset-0 pointer-events-none">
      <div 
        v-for="i in 25" 
        :key="i"
        class="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-float"
        :style="{ 
          left: Math.random() * 100 + '%', 
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 8 + 's',
          animationDuration: (6 + Math.random() * 4) + 's'
        }"
      ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      <!-- En-tête -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full text-white/90 text-sm font-medium mb-6">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow"></div>
          <span>Portfolio</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Mes <span class="gradient-text">Projets</span>
        </h1>
        
        <p class="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Découvrez une sélection de mes réalisations, des applications web modernes aux solutions innovantes
        </p>

        <!-- Filtres -->
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              activeFilter === filter.value 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                : 'glass-effect text-white/80 hover:bg-white/20'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Grille des projets -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 border border-white/20"
        >
          <!-- Image du projet -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <!-- Overlay avec status -->
            <div class="absolute top-3 right-3">
              <span 
                :class="[
                  'px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm',
                  project.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  project.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                ]"
              >
                {{ project.statusLabel }}
              </span>
            </div>
            <!-- Overlay au hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/60 to-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="flex space-x-3">
                <a 
                  v-if="project.demoUrl"
                  :href="project.demoUrl" 
                  target="_blank"
                  class="p-2 glass-effect rounded-full hover:bg-white/20 transition-all duration-200 text-white"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
                <a 
                  v-if="project.githubUrl"
                  :href="project.githubUrl" 
                  target="_blank"
                  class="p-2 glass-effect rounded-full hover:bg-white/20 transition-all duration-200 text-white"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {{ project.title }}
              </h3>
              <div class="flex items-center space-x-1 text-amber-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span class="text-sm text-white/70">{{ project.rating }}</span>
              </div>
            </div>

            <p class="text-white/70 text-sm mb-4 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies.slice(0, 3)" 
                :key="tech"
                class="px-2 py-1 bg-white/10 backdrop-blur-sm text-white/80 rounded text-xs border border-white/20"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.technologies.length > 3"
                class="px-2 py-1 bg-white/10 backdrop-blur-sm text-white/60 rounded text-xs border border-white/20"
              >
                +{{ project.technologies.length - 3 }}
              </span>
            </div>

            <!-- Métriques -->
            <div class="flex items-center justify-between text-sm text-white/50 mb-4">
              <span class="text-xs">{{ project.year }}</span>
            </div>

            <!-- Bouton voir plus -->
            <NuxtLink 
              :to="`/projects/${project.slug}`"
              class="btn-primary px-4 py-2 text-white font-medium rounded-xl flex items-center justify-center gap-2 w-full group"
              @click="handleButtonClick"
            >
              <span>Voir les détails</span>
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Statistiques -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div class="glass-effect rounded-2xl p-6 text-center border border-white/20">
          <div class="text-3xl font-bold gradient-text mb-2">{{ projects.length }}</div>
          <div class="text-sm text-white/70">Projets réalisés</div>
        </div>
        <div class="glass-effect rounded-2xl p-6 text-center border border-white/20">
          <div class="text-3xl font-bold text-emerald-400 mb-2">{{ completedProjects }}</div>
          <div class="text-sm text-white/70">Terminés</div>
        </div>
        <div class="glass-effect rounded-2xl p-6 text-center border border-white/20">
          <div class="text-3xl font-bold text-amber-400 mb-2">{{ uniqueTechnologies }}</div>
          <div class="text-sm text-white/70">Technologies</div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="text-center glass-effect rounded-2xl p-8 border border-white/20">
        <h2 class="text-3xl font-bold text-white mb-4">
          Intéressé par mon <span class="gradient-text">travail</span> ?
        </h2>
        <p class="text-white/80 mb-6 text-lg">Discutons de votre prochain projet ensemble</p>
        <NuxtLink 
          to="/contact"
          class="btn-primary px-8 py-4 text-white font-semibold rounded-xl flex items-center justify-center gap-2 mx-auto max-w-xs group"
          @click="handleButtonClick"
        >
          <span>Collaborons</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Filtres
const filters = ref([
  { label: 'Tous', value: 'all' },
  { label: 'Web App', value: 'web-app' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' }
])

const activeFilter = ref('all')

// Projets (données d'exemple)
const projects = ref([
  {
    id: 1,
    title: 'EcoCommerce Platform',
    slug: 'ecommerce-platform',
    description: 'Plateforme e-commerce moderne avec système de paiement intégré, gestion des stocks et analytics avancées. Interface utilisateur optimisée pour mobile.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    category: 'web-app',
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    status: 'completed',
    statusLabel: 'Terminé',
    year: '2024',
    rating: 4.8,
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/user/project'
  },
  {
    id: 2,
    title: 'TaskFlow Dashboard',
    slug: 'taskflow-dashboard',
    description: 'Dashboard de gestion de projets avec système de collaboration en temps réel, notifications push et rapports détaillés.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    category: 'web-app',
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Chart.js'],
    status: 'completed',
    statusLabel: 'Terminé',
    year: '2024',
    rating: 4.9,
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/user/project'
  },
  {
    id: 3,
    title: 'Interface Utilisateur Mobile',
    slug: 'ui-mobile',
    description: 'Interface utilisateur moderne et responsive pour application mobile avec animations fluides et UX optimisée.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    category: 'frontend',
    technologies: ['React Native', 'Expo', 'Styled Components', 'Framer Motion'],
    status: 'in-progress',
    statusLabel: 'En cours',
    year: '2024',
    rating: 4.7,
    demoUrl: null,
    githubUrl: 'https://github.com/user/project'
  },
  {
    id: 4,
    title: 'Portfolio Créatif',
    slug: 'portfolio-creatif',
    description: 'Site portfolio interactif avec animations CSS avancées, galerie dynamique et système de contact intégré.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    category: 'frontend',
    technologies: ['Vue.js', 'Nuxt.js', 'GSAP', 'Tailwind CSS', 'Netlify'],
    status: 'completed',
    statusLabel: 'Terminé',
    year: '2023',
    rating: 4.6,
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/user/project'
  },
  {
    id: 5,
    title: 'API RESTful E-commerce',
    slug: 'api-ecommerce',
    description: 'API robuste pour e-commerce avec authentification JWT, gestion des commandes et intégration de paiements.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API', 'Docker'],
    status: 'planning',
    statusLabel: 'Planifié',
    year: '2024',
    rating: 4.5,
    demoUrl: 'https://demo.example.com',
    githubUrl: null
  },
  {
    id: 6,
    title: 'Service de Notifications',
    slug: 'notification-service',
    description: 'Microservice de notifications en temps réel avec support multi-canal (email, SMS, push) et gestion des files d\'attente.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    category: 'backend',
    technologies: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'WebSockets', 'Docker'],
    status: 'completed',
    statusLabel: 'Terminé',
    year: '2023',
    rating: 4.9,
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/user/project'
  }
])

// Projets filtrés
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})

// Statistiques calculées
const completedProjects = computed(() => {
  return projects.value.filter(p => p.status === 'completed').length
})

const uniqueTechnologies = computed(() => {
  const allTechs = projects.value.flatMap(p => p.technologies)
  return [...new Set(allTechs)].length
})

// Effet de ripple sur les boutons (repris de la heroSection)
const handleButtonClick = (event) => {
  const button = event.currentTarget
  const ripple = document.createElement('div')
  
  ripple.className = 'absolute inset-0 rounded-xl bg-white/20 transform scale-0 transition-transform duration-300'
  button.style.position = 'relative'
  button.style.overflow = 'hidden'
  button.appendChild(ripple)
  
  setTimeout(() => {
    ripple.style.transform = 'scale(1)'
    setTimeout(() => ripple.remove(), 300)
  }, 10)
}
</script>

<style scoped>
/* Animations reprises de la heroSection */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-20px) rotate(180deg); 
    opacity: 0.8;
  }
}

@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }
  50% { 
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
  }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Classes utilitaires */
.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Effets visuels */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Boutons */
.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.25rem;
  }
  
  .text-5xl {
    font-size: 3rem;
  }
  
  .text-6xl {
    font-size: 3.75rem;
  }
}

/* Support backdrop-filter */
@supports (backdrop-filter: blur(20px)) {
  .glass-effect {
    backdrop-filter: blur(20px);
  }
}
</style>