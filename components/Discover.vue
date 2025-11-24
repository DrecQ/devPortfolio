<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
    <!-- Background animé subtil -->
    <div class="fixed inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-slow delay-2000"></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- En-tête -->
      <div class="text-center mb-16 animate-fade-in">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Mon Univers 
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          De la passion du code à la quête d'excellence
        </p>
      </div>

      <!-- Article structuré -->
      <article class="space-y-12">
        <!-- Introduction -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <p class="text-lg text-gray-300 leading-relaxed">
            Je m'appelle Evariste Credo Q. et je suis développeur web passionné par la création de solutions 
            technologiques qui transforment notre quotidien. Mon parcours est guidé par une conviction profonde : 
            l'informatique est bien plus qu'une discipline technique, c'est une science qui, à l'image de la médecine, 
            a le pouvoir de sauver des vies et de résoudre les défis les plus complexes de notre époque.
          </p>
        </section>

        <!-- Chapitre 1 : Pourquoi l'informatique -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <h2 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50">
            Le Choix de l'Informatique
          </h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            J'ai choisi l'informatique parce que c'est une science qui, tout comme la médecine, sauve des vies. 
            Une seule ligne de code peut changer le monde, résoudre des problèmes complexes et impacter des millions de personnes. 
            Chaque algorithme que nous créons représente un remède potentiel aux défis de notre temps.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Cette conviction m'anime au quotidien : derrière chaque fonction, chaque interface, chaque système, 
            se cache la possibilité d'améliorer concrètement la vie des gens. Le code n'est pas une fin en soi, 
            mais un moyen puissant au service du progrès humain.
          </p>
        </section>

        <!-- Chapitre 2 : Inspiration -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <h2 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50">
            Sources d'Inspiration
          </h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Steve Jobs représente pour moi un modèle d'excellence et d'innovation. Sa capacité à transformer 
            des concepts complexes en solutions simples et élégantes m'inspire profondément. Sa célèbre citation 
            "La simplicité est la sophistication suprême" guide ma démarche créative.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Je cherche constamment à atteindre ce niveau d'impact : créer des solutions si intuitives et bien 
            conçues qu'elles semblent évidentes. Cette recherche de l'élégance dans la simplicité est au cœur 
            de mon approche du développement.
          </p>
        </section>

        <!-- Chapitre 3 : Philosophie -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <h2 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50">
            Ma Philosophie de Vie
          </h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Trois principes fondamentaux guident mon parcours et mes actions. Ces piliers se retrouvent 
            dans tous les systèmes performants et constituent la base de mon approche :
          </p>
          
          <div class="grid md:grid-cols-3 gap-6 mb-6">
            <div class="text-center p-6 rounded-xl bg-gray-700/20 border border-gray-600/20">
              <h3 class="text-lg font-semibold text-white mb-3">Discipline</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                La rigueur et la constance dans l'apprentissage et la pratique. 
                Chaque ligne de code mérite attention et précision.
              </p>
            </div>
            <div class="text-center p-6 rounded-xl bg-gray-700/20 border border-gray-600/20">
              <h3 class="text-lg font-semibold text-white mb-3">Passion</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                L'amour du métier et la conviction profonde que la technologie 
                peut améliorer le monde.
              </p>
            </div>
            <div class="text-center p-6 rounded-xl bg-gray-700/20 border border-gray-600/20">
              <h3 class="text-lg font-semibold text-white mb-3">Foi</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                La conviction inébranlable dans le potentiel de l'innovation 
                et dans ma capacité à contribuer au progrès.
              </p>
            </div>
          </div>
        </section>

        <!-- Chapitre 4 : Ambitions -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <h2 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50">
            Mon Parcours d'Excellence
          </h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            Mon ambition est de devenir un expert accompli dans les domaines du développement, du DevOps, 
            de la gestion de projet et du product management. Je recherche activement un environnement 
            stimulant qui me permettra d'atteindre les plus hauts niveaux d'expertise et d'innovation.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Cette quête d'excellence n'est pas seulement technique ; elle englobe la capacité à comprendre 
            les besoins utilisateurs, à concevoir des architectures robustes et à mener des projets 
            ambitieux jusqu'à leur réalisation concrète.
          </p>
        </section>

        <!-- Chapitre 5 : Compétences visées -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <h2 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50">
            Domaines de Maîtrise
          </h2>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/20">Développement Fullstack</span>
            <span class="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg text-sm border border-cyan-500/20">Architecture Logicielle</span>
            <span class="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg text-sm border border-purple-500/20">DevOps</span>
            <span class="px-4 py-2 bg-green-500/10 text-green-300 rounded-lg text-sm border border-green-500/20">Gestion de Projet</span>
            <span class="px-4 py-2 bg-amber-500/10 text-amber-300 rounded-lg text-sm border border-amber-500/20">Product Management</span>
          </div>
        </section>

        <!-- Chapitre 6 : Centres d'intérêt -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <h2 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50">
            Univers Personnels
          </h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            En dehors du développement, je cultive plusieurs passions qui enrichissent ma créativité 
            et ma perception du monde :
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center p-4 rounded-xl bg-gray-700/20 border border-gray-600/20">
              <p class="text-white text-sm font-medium">Musique</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-gray-700/20 border border-gray-600/20">
              <p class="text-white text-sm font-medium">Basketball</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-gray-700/20 border border-gray-600/20">
              <p class="text-white text-sm font-medium">Innovations Technologiques</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-gray-700/20 border border-gray-600/20">
              <p class="text-white text-sm font-medium">Intelligence Artificielle</p>
            </div>
          </div>
        </section>

        <!-- Chapitre 7 : Vision technologique -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <h2 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50">
            Vision de l'Intelligence Artificielle
          </h2>
          <p class="text-gray-300 leading-relaxed">
            L'intelligence artificielle représente pour moi un outil révolutionnaire qui transforme 
            fondamentalement notre métier. Je me consacre à l'apprentissage de ces technologies 
            émergentes pour créer des solutions plus intelligentes, plus efficaces et repousser 
            les limites de ce qui est technologiquement possible.
          </p>
        </section>

        <!-- Conclusion -->
        <section class="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30">
          <h2 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700/50">
            Prochain Chapitre
          </h2>
          <p class="text-gray-300 leading-relaxed mb-6">
            Je suis constamment à la recherche de nouveaux défis et d'opportunités de collaboration 
            avec des équipes visionnaires. Mon objectif est de contribuer à des projets ambitieux 
            qui repoussent les frontières de l'innovation et créent une valeur durable.
          </p>
          <div class="text-center">
            <NuxtLink 
              to="/contact" 
              class="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-900/20"
            >
              Échangeons sur nos visions
            </NuxtLink>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup>
// Animation d'entrée progressive
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('section').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Animations subtiles */
@keyframes float-slow {
  0%, 100% { 
    transform: translateY(0px) scale(1); 
    opacity: 0.05;
  }
  50% { 
    transform: translateY(-10px) scale(1.02); 
    opacity: 0.08;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

/* Amélioration de la lisibilité */
article {
  line-height: 1.7;
}

section {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

section:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
</style>