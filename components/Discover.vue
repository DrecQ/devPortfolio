<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
    <!-- Background animé -->
    <div class="fixed inset-0 opacity-20">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Mon Univers
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Au-delà du code, découvrez l'esprit derrière les lignes
        </p>
      </div>

      <!-- Section principale -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Côté gauche : Personnalité -->
        <div class="space-y-8">
          <!-- Carte Philosophie -->
          <div class="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-500 group">
            <div class="flex items-center mb-6">
              <div class="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                <Icon name="heroicons:light-bulb" class="w-6 h-6 text-blue-400" />
              </div>
              <h2 class="text-2xl font-bold ml-4">Ma Philosophie</h2>
            </div>
            <p class="text-gray-300 leading-relaxed text-lg">
              Je crois que chaque ligne de code raconte une histoire. Pour moi, le développement 
              n'est pas qu'une technique, c'est un art où la logique rencontre la créativité. 
              J'aime résoudre des problèmes complexes avec des solutions élégantes et simples.
            </p>
          </div>

          <!-- Carte Passions -->
          <div class="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/30 transition-all duration-500 group">
            <div class="flex items-center mb-6">
              <div class="p-3 rounded-xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                <Icon name="heroicons:heart" class="w-6 h-6 text-purple-400" />
              </div>
              <h2 class="text-2xl font-bold ml-4">Mes Passions</h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                <Icon name="heroicons:musical-note" class="w-8 h-8 text-pink-400 mx-auto mb-2" />
                <p class="text-sm">Musique Électronique</p>
              </div>
              <div class="text-center p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                <Icon name="heroicons:book-open" class="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p class="text-sm">Science-Fiction</p>
              </div>
              <div class="text-center p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                <Icon name="heroicons:puzzle-piece" class="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p class="text-sm">Jeux de Stratégie</p>
              </div>
              <div class="text-center p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors">
                <Icon name="heroicons:rocket-launch" class="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p class="text-sm">Technologie</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Côté droit : Processus créatif -->
        <div class="space-y-8">
          <!-- Carte Processus -->
          <div class="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/30 transition-all duration-500 group">
            <div class="flex items-center mb-6">
              <div class="p-3 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                <Icon name="heroicons:sparkles" class="w-6 h-6 text-green-400" />
              </div>
              <h2 class="text-2xl font-bold ml-4">Comment Je Crée</h2>
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span class="text-blue-400 text-sm font-bold">1</span>
                </div>
                <p class="text-gray-300 ml-4">J'écoute et je comprends le besoin profond derrière chaque projet</p>
              </div>
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span class="text-purple-400 text-sm font-bold">2</span>
                </div>
                <p class="text-gray-300 ml-4">Je conçois une architecture qui allie performance et élégance</p>
              </div>
              <div class="flex items-start">
                <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <span class="text-green-400 text-sm font-bold">3</span>
                </div>
                <p class="text-gray-300 ml-4">Je donne vie au code avec attention aux détails et à l'expérience</p>
              </div>
            </div>
          </div>

          <!-- Carte Citations -->
          <div class="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 group">
            <div class="flex items-center mb-6">
              <div class="p-3 rounded-xl bg-yellow-500/20 group-hover:bg-yellow-500/30 transition-colors">
                <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6 text-yellow-400" />
              </div>
              <h2 class="text-2xl font-bold ml-4">Ce Qui M'Inspire</h2>
            </div>
            <div class="space-y-4">
              <blockquote class="text-gray-300 italic border-l-4 border-yellow-400 pl-4 py-2">
                "La simplicité est la sophistication ultime."
              </blockquote>
              <blockquote class="text-gray-300 italic border-l-4 border-blue-400 pl-4 py-2">
                "Le code est de la poésie logique."
              </blockquote>
              <blockquote class="text-gray-300 italic border-l-4 border-purple-400 pl-4 py-2">
                "Chaque problème complexe a une solution simple et élégante."
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- Section valeurs -->
      <div class="mt-16 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
        <h2 class="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Mes Valeurs
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-6 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-300 group">
            <Icon name="heroicons:shield-check" class="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 class="text-xl font-bold mb-2">Intégrité</h3>
            <p class="text-gray-300">Code propre, intentions claires, résultats honnêtes</p>
          </div>
          <div class="text-center p-6 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-300 group">
            <Icon name="heroicons:arrow-trending-up" class="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 class="text-xl font-bold mb-2">Innovation</h3>
            <p class="text-gray-300">Toujours apprendre, toujours évoluer, toujours créer</p>
          </div>
          <div class="text-center p-6 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-300 group">
            <Icon name="heroicons:users" class="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 class="text-xl font-bold mb-2">Collaboration</h3>
            <p class="text-gray-300">Ensemble, nous créons l'extraordinaire</p>
          </div>
        </div>
      </div>

      <!-- CTA final -->
      <div class="text-center mt-16">
        <p class="text-xl text-gray-300 mb-8">
          Prêt à créer quelque chose d'extraordinaire ensemble ?
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/25"
        >
          <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 mr-2" />
          Commençons la conversation
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>


// Animation d'entrée progressive
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  })

  document.querySelectorAll('.bg-gray-800\\/50').forEach((el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Animations personnalisées */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Effets de profondeur */
.bg-gray-800\/50 {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
}

/* Amélioration du texte */
.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>