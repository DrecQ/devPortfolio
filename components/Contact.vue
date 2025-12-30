<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    
    <!-- Arrière-plan avec effets -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Cercles lumineux -->
      <div class="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      <!-- Points lumineux flottants -->
      <div v-for="n in 8" :key="'dot-'+n" 
           class="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-dots"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${n * 0.3}s`,
             animationDuration: `${6 + Math.random() * 10}s`
           }">
      </div>
    </div>

    <div class="relative z-10 min-h-screen">
      <!-- Header amélioré -->
      <div class="text-center pt-16 pb-12 px-4">
        
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Travaillons <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ensemble</span>
        </h1>
        
        <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
        
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Discutons de votre <span class="font-medium text-blue-300">prochain projet</span> et transformons vos idées en réalité
        </p>
      </div>

      <!-- Contenu principal amélioré -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          <!-- Informations de contact améliorées -->
          <div class="lg:col-span-1 space-y-8">
            <!-- Coordonnées améliorées -->
            <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
              <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                <div class="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 border border-blue-500/30 mr-3">
                  <Icon name="heroicons:envelope-open" class="w-5 h-5 text-blue-400" />
                </div>
                <span>Mes coordonnées</span>
              </h3>
              
              <div class="space-y-5">
                <div 
                  v-for="contact in contactInfo" 
                  :key="contact.type"
                  class="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/contact border border-white/10 hover:border-blue-500/20"
                >
                  <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-400/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30 group-hover/contact:scale-110 transition-transform duration-300">
                    <Icon :name="contact.icon" class="w-5 h-5 text-blue-400" />
                  </div>
                  <div class="flex-1">
                    <p class="text-white/60 text-xs">{{ contact.label }}</p>
                    <p class="text-white font-medium text-sm">{{ contact.value }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Réseaux sociaux améliorés -->
            <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center">
                <div class="p-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 border border-cyan-500/30 mr-3">
                  <Icon name="heroicons:share" class="w-5 h-5 text-cyan-400" />
                </div>
                <span>Mes réseaux</span>
              </h3>
              
              <div class="grid grid-cols-2 gap-3">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/social border border-white/10 hover:border-blue-500/20"
                  :class="social.colorClass"
                >
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon :name="social.icon" class="w-4 h-4 text-white" />
                  </div>
                  <span class="text-white text-sm font-medium">{{ social.name }}</span>
                  <Icon 
                    name="heroicons:arrow-up-right" 
                    class="w-3 h-3 ml-auto text-white/40 group-hover/social:text-blue-400 group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5 transition-all duration-300" 
                  />
                </a>
              </div>
            </div>

            <!-- Statistiques améliorées -->
            <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10">
              <div class="grid grid-cols-2 gap-6">
                <div 
                  v-for="stat in stats" 
                  :key="stat.label"
                  class="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group/stat"
                >
                  <div class="text-3xl font-bold text-white mb-1 group-hover/stat:text-blue-300 transition-colors duration-300">
                    {{ stat.value }}
                  </div>
                  <div class="text-white/60 text-sm">{{ stat.label }}</div>
                  <!-- Barre de progression décorative -->
                  <div class="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000"
                      :style="{ width: stat.percentage + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact amélioré -->
          <div class="lg:col-span-2">
            <div class="bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
              <div class="flex items-center mb-8">
                <div class="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mr-4">
                  <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">
                    Envoyez un message
                  </h3>
                  <p class="text-white/70 text-sm mt-1">
                    Je vous réponds dans les 24 heures
                  </p>
                </div>
              </div>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Nom et Email -->
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="name" class="block text-white/90 text-sm font-medium">
                      Nom complet *
                    </label>
                    <div class="relative">
                      <div class="absolute left-3 top-1/2 -translate-y-1/2">
                        <Icon name="heroicons:user" class="w-4 h-4 text-white/40" />
                      </div>
                      <input
                        id="name"
                        v-model="form.name"
                        type="text"
                        name="name"
                        class="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border transition-all duration-300 placeholder:text-white/40"
                        :class="errors.name ? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/30' : 'border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30'"
                        placeholder="Votre nom"
                        @blur="validateField('name')"
                        @input="clearError('name')"
                      />
                    </div>
                    <div v-if="errors.name" class="text-red-400 text-xs flex items-center gap-1">
                      <Icon name="heroicons:exclamation-circle" class="w-3 h-3" />
                      {{ errors.name }}
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <label for="email" class="block text-white/90 text-sm font-medium">
                      Email *
                    </label>
                    <div class="relative">
                      <div class="absolute left-3 top-1/2 -translate-y-1/2">
                        <Icon name="heroicons:envelope" class="w-4 h-4 text-white/40" />
                      </div>
                      <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        name="email"
                        class="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border transition-all duration-300 placeholder:text-white/40"
                        :class="errors.email ? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/30' : 'border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30'"
                        placeholder="votre@email.com"
                        @blur="validateField('email')"
                        @input="clearError('email')"
                      />
                    </div>
                    <div v-if="errors.email" class="text-red-400 text-xs flex items-center gap-1">
                      <Icon name="heroicons:exclamation-circle" class="w-3 h-3" />
                      {{ errors.email }}
                    </div>
                  </div>
                </div>

                <!-- Sujet amélioré -->
                <div class="space-y-2">
                  <label for="subject" class="block text-white/90 text-sm font-medium">
                    Sujet *
                  </label>
                  <div class="relative">
                    <div class="absolute left-3 top-1/2 -translate-y-1/2">
                      <Icon name="heroicons:tag" class="w-4 h-4 text-white/40" />
                    </div>
                    <select
                      id="subject"
                      v-model="form.subject"
                      name="subject"
                      class="w-full pl-10 pr-12 py-3.5 rounded-xl bg-white/10 border transition-all duration-300 appearance-none"
                      :class="errors.subject ? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/30' : 'border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30'"
                      @change="clearError('subject')"
                    >
                      <option value="" disabled selected class="bg-slate-800 text-white/70">Sélectionnez un sujet</option>
                      <option value="projet" class="bg-slate-800 text-white">Nouveau projet</option>
                      <option value="collaboration" class="bg-slate-800 text-white">Collaboration</option>
                      <option value="question" class="bg-slate-800 text-white">Question générale</option>
                      <option value="autre" class="bg-slate-800 text-white">Autre sujet</option>
                    </select>
                    <!-- Flèche custom -->
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <div class="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                        <Icon name="heroicons:chevron-down" class="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  <div v-if="errors.subject" class="text-red-400 text-xs flex items-center gap-1">
                    <Icon name="heroicons:exclamation-circle" class="w-3 h-3" />
                    {{ errors.subject }}
                  </div>
                </div>

                <!-- Message amélioré -->
                <div class="space-y-2">
                  <label for="message" class="block text-white/90 text-sm font-medium">
                    Message *
                  </label>
                  <div class="relative">
                    <div class="absolute left-3 top-3">
                      <Icon name="heroicons:chat-bubble-bottom-center-text" class="w-4 h-4 text-white/40" />
                    </div>
                    <textarea
                      id="message"
                      v-model="form.message"
                      name="message"
                      rows="6"
                      class="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border transition-all duration-300 resize-none placeholder:text-white/40"
                      :class="errors.message ? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/30' : 'border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30'"
                      placeholder="Décrivez votre projet ou posez votre question en détail..."
                      @blur="validateField('message')"
                      @input="clearError('message')"
                    ></textarea>
                    <!-- Compteur de caractères -->
                    <div class="absolute bottom-3 right-3">
                      <span class="text-xs text-white/40">{{ form.message.length }}/500</span>
                    </div>
                  </div>
                  <div v-if="errors.message" class="text-red-400 text-xs flex items-center gap-1">
                    <Icon name="heroicons:exclamation-circle" class="w-3 h-3" />
                    {{ errors.message }}
                  </div>
                </div>
                
                <!-- Bouton d'envoi amélioré -->
                <button
                  type="submit"
                  :disabled="isSubmitting || !isFormValid"
                  class="w-full px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium flex items-center justify-center gap-3 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 group/submit relative overflow-hidden shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <!-- Effet de brillance -->
                  <div class="absolute inset-0 -translate-x-full group-hover/submit:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <span class="relative z-10">{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                  
                  <div v-if="!isSubmitting" class="relative z-10">
                    <Icon name="heroicons:paper-airplane" class="w-4 h-4 transform -rotate-45 group-hover/submit:rotate-0 transition-transform duration-300" />
                  </div>
                  <div v-else class="relative z-10 w-4 h-4">
                    <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                </button>
                
                <!-- Messages de statut améliorés -->
                <transition name="fade">
                  <div 
                    v-if="showSuccess"
                    class="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl text-green-400 flex items-center justify-center gap-2 backdrop-blur-sm animate-fade-in"
                  >
                    <Icon name="heroicons:check-circle" class="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p class="font-medium">Message envoyé avec succès !</p>
                      <p class="text-green-400/70 text-sm">Je vous répondrai dans les plus brefs délais.</p>
                    </div>
                  </div>
                </transition>
                
                <transition name="fade">
                  <div 
                    v-if="showError"
                    class="p-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/30 rounded-xl text-red-400 flex items-center justify-center gap-2 backdrop-blur-sm animate-fade-in"
                  >
                    <Icon name="heroicons:exclamation-triangle" class="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p class="font-medium">Oups, une erreur est survenue</p>
                      <p class="text-red-400/70 text-sm">{{ errorMessage }}</p>
                    </div>
                  </div>
                </transition>
                
                <!-- Note de confidentialité -->
                <p class="text-white/50 text-xs text-center pt-4 border-t border-white/10">
                  Vos informations sont traitées avec confidentialité. Elles ne seront jamais partagées avec des tiers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Données de contact
const contactInfo = [
  {
    type: 'email',
    label: 'Email professionnel',
    value: 'quistevaristecredo@gmail.com',
    icon: 'heroicons:envelope'
  },
  {
    type: 'phone',
    label: 'Téléphone / WhatsApp',
    value: '+229 95 30 59 68',
    icon: 'heroicons:phone'
  },
  {
    type: 'location',
    label: 'Localisation',
    value: 'Cotonou, Bénin',
    icon: 'heroicons:map-pin'
  },
  {
    type: 'time',
    label: 'Disponibilité',
    value: 'Lun - Ven, 9h - 18h',
    icon: 'heroicons:clock'
  }
]

// Liens sociaux améliorés
const socialLinks = [
  { 
    name: 'GitHub', 
    icon: 'simple-icons:github', 
    url: 'https://github.com/DrecQ',
    colorClass: 'hover:bg-gray-900/30'
  },
  { 
    name: 'LinkedIn', 
    icon: 'simple-icons:linkedin', 
    url: 'https://www.linkedin.com/in/evariste-credo-quist-44b177386',
    colorClass: 'hover:bg-blue-600/30'
  },
  { 
    name: 'X (Twitter)', 
    icon: 'simple-icons:x', 
    url: 'https://x.com/drec_quist',
    colorClass: 'hover:bg-sky-600/30'
  },
  { 
    name: 'Facebook', 
    icon: 'simple-icons:facebook', 
    url: 'https://www.facebook.com/share/1BwNiNUamG/',
    colorClass: 'hover:bg-blue-700/30'
  }
]

// Statistiques améliorées
const stats = [
  { 
    label: 'Projets réalisés', 
    value: '20+', 
    percentage: 85 
  },
  { 
    label: 'Taux de réponse', 
    value: '100%', 
    percentage: 100 
  }
]

// État du formulaire
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

// Validation du formulaire
const isFormValid = computed(() => {
  const hasNoErrors = Object.keys(errors.value).length === 0
  const allFieldsFilled = form.value.name && 
                         form.value.email && 
                         form.value.subject && 
                         form.value.message
  const messageValid = form.value.message.length >= 10 && 
                       form.value.message.length <= 500
  
  return hasNoErrors && allFieldsFilled && messageValid
})

// Validation des champs
const validateField = (field) => {
  const value = form.value[field]
  const newErrors = { ...errors.value }

  switch (field) {
    case 'name':
      if (!value.trim()) {
        newErrors.name = 'Le nom est requis'
      } else if (value.trim().length < 2) {
        newErrors.name = 'Le nom doit contenir au moins 2 caractères'
      } else if (value.trim().length > 100) {
        newErrors.name = 'Le nom est trop long'
      } else {
        delete newErrors.name
      }
      break

    case 'email':
      if (!value.trim()) {
        newErrors.email = 'L\'email est requis'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = 'Veuillez entrer un email valide'
      } else {
        delete newErrors.email
      }
      break

    case 'subject':
      if (!value) {
        newErrors.subject = 'Veuillez sélectionner un sujet'
      } else {
        delete newErrors.subject
      }
      break

    case 'message':
      if (!value.trim()) {
        newErrors.message = 'Le message est requis'
      } else if (value.trim().length < 10) {
        newErrors.message = 'Le message doit contenir au moins 10 caractères'
      } else if (value.trim().length > 500) {
        newErrors.message = 'Le message ne doit pas dépasser 500 caractères'
      } else {
        delete newErrors.message
      }
      break
  }

  errors.value = newErrors
}

// Effacer l'erreur d'un champ
const clearError = (field) => {
  if (errors.value[field]) {
    const newErrors = { ...errors.value }
    delete newErrors[field]
    errors.value = newErrors
  }
}

// Validation complète du formulaire
const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('subject')
  validateField('message')
  return Object.keys(errors.value).length === 0
}

// Gestion de l'envoi du formulaire
const handleSubmit = async () => {
  if (!validateForm()) {
    errorMessage.value = 'Veuillez corriger les erreurs dans le formulaire'
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
    return
  }
  
  isSubmitting.value = true
  showError.value = false
  
  try {
    // Configuration pour FormSubmit.co
    const formData = new FormData()
    formData.append('name', form.value.name.trim())
    formData.append('email', form.value.email.trim())
    formData.append('subject', getSubjectLabel(form.value.subject))
    formData.append('message', form.value.message.trim())
    formData.append('_subject', `Nouveau message portfolio: ${getSubjectLabel(form.value.subject)}`)
    formData.append('_replyto', form.value.email.trim())
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')
    
    const response = await fetch('https://formsubmit.co/ajax/quistevaristecredo@gmail.com', {
      method: 'POST',
      body: formData,
    })
    
    const result = await response.json()
    
    if (response.ok && result.success === 'true') {
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
      
    } else {
      throw new Error(result.message || 'Erreur lors de l\'envoi')
    }
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    errorMessage.value = 'Une erreur est survenue lors de l\'envoi. Vous pouvez aussi m\'envoyer un email directement à quistevaristecredo@gmail.com'
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 8000)
  } finally {
    isSubmitting.value = false
  }
}

// Helper pour obtenir le libellé du sujet
const getSubjectLabel = (subject) => {
  const subjects = {
    'projet': 'Nouveau projet',
    'collaboration': 'Collaboration',
    'question': 'Question générale',
    'autre': 'Autre sujet'
  }
  return subjects[subject] || 'Contact portfolio'
}

// Gestion des touches clavier
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    showSuccess.value = false
    showError.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Animations CSS personnalisées */
@keyframes pulse-slow {
  0%, 100% { 
    opacity: 0.1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.2; 
    transform: scale(1.05); 
  }
}

@keyframes float-dots {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
    opacity: 0.2;
  }
  25% { 
    transform: translateY(-20px) translateX(10px);
    opacity: 0.5;
  }
  50% { 
    transform: translateY(-40px) translateX(-5px);
    opacity: 0.2;
  }
  75% { 
    transform: translateY(-20px) translateX(-10px);
    opacity: 0.5;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-float-dots {
  animation: float-dots 8s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

/* Transition pour les messages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Amélioration des transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Support pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-float-dots,
  .animate-fade-in,
  .transition-all,
  .transform {
    animation: none !important;
    transition: none !important;
  }
  
  .hover\:scale-105:hover,
  .hover\:scale-\[1\.02\]:hover {
    transform: none !important;
  }
}

/* Personnalisation de la scrollbar */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

/* Amélioration des inputs */
input, select, textarea {
  outline: none;
}

input:focus, select:focus, textarea:focus {
  outline: none;
}
</style>