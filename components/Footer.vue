<template>
  <footer class="bg-slate-900 border-t border-slate-800">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <!-- Signature -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </NuxtLink>
          <div class="text-slate-400 text-sm">
            &copy; {{ currentYear }} Evariste Credo
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div class="flex items-center space-x-3">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="p-2 rounded-lg text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
            :class="social.hoverClass"
            :aria-label="social.name"
          >
            <Icon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: 'simple-icons:github', 
    url: 'https://github.com/DrecQ',
    hoverClass: 'hover:bg-gray-800'
  },
  { 
    name: 'LinkedIn', 
    icon: 'simple-icons:linkedin', 
    url: 'https://www.linkedin.com/in/evariste-credo-quist-44b177386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    hoverClass: 'hover:bg-blue-600'
  },
  { 
    name: 'X', 
    icon: 'simple-icons:x', 
    url: 'https://x.com/drec_quist?t=sswvVIyxnMCfbKjZU2lalA&s=09',
    hoverClass: 'hover:bg-black'
  },
  { 
    name: 'Facebook', 
    icon: 'simple-icons:facebook', 
    url: 'https://www.facebook.com/share/1BwNiNUamG/',
    hoverClass: 'hover:bg-blue-500'
  }
]
</script>