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
                      required
                      class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="block text-white/90 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <!-- Sujet -->
                <div>
                  <label for="subject" class="block text-white/90 text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-colors"
                  >
                    <option value="" disabled>Sélectionnez un sujet</option>
                    <option value="projet">Nouveau projet</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="question">Question générale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <!-- Message -->
                <div>
                  <label for="message" class="block text-white/90 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-colors resize-none"
                    placeholder="Décrivez votre projet ou posez votre question..."
                  ></textarea>
                </div>
                
                <!-- Bouton d'envoi -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
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
                
                <!-- Message de succès -->
                <div 
                  v-if="showSuccess"
                  class="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  <Icon name="heroicons:check-circle" class="w-4 h-4 inline mr-2" />
                  Message envoyé avec succès !
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
    type: 'phone',
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
  { label: 'Projets réalisés', value: '15+' },
  { label: 'Satisfaction client', value: '100%' }
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

// Gestion de l'envoi du formulaire
const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500))
    
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
    }, 4000)
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Styles simples et épurés */
</style>