<template>
  <div
    class="inline-flex items-center gap-1 rounded-xl border border-slate-200/70 bg-white/70 p-1 shadow-sm"
    role="group"
    :aria-label="t('Choisir la langue')"
  >
    <button
      type="button"
      class="rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors"
      :class="locale === 'fr' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'"
      :aria-pressed="locale === 'fr'"
      :aria-label="t('Français sélectionné')"
      @click="setLocale('fr')"
    >
      FR
    </button>
    <button
      type="button"
      class="rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors"
      :class="locale === 'en' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'"
      :aria-pressed="locale === 'en'"
      :aria-label="t('Anglais sélectionné')"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>

<script setup>
const { locale, setLocale, t } = useSiteLocale()
</script>
