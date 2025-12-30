<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
    
    <!-- Arrière-plan sombre avec effets lumineux -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Grands cercles de lumière animés - MIS EN VALEUR -->
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>

      <!-- Lignes de connexion subtiles -->
      <div class="connection-lines"></div>
      
      <!-- Particules de code MIEUX VISIBLES -->
      <div v-for="(code, index) in codeParticles" :key="index" 
           class="absolute font-mono text-sm whitespace-nowrap animate-float-enhanced select-none pointer-events-none"
           :class="code.colorClass"
           :style="code.style">
        {{ code.text }}
      </div>

      <!-- Points lumineux flottants PLUS VISIBLES -->
      <div v-for="n in 12" :key="'dot-'+n" 
           class="absolute w-2 h-2 bg-blue-400/50 rounded-full animate-float-dots"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${n * 0.3}s`,
             animationDuration: `${6 + Math.random() * 10}s`
           }">
      </div>

      <!-- Étoiles subtiles -->
      <div v-for="n in 15" :key="'star-'+n"
           class="absolute w-px h-px bg-white/30 rounded-full animate-twinkle"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`
           }">
      </div>
    </div>

    <div class="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
      <div class="max-w-5xl mx-auto w-full">
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          <!-- Photo de profil - MISE EN VALEUR -->
          <div class="w-full lg:w-1/3 flex flex-col items-center order-2 lg:order-1">
            <div class="relative group">
              <!-- Effet de halo PRINCIPAL -->
              <div class="absolute -inset-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow hidden lg:block"></div>
              
              <!-- Photo ronde avec effet NEON -->
              <div class="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-blue-500/30 relative overflow-hidden shadow-2xl shadow-blue-500/30 lg:block hidden group-hover:scale-105 transition-all duration-500">
                <!-- Gradient background lumineux -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-500/30"></div>
                <!-- Contour lumineux -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
                <NuxtImg 
                  src="/anonymDev.jpg" 
                  alt="Photo anonyme d'Evariste Credo" 
                  width="256" 
                  height="256" 
                  class="object-cover w-full h-full relative z-10"
                  placeholder
                  loading="eager"
                />
                <!-- Effet de brillance au hover -->
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-2/3 text-center lg:text-left order-1 lg:order-2">
            
            <!-- Badge disponibilité - LUMINEUX -->
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900/40 to-blue-800/30 backdrop-blur-md border border-blue-500/20 rounded-full mb-6 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 group/badge hover:scale-105">
              <div class="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse group-hover/badge:animate-ping"></div>
              <span class="text-blue-200 text-sm font-medium">Disponible pour de nouveaux projets</span>
            </div>

            <!-- Photo mobile - LUMINEUSE -->
            <div class="w-40 h-40 rounded-full border-4 border-blue-500/30 mb-6 overflow-hidden shadow-2xl shadow-blue-500/30 mx-auto lg:hidden relative z-20 group">
              <!-- Effet de halo mobile -->
              <div class="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-500"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-500/30"></div>
              <NuxtImg 
                src="/anonymDev.jpg" 
                alt="Photo anonyme d'Evariste Credo" 
                width="224" 
                height="224" 
                class="object-cover w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-500"
                placeholder
                loading="eager"
              />
            </div>
            
            <!-- Titres avec CONTRASTE ÉLEVÉ -->
            <div class="space-y-4 mb-6">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Evariste Credo
              </h1>
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold h-10">
                <span class="typing-effect bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                  {{ currentTitle }}
                </span>
                <span class="animate-blink text-blue-300">|</span>
              </h2>
            </div>

            <!-- Description avec texte CLAIR -->
            <p class="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Je conçois des <span class="font-semibold text-blue-300">architectures logicielles robustes</span> et des <span class="font-semibold text-blue-300">interfaces réactives</span>. Passionné par l'optimisation et l'expérience utilisateur.
            </p>

            <!-- Technologies - EFFET GLASS DARK -->
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <span v-for="tech in techs" :key="tech" 
                    class="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-blue-200 rounded-xl text-sm font-medium border border-slate-700/50 hover:border-blue-500 hover:bg-slate-800/80 hover:scale-105 transition-all duration-300 cursor-default shadow-lg shadow-slate-900/50 hover:shadow-blue-900/30">
                {{ tech }}
              </span>
            </div>

            <!-- Boutons CTA - LUMINEUX ET CONTRASTÉ -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink 
                to="/projects"
                class="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:from-blue-500 hover:to-blue-400 hover:scale-105 transition-all shadow-xl shadow-blue-900/30 group/cta-primary relative overflow-hidden"
              >
                <!-- Effet de brillance -->
                <div class="absolute inset-0 -translate-x-full group-hover/cta-primary:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <Icon name="heroicons:code-bracket" class="w-5 h-5 relative z-10 group-hover/cta-primary:animate-bounce-slow" />
                <span class="relative z-10">Mes Projets</span>
                <!-- Effet de bordure lumineuse -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur-sm opacity-0 group-hover/cta-primary:opacity-50 transition-opacity duration-500"></div>
              </NuxtLink>
              
              <NuxtLink 
                to="/contact"
                class="px-8 py-3.5 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800/80 border border-slate-700/50 hover:border-blue-500 transition-all hover:scale-105 shadow-lg shadow-slate-900/50 group/cta-secondary relative overflow-hidden"
              >
                <Icon name="heroicons:paper-airplane" class="w-5 h-5 -rotate-45 text-blue-400 group-hover/cta-secondary:rotate-0 transition-transform duration-300" />
                <span>Me contacter</span>
                <!-- Effet de bordure au hover -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur-sm opacity-0 group-hover/cta-secondary:opacity-30 transition-opacity duration-500"></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flèche de scroll indication -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
      <div class="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-blue-400/70 rounded-full mt-2 animate-scroll"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Données statiques
const titles = ['Développeur web', 'Architecte Logiciel', 'Créatif']
const techs = ['Nuxt.js', 'Node.js', 'PHP', 'Laravel']

// Réseaux sociaux avec effets améliorés
const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/DrecQ', 
    icon: 'simple-icons:github',
    bgClass: 'bg-gradient-to-br from-gray-900 to-slate-900',
    borderClass: 'bg-gradient-to-r from-gray-600 to-gray-800'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/evariste-credo-quist-44b177386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
    icon: 'simple-icons:linkedin',
    bgClass: 'bg-gradient-to-br from-blue-700 to-blue-900',
    borderClass: 'bg-gradient-to-r from-blue-500 to-blue-700'
  },
  { 
    name: 'X (Twitter)', 
    url: 'https://x.com/drec_quist?t=sswvVIyxnMCfbKjZU2lalA&s=09',
    icon: 'simple-icons:x',
    bgClass: 'bg-gradient-to-br from-sky-600 to-sky-800',
    borderClass: 'bg-gradient-to-r from-sky-400 to-sky-600'
  }
]

// Logique pour l'effet de frappe (Typing effect)
const currentTitle = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
const typingSpeed = ref(150)

const handleTyping = () => {
  const i = loopNum.value % titles.length
  const fullText = titles[i]

  currentTitle.value = isDeleting.value 
    ? fullText.substring(0, currentTitle.value.length - 1) 
    : fullText.substring(0, currentTitle.value.length + 1)

  typingSpeed.value = isDeleting.value ? 50 : 150

  if (!isDeleting.value && currentTitle.value === fullText) {
    typingSpeed.value = 2000 // Pause à la fin du mot
    isDeleting.value = true
  } else if (isDeleting.value && currentTitle.value === '') {
    isDeleting.value = false
    loopNum.value++
    typingSpeed.value = 500 // Pause avant le prochain mot
  }

  setTimeout(handleTyping, typingSpeed.value)
}

// Particules de code améliorées
const codeSnippets = [
  'const dev = new Developer()', 'npm run dev', 'git commit -m', 'interface User {}', 
  'export default defineComponent', 'onMounted(() => {', 'watchEffect(() =>', 
  'computed(() =>', 'router.push("/")', 'useState("data")', 'await fetch()',
  'try { } catch { }', 'return <template>', 'v-model="data"', 'tailwind.config.js',
  'async function fetchData()', 'const { data } = await useAsyncData()',
  'definePageMeta({})', 'useHead({ title: "" })', 'const route = useRoute()'
]

const codeParticles = ref([])

const generateParticles = () => {
  const count = 25
  const particles = []
  
  for (let i = 0; i < count; i++) {
    particles.push({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      colorClass: getRandomColorClass(),
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${15 + Math.random() * 20}s`,
        animationDelay: `-${Math.random() * 30}s`,
        fontSize: `${0.8 + Math.random() * 1}rem`,
        opacity: `${0.4 + Math.random() * 0.4}`,
        filter: `blur(${0.5 + Math.random() * 1}px)`,
        zIndex: '1'
      }
    })
  }
  codeParticles.value = particles
}

const getRandomColorClass = () => {
  const colors = [
    'text-blue-400/60', 'text-blue-300/50', 'text-cyan-400/60', 
    'text-blue-200/40', 'text-blue-400/50'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

onMounted(() => {
  handleTyping()
  generateParticles()
})
</script>

<style scoped>
/* Animations de pulsation lente - PLUS VISIBLES */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.animate-twinkle {
  animation: twinkle 3s ease-in-out infinite;
}

/* Animation bounce-slow */
@keyframes bounce-slow {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-8px); 
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

@keyframes scroll {
  0% { 
    transform: translateY(0); 
    opacity: 1;
  }
  100% { 
    transform: translateY(10px); 
    opacity: 0.3;
  }
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}

/* Animations de flottement améliorées */
@keyframes floatEnhanced {
  0% {
    transform: translateY(100vh) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100px) rotate(15deg) scale(1.3);
    opacity: 0;
  }
}

.animate-float-enhanced {
  animation: floatEnhanced linear infinite;
}

@keyframes floatDots {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.4;
  }
  25% { 
    transform: translateY(-30px) translateX(15px);
    opacity: 0.8;
  }
  50% { 
    transform: translateY(-60px) translateX(-10px);
    opacity: 0.4;
  }
  75% { 
    transform: translateY(-30px) translateX(-15px);
    opacity: 0.8;
  }
}

.animate-float-dots {
  animation: floatDots ease-in-out infinite;
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Lignes de connexion subtiles */
.connection-lines {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(90deg, transparent 49%, rgba(59, 130, 246, 0.08) 50%, transparent 51%),
    linear-gradient(transparent 49%, rgba(59, 130, 246, 0.08) 50%, transparent 51%);
  background-size: 150px 150px;
  animation: gridFlow 50s linear infinite;
  opacity: 0.2;
}

@keyframes gridFlow {
  0% { transform: translateY(0) translateX(0); }
  100% { transform: translateY(75px) translateX(75px); }
}

/* Transition cohérente */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Support pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-twinkle,
  .animate-bounce-slow,
  .animate-scroll,
  .animate-float-enhanced,
  .animate-float-dots,
  .animate-blink,
  .connection-lines {
    animation: none !important;
  }
  
  .hover\:scale-105:hover {
    transform: none !important;
  }
}

/* Amélioration de la lisibilité */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.glow {
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
}
</style>