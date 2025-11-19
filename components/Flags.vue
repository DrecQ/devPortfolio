<template>
  <div>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 to-slate-900 text-white">
      <!-- Navigation -->
      <div class="fixed top-6 left-6 z-20">
        <NuxtLink 
          to="/projects" 
          class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/20"
        >
          <Icon name="heroicons:arrow-left" class="w-4 h-4" />
          <span>Retour aux projets</span>
        </NuxtLink>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <!-- En-tête hero -->
        <div class="text-center mb-16">
          
          <h1 class="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Mes FLAGS 
          </h1>

          <p class="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            La plateforme qui révolutionne la rencontre en permettant de partager ses 
            <span class="text-green-400 font-semibold">green flags</span> et 
            <span class="text-red-400 font-semibold">red flags</span> dès le premier regard.
          </p>
        </div>

        <!-- Image principale -->
        <div class="bg-white/5 rounded-xl p-4 mb-16 backdrop-blur-sm border border-white/10">
          <NuxtImg 
            src="/projects/mes-flags.png" 
            alt="Interface de la plateforme Mes FLAGS"
            class="w-full h-auto rounded-lg"
            format="webp"
            quality="85"
          />
        </div>

        <!-- Concept principal -->
        <div class="grid lg:grid-cols-2 gap-8 mb-16">
          <!-- Le Problème -->
          <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 rounded-lg bg-red-500/20">
                <Icon name="heroicons:exclamation-triangle" class="w-5 h-5 text-red-400" />
              </div>
              <h2 class="text-xl font-bold text-white">Le Problème</h2>
            </div>
            <ul class="space-y-3 text-white/70">
              <li class="flex items-start gap-3">
                <Icon name="heroicons:x-circle" class="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Questions répétitives dans les processus de rencontre</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:x-circle" class="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Manque de transparence sur les attentes et limites</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:x-circle" class="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span>Temps perdu à découvrir des incompatibilités basiques</span>
              </li>
            </ul>
          </div>

          <!-- La Solution -->
          <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 rounded-lg bg-green-500/20">
                <Icon name="heroicons:light-bulb" class="w-5 h-5 text-green-400" />
              </div>
              <h2 class="text-xl font-bold text-white">La Solution</h2>
            </div>
            <ul class="space-y-3 text-white/70">
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-badge" class="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Profil unique avec flags visibles immédiatement</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-badge" class="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Lien partageable pour éviter les questions redondantes</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-badge" class="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Focus sur les connections compatibles dès le départ</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Fonctionnalités -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-center text-white mb-8">Fonctionnalités Principales</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:clipboard-document-check" class="w-6 h-6 text-green-400" />
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Green Flags</h3>
              <p class="text-white/70 text-sm">Listez vos critères positifs, valeurs et qualités recherchées</p>
            </div>

            <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:shield-exclamation" class="w-6 h-6 text-red-400" />
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Red Flags</h3>
              <p class="text-white/70 text-sm">Définissez vos limites et comportements inacceptables</p>
            </div>

            <div class="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
              <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:link" class="w-6 h-6 text-blue-400" />
              </div>
              <h3 class="text-lg font-bold text-white mb-2">Profil Partageable</h3>
              <p class="text-white/70 text-sm">Lien unique à partager sur les apps de rencontre et réseaux</p>
            </div>
          </div>
        </div>

        <!-- Stack technique -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-center text-white mb-8">Architecture Technique</h2>
          
          <div class="bg-white/5 rounded-xl p-6 mb-6 backdrop-blur-sm border border-white/10">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Frontend -->
              <div class="text-center">
                <div class="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="simple-icons:nuxtdotjs" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-lg font-bold text-white mb-2">Frontend</h3>
                <p class="text-white/70 mb-3">Nuxt.js</p>
                <div class="space-y-1 text-sm text-white/60">
                  <div>• Interface utilisateur moderne</div>
                  <div>• Rendu côté serveur (SSR)</div>
                  <div>• Expérience fluide et réactive</div>
                </div>
              </div>

              <!-- Backend -->
              <div class="text-center">
                <div class="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="simple-icons:nodedotjs" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-lg font-bold text-white mb-2">Backend</h3>
                <p class="text-white/70 mb-3">Node.js + Express</p>
                <div class="space-y-1 text-sm text-white/60">
                  <div>• API RESTful performante</div>
                  <div>• Authentification JWT</div>
                  <div>• Gestion des profils utilisateurs</div>
                </div>
              </div>
            </div>

            <!-- Base de données -->
            <div class="mt-6 pt-6 border-t border-white/10 text-center">
              <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="heroicons:circle-stack" class="w-6 h-6 text-white" />
              </div>
              <h3 class="font-bold text-white mb-1">Base de Données</h3>
              <p class="text-white/70">MySQL</p>
            </div>
          </div>
        </div>

        <!-- Statut et CTA -->
        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-lg mb-6 border border-amber-500/30">
            <span class="text-amber-400 font-medium text-sm">En cours de développement</span>
          </div>
          
          <h2 class="text-xl font-bold text-white mb-4">
            Prêt à révolutionner votre façon de faire des rencontres ?
          </h2>
          
          <p class="text-white/80 mb-8 max-w-xl mx-auto">
            Mes FLAGS arrive bientôt. Soyez parmi les premiers à tester la plateforme 
            qui simplifie les rencontres authentiques.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <NuxtLink 
              to="/projects" 
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-sm"
            >
              <Icon name="heroicons:arrow-left" class="w-4 h-4" />
              <span>Voir mes autres projets</span>
            </NuxtLink>
            
            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              <Icon name="heroicons:envelope" class="w-4 h-4" />
              <span>Être notifié du lancement</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Styles spécifiques si nécessaires */
</style>