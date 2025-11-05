<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- En-tête -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span class="text-white/90 text-sm">Mes réalisations</span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Mes <span class="text-blue-400">Projets</span>
        </h1>
        
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Une sélection de mes applications web et solutions développées
        </p>
      </div>

      <!-- Filtres simplifiés -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          @click="activeFilter = filter.value"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            activeFilter === filter.value 
              ? 'bg-blue-600 text-white' 
              : 'bg-white/10 text-white/80 hover:bg-white/20'
          ]"
        >
          {{ filter.label }}
        </button>
      </div>

      <!-- Grille des projets -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
        >
          <!-- Image du projet -->
          <div 
            class="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden cursor-pointer"
            @click="openImageModal(project)"
          >
            <NuxtImg 
              v-if="project.image"
              :src="project.image" 
              :alt="`Aperçu du projet ${project.title}`"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <Icon name="heroicons:computer-desktop" class="w-16 h-16 text-white/40" />
            </div>
            
            <!-- Overlay au survol -->
            <div class="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Icon name="heroicons:eye" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Badge de statut -->
            <div class="absolute top-3 right-3">
              <span 
                :class="[
                  'px-2 py-1 rounded text-xs font-medium backdrop-blur-sm',
                  project.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  project.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                ]"
              >
                {{ project.statusLabel }}
              </span>
            </div>

            <!-- Indicateur de clic -->
            <div class="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
              👆 Cliquer pour agrandir
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-xl font-bold text-white">
                {{ project.title }}
              </h3>
            </div>

            <p class="text-white/70 text-sm mb-4 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-2 py-1 bg-white/10 text-white/80 rounded text-xs border border-white/20"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <a 
                v-if="project.demoUrl && project.demoUrl !== '#'"
                :href="project.demoUrl" 
                target="_blank"
                class="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Icon name="heroicons:eye" class="w-4 h-4" />
                <span>Démo</span>
              </a>
              <a 
                v-if="project.githubUrl && project.githubUrl !== '#'"
                :href="project.githubUrl" 
                target="_blank"
                class="flex-1 px-3 py-2 bg-white/10 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Icon name="heroicons:code-bracket" class="w-4 h-4" />
                <span>Code</span>
              </a>
              <NuxtLink 
                v-else
                :to="`/projects/${project.slug}`"
                class="flex-1 px-3 py-2 bg-white/10 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Icon name="heroicons:information-circle" class="w-4 h-4" />
                <span>Détails</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistiques simples -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <div class="bg-white/5 rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-white mb-1">{{ projects.length }}</div>
          <div class="text-sm text-white/70">Projets</div>
        </div>
        <div class="bg-white/5 rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-green-400 mb-1">{{ completedProjects }}</div>
          <div class="text-sm text-white/70">Terminés</div>
        </div>
        <div class="bg-white/5 rounded-xl p-4 text-center border border-white/10">
          <div class="text-2xl font-bold text-blue-400 mb-1">{{ uniqueTechnologies }}</div>
          <div class="text-sm text-white/70">Technologies</div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="text-center bg-white/5 rounded-xl p-8 border border-white/10">
        <h2 class="text-2xl font-bold text-white mb-3">
          Un projet en tête ?
        </h2>
        <p class="text-white/80 mb-6">Discutons de votre prochain projet ensemble</p>
        <NuxtLink 
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5" />
          <span>Me contacter</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Modal pour l'image agrandie -->
    <div 
      v-if="selectedProject" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      @click="closeImageModal"
    >
      <div class="relative max-w-4xl w-full max-h-[90vh]" @click.stop>
        <!-- Bouton fermeture -->
        <button 
          @click="closeImageModal"
          class="absolute -top-12 right-0 z-10 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
        >
          <Icon name="heroicons:x-mark" class="w-8 h-8" />
        </button>
        
        <!-- Image agrandie -->
        <div class="bg-white/5 rounded-3xl p-4 border border-white/20 backdrop-blur-sm">
          <div class="relative">
            <NuxtImg 
              :src="selectedProject.image" 
              :alt="`Aperçu du projet ${selectedProject.title}`"
              width="800" 
              height="600" 
              class="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl"
              loading="eager"
              format="webp"
              quality="100"
            />
            
            <!-- Effet de cadre -->
            <div class="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
          </div>
          
          <!-- Informations du projet -->
          <div class="text-center mt-4 space-y-2">
            <h3 class="text-xl font-bold text-white">{{ selectedProject.title }}</h3>
            <p class="text-white/80 text-sm">{{ selectedProject.description }}</p>
            <p class="text-white/60 text-xs">Cliquez en dehors de l'image pour fermer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Filtres
const filters = [
  { label: 'Tous', value: 'all' },
  { label: 'Web App', value: 'web-app' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' }
]

const activeFilter = ref('all')
const selectedProject = ref(null)

// Projets avec images
const projects = [
  {
    id: 1,
    title: 'Gestion des projecteurs',
    slug: 'gestion-projecteur',
    description: 'API permettant la gestion des projecteurs dans les établissements',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'MySQL', 'DotEnv'],
    status: 'completed',
    statusLabel: 'Terminé',
    image: '/images/projects/gestion-projecteurs.jpg',
    githubUrl: 'https://github.com/DrecQ/Systeme_de_gestion_des_projecteurs'
  },
  {
    id: 2,
    title: 'Gestion des notes etudiants LMD',
    slug: 'gestion-notes-lmd',
    description: 'API avec TDD pour la gestion des notes des étudiants selon le système LMD',
    category: 'backend',
    technologies: ['PHP', 'Laravel', 'MySQL', 'PHPUnit'],
    status: 'completed',
    statusLabel: 'Terminé',
    image: '/images/projects/gestion-notes-lmd.jpg',
    githubUrl: 'https://github.com/DrecQ/systeme_de_gestion_des_notes_lmd'
  },
  {
    id: 3,
    title: 'Projet Octobre Rose',
    slug: 'projet-octobre-rose',
    description: 'Site statique de sensibilisation sur le cancer du sein',
    category: 'frontend',
    technologies: ['Nuxt.Js', 'Tailwind css'],
    status: 'completed',
    statusLabel: 'Terminé',
    image: '/projects/octobre-rose.png',
    demoUrl: 'https://octobreroseprojettest.netlify.app/',
    githubUrl: 'https://github.com/DrecQ/projet_Octobre_rose'
  },
  {
    id: 4,
    title: 'Portfolio Créatif',
    slug: 'portfolio-creatif',
    description: 'Site portfolio interactif et moderne pour présenter mes projets et compétences',
    category: 'frontend',
    technologies: ['Nuxt.js', 'Tailwind CSS', 'i18n', 'Trivule'],
    status: 'completed',
    statusLabel: 'Terminé',
    image: '/images/projects/portfolio.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/user/project'
  },
  {
    id: 5,
    title: 'Météo Bénin',
    slug: 'app-météo-bénin',
    description: 'Application web de vulgarisation des concepts météorologiques pour le Bénin',
    category: 'web-app',
    technologies: ['Nuxt.Js', 'MySQl', 'Prisma'],
    status: 'in-progress',
    statusLabel: 'Pas fini',
    image: '/projects/meteo-benin.png',
    githubUrl: 'https://github.com/DrecQ/App_Meteo_Frontend'
  },
  {
    id: 6,
    title: 'Mes FLAGS',
    slug: 'mes-flags',
    description: 'Application web pour permettre aux utilisateurs de découvrir les préférences les autres utilisateurs',
    category: 'web-app',
    technologies: ['NuxtJs', 'Laravel', 'NodeJs', 'MySQL'],
    status: 'in-progress',
    statusLabel: 'En cours',
    image: '/images/projects/mes-flags.jpg',
    demoUrl: '#',
    githubUrl: '#'
  }
]

// Projets filtrés
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

// Statistiques
const completedProjects = computed(() => {
  return projects.filter(p => p.status === 'completed').length
})

const uniqueTechnologies = computed(() => {
  const allTechs = projects.flatMap(p => p.technologies)
  return [...new Set(allTechs)].length
})

// Fonctions pour le modal d'image
const openImageModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeImageModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}

// Fermer le modal avec la touche Escape
const handleKeydown = (event) => {
  if (event.key === 'Escape' && selectedProject.value) {
    closeImageModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Animation pour le hover des cartes */
.hover\:scale-105 {
  transition: transform 0.3s ease;
}

/* Overlay pour les images */
.absolute.inset-0 {
  transition: opacity 0.3s ease;
}

/* Animation d'entrée pour le modal */
.fixed.inset-0 {
  transition: opacity 0.3s ease;
}
</style>