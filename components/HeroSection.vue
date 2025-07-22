<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    <!-- Particules animées améliorées -->
    <div class="absolute inset-0 pointer-events-none">
      <div 
        v-for="i in 40" 
        :key="`particle-${i}`"
        class="absolute rounded-full opacity-0 animate-particle-float"
        :class="[
          i % 4 === 0 ? 'w-1 h-1 bg-blue-400' : 
          i % 4 === 1 ? 'w-0.5 h-0.5 bg-purple-400' :
          i % 4 === 2 ? 'w-2 h-2 bg-cyan-400' : 'w-1.5 h-1.5 bg-indigo-400'
        ]"
        :style="{ 
          left: Math.random() * 100 + '%', 
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 10 + 's',
          animationDuration: (8 + Math.random() * 6) + 's'
        }"
      ></div>
    </div>

    <!-- Effet de grille subtile -->
    <div class="absolute inset-0 opacity-5">
      <div class="grid-pattern"></div>
    </div>

    <!-- Contenu principal avec ordre mobile corrigé -->
    <div class="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto w-full">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Contenu texte - TOUJOURS EN PREMIER sur mobile -->
          <div class="text-center lg:text-left space-y-8 lg:space-y-10 order-1 w-full">
            <!-- Badge de statut avec animation -->
            <div class="inline-flex items-center gap-3 px-4 py-2 glass-effect rounded-full animate-slide-up opacity-0" style="animation-delay: 0.2s;">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse-ring relative">
                <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span class="text-white/90 text-sm font-medium">Disponible pour projets</span>
            </div>
            
            <!-- Titre principal avec animations séquentielles et meilleure visibilité -->
            <div class="space-y-4 lg:space-y-6">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-slide-up opacity-0 drop-shadow-lg" style="animation-delay: 0.4s;">
                Salut, je suis
              </h1>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text animate-slide-up opacity-0 drop-shadow-lg" style="animation-delay: 0.6s;">
                {{ displayText }}
                <span v-if="showCursor" class="cursor-blink text-white">|</span>
              </h2>
            </div>
            
            <!-- Description avec meilleure visibilité -->
            <p class="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up opacity-0 drop-shadow-md font-light" style="animation-delay: 0.8s;">
              Je crée des expériences web exceptionnelles avec une attention particulière au design et à la performance.
            </p>
            
            <!-- Boutons CTA avec meilleur espacement mobile -->
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-6 animate-slide-up opacity-0" style="animation-delay: 1s;">
              <NuxtLink 
                to="/projects"
                class="btn-primary px-8 py-4 text-white font-semibold rounded-xl flex items-center justify-center gap-3 group transform transition-all duration-300 hover:scale-105 text-lg"
                @click="handleButtonClick"
              >
                <span>Découvrir mes projets</span>
                <Icon name="heroicons:arrow-right-20-solid" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </NuxtLink>
              
              <NuxtLink 
                to="/contact"
                class="btn-secondary px-8 py-4 text-white font-semibold rounded-xl flex items-center justify-center gap-3 group transform transition-all duration-300 hover:scale-105 text-lg"
                @click="handleButtonClick"
              >
                <span>Contactez-moi</span>
                <Icon name="heroicons:envelope-20-solid" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </NuxtLink>
            </div>
          </div>
          
          <!-- Terminal amélioré - TOUJOURS EN SECOND sur mobile -->
          <div class="flex justify-center lg:justify-end order-2 w-full mt-8 lg:mt-0">
            <div class="w-full max-w-lg lg:max-w-md xl:max-w-lg animate-slide-up opacity-0" style="animation-delay: 1.2s;">
              <div class="terminal-window rounded-2xl overflow-hidden shadow-2xl bg-slate-900/95 backdrop-blur-xl">
                <!-- Barre de titre réaliste -->
                <div class="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-slate-800/80 border-b border-slate-700/50">
                  <div class="flex items-center gap-3 sm:gap-4">
                    <div class="flex gap-1.5 sm:gap-2">
                      <div class="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-400 transition-colors"></div>
                      <div class="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors"></div>
                      <div class="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-400 transition-colors"></div>
                    </div>
                    <span class="text-white/70 text-sm font-medium">Terminal</span>
                  </div>
                  <div class="text-white/50 text-xs font-mono hidden sm:block">portfolio@dev:~</div>
                </div>
                
                <!-- Contenu terminal avec cycle de commandes -->
                <div class="p-4 sm:p-6 h-72 sm:h-80 lg:h-96 font-mono text-sm text-green-400 overflow-hidden relative">
                  <!-- État vide avec prompt -->
                  <div v-if="!currentEntry && !isClearing" class="flex items-center text-white flex-wrap">
                    <span class="text-green-400">➜</span>
                    <span class="text-blue-400 ml-2">portfolio</span>
                    <span class="text-white/60 mx-1">git:(</span>
                    <span class="text-red-400">main</span>
                    <span class="text-white/60">)</span>
                    <span class="text-white ml-2">$</span>
                    <span class="bg-green-400 w-2 h-5 inline-block ml-2 animate-pulse"></span>
                  </div>
                  
                  <!-- Commande en cours -->
                  <div v-if="currentEntry" class="space-y-3">
                    <!-- Ligne de commande avec animation de frappe -->
                    <div class="flex items-start text-white flex-wrap animate-slide-in-command">
                      <div class="flex items-center shrink-0">
                        <span class="text-green-400">➜</span>
                        <span class="text-blue-400 ml-2">portfolio</span>
                        <span class="text-white/60 mx-1">git:(</span>
                        <span class="text-red-400">main</span>
                        <span class="text-white/60">)</span>
                        <span class="text-white ml-2">$</span>
                      </div>
                      <div class="ml-2 flex items-center min-w-0 flex-1">
                        <span class="text-white break-all">{{ currentEntry.displayCommand }}</span>
                        <span 
                          v-if="isTyping"
                          class="bg-green-400 w-2 h-5 inline-block ml-1 animate-pulse"
                        ></span>
                      </div>
                    </div>
                    
                    <!-- Sortie avec animation en cascade -->
                    <div v-if="showOutput && currentEntry.output" class="ml-4 space-y-1 mt-3">
                      <div 
                        v-for="(line, lineIndex) in currentEntry.output" 
                        :key="`output-line-${lineIndex}`"
                        class="break-words animate-slide-in-output leading-relaxed"
                        :style="{ 
                          animationDelay: (lineIndex * 0.1) + 's',
                          animationFillMode: 'both'
                        }"
                        :class="[
                          line.includes('✓') || line.includes('✅') ? 'text-green-400' : 
                          line.includes('Error') || line.includes('❌') ? 'text-red-400' :
                          line.includes('🎯') || line.includes('🚀') || line.includes('💡') || line.includes('🎨') || line.includes('📈') ? 'text-cyan-300' :
                          line.includes('⚡') || line.includes('📊') ? 'text-yellow-400' :
                          line.includes('{') || line.includes('}') || line.includes('CONTAINER') ? 'text-purple-300' :
                          'text-cyan-400'
                        ]"
                      >
                        {{ line }}
                      </div>
                    </div>
                  </div>
                  
                  <!-- Animation de disparition -->
                  <div v-if="isClearing" class="absolute inset-0 p-4 sm:p-6">
                    <div class="text-center text-white/50 mt-20">
                      <div class="animate-spin w-6 h-6 border-2 border-green-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                      <div class="text-sm">Clearing terminal...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

// Animation du titre
const titles = ['Développeur Full Stack', 'UI/UX Designer', 'Créateur Digital']
let currentTitleIndex = 0
const displayText = ref('')
const showCursor = ref(true)
let textIndex = 0

// État du terminal
const currentEntry = ref(null)
const isTyping = ref(false)
const showOutput = ref(false)
const isClearing = ref(false)

const commands = [
  { 
    command: 'whoami', 
    output: [
      'Développeur Full Stack passionné',
      'Spécialisé en Vue.js, React & Node.js',
      '🎯 Focus: Expériences utilisateur exceptionnelles'
    ]
  },
  { 
    command: 'ls -la ~/skills/', 
    output: [
      'drwxr-xr-x  frontend/',
      '  ├── vue.js ⭐⭐⭐⭐⭐',
      '  ├── react.js ⭐⭐⭐⭐',
      '  └── typescript ⭐⭐⭐⭐',
      'drwxr-xr-x  backend/',
      '  ├── node.js ⭐⭐⭐⭐⭐',
      '  ├── python ⭐⭐⭐⭐',
      '  └── laravel ⭐⭐⭐'
    ]
  },
  { 
    command: 'cat ~/.mission', 
    output: [
      '🚀 Mission: Transformer vos idées en réalité',
      '💡 Vision: Créer des solutions innovantes',
      '🎨 Passion: Design & Code de qualité',
      '📈 Objectif: Dépasser vos attentes'
    ]
  },
  { 
    command: 'git log --oneline -5', 
    output: [
      'a7b2c8f ✨ feat: nouveau portfolio interactif',
      '3d9e5f1 🎨 style: amélioration animations',
      '8c4a6b2 🚀 perf: optimisation bundle size',
      '2f7d9e3 🐛 fix: responsive mobile',
      '6b1c4a8 📚 docs: mise à jour README'
    ]
  },
  { 
    command: 'npm run stats', 
    output: [
      '📊 Statistiques de développement:',
      '✓ 15+ projets completed',
      '✓ 100% client satisfaction',
      '✓ 99.9% uptime moyenne',
      '⚡ < 2s temps de chargement'
    ]
  },
  { 
    command: 'docker ps', 
    output: [
      'CONTAINER ID   IMAGE       STATUS',
      '7f8a9b2c      portfolio   Up 2 hours',
      '3e5d6f1a      api-server  Up 5 hours',
      '9c2b4e7f      database    Up 1 day'
    ]
  },
  { 
    command: 'curl -s api/contact/status', 
    output: [
      '{',
      '  "status": "online",',
      '  "available": true,',
      '  "response_time": "< 24h",',
      '  "contact": "ready" ✅',
      '}'
    ]
  }
]

let currentCommandIndex = 0
let commandTimeout = null
let titleTimeout = null
let terminalCycle = null

// Animation du texte du titre avec rotation
const animateTitle = () => {
  const currentTitle = titles[currentTitleIndex]
  
  if (textIndex < currentTitle.length) {
    displayText.value += currentTitle[textIndex]
    textIndex++
    titleTimeout = setTimeout(animateTitle, 120)
  } else {
    // Pause puis effacer
    setTimeout(() => {
      eraseTitle()
    }, 2000)
  }
}

const eraseTitle = () => {
  if (displayText.value.length > 0) {
    displayText.value = displayText.value.slice(0, -1)
    titleTimeout = setTimeout(eraseTitle, 50)
  } else {
    // Passer au titre suivant
    currentTitleIndex = (currentTitleIndex + 1) % titles.length
    textIndex = 0
    setTimeout(animateTitle, 500)
  }
}

// Animation du terminal avec cycle complet
const typeCommand = async (command) => {
  currentEntry.value = { 
    command, 
    displayCommand: '', 
    output: commands[currentCommandIndex].output 
  }
  isTyping.value = true
  
  // Animation de frappe caractère par caractère
  for (let i = 0; i <= command.length; i++) {
    currentEntry.value.displayCommand = command.slice(0, i)
    await new Promise(resolve => setTimeout(resolve, 60 + Math.random() * 40))
  }
  
  isTyping.value = false
  
  // Pause avant d'afficher la sortie
  await new Promise(resolve => setTimeout(resolve, 300))
  
  // Afficher la sortie
  showOutput.value = true
  
  // Attendre avant de passer à la suivante
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  // Animation de disparition
  await clearTerminal()
}

const clearTerminal = async () => {
  isClearing.value = true
  showOutput.value = false
  
  // Animation de clear
  await new Promise(resolve => setTimeout(resolve, 800))
  
  currentEntry.value = null
  isClearing.value = false
  
  // Petite pause avant la prochaine commande
  await new Promise(resolve => setTimeout(resolve, 500))
}

const animateTerminal = async () => {
  while (true) {
    if (currentCommandIndex >= commands.length) {
      currentCommandIndex = 0
      // Pause plus longue avant de recommencer le cycle
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    const { command } = commands[currentCommandIndex]
    await typeCommand(command)
    
    currentCommandIndex++
  }
}

const startTerminalAnimation = () => {
  // Éviter les multiples instances
  if (terminalCycle) return
  
  terminalCycle = animateTerminal()
}

// Effet de ripple sur les boutons
const handleButtonClick = (event) => {
  const button = event.currentTarget
  const rect = button.getBoundingClientRect()
  const ripple = document.createElement('div')
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2
  
  ripple.className = 'absolute rounded-full bg-white/30 pointer-events-none animate-ripple'
  ripple.style.width = ripple.style.height = size + 'px'
  ripple.style.left = x + 'px'
  ripple.style.top = y + 'px'
  
  button.style.position = 'relative'
  button.style.overflow = 'hidden'
  button.appendChild(ripple)
  
  setTimeout(() => ripple.remove(), 600)
}

// Lifecycle hooks
onMounted(() => {
  // Démarrer l'animation du titre
  setTimeout(() => {
    animateTitle()
  }, 1500)
  
  // Démarrer l'animation du terminal
  setTimeout(() => {
    startTerminalAnimation()
  }, 2000)
  
  // Clignotement du curseur
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})

onUnmounted(() => {
  if (commandTimeout) clearTimeout(commandTimeout)
  if (titleTimeout) clearTimeout(titleTimeout)
  if (terminalCycle) {
    terminalCycle = null
  }
})
</script>

<style scoped>
/* Animations améliorées */
@keyframes particle-float {
  0% { 
    transform: translateY(100vh) rotate(0deg) scale(0); 
    opacity: 0;
  }
  10% {
    opacity: 0.6;
    transform: scale(1);
  }
  90% {
    opacity: 0.6;
  }
  100% { 
    transform: translateY(-20px) rotate(360deg) scale(0); 
    opacity: 0;
  }
}

@keyframes slide-up {
  from { 
    opacity: 0; 
    transform: translateY(30px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
}

@keyframes slide-in-command {
  from { 
    opacity: 0; 
    transform: translateX(-20px);
  }
  to { 
    opacity: 1; 
    transform: translateX(0);
  }
}

@keyframes slide-in-output {
  from { 
    opacity: 0; 
    transform: translateY(10px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
  }
}

@keyframes fade-out-terminal {
  from { 
    opacity: 1; 
    transform: scale(1);
  }
  to { 
    opacity: 0; 
    transform: scale(0.95);
  }
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes pulse-ring {
  0% { transform: scale(0.8); }
  50% { transform: scale(1.2); }
  100% { transform: scale(0.8); }
}

@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(2);
    opacity: 0;
  }
}

/* Classes utilitaires */
.animate-particle-float {
  animation: particle-float 12s linear infinite;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animate-slide-in-command {
  animation: slide-in-command 0.5s ease-out;
}

.animate-slide-in-output {
  animation: slide-in-output 0.4s ease-out;
  opacity: 0;
}

.animate-pulse-ring {
  animation: pulse-ring 2s ease-in-out infinite;
}

.animate-ripple {
  animation: ripple 0.6s ease-out;
}

/* Effets visuels */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.terminal-window {
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.gradient-text {
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #06b6d4, #34d399);
  background-size: 300% 300%;
  animation: gradient-shift 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cursor-blink {
  animation: blink 1.06s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.grid-pattern {
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
}

/* Boutons améliorés */
.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  box-shadow: 
    0 10px 25px rgba(59, 130, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 
    0 15px 35px rgba(59, 130, 246, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px) scale(1.02);
}

/* Responsive mobile-first amélioré */
@media (max-width: 1024px) {
  /* Assurer l'ordre correct sur tablette */
  .lg\:grid {
    display: flex !important;
    flex-direction: column !important;
  }
}

@media (max-width: 640px) {
  .min-h-screen {
    min-height: 100svh; /* Utilise la viewport height stable sur mobile */
  }
  
  .py-12 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .gap-12 {
    gap: 2rem;
  }
  
  /* Améliorer la lisibilité du texte sur mobile */
  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  
  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  
  /* Terminal plus compact sur mobile */
  .h-72 {
    height: 16rem;
  }
  
  .p-4 {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .text-4xl {
    font-size: 2rem;
    line-height: 2.25rem;
  }
  
  .text-3xl {
    font-size: 1.75rem;
    line-height: 2rem;
  }
  
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .gap-12 {
    gap: 1.5rem;
  }
}

/* Force l'ordre des éléments sur tous les écrans non-desktop */
@media (max-width: 1023px) {
  .order-1 {
    order: 1 !important;
  }
  
  .order-2 {
    order: 2 !important;
  }
}

/* Préférence de mouvement réduit */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Amélioration de la lisibilité avec des contrastes plus élevés */
.text-white\/90 {
  color: rgba(255, 255, 255, 0.95);
}

.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}

.drop-shadow-md {
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}
</style>