<template>
  <section id="About" class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    <!-- Arrière-plan minimal -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      
      <!-- En-tête de section -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span class="text-white/90 text-sm font-medium">À propos de moi</span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Qui suis-je ?
        </h1>
        
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Développeur passionné créant des solutions web modernes et performantes
        </p>
      </div>

      <!-- Contenu principal -->
      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        
        <!-- Partie gauche : Photo agrandie et présentation -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Photo de profil agrandie et immersive -->
          <div class="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-sm shadow-2xl">
            <div class="flex flex-col items-center gap-6">
              <!-- Photo de profil améliorée et agrandie -->
              <div class="flex-shrink-0 relative">
                <div 
                  class="w-48 h-48 sm:w-64 sm:h-64 lg:w-64 lg:h-64 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500 p-2 shadow-2xl transform hover:scale-105 transition-transform duration-500 cursor-pointer"
                  @click="showImageModal = true"
                >
                  <div class="w-full h-full rounded-2xl bg-slate-800 overflow-hidden border-2 border-white/20">
                    <NuxtImg 
                      src="/tof_pro.jpg" 
                      alt="Photo d'Evariste Credo" 
                      width="500" 
                      height="500" 
                      class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      loading="eager"
                      format="webp"
                      quality="95"
                    />
                  </div>
                </div>
                <!-- Effet de brillance subtile -->
                <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 to-purple-500/30 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <!-- Indicateur de clic -->
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30">
                  👆 Cliquer pour agrandir
                </div>
              </div>
              
              <!-- Texte de présentation -->
              <div class="text-center">
                <h2 class="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Evariste Credo
                </h2>
                <p class="text-blue-300 font-medium text-lg mb-4">
                  Développeur Full Stack
                </p>
                <div class="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 rounded-full"></div>
                <p class="text-white/80 text-base leading-relaxed">
                  Passionné par la création d'applications web modernes, je transforme des idées en solutions digitales élégantes et fonctionnelles.
                </p>
              </div>

              <!-- Bouton "Me découvrir" -->
              <NuxtLink 
                to="/discover"
                class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
              >
                <Icon name="heroicons:sparkles" class="w-5 h-5" />
                <span class="text-lg">Me découvrir</span>
                <Icon name="heroicons:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </div>

          <!-- Compétences techniques -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="heroicons:wrench-screwdriver" class="w-5 h-5 text-blue-400 mr-2" />
              Compétences techniques
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="skill in skills" :key="skill.name" 
                   class="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10">
                <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <span class="text-sm text-white/90 font-medium">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Partie droite : Expérience et formation -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Centres d'intérêt -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="heroicons:heart" class="w-5 h-5 text-purple-400 mr-2" />
              Centres d'intérêt
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="interest in interests" :key="interest" 
                    class="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white/90 rounded-lg text-sm border border-white/20 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200">
                {{ interest }}
              </span>
            </div>
          </div>

          <!-- Expérience professionnelle -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h2 class="text-xl font-bold text-white mb-6 flex items-center">
              <Icon name="heroicons:briefcase" class="w-5 h-5 text-blue-400 mr-2" />
              Expérience professionnelle
            </h2>
            
            <div class="space-y-6">
              <div v-for="(experience, index) in experiences" :key="index" class="relative pl-6">
                <!-- Ligne de timeline -->
                <div v-if="index < experiences.length - 1" 
                     class="absolute left-3 top-8 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-400 opacity-50"></div>
                
                <!-- Point de timeline -->
                <div class="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"></div>
                
                <!-- Contenu de l'expérience -->
                <div class="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <h3 class="text-lg font-semibold text-white">
                      {{ experience.title }}
                    </h3>
                    <span class="text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-lg mt-1 sm:mt-0 border border-white/20">
                      {{ experience.period }}
                    </span>
                  </div>
                  
                  <p class="text-blue-300 font-medium mb-2 text-sm">
                    {{ experience.company }}
                  </p>
                  
                  <p class="text-white/80 text-sm mb-3 leading-relaxed">
                    {{ experience.description }}
                  </p>
                  
                  <div class="flex flex-wrap gap-1">
                    <span v-for="tech in experience.technologies" :key="tech" 
                          class="px-2 py-1 bg-white/10 text-white/80 rounded text-xs border border-white/20">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formation -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="heroicons:academic-cap" class="w-5 h-5 text-amber-400 mr-2" />
              Formation
            </h3>
            <div class="space-y-4">
              <div v-for="education in educations" :key="education.degree" 
                   class="bg-white/5 rounded-lg p-4 border-l-4 border-amber-400 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
                <h4 class="font-semibold text-white text-sm">{{ education.degree }}</h4>
                <p class="text-amber-300 text-sm">{{ education.school }}</p>
                <p class="text-white/60 text-xs">{{ education.year }}</p>
              </div>
            </div>
          </div>

          <!-- Boutons d'action -->
          <div class="flex flex-col sm:flex-row gap-3">
            <NuxtLink 
              to="/contact"
              class="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Icon name="heroicons:envelope" class="w-4 h-4" />
              <span>Me contacter</span>
            </NuxtLink>
            
            <a 
              href="/cv.pdf" 
              target="_blank"
              class="flex-1 px-4 py-3 bg-white/10 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm"
            >
              <Icon name="heroicons:arrow-down-tray" class="w-4 h-4" />
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour l'image agrandie -->
    <div v-if="showImageModal" 
         class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
         @click="showImageModal = false"
    >
      <div class="relative max-w-4xl w-full max-h-[90vh]" @click.stop>
        <!-- Bouton fermeture -->
        <button 
          @click="showImageModal = false"
          class="absolute -top-12 right-0 z-10 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
        >
          <Icon name="heroicons:x-mark" class="w-8 h-8" />
        </button>
        
        <!-- Image agrandie -->
        <div class="bg-white/5 rounded-3xl p-4 border border-white/20 backdrop-blur-sm">
          <div class="relative">
            <NuxtImg 
              src="/tof_pro.jpg" 
              alt="Photo d'Evariste Credo - Vue agrandie" 
              width="800" 
              height="800" 
              class="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl"
              loading="eager"
              format="webp"
              quality="100"
            />
            
            <!-- Effet de cadre -->
            <div class="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
          </div>
          
          <!-- Légende simplifiée -->
          <div class="text-center mt-4">
            <p class="text-white/80 text-sm">Evariste Credo - Développeur Full Stack</p>
            <p class="text-white/60 text-xs mt-1">Touchez en dehors de l'image pour fermer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

// État pour le modal
const showImageModal = ref(false)

// Données pour les compétences
const skills = [
  { name: 'Nuxt.js' },
  { name: 'Node.js' },
  { name: 'Laravel' },
  { name: 'PHP' },
  { name: 'Tailwind CSS' },
  { name: 'MySQL' },
  { name: 'Docker' },
  { name: 'Linux' },
  { name: 'Git / GitHub' },
]

// Centres d'intérêt
const interests = [
  'Technologies émergentes',
  'Open Source',
  'UI/UX Design',
  'Intelligence Artificielle',
  'Photographie',
  'Musique',
  'Basketball'
]

// Expériences professionnelles
const experiences = [
  {
    title: 'Développeur web Junior',
    company: 'E-Business Afrique',
    period: 'Mars 2025 - Juin 2025',
    description: 'Développement d\'applications web avec Nuxt.js et Laravel. Test d\'application, gestion des étapes d\'un projet et architecture de systèmes scalables.',
    technologies: ['Nuxt.Js', 'Laravel', 'MySQL']
  },
  {
    title: 'Entrepreneur en Telecoms et Web',
    company: 'LESCAL - Laboratoire d\'Etudes Statistiques et de Conception d\'Applications et Logiciels',
    period: 'Juillet 2021 - Janvier 2022',
    description: 'Développement de fonctionnalités web et maintenance d\'applications existantes. Apprentissage des bonnes pratiques de développement.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap']
  }
]

// Formation
const educations = [
  {
    degree: 'Licence en Informatique',
    school: 'ESGIS-Bénin',
    year: '2022 - 2025'
  },
  {
    degree: 'Entrepreneuriat en Telecoms et Web',
    school: 'VED - UAC',
    year: '2020 - 2022'
  },
  {
    degree: 'Baccalaureat serie D',
    school: 'Prytanee Militaire de Bembèrèkè',
    year: '2020'
  }
]

// Fermer le modal avec la touche Escape
const handleKeydown = (event) => {
  if (event.key === 'Escape' && showImageModal.value) {
    showImageModal.value = false
  }
}

// Gestionnaire d'événements clavier
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.grid-pattern {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
}

/* Animation subtile pour l'image */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hover\\:scale-105:hover {
  animation: float 3s ease-in-out infinite;
}

/* Responsive pour l'image mobile */
@media (max-width: 640px) {
  .py-12 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  /* Image plus grande sur mobile */
  .w-48 {
    width: 12rem;
  }
  .h-48 {
    height: 12rem;
  }
}

@media (max-width: 480px) {
  .py-12 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  
  /* Image encore plus grande sur très petits écrans */
  .w-48 {
    width: 14rem;
  }
  .h-48 {
    height: 14rem;
  }
}

/* Ajustements pour le modal sur mobile */
@media (max-width: 768px) {
  .max-w-4xl {
    max-width: 95vw;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .rounded-3xl {
    border-radius: 1.5rem;
  }
}
</style>