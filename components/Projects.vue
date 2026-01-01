<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    <!-- Arrière-plan avec effets -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Grands cercles de lumière -->
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      <!-- Particules de code -->
      <div v-for="n in 8" :key="'code-'+n" 
           class="absolute font-mono text-sm text-blue-400/30 animate-float-slow pointer-events-none"
           :style="{
             left: `${10 + (n * 10)}%`,
             top: `${15 + (n * 5)}%`,
             animationDelay: `${n * 0.7}s`
           }">
        {{ n % 2 === 0 ? 'const project = new Project()' : 'export default defineComponent' }}
      </div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- En-tête amélioré -->
      <div class="text-center mb-16">
        
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Mes <span class="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Projets</span>
        </h1>
        
        <p class="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Découvrez une sélection de mes applications web et solutions <span class="text-blue-300 font-medium">full-stack</span> développées avec passion
        </p>
      </div>

      <!-- Filtres améliorés -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="filter in filters" 
          :key="filter.value"
          @click="activeFilter = filter.value"
          :class="[
            'px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group/filter',
            activeFilter === filter.value 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105' 
              : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10 hover:border-white/20 hover:scale-105'
          ]"
        >
          <span class="relative z-10">{{ filter.label }}</span>
          <!-- Effet de hover pour filtres inactifs -->
          <div 
            v-if="activeFilter !== filter.value"
            class="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90 rounded-xl opacity-0 group-hover/filter:opacity-100 transition-opacity duration-300"
          ></div>
        </button>
      </div>

      <!-- Grille des projets améliorée -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 relative"
        >
          <!-- Élément décoratif en coin -->
          <div class="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div class="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rotate-45"></div>
          </div>
          
          <!-- Image du projet -->
          <div 
            class="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden cursor-pointer group/image"
            @click="openImageModal(project)"
          >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
            
            <NuxtImg 
              v-if="project.image"
              :src="project.image" 
              :alt="`Aperçu du projet ${project.title}`"
              class="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-110 group-hover/image:brightness-110"
              loading="lazy"
              format="webp"
              quality="80"
              placeholder
            />
            <div v-else class="w-full h-full flex items-center justify-center">
              <Icon name="heroicons:computer-desktop" class="w-20 h-20 text-white/20" />
            </div>
            
            <!-- Overlay amélioré -->
            <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500 flex items-center justify-center">
              <div class="transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                <div class="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                  <Icon name="heroicons:eye" class="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <!-- Badge de statut amélioré -->
            <div class="absolute top-4 right-4 z-20">
              <span 
                :class="[
                  'px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border shadow-lg transition-all duration-300 group-hover:scale-110',
                  project.status === 'completed' ? 'bg-green-500/20 text-green-300 border-green-500/40 shadow-green-500/10' :
                  project.status === 'in-progress' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-amber-500/10' :
                  'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-blue-500/10'
                ]"
              >
                {{ project.statusLabel }}
              </span>
            </div>

            <!-- Indicateur de clic -->
            <div class="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center gap-1.5">
              <Icon name="heroicons:arrow-up-right" class="w-3 h-3" />
              <span>Voir en grand</span>
            </div>
          </div>

          <!-- Contenu amélioré -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1">
                  {{ project.title }}
                </h3>
                <!-- Catégorie -->
                <div class="inline-flex items-center gap-1.5 text-xs text-white/60">
                  <Icon :name="getCategoryIcon(project.category)" class="w-3 h-3" />
                  <span>{{ getCategoryLabel(project.category) }}</span>
                </div>
              </div>
              <Icon 
                name="heroicons:arrow-up-right" 
                class="w-5 h-5 text-white/40 group-hover:text-blue-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
              />
            </div>

            <p class="text-white/70 text-sm mb-5 leading-relaxed line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Technologies améliorées -->
            <div class="flex flex-wrap gap-2 mb-5">
              <span 
                v-for="tech in project.technologies.slice(0, 4)" 
                :key="tech"
                class="px-2.5 py-1 bg-white/10 text-white/80 rounded-lg text-xs border border-white/15 hover:border-blue-400/30 hover:bg-white/15 transition-all duration-300 cursor-default group/tech"
              >
                <span class="relative z-10">{{ tech }}</span>
                <div class="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
              </span>
              <span 
                v-if="project.technologies.length > 4"
                class="px-2.5 py-1 bg-white/5 text-white/60 rounded-lg text-xs border border-white/10"
              >
                +{{ project.technologies.length - 4 }}
              </span>
            </div>

            <!-- Actions améliorées -->
            <div class="flex gap-3 pt-4 border-t border-white/10">
              <a 
                v-if="project.demoUrl && project.demoUrl !== '#'"
                :href="project.demoUrl" 
                target="_blank"
                class="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 group/demo relative overflow-hidden shadow-lg shadow-blue-500/20"
              >
                <!-- Effet de brillance -->
                <div class="absolute inset-0 -translate-x-full group-hover/demo:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <Icon name="heroicons:play-circle" class="w-4 h-4 relative z-10" />
                <span class="relative z-10">Démo</span>
              </a>
              <a 
                v-if="project.githubUrl && project.githubUrl !== '#'"
                :href="project.githubUrl" 
                target="_blank"
                class="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group/github"
              >
                <Icon name="simple-icons:github" class="w-4 h-4" />
                <span>Code</span>
              </a>
              <NuxtLink 
                v-else
                :to="`/${project.slug}`"
                class="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group/details"
              >
                <Icon name="heroicons:information-circle" class="w-4 h-4" />
                <span>Détails</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistiques améliorées -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div 
          v-for="(stat, index) in statistics" 
          :key="index"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 group/stat"
        >
          <div class="text-3xl font-bold text-white mb-2 group-hover/stat:text-blue-300 transition-colors duration-300">
            {{ stat.value }}
          </div>
          <div class="text-sm text-white/70">{{ stat.label }}</div>
          <!-- Barre de progression décorative -->
          <div class="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transform origin-left transition-transform duration-1000"
              :style="{ transform: `scaleX(${stat.percentage / 100})` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Call to action amélioré -->
      <div class="relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden group/cta">
        <!-- Effets de fond -->
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover/cta:scale-150 transition-transform duration-1000"></div>
        <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl group-hover/cta:scale-150 transition-transform duration-1000 delay-300"></div>
        
        <div class="relative z-10 text-center">
          <h2 class="text-2xl font-bold text-white mb-3">
            Un <span class="text-blue-300">projet</span> en tête ?
          </h2>
          <p class="text-white/80 mb-6 max-w-lg mx-auto">Discutons de votre prochain projet ensemble et transformons vos idées en réalité</p>
          <NuxtLink 
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 group/contact relative overflow-hidden shadow-lg shadow-blue-500/25"
          >
            <!-- Effet de brillance -->
            <div class="absolute inset-0 -translate-x-full group-hover/contact:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 relative z-10" />
            <span class="relative z-10">Me contacter</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Modal pour l'image agrandie - AMÉLIORÉ -->
    <div 
      v-if="selectedProject" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl transition-all duration-300"
      @click="closeImageModal"
    >
      <!-- Effets de fond du modal -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-50"></div>
      
      <div class="relative max-w-4xl w-full max-h-[90vh]" @click.stop>
        <!-- Bouton fermeture amélioré -->
        <button 
          @click="closeImageModal"
          class="absolute -top-16 right-0 z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group/close"
        >
          <div class="relative w-6 h-6">
            <div class="absolute top-1/2 left-1/2 w-4/5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45 group-hover/close:scale-110 transition-transform duration-300"></div>
            <div class="absolute top-1/2 left-1/2 w-4/5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45 group-hover/close:scale-110 transition-transform duration-300"></div>
          </div>
        </button>
        
        <!-- Contenu du modal -->
        <div class="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
          <div class="relative">
            <!-- Image agrandie avec effet -->
            <div class="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <NuxtImg 
                :src="selectedProject.image" 
                :alt="`Aperçu du projet ${selectedProject.title}`"
                width="800" 
                height="600" 
                class="w-full h-auto max-h-[70vh] object-contain"
                loading="eager"
                format="webp"
                quality="100"
              />
              
              <!-- Overlay dégradé -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
              
              <!-- Effet de cadre -->
              <div class="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none"></div>
            </div>
            
            <!-- Informations du projet améliorées -->
            <div class="text-center mt-6 space-y-4">
              <div>
                <h3 class="text-2xl font-bold text-white mb-1">{{ selectedProject.title }}</h3>
                <p class="text-white/80">{{ selectedProject.description }}</p>
              </div>
              
              <!-- Technologies dans le modal -->
              <div class="flex flex-wrap justify-center gap-2">
                <span 
                  v-for="tech in selectedProject.technologies" 
                  :key="tech"
                  class="px-3 py-1.5 bg-white/10 text-white/80 rounded-lg text-sm border border-white/15"
                >
                  {{ tech }}
                </span>
              </div>
              
              <p class="text-white/60 text-sm pt-4 border-t border-white/10">
                Cliquez en dehors de l'image ou appuyez sur <kbd class="px-2 py-1 bg-white/10 rounded text-xs">Échap</kbd> pour fermer
              </p>
            </div>
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

// Icônes par catégorie
const getCategoryIcon = (category) => {
  const icons = {
    'web-app': 'heroicons:globe-alt',
    'frontend': 'heroicons:computer-desktop',
    'backend': 'heroicons:server'
  }
  return icons[category] || 'heroicons:cube'
}

const getCategoryLabel = (category) => {
  const labels = {
    'web-app': 'Application Web',
    'frontend': 'Interface',
    'backend': 'API & Backend'
  }
  return labels[category] || 'Projet'
}

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
    image: '/projects/gestion-projecteur.png',
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
    image: '/projects/gestion-notes-lmd.png',
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
    image: '/projects/portfolio.png',
    demoUrl: 'https://drec-portfolio.netlify.app/',
    githubUrl: 'https://github.com/user/project'
  },
  {
    id: 5,
    title: 'Météo Bénin',
    slug: 'app-météo-bénin',
    description: 'Application web de vulgarisation des concepts météorologiques pour le Bénin',
    category: 'web-app',
    technologies: ['Nuxt.Js', 'MySQL', 'Prisma'],
    status: 'in-progress',
    statusLabel: 'En développement',
    image: '/projects/meteo-benin.png',
    githubUrl: 'https://github.com/DrecQ/App_Meteo_Frontend'
  },
   {
    id: 6,
    title: 'FastVitrine, creation de vitrine de vente en ligne',
    slug: 'fast-vitrine',
    description: 'Application web pour la création de vitrines de vente en ligne pour les vendeurs de produits saisonniers',
    category: 'web-app',
    technologies: ['ReactJs', 'TypeScript', 'Gemini-Build', 'Vibe-Coding'],
    status: 'completed',
    statusLabel: 'Terminé',
    image: '/projects/fast-vitrine.png',
    githubUrl: 'https://github.com/DrecQ/fastVitrine'
  },
  {
    id: 7,
    title: 'Mes FLAGS',
    slug: 'mes-flags',
    description: 'Application web pour permettre aux utilisateurs de découvrir les préférences des autres utilisateurs',
    category: 'web-app',
    technologies: ['NuxtJs', 'Laravel', 'NodeJs', 'MySQL'],
    status: 'in-progress',
    statusLabel: 'En cours',
    image: '/projects/mes-flags.png',
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

const statistics = computed(() => [
  { 
    value: projects.length, 
    label: 'Projets réalisés',
    percentage: 100
  },
  { 
    value: completedProjects.value, 
    label: 'Projets terminés',
    percentage: Math.round((completedProjects.value / projects.length) * 100)
  },
  { 
    value: uniqueTechnologies.value, 
    label: 'Technologies maîtrisées',
    percentage: Math.round((uniqueTechnologies.value / 20) * 100) // 20 comme base max
  }
])

// Fonctions pour le modal d'image
const openImageModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

const closeImageModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
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
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
/* Animations CSS personnalisées */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.05); }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% { 
    transform: translateY(0) translateX(0);
    opacity: 0.3;
  }
  25% { 
    transform: translateY(-10px) translateX(5px);
    opacity: 0.5;
  }
  50% { 
    transform: translateY(-20px) translateX(-5px);
    opacity: 0.3;
  }
  75% { 
    transform: translateY(-10px) translateX(-10px);
    opacity: 0.5;
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

/* Support pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-float-slow,
  .transition-all,
  .transform {
    animation: none !important;
    transition: none !important;
  }
  
  .hover\:scale-105:hover,
  .hover\:scale-\[1\.02\]:hover {
    transform: none !important;
  }
}

/* Amélioration du line-clamp */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Amélioration des transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>