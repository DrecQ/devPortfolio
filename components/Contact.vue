<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    <!-- Particules animées -->
    <div class="absolute inset-0 pointer-events-none">
      <div 
        v-for="i in 25" 
        :key="i"
        class="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-float"
        :style="getParticleStyle()"
      ></div>
    </div>

    <div class="relative z-10 min-h-screen">
      <!-- Header avec titre principal centré -->
      <div class="text-center pt-12 sm:pt-16 lg:pt-20 pb-8">
        <!-- Badge de statut -->
        <div class="inline-flex items-center gap-3 px-4 py-2 glass-effect rounded-full mb-6">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow"></div>
          <span class="text-white/90 text-sm font-medium">Disponible pour nouveaux projets</span>
        </div>
        
        <!-- Titre principal -->
        <div class="space-y-2 mb-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Créons quelque chose
          </h1>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text">
            d'extraordinaire
          </h2>
        </div>
        
        <!-- Description -->
        <p class="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
          Vous avez un projet en tête ? Discutons-en ensemble et transformons votre vision en réalité digitale.
        </p>
      </div>

      <!-- Contenu principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <!-- Section supérieure: Informations de contact et réseaux sociaux -->
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          <!-- Informations de contact -->
          <div class="glass-effect rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              Informations de contact
            </h3>
            
            <div class="space-y-6">
              <div 
                v-for="contact in contactInfo" 
                :key="contact.type"
                class="flex items-center gap-4"
              >
                <div class="w-12 h-12 glass-effect rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon :name="contact.icon" :class="`w-6 h-6 ${contact.iconColor}`" />
                </div>
                <div>
                  <p class="text-white/60 text-sm">{{ contact.label }}</p>
                  <p class="text-white font-medium text-lg">{{ contact.value }}</p>
                </div>
              </div>
            </div>

            <!-- Statistiques -->
            <div class="mt-8 pt-6 border-t border-white/10">
              <div class="grid grid-cols-2 gap-4">
                <div 
                  v-for="stat in stats" 
                  :key="stat.label"
                  class="glass-effect rounded-lg p-4 text-center"
                >
                  <div class="text-3xl font-bold text-white">{{ stat.value }}</div>
                  <div class="text-white/60 text-sm">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Réseaux sociaux -->
          <div class="glass-effect rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              Retrouvez-moi sur
            </h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NuxtLink 
                v-for="social in socialLinks" 
                :key="social.name"
                :to="social.url"
                external
                target="_blank"
                class="social-hover flex items-center gap-3 p-4 glass-effect rounded-xl transition-all duration-300 group"
                @click="handleSocialClick"
              >
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon :name="social.icon" class="w-5 h-5 text-white" />
                </div>
                <div>
                  <div class="text-white font-medium">{{ social.name }}</div>
                  <div class="text-white/60 text-sm">{{ getDisplayUrl(social.url) }}</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Section inférieure: Formulaire de contact centré -->
        <div class="flex justify-center">
          <div class="w-full max-w-2xl">
            <form @submit.prevent="handleSubmit" class="glass-effect rounded-2xl p-8 lg:p-12">
              <!-- En-tête du formulaire -->
              <div class="text-center mb-8">
                <h3 class="text-3xl font-bold text-white mb-3">Envoyez-moi un message</h3>
                <p class="text-white/70 text-lg">Je vous répondrai dans les plus brefs délais</p>
              </div>
              
              <!-- Champs du formulaire -->
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <!-- Nom -->
                <div class="form-group">
                  <label for="name" class="block text-white/90 text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="form-input w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                    placeholder="Votre nom"
                  />
                </div>
                
                <!-- Email -->
                <div class="form-group">
                  <label for="email" class="block text-white/90 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="form-input w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <!-- Sujet -->
              <div class="form-group mb-6">
                <label for="subject" class="block text-white/90 text-sm font-medium mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="form-input w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                >
                  <option value="" disabled class="bg-slate-800">Sélectionnez un sujet</option>
                  <option value="projet" class="bg-slate-800">Nouveau projet</option>
                  <option value="collaboration" class="bg-slate-800">Collaboration</option>
                  <option value="question" class="bg-slate-800">Question générale</option>
                  <option value="autre" class="bg-slate-800">Autre</option>
                </select>
              </div>
              
              <!-- Message -->
              <div class="form-group mb-8">
                <label for="message" class="block text-white/90 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="form-input w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 resize-none"
                  placeholder="Décrivez votre projet ou posez votre question..."
                ></textarea>
              </div>
              
              <!-- Bouton d'envoi -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full px-8 py-4 text-white font-semibold rounded-xl flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                @click="handleButtonClick"
              >
                <span v-if="!isSubmitting">Envoyer le message</span>
                <span v-else>Envoi en cours...</span>
                <Icon 
                  v-if="!isSubmitting"
                  name="heroicons:paper-airplane-20-solid" 
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                />
                <div v-else class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              </button>
              
              <!-- Message de succès -->
              <div 
                v-if="showSuccess"
                class="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center animate-fade-in"
              >
                <Icon name="heroicons:check-circle-20-solid" class="w-5 h-5 inline mr-2" />
                Message envoyé avec succès !
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Meta pour SEO (optionnel)
useHead({
  title: 'Contact - Mon Portfolio',
  meta: [
    { name: 'description', content: 'Contactez-moi pour discuter de vos projets digitaux' }
  ]
})

// Données de contact
const contactInfo = [
  {
    type: 'email',
    label: 'Email',
    value: 'contact@monportfolio.com',
    icon: 'heroicons:envelope-20-solid',
    iconColor: 'text-blue-400'
  },
  {
    type: 'phone',
    label: 'Téléphone',
    value: '+33 6 12 34 56 78',
    icon: 'heroicons:phone-20-solid',
    iconColor: 'text-green-400'
  },
  {
    type: 'location',
    label: 'Localisation',
    value: 'Paris, France',
    icon: 'heroicons:map-pin-20-solid',
    iconColor: 'text-purple-400'
  }
]

// Statistiques
const stats = [
  { label: 'Projets réalisés', value: '15+' },
  { label: 'Satisfaction client', value: '100%' }
]

// Liens sociaux
const socialLinks = [
  { 
    name: 'GitHub', 
    icon: 'simple-icons:github', 
    url: 'https://github.com' 
  },
  { 
    name: 'LinkedIn', 
    icon: 'simple-icons:linkedin', 
    url: 'https://linkedin.com' 
  },
  { 
    name: 'X (Twitter)', 
    icon: 'simple-icons:x', 
    url: 'https://x.com' 
  },
  { 
    name: 'Instagram', 
    icon: 'simple-icons:instagram', 
    url: 'https://instagram.com' 
  }
]

// État du formulaire
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

// Fonction pour le style des particules
const getParticleStyle = () => ({
  left: Math.random() * 100 + '%', 
  top: Math.random() * 100 + '%',
  animationDelay: Math.random() * 8 + 's',
  animationDuration: (6 + Math.random() * 4) + 's'
})

// Fonction pour afficher l'URL simplifiée
const getDisplayUrl = (url) => {
  try {
    const domain = new URL(url).hostname.replace('www.', '')
    return domain
  } catch {
    return url
  }
}

// Gestion de l'envoi du formulaire
const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Ici vous pouvez intégrer votre logique d'envoi
    // Par exemple avec $fetch pour appeler une API
    // await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: form.value
    // })
    
    // Simulation d'envoi pour la démo
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Afficher le message de succès
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    // Ici vous pouvez gérer les erreurs avec une notification
    // Par exemple avec Nuxt UI toast ou autre système de notification
  } finally {
    isSubmitting.value = false
  }
}

// Effet de ripple sur les boutons
const handleButtonClick = (event) => {
  const button = event.currentTarget
  const ripple = document.createElement('div')
  
  ripple.className = 'absolute inset-0 rounded-xl bg-white/20 transform scale-0 transition-transform duration-300'
  button.style.position = 'relative'
  button.style.overflow = 'hidden'
  button.appendChild(ripple)
  
  setTimeout(() => {
    ripple.style.transform = 'scale(1)'
    setTimeout(() => ripple.remove(), 300)
  }, 10)
}

// Effet de ripple sur les liens sociaux
const handleSocialClick = (event) => {
  const link = event.currentTarget
  const ripple = document.createElement('div')
  
  ripple.className = 'absolute inset-0 rounded-xl bg-white/20 transform scale-0 transition-transform duration-300'
  link.style.position = 'relative'
  link.style.overflow = 'hidden'
  link.appendChild(ripple)
  
  setTimeout(() => {
    ripple.style.transform = 'scale(1)'
    setTimeout(() => ripple.remove(), 300)
  }, 10)
}
</script>

<style scoped>
/* Animations */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-20px) rotate(180deg); 
    opacity: 0.8;
  }
}

@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }
  50% { 
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
  }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Classes utilitaires */
.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

/* Effets visuels */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Formulaire */
.form-input {
  backdrop-filter: blur(10px);
  outline: none;
  transition: all 0.3s ease;
}

.form-input:focus {
  background: rgba(255, 255, 255, 0.15);
  outline: none;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* Boutons */
.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
}

.btn-primary:disabled {
  transform: none;
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
}

/* Réseaux sociaux */
.social-hover {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.social-hover:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 640px) {
  .space-y-8 {
    gap: 1.5rem;
  }
  
  .space-y-6 {
    gap: 1rem;
  }
  
  .py-12 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .glass-effect {
    padding: 1.5rem;
  }
}

/* Support backdrop-filter */
@supports (backdrop-filter: blur(20px)) {
  .glass-effect {
    backdrop-filter: blur(20px);
  }
  
  .form-input {
    backdrop-filter: blur(10px);
  }
}
</style>