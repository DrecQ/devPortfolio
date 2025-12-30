<template>
  <section id="About" class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    
    <!-- Arrière-plan avec effets -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Cercles lumineux -->
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      <!-- Points lumineux flottants -->
      <div v-for="n in 12" :key="'dot-'+n" 
           class="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-dots"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${n * 0.3}s`,
             animationDuration: `${6 + Math.random() * 10}s`
           }">
      </div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      
      <!-- En-tête de section amélioré -->
      <div class="text-center mb-12 lg:mb-16">
        
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Qui <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Suis-je</span> ?
        </h1>
        
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
        
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Développeur passionné créant des solutions web <span class="text-blue-300 font-medium">modernes et performantes</span>
        </p>
      </div>

      <!-- Contenu principal amélioré -->
      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        
        <!-- Partie gauche : Photo agrandie et présentation -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Photo de profil améliorée -->
          <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl">
            <div class="flex flex-col items-center gap-6">
              <!-- Photo de profil avec effet néon -->
              <div class="relative group">
                <!-- Effet de halo -->
                <div class="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <!-- Photo avec effet glass -->
                <div 
                  class="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-slate-800 to-slate-900 transform hover:scale-105 transition-all duration-500 cursor-pointer shadow-2xl"
                  @click="showImageModal = true"
                >
                  <!-- Overlay de brillance -->
                  <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <NuxtImg 
                    src="/tof_pro.jpg" 
                    alt="Photo d'Evariste Credo" 
                    width="500" 
                    height="500" 
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="eager"
                    format="webp"
                    quality="95"
                    placeholder
                  />
                  
                  <!-- Indicateur de clic -->
                  <div class="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                    <Icon name="heroicons:eye" class="w-3 h-3" />
                    <span>Voir en grand</span>
                  </div>
                </div>
              </div>
              
              <!-- Texte de présentation amélioré -->
              <div class="text-center">
                <h2 class="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Evariste Credo
                </h2>
                <p class="text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium mb-3">
                  Développeur Full Stack & Architecte
                </p>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4 rounded-full"></div>
                <p class="text-white/70 text-base leading-relaxed">
                  Je transforme des <span class="font-semibold text-blue-300">concepts innovants</span> en solutions digitales performantes, 
                  alliant élégance et fonctionnalité.
                </p>
              </div>

              <!-- Bouton "Me découvrir" amélioré -->
              <NuxtLink 
                to="/Discover"
                class="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 group/cta relative overflow-hidden shadow-lg shadow-blue-500/25"
              >
                <!-- Effet de brillance -->
                <div class="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <Icon name="heroicons:sparkles" class="w-5 h-5 relative z-10" />
                <span class="relative z-10 text-lg">Me découvrir</span>
                <Icon name="heroicons:arrow-right" class="w-4 h-4 relative z-10 transform group-hover/cta:translate-x-1 transition-transform duration-300" />
              </NuxtLink>
            </div>
          </div>

          <!-- Compétences techniques améliorées -->
          <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="heroicons:wrench-screwdriver" class="w-5 h-5 text-blue-400 mr-2" />
              Technologies maîtrisées
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div 
                v-for="skill in skills" 
                :key="skill.name" 
                class="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/skill border border-white/10 hover:border-blue-500/30"
              >
                <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover/skill:scale-150 transition-transform duration-300"></div>
                <span class="text-sm text-white/90 font-medium">{{ skill.name }}</span>
                <Icon 
                  :name="skill.icon" 
                  class="w-4 h-4 ml-auto text-white/40 group-hover/skill:text-blue-400 transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        
        <!-- Partie droite : Expérience et formation -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Centres d'intérêt améliorés -->
          <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="heroicons:heart" class="w-5 h-5 text-rose-400 mr-2" />
              Centres d'intérêt & Passions
            </h3>
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="interest in interests" 
                :key="interest" 
                class="px-4 py-2.5 bg-gradient-to-br from-white/5 to-white/3 text-white/90 rounded-xl text-sm font-medium border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group/interest backdrop-blur-sm"
              >
                <span class="relative z-10">{{ interest }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover/interest:opacity-100 transition-opacity duration-300"></div>
              </span>
            </div>
          </div>

          <!-- Expérience professionnelle améliorée -->
          <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 class="text-xl font-bold text-white mb-6 flex items-center">
              <div class="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-500/30 mr-3">
                <Icon name="heroicons:briefcase" class="w-5 h-5 text-blue-400" />
              </div>
              <span>Expérience professionnelle</span>
            </h2>
            
            <div class="space-y-8">
              <div 
                v-for="(experience, index) in experiences" 
                :key="index" 
                class="relative pl-8 group/exp"
              >
                <!-- Ligne de timeline améliorée -->
                <div 
                  v-if="index < experiences.length - 1" 
                  class="absolute left-[19px] top-12 w-0.5 h-16 bg-gradient-to-b from-blue-400/50 to-cyan-400/50 group-hover/exp:from-blue-400 group-hover/exp:to-cyan-400 transition-all duration-300"
                ></div>
                
                <!-- Point de timeline amélioré -->
                <div class="absolute left-0 top-4 w-5 h-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg border-2 border-white/20 group-hover/exp:scale-125 transition-transform duration-300"></div>
                
                <!-- Contenu de l'expérience amélioré -->
                <div class="bg-gradient-to-br from-white/5 to-white/3 rounded-xl p-5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 group-hover/exp:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h3 class="text-lg font-semibold text-white group-hover/exp:text-blue-300 transition-colors duration-300">
                      {{ experience.title }}
                    </h3>
                    <span class="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 mt-1 sm:mt-0 backdrop-blur-sm">
                      {{ experience.period }}
                    </span>
                  </div>
                  
                  <p class="text-cyan-300 font-medium mb-3 text-sm">
                    {{ experience.company }}
                  </p>
                  
                  <p class="text-white/70 text-sm mb-4 leading-relaxed">
                    {{ experience.description }}
                  </p>
                  
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in experience.technologies" 
                      :key="tech" 
                      class="px-2.5 py-1 bg-white/10 text-white/80 rounded-lg text-xs border border-white/15 hover:border-blue-400/30 hover:bg-white/15 transition-all duration-300 cursor-default group/tech"
                    >
                      <span class="relative z-10">{{ tech }}</span>
                      <div class="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formation améliorée -->
          <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <div class="p-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-400/20 border border-amber-500/30 mr-3">
                <Icon name="heroicons:academic-cap" class="w-5 h-5 text-amber-400" />
              </div>
              <span>Formation académique</span>
            </h3>
            <div class="space-y-4">
              <div 
                v-for="education in educations" 
                :key="education.degree" 
                class="bg-gradient-to-br from-white/5 to-white/3 rounded-xl p-5 border border-white/10 hover:border-amber-500/30 transition-all duration-300 group/edu backdrop-blur-sm"
              >
                <div class="flex items-start justify-between mb-2">
                  <div class="flex-1">
                    <h4 class="font-semibold text-white text-sm group-hover/edu:text-amber-300 transition-colors duration-300">
                      {{ education.degree }}
                    </h4>
                    <p class="text-amber-300/80 text-sm">{{ education.school }}</p>
                  </div>
                  <span class="px-2.5 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-xs border border-amber-500/20">
                    {{ education.year }}
                  </span>
                </div>
                <div class="mt-3 pt-3 border-t border-white/10">
                  <p class="text-white/60 text-xs">Certifié et diplômé</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Boutons d'action améliorés -->
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink 
              to="/contact"
              class="flex-1 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 group/contact relative overflow-hidden shadow-lg shadow-blue-500/25"
            >
              <!-- Effet de brillance -->
              <div class="absolute inset-0 -translate-x-full group-hover/contact:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <Icon name="heroicons:envelope" class="w-5 h-5 relative z-10" />
              <span class="relative z-10">Me contacter</span>
            </NuxtLink>
            
            <a 
              href="/cv.pdf" 
              download="CV_Evariste_Credo_Quist.pdf"
              target="_blank"
              @click="handleDownload"
              class="flex-1 px-8 py-3.5 bg-gradient-to-br from-white/5 to-white/3 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group/download border border-white/10 hover:border-blue-500/30 backdrop-blur-sm"
            >
              <Icon name="heroicons:document-arrow-down" class="w-5 h-5 text-blue-400 group-hover/download:text-blue-300 transition-colors duration-300" />
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour l'image agrandie - AMÉLIORÉ -->
    <div 
      v-if="showImageModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl transition-all duration-300"
      @click="showImageModal = false"
    >
      <!-- Effets de fond du modal -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-50"></div>
      
      <div class="relative max-w-4xl w-full max-h-[90vh]" @click.stop>
        <!-- Bouton fermeture amélioré -->
        <button 
          @click="showImageModal = false"
          class="absolute -top-16 right-0 z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group/close"
        >
          <div class="relative w-6 h-6">
            <div class="absolute top-1/2 left-1/2 w-4/5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45 group-hover/close:scale-110 transition-transform duration-300"></div>
            <div class="absolute top-1/2 left-1/2 w-4/5 h-0.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45 group-hover/close:scale-110 transition-transform duration-300"></div>
          </div>
        </button>
        
        <!-- Contenu du modal amélioré -->
        <div class="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
          <div class="relative">
            <!-- Image agrandie avec effet glass -->
            <div class="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <NuxtImg 
                src="/tof_pro.jpg" 
                alt="Photo d'Evariste Credo - Vue agrandie" 
                width="800" 
                height="800" 
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
            
            <!-- Légende améliorée -->
            <div class="text-center mt-6 space-y-2">
              <h3 class="text-2xl font-bold text-white">Evariste Credo</h3>
              <p class="text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                Développeur Full Stack & Architecte
              </p>
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

// État pour le modal
const showImageModal = ref(false)

// Données pour les compétences avec icônes
const skills = [
  { name: 'Nuxt.js', icon: 'simple-icons:nuxtdotjs' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'Laravel', icon: 'simple-icons:laravel' },
  { name: 'PHP', icon: 'simple-icons:php' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
  { name: 'MySQL', icon: 'simple-icons:mysql' },
  { name: 'Docker', icon: 'simple-icons:docker' },
  { name: 'Linux', icon: 'simple-icons:linux' },
  { name: 'Git', icon: 'simple-icons:git' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
]

// Centres d'intérêt
const interests = [
  'Technologies émergentes',
  'Open Source',
  'UI/UX Design',
  'Intelligence Artificielle',
  'Photographie',
  'Musique',
  'Basketball',
  'Innovation'
]

// Expériences professionnelles
const experiences = [
  {
    title: 'Développeur web Junior',
    company: 'E-Business Afrique',
    period: 'Mars 2025 - Juin 2025',
    description: 'Développement d\'applications web avec Nuxt.js et Laravel. Test d\'application, gestion des étapes d\'un projet et architecture de systèmes scalables.',
    technologies: ['Nuxt.Js', 'Laravel', 'MySQL', 'API REST', 'Git']
  },
  {
    title: 'Entrepreneur en Telecoms et Web',
    company: 'LESCAL - Laboratoire d\'Etudes Statistiques et de Conception d\'Applications et Logiciels',
    period: 'Juillet 2021 - Janvier 2022',
    description: 'Développement de fonctionnalités web et maintenance d\'applications existantes. Apprentissage des bonnes pratiques de développement et des méthodologies agiles.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'Responsive Design']
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
    school: 'VED - Université d\'Abomey-Calavi',
    year: '2020 - 2022'
  },
  {
    degree: 'Baccalauréat Série D',
    school: 'Prytanée Militaire de Bembèrèkè',
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

const handleDownload = (event) => {
  // Tracking analytics (optionnel)
  console.log('CV téléchargé')
  
  // Forcer le téléchargement sur mobile
  if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
    event.preventDefault()
    window.open('/cv.pdf', '_blank')
  }
}

</script>

<style scoped>
/* Animations CSS personnalisées */
@keyframes pulse-slow {
  0%, 100% { 
    opacity: 0.1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.25; 
    transform: scale(1.05); 
  }
}

@keyframes float-dots {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.2;
  }
  25% { 
    transform: translateY(-20px) translateX(10px);
    opacity: 0.5;
  }
  50% { 
    transform: translateY(-40px) translateX(-5px);
    opacity: 0.2;
  }
  75% { 
    transform: translateY(-20px) translateX(-10px);
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-float-dots {
  animation: float-dots 8s ease-in-out infinite;
}

/* Amélioration des transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Support pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-float-dots,
  .transition-all,
  .transform {
    animation: none !important;
    transition: none !important;
  }
  
  .hover\:scale-105:hover,
  .hover\:scale-\[1\.02\]:hover,
  .hover\:scale-110:hover {
    transform: none !important;
  }
}

/* Responsive pour l'image mobile */
@media (max-width: 640px) {
  .py-12 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  /* Ajustement de la photo */
  .w-48 {
    width: 14rem;
  }
  .h-48 {
    height: 14rem;
  }
}

@media (max-width: 480px) {
  .py-12 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  
  .w-48 {
    width: 16rem;
  }
  .h-48 {
    height: 16rem;
  }
}

/* Ajustements pour le modal sur mobile */
@media (max-width: 768px) {
  .max-w-4xl {
    max-width: 95vw;
  }
  
  .rounded-3xl {
    border-radius: 1.5rem;
  }
}
</style>