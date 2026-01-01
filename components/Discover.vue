<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    
    <!-- Arrière-plan avec effets -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Cercles lumineux -->
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>

      <!-- Particules de code -->
      <div v-for="n in 6" :key="'code-'+n" 
           class="absolute font-mono text-sm text-blue-400/30 animate-float-slow pointer-events-none"
           :style="{
             left: `${15 + (n * 12)}%`,
             top: `${20 + (n * 7)}%`,
             animationDelay: `${n * 0.8}s`,
             fontSize: `${0.8 + Math.random() * 0.4}rem`
           }">
        {{ getCodeSnippet(n) }}
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <!-- En-tête principal -->
      <div class="text-center mb-16 animate-fade-in-up">
        
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Mon <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Univers</span>
        </h1>
        
        <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
        
        <p class="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          De la passion du code à la quête d'excellence
        </p>
      </div>

      <!-- Article structuré -->
      <article class="space-y-8">
        
        <!-- Introduction -->
        <section 
          id="introduction"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group animate-fade-in-up"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/30">
              <Icon name="heroicons:sparkles" class="w-6 h-6 text-blue-400" />
            </div>
            <h2 class="text-2xl font-bold text-white pt-1">Mon Parcours</h2>
          </div>
          
          <p class="text-lg text-white/70 leading-relaxed mb-4">
            Je m'appelle <span class="font-semibold text-blue-300">Evariste Credo Q.</span> et je suis développeur web passionné par la création de solutions 
            technologiques qui transforment notre quotidien. Mon parcours est guidé par une conviction profonde : 
            l'informatique est bien plus qu'une discipline technique, c'est une science qui, à l'image de la médecine, 
            a le pouvoir de sauver des vies et de résoudre les défis les plus complexes de notre époque.
          </p>
          
          <!-- Signature -->
          <div class="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Icon name="heroicons:user" class="w-5 h-5 text-white" />
            </div>
            <div>
              <p class="text-sm font-medium text-white">Evariste Credo</p>
              <p class="text-xs text-white/60">Développeur & Architecte Logiciel</p>
            </div>
          </div>
        </section>

        <!-- Chapitre 1 : Pourquoi l'informatique -->
        <section 
          id="why-informatics"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-500/30">
              <Icon name="heroicons:heart" class="w-6 h-6 text-cyan-400" />
            </div>
            <h2 class="text-2xl font-bold text-white pt-1">Le Choix de l'Informatique</h2>
          </div>
          
          <p class="text-white/70 leading-relaxed mb-4">
            J'ai choisi l'informatique parce que c'est une science qui, tout comme la médecine, <span class="font-semibold text-cyan-300">sauve des vies</span>. 
            Une seule ligne de code peut changer le monde, résoudre des problèmes complexes et impacter des millions de personnes.
          </p>
          
          <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-5 border border-cyan-500/20 mb-4">
            <p class="text-white/80 italic">
              "Chaque algorithme que nous créons représente un remède potentiel aux défis de notre temps."
            </p>
          </div>
          
          <p class="text-white/70 leading-relaxed">
            Cette conviction m'anime au quotidien : derrière chaque fonction, chaque interface, chaque système, 
            se cache la possibilité d'améliorer concrètement la vie des gens.
          </p>
        </section>

        <!-- Chapitre 2 : Inspiration -->
        <section 
          id="inspiration"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/20 border border-amber-500/30">
              <Icon name="heroicons:star" class="w-6 h-6 text-amber-400" />
            </div>
            <h2 class="text-2xl font-bold text-white pt-1">Sources d'Inspiration</h2>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-400/10 border border-amber-500/20">
              <Icon name="heroicons:user-group" class="w-8 h-8 text-amber-400 mb-3" />
              <h3 class="font-bold text-white mb-2">Steve Jobs</h3>
              <p class="text-white/70 text-sm">
                Sa capacité à transformer des concepts complexes en solutions simples et élégantes m'inspire profondément.
              </p>
            </div>
            <div class="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-400/10 border border-blue-500/20">
              <Icon name="heroicons:light-bulb" class="w-8 h-8 text-blue-400 mb-3" />
              <h3 class="font-bold text-white mb-2">La Simplicité</h3>
              <p class="text-white/70 text-sm">
                "La simplicité est la sophistication suprême" - Cette citation guide ma démarche créative.
              </p>
            </div>
          </div>
        </section>

        <!-- Chapitre 3 : Philosophie -->
        <section 
          id="philosophy"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-500/30">
              <Icon name="heroicons:shield-check" class="w-6 h-6 text-purple-400" />
            </div>
            <h2 class="text-2xl font-bold text-white pt-1">Ma Philosophie de Vie</h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6 mb-6">
            <div 
              v-for="principle in principles" 
              :key="principle.name"
              class="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/3 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group/principle"
            >
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/30 flex items-center justify-center group-hover/principle:scale-110 transition-transform duration-300">
                <Icon :name="principle.icon" class="w-6 h-6 text-blue-400" />
              </div>
              <h3 class="text-lg font-semibold text-white mb-3">{{ principle.name }}</h3>
              <p class="text-white/60 text-sm leading-relaxed">
                {{ principle.description }}
              </p>
            </div>
          </div>
        </section>

        <!-- Chapitre 4 : Ambitions -->
        <section 
          id="ambitions"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-400/20 border border-emerald-500/30">
              <Icon name="heroicons:rocket-launch" class="w-6 h-6 text-emerald-400" />
            </div>
            <h2 class="text-2xl font-bold text-white pt-1">Mon Parcours d'Excellence</h2>
          </div>
          
          <p class="text-white/70 leading-relaxed mb-6">
            Mon ambition est de devenir un <span class="font-semibold text-emerald-300">expert accompli</span> dans les domaines du développement, 
            du DevOps, de la gestion de projet, du product management et du QA testing.
          </p>
          
          <!-- Liste des objectifs -->
          <div class="space-y-4">
            <div v-for="(goal, index) in goals" :key="goal.name" class="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-emerald-500/5 to-emerald-400/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group/goal">
              <div class="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon :name="goal.icon" class="w-3 h-3 text-white" />
              </div>
              <div>
                <h3 class="font-medium text-white mb-1">{{ goal.name }}</h3>
                <p class="text-sm text-white/60">{{ goal.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Chapitre 5 : Compétences visées -->
        <section 
          id="skills"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-400/20 border border-sky-500/30">
              <Icon name="heroicons:academic-cap" class="w-6 h-6 text-sky-400" />
            </div>
            <h2 class="text-2xl font-bold text-white pt-1">Objectifs de Compétences</h2>
          </div>
          
          <p class="text-white/70 leading-relaxed mb-6">
            Je vise à maîtriser les compétences suivantes pour atteindre l'excellence dans mon domaine :
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="targetSkill in targetSkills" 
              :key="targetSkill.name"
              class="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/3 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 group/skill"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/30 flex items-center justify-center">
                  <Icon :name="targetSkill.icon" class="w-5 h-5 text-blue-400" />
                </div>
                <h3 class="font-bold text-white">{{ targetSkill.name }}</h3>
              </div>
              <p class="text-white/60 text-sm">
                {{ targetSkill.description }}
              </p>
            </div>
          </div>
        </section>

        <!-- Chapitre 6 : Centres d'intérêt -->
        <section 
          id="interests"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-rose-500/20 to-rose-400/20 border border-rose-500/30">
              <Icon name="heroicons:musical-note" class="w-6 h-6 text-rose-400" />
            </div>
            <h2 class="text-2xl font-bold text-white pt-1">Univers Personnels</h2>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              v-for="interest in interests" 
              :key="interest.name"
              class="text-center p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/3 border border-white/10 hover:border-rose-500/30 transition-all duration-300 hover:scale-105 group/interest"
            >
              <Icon :name="interest.icon" class="w-8 h-8 mx-auto mb-3 text-white/70 group-hover/interest:text-rose-400 transition-colors duration-300" />
              <p class="text-white text-sm font-medium">{{ interest.name }}</p>
            </div>
          </div>
        </section>

        <!-- Chapitre 7 : Vision technologique -->
        <section 
          id="ai-vision"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-400/20 border border-violet-500/30">
              <Icon name="heroicons:brain" class="w-6 h-6 text-violet-400" />
            </div>
            <h2 class="text-2xl font-bold text-white pt-1">Vision de l'Intelligence Artificielle</h2>
          </div>
          
          <p class="text-white/70 leading-relaxed mb-4">
            L'intelligence artificielle représente pour moi un <span class="font-semibold text-violet-300">outil révolutionnaire</span> qui transforme 
            fondamentalement notre métier.
          </p>
          
          <div class="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl p-5 border border-violet-500/20">
            <p class="text-white/80 text-sm">
              Je me consacre à l'apprentissage de ces technologies émergentes pour créer des solutions 
              plus intelligentes, plus efficaces et repousser les limites de ce qui est technologiquement possible.
            </p>
          </div>
        </section>

        <!-- Conclusion -->
        <section 
          id="conclusion"
          class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden"
        >
          <!-- Effets de fond -->
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 delay-300"></div>
          
          <div class="relative z-10">
            <h2 class="text-2xl font-bold text-white mb-6 text-center">Prochain Chapitre</h2>
            
            <p class="text-white/70 leading-relaxed mb-6 text-center">
              Je suis constamment à la recherche de nouveaux défis et d'opportunités de collaboration 
              avec des équipes visionnaires.
            </p>
            
            <div class="text-center">
              <NuxtLink 
                to="/contact" 
                class="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 group/contact relative overflow-hidden shadow-lg shadow-blue-500/25"
              >
                <!-- Effet de brillance -->
                <div class="absolute inset-0 -translate-x-full group-hover/contact:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 relative z-10" />
                <span class="relative z-10">Échangeons sur nos visions</span>
              </NuxtLink>
            </div>
          </div>
        </section>
      </article>
    </div>
  </section>
</template>

<script setup>
// Principes de vie
const principles = [
  {
    name: 'Discipline',
    description: 'La rigueur et la constance dans l\'apprentissage et la pratique. Chaque ligne de code mérite attention et précision.',
    icon: 'heroicons:clock'
  },
  {
    name: 'Passion',
    description: 'L\'amour du métier et la conviction profonde que la technologie peut améliorer le monde.',
    icon: 'heroicons:heart'
  },
  {
    name: 'Foi',
    description: 'La conviction inébranlable dans le potentiel de l\'innovation et dans ma capacité à contribuer au progrès.',
    icon: 'heroicons:shield-check'
  }
]

// Objectifs avec QA testeur ajouté
const goals = [
  {
    name: 'Développement Fullstack',
    description: 'Maîtriser les technologies frontend et backend pour créer des applications complètes',
    icon: 'heroicons:code-bracket'
  },
  {
    name: 'Architecture Logicielle',
    description: 'Concevoir des systèmes robustes, évolutifs et maintenables',
    icon: 'heroicons:building-library'
  },
  {
    name: 'DevOps',
    description: 'Automatiser les processus de développement, déploiement et monitoring',
    icon: 'heroicons:cloud-arrow-up'
  },
  {
    name: 'Gestion de Projet',
    description: 'Piloter des projets informatiques de la conception à la livraison',
    icon: 'heroicons:clipboard-document-check'
  },
  {
    name: 'Product Management',
    description: 'Définir la vision produit et prioriser les fonctionnalités',
    icon: 'heroicons:chart-bar'
  },
  {
    name: 'QA Testing',
    description: 'Assurer la qualité et la fiabilité des applications grâce à des tests rigoureux',
    icon: 'heroicons:bug-ant'
  }
]

// Compétences visées (objectifs)
const targetSkills = [
  {
    name: 'Expertise Fullstack',
    description: 'Maîtriser Vue.js/Nuxt, React, Node.js, Python et les bases de données modernes',
    icon: 'heroicons:cube'
  },
  {
    name: 'Architecture Cloud',
    description: 'Concevoir et déployer des architectures serverless et microservices sur AWS/Azure',
    icon: 'heroicons:server'
  },
  {
    name: 'DevOps & CI/CD',
    description: 'Automatiser les pipelines de déploiement avec Docker, Kubernetes et GitHub Actions',
    icon: 'heroicons:arrow-path'
  },
  {
    name: 'Tests Automatisés',
    description: 'Mettre en place des stratégies de test robustes (unitaires, d\'intégration, E2E)',
    icon: 'heroicons:check-circle'
  },
  {
    name: 'Product Strategy',
    description: 'Développer des produits alignés avec les besoins utilisateurs et les objectifs business',
    icon: 'heroicons:light-bulb'
  },
  {
    name: 'Leadership Technique',
    description: 'Guider des équipes de développement et partager les meilleures pratiques',
    icon: 'heroicons:user-group'
  }
]

// Centres d'intérêt
const interests = [
  { name: 'Musique', icon: 'heroicons:musical-note' },
  { name: 'Basketball', icon: 'heroicons:user-group' },
  { name: 'Innovations', icon: 'heroicons:light-bulb' },
  { name: 'Intelligence Artificielle', icon: 'heroicons:brain' }
]

// Snippets de code pour l'arrière-plan
const getCodeSnippet = (index) => {
  const snippets = [
    'const passion = new Passion()',
    'function createImpact() {}',
    'export default defineComponent',
    'class Innovation {}',
    'interface Future { success: boolean }',
    'type Excellence = "constant"'
  ]
  return snippets[index % snippets.length]
}

// Animation d'entrée progressive
const observer = ref(null)

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  })

  document.querySelectorAll('section').forEach((el) => {
    observer.value.observe(el)
  })
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style scoped>
/* Animations CSS personnalisées */
@keyframes pulse-slow {
  0%, 100% { 
    opacity: 0.1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.2; 
    transform: scale(1.05); 
  }
}

@keyframes float-slow {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.2;
  }
  25% { 
    transform: translateY(-20px) translateX(10px);
    opacity: 0.4;
  }
  50% { 
    transform: translateY(-40px) translateX(-5px);
    opacity: 0.2;
  }
  75% { 
    transform: translateY(-20px) translateX(-10px);
    opacity: 0.4;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Amélioration des transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Support pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-float-slow,
  .animate-fade-in-up,
  .transition-all,
  .transform {
    animation: none !important;
    transition: none !important;
  }
  
  .hover\:scale-105:hover,
  .group:hover .hover\:scale-105 {
    transform: none !important;
  }
}

/* Amélioration de la lisibilité */
.text-white\/70 {
  color: rgba(255, 255, 255, 0.7);
}

.text-white\/80 {
  color: rgba(255, 255, 255, 0.8);
}
</style>