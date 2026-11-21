<template>
  <div class="min-h-screen bg-slate-50">
     <MainNavbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
const { locale, detectBrowserLocale } = useSiteLocale()

onMounted(detectBrowserLocale)

useHead(() => ({
  htmlAttrs: {
    lang: locale.value
  }
}))
</script>