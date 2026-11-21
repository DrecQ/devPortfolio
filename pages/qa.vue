<template>
  <main class="bg-slate-50">
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div class="absolute -left-32 top-12 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div class="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(96, 165, 250, .25) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, .25) 1px, transparent 1px); background-size: 56px 56px;"></div>
      </div>

      <div class="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div class="max-w-3xl">
          <p class="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            <Icon name="heroicons:check-badge" class="h-5 w-5 text-blue-300" />
            {{ t('Assurance qualité · Tests fonctionnels et API') }}
          </p>
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {{ t('Testeur QA') }}
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            {{ t('Je contribue à la qualité des produits numériques en préparant et en exécutant des tests fonctionnels et API. Ma formation en développement m’aide à comprendre le fonctionnement des applications et à collaborer efficacement avec les équipes techniques.') }}
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {{ t('Découvrir mes projets') }}
              <Icon name="heroicons:arrow-right" class="h-5 w-5" />
            </NuxtLink>
            <NuxtLink
              to="/"
              class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-blue-400/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <Icon name="heroicons:arrow-left" class="h-5 w-5" />
              {{ t('Retour au portfolio') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:py-20 lg:space-y-20 lg:px-8">
      <section aria-labelledby="experience-title">
        <div class="mb-7">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{{ t('Expérience') }}</p>
          <h2 id="experience-title" class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ t('Mon expérience QA') }}</h2>
        </div>
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div class="flex flex-col gap-3 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 class="text-xl font-bold text-slate-900 sm:text-2xl">{{ t('Testeur QA') }} <span class="text-blue-600">— OPENSI</span></h3>
              <p class="mt-1 text-slate-600">{{ t('Tests fonctionnels, vérifications API et suivi des corrections') }}</p>
            </div>
            <span class="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Icon name="heroicons:calendar-days" class="h-4 w-4" />
              {{ t('Depuis le 16 février 2026') }}
            </span>
          </div>
          <ul class="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <li v-for="responsibility in responsibilities" :key="responsibility" class="flex items-start gap-3 text-slate-700">
              <Icon name="heroicons:check-circle" class="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span class="leading-relaxed">{{ t(responsibility) }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-title">
        <div class="mb-7 text-center">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{{ t('Une démarche structurée') }}</p>
          <h2 id="approach-title" class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ t('Ma démarche de test') }}</h2>
        </div>
        <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <li v-for="(step, index) in testSteps" :key="step.title" class="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-lg font-bold text-white shadow-md shadow-blue-600/20">
              {{ index + 1 }}
            </div>
            <h3 class="font-bold leading-snug text-slate-900">{{ t(step.title) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ t(step.description) }}</p>
          </li>
        </ol>
      </section>

      <section aria-labelledby="tools-title">
        <div class="mb-7">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{{ t('En pratique') }}</p>
          <h2 id="tools-title" class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ t('Outils et pratiques') }}</h2>
        </div>
        <div class="grid gap-5 md:grid-cols-3">
          <article v-for="tool in tools" :key="tool.name" class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-xl font-bold text-slate-900">{{ t(tool.name) }}</h3>
              <span class="rounded-full px-3 py-1 text-xs font-semibold" :class="tool.badgeClass">{{ t(tool.level) }}</span>
            </div>
            <p class="mt-4 leading-relaxed text-slate-600">{{ t(tool.description) }}</p>
          </article>
        </div>
        <p class="mt-4 flex items-start gap-2 text-sm leading-relaxed text-slate-600">
          <Icon name="heroicons:information-circle" class="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
          {{ t('Cypress correspond à une pratique personnelle et locale d’apprentissage, et non à une automatisation déployée en entreprise.') }}
        </p>
      </section>

      <section aria-labelledby="skills-title">
        <div class="mb-7">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{{ t('Savoir-faire') }}</p>
          <h2 id="skills-title" class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ t('Compétences clés') }}</h2>
        </div>
        <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="skill in qaSkills" :key="skill" class="flex items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm">
            <span class="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></span>
            {{ t(skill) }}
          </li>
        </ul>
      </section>

      <section aria-labelledby="education-title">
        <div class="mb-7">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{{ t('Une base technique') }}</p>
          <h2 id="education-title" class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ t('Formation et développement') }}</h2>
          <p class="mt-3 max-w-3xl leading-relaxed text-slate-600">
            {{ t('Ma formation en développement web et logiciel m’aide à mieux comprendre les applications, leurs composants et leurs échanges API.') }}
          </p>
        </div>
        <div class="grid gap-5 lg:grid-cols-2">
          <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div class="flex gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon name="heroicons:academic-cap" class="h-6 w-6" />
              </div>
              <div>
                <p class="text-sm font-semibold text-blue-600">2022–2025</p>
                <h3 class="mt-1 text-lg font-bold text-slate-900">{{ t('Licence en architecture logicielle') }}</h3>
                <p class="mt-1 text-slate-600">{{ t('ESGIS Bénin') }}</p>
              </div>
            </div>
          </article>
          <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div class="flex gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon name="heroicons:code-bracket" class="h-6 w-6" />
              </div>
              <div>
                <p class="text-sm font-semibold text-blue-600">2020–2022</p>
                <h3 class="mt-1 text-lg font-bold text-slate-900">{{ t('Formation en développement web') }}</h3>
                <p class="mt-1 text-slate-600">CVERI-VED</p>
              </div>
            </div>
          </article>
        </div>
        <div class="mt-5 rounded-2xl bg-slate-900 p-6 sm:p-7">
          <h3 class="font-semibold text-white">{{ t('Technologies de mon parcours') }}</h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li v-for="technology in technologies" :key="technology" class="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-blue-100">
              {{ t(technology) }}
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="soft-skills-title">
        <div class="mb-7">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">{{ t('Au quotidien') }}</p>
          <h2 id="soft-skills-title" class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ t('Soft skills') }}</h2>
        </div>
        <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="quality in softSkills" :key="quality" class="flex items-center gap-3 rounded-xl bg-blue-50/70 px-4 py-4 text-slate-700">
            <Icon name="heroicons:sparkles" class="h-5 w-5 shrink-0 text-blue-600" />
            <span>{{ t(quality) }}</span>
          </li>
        </ul>
      </section>

      <section class="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-10 text-center shadow-xl sm:px-10 sm:py-14" aria-labelledby="projects-title">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">{{ t('Développement') }}</p>
        <h2 id="projects-title" class="mt-2 text-2xl font-bold text-white sm:text-3xl">{{ t('Mes projets de développement') }}</h2>
        <p class="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-300">
          {{ t('Retrouvez les projets déjà présentés dans mon portfolio et découvrez le parcours technique qui nourrit ma pratique QA.') }}
        </p>
        <NuxtLink
          to="/projects"
          class="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          {{ t('Découvrir mes projets') }}
          <Icon name="heroicons:arrow-right" class="h-5 w-5" />
        </NuxtLink>
      </section>
    </div>
  </main>
</template>

<script setup>
const { t } = useSiteLocale()

useHead(() => ({
  title: t('Testeur QA | Portfolio'),
  meta: [
    {
      name: 'description',
      content: t('Découvrez mon expérience de testeur QA, ma démarche de test, mes outils et ma formation en développement.')
    }
  ]
}))

const responsibilities = [
  'Rédiger des cas et scénarios de test à partir des besoins et fonctionnalités.',
  'Mettre à jour et simplifier les fichiers de test pour les rendre plus clairs et utiles.',
  'Réaliser des tests fonctionnels sur les produits de l’entreprise et sur les projets avant leur livraison.',
  'Vérifier les corrections et les nouvelles fonctionnalités, y compris après leur mise en production.',
  'Effectuer des contrôles réguliers sur les produits.',
  'Signaler les problèmes observés, proposer des améliorations et suivre la prise en compte de certaines corrections.',
  'Réaliser des tests API avec Postman.'
]

const testSteps = [
  { title: 'Comprendre le besoin', description: 'Prendre connaissance du besoin ou du changement à vérifier.' },
  { title: 'Préparer les tests', description: 'Définir les cas et scénarios adaptés aux fonctionnalités.' },
  { title: 'Exécuter les vérifications', description: 'Tester le fonctionnement, côté interface ou API.' },
  { title: 'Décrire les anomalies', description: 'Expliquer clairement les problèmes constatés.' },
  { title: 'Vérifier les corrections', description: 'Refaire les tests nécessaires après une correction.' }
]

const tools = [
  {
    name: 'Postman',
    level: 'Utilisé en QA',
    description: 'Tests et vérifications API dans le cadre de mes activités QA.',
    badgeClass: 'bg-blue-50 text-blue-700'
  },
  {
    name: 'Cypress',
    level: 'Pratique locale',
    description: 'Scripts de test pratiqués localement dans le cadre de mon apprentissage.',
    badgeClass: 'bg-cyan-50 text-cyan-700'
  },
  {
    name: 'CodeceptJS',
    level: 'Bases',
    description: 'Notions de base découvertes dans mon apprentissage des tests.',
    badgeClass: 'bg-slate-100 text-slate-700'
  }
]

const qaSkills = [
  'Tests fonctionnels',
  'Tests API',
  'Rédaction de cas et scénarios de test',
  'Vérification de corrections et de nouvelles fonctionnalités',
  'Contrôles réguliers',
  'Analyse et description des anomalies',
  'Amélioration et simplification des supports de test',
  'Sens de la qualité et de l’amélioration continue'
]

const technologies = [
  'PHP',
  'JavaScript',
  'Python (bases)',
  'Laravel',
  'Vue.js',
  'Nuxt.js',
  'Node.js',
  'HTML/CSS',
  'API REST',
  'MySQL'
]

const softSkills = [
  'Rigueur et souci du détail',
  'Esprit d’analyse et d’observation',
  'Organisation et régularité',
  'Communication et suivi des corrections',
  'Adaptabilité et apprentissage continu',
  'Sens de l’amélioration continue'
]
</script>
