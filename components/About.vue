<template>
  <section id="About" class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
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

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 px-4 py-2 glass-effect rounded-full mb-6">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow"></div>
          <span class="text-white/90 text-sm font-medium">À propos de moi</span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Qui suis-je ?
        </h1>
        
        <p class="text-lg text-white/80 max-w-3xl mx-auto">
          Découvrez mon parcours, mes compétences et mon expérience dans le développement web
        </p>
      </div>

      <!-- Contenu principal -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        <!-- Partie gauche : Description personnelle -->
        <div class="space-y-6">
          <!-- Présentation avec photo fusionnée -->
          <div class="glass-card rounded-2xl p-8 border border-white/10">
            <div class="flex flex-col lg:flex-row lg:items-start gap-6">
              <!-- Photo de profil -->
              <div class="flex justify-center lg:justify-start flex-shrink-0">
                <div class="relative">
                  <div class="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-1 shadow-2xl">
                    <div class="w-full h-full rounded-2xl bg-slate-800/50 flex items-center justify-center backdrop-blur-sm">
                      <svg class="w-14 h-14 lg:w-16 lg:h-16 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-800 shadow-lg animate-pulse-glow"></div>
                </div>
              </div>
              
              <!-- Contenu textuel -->
              <div class="flex-1 text-center lg:text-left">
                <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Développeur Full Stack
                  <span class="block gradient-text text-xl lg:text-2xl">
                    passionné & créatif
                  </span>
                </h2>
                <p class="text-white/80 mb-4 leading-relaxed">
                  Passionné par la création d'applications web modernes et performantes, j'aime transformer des idées en solutions digitales élégantes et fonctionnelles.
                </p>
                <p class="text-white/80 leading-relaxed">
                  Avec une approche centrée sur l'utilisateur, je développe des interfaces intuitives et des architectures robustes qui répondent aux besoins réels des entreprises.
                </p>
              </div>
            </div>
          </div>

          <!-- Compétences techniques -->
          <div class="glass-card rounded-2xl p-6 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-5 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <span class="gradient-text">Compétences techniques</span>
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="skill in skills" :key="skill.name" class="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group">
                <div class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full group-hover:scale-110 transition-transform"></div>
                <span class="text-sm text-white/90 font-medium">{{ skill.name }}</span>
              </div>
            </div>
          </div>

          <!-- Centres d'intérêt -->
          <div class="glass-card rounded-2xl p-6 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-5 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <span class="gradient-text">Centres d'intérêt</span>
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="interest in interests" :key="interest" class="px-3 py-2 glass-effect text-white/90 rounded-full text-sm font-medium border border-white/20 hover:scale-105 transition-all duration-200 hover:bg-white/10">
                {{ interest }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Partie droite : Expérience professionnelle -->
        <div class="space-y-6">
          <!-- Timeline d'expérience -->
          <div class="glass-card rounded-2xl p-8 border border-white/10">
            <h2 class="text-2xl font-bold text-white mb-8 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                </svg>
              </div>
              <span class="gradient-text">Expérience professionnelle</span>
            </h2>
            
            <div class="space-y-8">
              <div v-for="(experience, index) in experiences" :key="index" class="relative">
                <!-- Ligne de timeline -->
                <div v-if="index < experiences.length - 1" class="absolute left-5 top-16 w-0.5 h-20 bg-gradient-to-b from-blue-400 to-indigo-500"></div>
                
                <!-- Point de timeline -->
                <div class="absolute left-3 top-4 w-5 h-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full border-3 border-slate-800 shadow-lg animate-pulse-glow"></div>
                
                <!-- Contenu de l'expérience -->
                <div class="ml-12 glass-effect rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 class="text-lg font-semibold text-white">
                      {{ experience.title }}
                    </h3>
                    <span class="text-sm text-blue-400 font-medium glass-effect px-3 py-1 rounded-full border border-blue-400/20">
                      {{ experience.period }}
                    </span>
                  </div>
                  
                  <p class="text-indigo-400 font-medium mb-3">
                    {{ experience.company }}
                  </p>
                  
                  <p class="text-white/80 text-sm mb-4 leading-relaxed">
                    {{ experience.description }}
                  </p>
                  
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in experience.technologies" :key="tech" class="px-3 py-1 glass-effect text-white/90 rounded-lg text-xs font-medium border border-white/20 hover:scale-105 transition-transform">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formation -->
          <div class="glass-card rounded-2xl p-6 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center">
              <div class="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <span class="gradient-text">Formation</span>
            </h3>
            <div class="space-y-4">
              <div v-for="education in educations" :key="education.degree" class="glass-effect rounded-lg p-4 border-l-4 border-amber-400 shadow-sm border border-white/10">
                <h4 class="font-semibold text-white mb-1">{{ education.degree }}</h4>
                <p class="text-amber-400 text-sm font-medium">{{ education.school }}</p>
                <p class="text-white/60 text-xs">{{ education.year }}</p>
              </div>
            </div>
          </div>

          <!-- Boutons d'action -->
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink 
              to="/contact"
              class="btn-primary px-6 py-3 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group"
              @click="handleButtonClick"
            >
              <span>Me contacter</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </NuxtLink>
            
            <a 
              href="/cv.pdf" 
              target="_blank"
              class="btn-secondary px-6 py-3 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group"
              @click="handleButtonClick"
            >
              <span>Télécharger CV</span>
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const { t } = useI18n()

// Données pour les compétences
const skills = ref([
  { name: 'Vue.js / Nuxt.js' },
  { name: 'React / Next.js' },
  { name: 'Node.js' },
  { name: 'Laravel / PHP' },
  { name: 'Python / Django' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'MySQL / PostgreSQL' },
  { name: 'MongoDB' },
  { name: 'Docker' },
  { name: 'Git / GitHub' },
  { name: 'AWS / Cloud' }
])

// Centres d'intérêt
const interests = ref([
  'Technologies émergentes',
  'Open Source',
  'UI/UX Design',
  'Intelligence Artificielle',
  'Photographie',
  'Voyages'
])

// Expériences professionnelles
const experiences = ref([
  {
    title: 'Développeur Full Stack Senior',
    company: 'TechCorp Solutions',
    period: '2022 - Présent',
    description: 'Développement d\'applications web complexes avec Vue.js et Laravel. Gestion d\'équipe et architecture de systèmes scalables.',
    technologies: ['Vue.js', 'Laravel', 'Docker', 'AWS', 'MySQL']
  },
  {
    title: 'Développeur Front-End',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Création d\'interfaces utilisateur modernes et responsives pour des clients variés. Optimisation des performances et accessibilité.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Next.js']
  },
  {
    title: 'Développeur Web Junior',
    company: 'StartUp Innovante',
    period: '2019 - 2020',
    description: 'Développement de fonctionnalités web et maintenance d\'applications existantes. Apprentissage des bonnes pratiques de développement.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap']
  }
])

// Formation
const educations = ref([
  {
    degree: 'Master en Informatique',
    school: 'Université de Technologie',
    year: '2018 - 2020'
  },
  {
    degree: 'Licence en Informatique',
    school: 'Université des Sciences',
    year: '2015 - 2018'
  }
])

// Effet de ripple sur les boutons
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

onMounted(() => {
  // Animations ou initialisations si nécessaire
})
</script>

<style scoped>
/* Animations */
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
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
  50% { 
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
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

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Transitions fluides */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Effets de hover subtils */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Support backdrop-filter */
@supports (backdrop-filter: blur(20px)) {
  .glass-effect {
    backdrop-filter: blur(20px);
  }
  
  .glass-card {
    backdrop-filter: blur(20px);
  }
  
  .btn-secondary {
    backdrop-filter: blur(10px);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .space-y-8 {
    gap: 1.5rem;
  }
  
  .space-y-6 {
    gap: 1rem;
  }
  
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