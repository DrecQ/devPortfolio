<template>
  <div>
    <Projects/>
  </div>
</template>

<script setup>
const { t } = useSiteLocale()

// Le script peut rester vide ou tu peux ajouter des interactions
useHead(() => ({
  title: t('Mes projets'),
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' }
  ]
}))
// Votre code JavaScript ici
</script>

<style scoped>
/* Votre CSS ici */
</style>