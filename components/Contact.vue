<template>
  <section class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
    <div class="relative z-10 min-h-screen">
      <!-- Header -->
      <div class="text-center pt-12 pb-8 px-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
          <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span class="text-white/90 text-sm">Disponible</span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Contactez-moi
        </h1>
        
        <p class="text-lg text-white/80 max-w-2xl mx-auto">
          Discutons de votre prochain projet ensemble
        </p>
      </div>

      <!-- Contenu principal -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div class="grid lg:grid-cols-3 gap-8">
          
          <!-- Informations de contact -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Coordonnées -->
            <div class="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 class="text-xl font-bold text-white mb-6">
                Mes coordonnées
              </h3>
              
              <div class="space-y-4">
                <div 
                  v-for="contact in contactInfo" 
                  :key="contact.type"
                  class="flex items-center gap-3"
                >
                  <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon :name="contact.icon" class="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p class="text-white/60 text-sm">{{ contact.label }}</p>
                    <p class="text-white font-medium">{{ contact.value }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 class="text-xl font-bold text-white mb-4">
                Mes réseaux
              </h3>
              
              <div class="grid grid-cols-2 gap-3">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Icon :name="social.icon" class="w-4 h-4 text-white" />
                  <span class="text-white text-sm">{{ social.name }}</span>
                </a>
              </div>
            </div>

            <!-- Statistiques -->
            <div class="bg-white/5 rounded-xl p-6 border border-white/10">
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                  <div class="text-2xl font-bold text-white mb-1">{{ stats[0].value }}</div>
                  <div class="text-white/60 text-sm">Projets</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-green-400 mb-1">{{ stats[1].value }}</div>
                  <div class="text-white/60 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="lg:col-span-2">
            <div class="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 class="text-xl font-bold text-white mb-6">
                Envoyez un message
              </h3>
              
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Nom et Email -->
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="block text-white/90 text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      name="name"
                      class="w-full px-4 py-3 rounded-lg bg-white/10 border transition-colors"
                      :class="errors.name ? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/30' : 'border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30'"
                      placeholder="Votre nom"
                      @blur="validateField('name')"
                      @input="clearError('name')"
                    />
                    <div v-if="errors.name" class="text-red-400 text-xs mt-1">
                      {{ errors.name }}
                    </div>
                  </div>
                  
                  <div>
                    <label for="email" class="block text-white/90 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      name="email"
                      class="w-full px-4 py-3 rounded-lg bg-white/10 border transition-colors"
                      :class="errors.email ? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/30' : 'border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30'"
                      placeholder="votre@email.com"
                      @blur="validateField('email')"
                      @input="clearError('email')"
                    />
                    <div v-if="errors.email" class="text-red-400 text-xs mt-1">
                      {{ errors.email }}
                    </div>
                  </div>
                </div>

                <!-- Sujet -->
                <div>
                  <label for="subject" class="block text-white/90 text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <div class="relative">
                    <select
                      id="subject"
                      v-model="form.subject"
                      name="subject"
                      class="w-full px-4 py-3 rounded-lg bg-white/10 border transition-colors appearance-none pr-12"
                      :class="errors.subject ? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/30' : 'border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30'"
                      @change="clearError('subject')"
                    >
                      <option value="" disabled selected class="text-slate-600">Sélectionnez un sujet</option>
                      <option value="projet" class="text-slate-900">Nouveau projet</option>
                      <option value="collaboration" class="text-slate-900">Collaboration</option>
                      <option value="question" class="text-slate-900">Question générale</option>
                      <option value="autre" class="text-slate-900">Autre</option>
                    </select>
                    <!-- Flèche dégradée plus stylisée -->
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <div class="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
                        <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div v-if="errors.subject" class="text-red-400 text-xs mt-1">
                    {{ errors.subject }}
                  </div>
              </div>
                <!-- Message -->
                <div>
                  <label for="message" class="block text-white/90 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    name="message"
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg bg-white/10 border transition-colors resize-none"
                    :class="errors.message ? 'border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/30' : 'border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30'"
                    placeholder="Décrivez votre projet ou posez votre question..."
                    @blur="validateField('message')"
                    @input="clearError('message')"
                  ></textarea>
                  <div v-if="errors.message" class="text-red-400 text-xs mt-1">
                      {{ errors.message }}
                    </div>
                </div>
                
                <!-- Bouton d'envoi -->
                <button
                  type="submit"
                  :disabled="isSubmitting || !isFormValid"
                  class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting">Envoyer le message</span>
                  <span v-else>Envoi en cours...</span>
                  <Icon 
                    v-if="!isSubmitting"
                    name="heroicons:paper-airplane" 
                    class="w-4 h-4" 
                  />
                  <div v-else class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                </button>
                
                <!-- Messages de statut -->
                <div 
                  v-if="showSuccess"
                  class="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  <Icon name="heroicons:check-circle" class="w-4 h-4 inline mr-2" />
                  Message envoyé avec succès !
                </div>
                
                <div 
                  v-if="showError"
                  class="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  <Icon name="heroicons:exclamation-triangle" class="w-4 h-4 inline mr-2" />
                  {{ errorMessage }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Données de contact
const contactInfo = [
  {
    type: 'email',
    label: 'Email',
    value: 'quistevaristecredo@gmail.com',
    icon: 'heroicons:envelope'
  },
  {
    type: 'phone',
    label: 'Téléphone',
    value: '+229 01 95 30 59 68',
    icon: 'heroicons:phone'
  },
  {
    type: 'whatsApp',
    label: 'WhatsApp',
    value: '+229 95 30 59 68',
    icon: 'heroicons:phone'
  },
  {
    type: 'location',
    label: 'Localisation',
    value: 'Cotonou, Benin',
    icon: 'heroicons:map-pin'
  }
]

// Liens sociaux
const socialLinks = [
  { 
    name: 'GitHub', 
    icon: 'simple-icons:github', 
    url: 'https://github.com/DrecQ' 
  },
  { 
    name: 'LinkedIn', 
    icon: 'simple-icons:linkedin', 
    url: 'https://www.linkedin.com/in/evariste-credo-quist-44b177386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
  },
  { 
    name: 'X', 
    icon: 'simple-icons:x', 
    url: 'https://x.com/drec_quist?t=sswvVIyxnMCfbKjZU2lalA&s=09' 
  },
  { 
    name: 'Facebook', 
    icon: 'simple-icons:facebook', 
    url: 'https://www.facebook.com/share/1BwNiNUamG/' 
  }
]

// Statistiques
const stats = [
  { label: 'Projets réalisés', value: '...' },
  { label: 'Satisfaction client', value: '100%' }
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
  return Object.keys(errors.value).length === 0 && 
         form.value.name && 
         form.value.email && 
         form.value.subject && 
         form.value.message &&
         form.value.message.length >= 10
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

// Gestion de l'envoi du formulaire - VERSION CORRIGÉE
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
    'autre': 'Autre'
  }
  return subjects[subject] || 'Contact portfolio'
}
</script>

<style scoped>
/* Style pour la flèche du select */
.bg-select-arrow {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2393a5fb' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
}

/* Pour cacher la flèche par défaut sur certains navigateurs */
select::-ms-expand {
  display: none;
}
</style>