<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden relative">
    
    <!-- Arrière-plan avec animations mais sans grille -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Grands cercles de lumière animés -->
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>

      <!-- Lignes de connexion animées -->
      <div class="connection-lines"></div>
      
      <!-- Particules de code plus visibles et nombreuses -->
      <div v-for="(code, index) in codeParticles" :key="index" 
           class="absolute font-mono text-sm whitespace-nowrap animate-float-enhanced select-none pointer-events-none"
           :class="code.colorClass"
           :style="code.style">
        {{ code.text }}
      </div>

      <!-- Points lumineux flottants -->
      <div v-for="n in 8" :key="'dot-'+n" 
           class="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float-dots"
           :style="{
             left: `${15 + (n * 10)}%`,
             top: `${20 + (n * 8)}%`,
             animationDelay: `${n * 0.5}s`,
             animationDuration: `${8 + n * 2}s`
           }">
      </div>
    </div>

    <div class="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
      <div class="max-w-5xl mx-auto w-full">
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          <div class="w-full lg:w-1/3 flex flex-col items-center order-2 lg:order-1">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 hidden lg:block"></div>
              
              <!-- Photo ronde comme dans l'original -->
              <div class="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white/20 relative overflow-hidden shadow-2xl lg:block hidden">
                <div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <NuxtImg 
                    src="/anonymDev.jpg" 
                    alt="Photo anonyme d'Evariste Credo" 
                    width="256" 
                    height="256" 
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-2/3 text-center lg:text-left order-1 lg:order-2">
            
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-white/90 text-sm font-mono">Open to work</span>
            </div>

            <div class="w-32 h-32 rounded-full border-4 border-white/20 mb-6 overflow-hidden shadow-2xl mx-auto lg:hidden relative z-20">
              <div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <NuxtImg 
                  src="/anonymDev.jpg" 
                  alt="Photo anonyme d'Evariste Credo" 
                  width="224" 
                  height="224" 
                  class="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div class="space-y-4 mb-6">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                Evariste Credo
              </h1>
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 h-10">
                <span class="typing-effect">{{ currentTitle }}</span>
                <span class="animate-blink">|</span>
              </h2>
            </div>

            <p class="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Je conçois des architectures logicielles robustes et des interfaces réactives. Passionné par l'optimisation et l'expérience utilisateur.
            </p>

            <div class="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <span v-for="tech in techs" :key="tech" class="px-4 py-1.5 bg-slate-800/50 text-blue-200 rounded-full text-sm border border-slate-700 hover:border-blue-500 transition-colors cursor-default">
                {{ tech }}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink 
                to="/projects"
                class="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-900/20"
              >
                <Icon name="heroicons:code-bracket" class="w-5 h-5" />
                <span>Mes Projets</span>
              </NuxtLink>
              
              <NuxtLink 
                to="/contact"
                class="px-8 py-3.5 bg-white/5 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm"
              >
                <Icon name="heroicons:paper-airplane" class="w-5 h-5 -rotate-45" />
                <span>Me contacter</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Données statiques
const titles = ['Développeur Fullstack', 'Architecte Vue.js', 'Creative Developer']
const techs = ['Vue.js 3', 'Nuxt', 'Tailwind', 'Node.js', 'TypeScript', 'Docker']

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
  'try { } catch { }', 'return <template>', 'v-model="data"', 'tailwind.config.js'
]

const codeParticles = ref([])

const generateParticles = () => {
  const count = 20
  const particles = []
  
  for (let i = 0; i < count; i++) {
    particles.push({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      colorClass: getRandomColorClass(),
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${12 + Math.random() * 15}s`,
        animationDelay: `-${Math.random() * 20}s`,
        fontSize: `${0.7 + Math.random() * 0.8}rem`,
        opacity: `${0.3 + Math.random() * 0.4}`,
        filter: `blur(${Math.random() * 2}px)`
      }
    })
  }
  codeParticles.value = particles
}

const getRandomColorClass = () => {
  const colors = [
    'text-blue-400/40', 'text-cyan-400/40', 'text-purple-400/40', 
    'text-green-400/40', 'text-amber-400/40'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

onMounted(() => {
  handleTyping()
  generateParticles()
})
</script>

<style scoped>
/* Animations de pulsation lente */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.05); }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Animations de flottement améliorées */
@keyframes floatEnhanced {
  0% {
    transform: translateY(100vh) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(-100px) rotate(10deg) scale(1.2);
    opacity: 0;
  }
}

.animate-float-enhanced {
  animation: floatEnhanced linear infinite;
}

@keyframes floatDots {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.3;
  }
  25% { 
    transform: translateY(-20px) translateX(10px);
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-40px) translateX(-5px);
    opacity: 0.3;
  }
  75% { 
    transform: translateY(-20px) translateX(-10px);
    opacity: 0.6;
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

/* Lignes de connexion */
.connection-lines {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(90deg, transparent 49%, rgba(59, 130, 246, 0.1) 50%, transparent 51%),
    linear-gradient(transparent 49%, rgba(59, 130, 246, 0.1) 50%, transparent 51%);
  background-size: 100px 100px;
  animation: gridFlow 30s linear infinite;
}

@keyframes gridFlow {
  0% { transform: translateY(0) translateX(0); }
  100% { transform: translateY(50px) translateX(50px); }
}
</style>