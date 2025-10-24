<template>
  <section id="About" class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    <!-- Arrière-plan minimal -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      
      <!-- En-tête de section -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span class="text-white/90 text-sm">À propos de moi</span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Qui suis-je ?
        </h1>
        
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Développeur passionné créant des solutions web modernes et performantes
        </p>
      </div>

      <!-- Contenu principal -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        <!-- Partie gauche : Présentation et compétences -->
        <div class="space-y-8">
          <!-- Présentation personnelle -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <!-- Photo de profil -->
              <div class="flex-shrink-0">
                <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-lg">
                  <div class="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                    <Icon name="heroicons:user" class="w-10 h-10 text-white/70" />
                  </div>
                </div>
              </div>
              
              <!-- Texte de présentation -->
              <div class="text-center sm:text-left">
                <h2 class="text-xl font-bold text-white mb-2">
                  Evariste Credo
                </h2>
                <p class="text-blue-300 font-medium mb-3">
                  Développeur Full Stack
                </p>
                <p class="text-white/80 text-sm leading-relaxed">
                  Passionné par la création d'applications web modernes, je transforme des idées en solutions digitales élégantes et fonctionnelles.
                </p>
              </div>
            </div>
          </div>

          <!-- Compétences techniques -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="heroicons:wrench-screwdriver" class="w-5 h-5 text-blue-400 mr-2" />
              Compétences techniques
            </h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div v-for="skill in skills" :key="skill.name" 
                   class="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors">
                <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span class="text-sm text-white/90">{{ skill.name }}</span>
              </div>
            </div>
          </div>

          <!-- Centres d'intérêt -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="heroicons:heart" class="w-5 h-5 text-purple-400 mr-2" />
              Centres d'intérêt
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="interest in interests" :key="interest" 
                    class="px-3 py-1 bg-white/10 text-white/90 rounded-lg text-sm border border-white/20">
                {{ interest }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Partie droite : Expérience et formation -->
        <div class="space-y-8">
          <!-- Expérience professionnelle -->
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 class="text-xl font-bold text-white mb-6 flex items-center">
              <Icon name="heroicons:briefcase" class="w-5 h-5 text-blue-400 mr-2" />
              Expérience professionnelle
            </h2>
            
            <div class="space-y-6">
              <div v-for="(experience, index) in experiences" :key="index" class="relative pl-6">
                <!-- Ligne de timeline -->
                <div v-if="index < experiences.length - 1" 
                     class="absolute left-3 top-8 w-0.5 h-16 bg-blue-400/30"></div>
                
                <!-- Point de timeline -->
                <div class="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                
                <!-- Contenu de l'expérience -->
                <div class="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <h3 class="text-lg font-semibold text-white">
                      {{ experience.title }}
                    </h3>
                    <span class="text-sm text-blue-400 bg-blue-400/10 px-2 py-1 rounded-lg mt-1 sm:mt-0">
                      {{ experience.period }}
                    </span>
                  </div>
                  
                  <p class="text-indigo-300 font-medium mb-2 text-sm">
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
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="heroicons:academic-cap" class="w-5 h-5 text-amber-400 mr-2" />
              Formation
            </h3>
            <div class="space-y-4">
              <div v-for="education in educations" :key="education.degree" 
                   class="bg-white/5 rounded-lg p-4 border-l-4 border-amber-400">
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
              class="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Icon name="heroicons:envelope" class="w-4 h-4" />
              <span>Me contacter</span>
            </NuxtLink>
            
            <a 
              href="/cv.pdf" 
              target="_blank"
              class="flex-1 px-4 py-3 bg-white/10 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
            >
              <Icon name="heroicons:arrow-down-tray" class="w-4 h-4" />
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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

/* Responsive */
@media (max-width: 640px) {
  .py-12 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .py-12 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}
</style>