<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    <!-- Arrière-plan minimal -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
      <div class="max-w-4xl mx-auto w-full">
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          <!-- Photo de profil + Terminal compact - ORDRE MODIFIÉ SUR MOBILE -->
          <div class="w-full lg:w-2/5 flex flex-col items-center order-2 lg:order-1">
            <!-- Photo de profil - VISIBLE APRÈS LE BADGE SUR MOBILE -->
            <div class="w-48 h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white/20 mb-6 overflow-hidden shadow-2xl lg:block hidden">
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
            
            <!-- Terminal compact - VISIBLE APRÈS LES TECHNOS SUR MOBILE -->
            <div class="w-full max-w-xs terminal-simple rounded-xl overflow-hidden shadow-xl lg:block hidden">
              <div class="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div class="flex gap-1.5">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span class="text-white/70 text-xs font-mono">terminal</span>
              </div>
              <div class="bg-slate-900 p-4 font-mono text-sm text-green-400 h-32">
                <div class="flex items-center mb-2">
                  <span class="text-green-400">➜</span>
                  <span class="text-blue-400 ml-2">portfolio</span>
                  <span class="text-white ml-2">$</span>
                  <span class="text-white ml-2">{{ currentCommand }}</span>
                  <span class="bg-green-400 w-2 h-4 inline-block ml-1 animate-pulse"></span>
                </div>
                <div class="text-cyan-300 text-xs space-y-1">
                  <div>> {{ currentOutput }}</div>
                  <div>> Disponible pour nouveaux projets</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contenu texte -->
          <div class="w-full lg:w-3/5 text-center lg:text-left order-1 lg:order-2">
            <!-- Badge simple -->
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-white/90 text-sm">Disponible immédiatement</span>
            </div>

            <!-- Photo de profil - MOBILE SEULEMENT (après le badge) -->
            <div class="w-32 h-32 rounded-full border-4 border-white/20 mb-6 overflow-hidden shadow-2xl mx-auto lg:hidden">
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
            
            <!-- Titres -->
            <div class="space-y-4 mb-6">
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Evariste Credo
              </h1>
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-300">
                {{ currentTitle }}
              </h2>
            </div>

            <!-- Description -->
            <p class="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Je suis un développeur web junior, passionné par la tech, qui apprend et conçoit des solutions modernes, performantes et solides pour offrir la meilleure expérience utilisateur possible.
            </p>

            <!-- Compétences rapides -->
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30">Vue.js</span>
              <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">Nuxt.js</span>
              <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm border border-cyan-500/30">Node.js</span>
              <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm border border-green-500/30">Laravel</span>
            </div>

            <!-- Terminal compact - MOBILE SEULEMENT (après les technos) -->
            <div class="w-full max-w-xs terminal-simple rounded-xl overflow-hidden shadow-xl mx-auto lg:hidden mb-8">
              <div class="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div class="flex gap-1.5">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span class="text-white/70 text-xs font-mono">terminal</span>
              </div>
              <div class="bg-slate-900 p-4 font-mono text-sm text-green-400 h-32">
                <div class="flex items-center mb-2">
                  <span class="text-green-400">➜</span>
                  <span class="text-blue-400 ml-2">portfolio</span>
                  <span class="text-white ml-2">$</span>
                  <span class="text-white ml-2">{{ currentCommand }}</span>
                  <span class="bg-green-400 w-2 h-4 inline-block ml-1 animate-pulse"></span>
                </div>
                <div class="text-cyan-300 text-xs space-y-1">
                  <div>> {{ currentOutput }}</div>
                  <div>> Disponible pour nouveaux projets</div>
                </div>
              </div>
            </div>

            <!-- Boutons d'action -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink 
                to="/projects"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Icon name="heroicons:folder-open" class="w-5 h-5" />
                <span>Voir mes projets</span>
              </NuxtLink>
              
              <NuxtLink 
                to="/contact"
                class="px-6 py-3 bg-white/10 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <Icon name="heroicons:envelope" class="w-5 h-5" />
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
// États simples pour les animations
const titles = ['Développeur web', 'Architecte Logiciel', 'IA Enthusiast']
const commands = [
  'npm run dev',
  'git status', 
  'docker ps',
  'node server.js'
]
const outputs = [
  'Server running on port 3000',
  'Working tree clean',
  'All containers running',
  'API server started'
]

const currentTitle = ref(titles[0])
const currentCommand = ref(commands[0])
const currentOutput = ref(outputs[0])

let titleInterval
let commandInterval

// Rotation simple des titres
const rotateTitles = () => {
  let index = 0
  titleInterval = setInterval(() => {
    index = (index + 1) % titles.length
    currentTitle.value = titles[index]
  }, 3000)
}

// Rotation simple des commandes
const rotateCommands = () => {
  let index = 0
  commandInterval = setInterval(() => {
    index = (index + 1) % commands.length
    currentCommand.value = commands[index]
    currentOutput.value = outputs[index]
  }, 2000)
}

onMounted(() => {
  rotateTitles()
  rotateCommands()
})

onUnmounted(() => {
  if (titleInterval) clearInterval(titleInterval)
  if (commandInterval) clearInterval(commandInterval)
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

.terminal-simple {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive amélioré */
@media (max-width: 1024px) {
  .min-h-screen {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

@media (max-width: 640px) {
  .text-3xl {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  
  .text-xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
</style>