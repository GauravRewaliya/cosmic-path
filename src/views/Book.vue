<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: ''
})

const isSubmitting = ref(false)

const featuredServices = [
  {
    title: 'Tarot Reading',
    icon: '🔮',
    duration: '60 minutes',
    price: '₹75',
    description: 'Gain deep insights into your life path and spiritual journey',
    popular: true
  },
  {
    title: 'Reiki Energy Healing',
    icon: '✨',
    duration: '90 minutes',
    price: '₹90',
    description: 'Experience profound relaxation and universal life force energy'
  },
  {
    title: 'Akashic Records Reading',
    icon: '📜',
    duration: '75 minutes',
    price: '₹120',
    description: 'Access your soul\'s eternal wisdom and past-life insights'
  },
  {
    title: 'Vastu Consultation',
    icon: '🏠',
    duration: '2 hours',
    price: '₹150',
    description: 'Harmonize your space with ancient architectural principles'
  }
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
]

const handleSubmit = async () => {
  if (!form.value.name || !form.value.phone || !form.value.service) {
    alert('Please fill in all required fields')
    return
  }

  isSubmitting.value = true

  // Simulate form processing
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Create WhatsApp message
  const message = `Hello! I'm interested in booking a session.

*Name:* ${form.value.name}
*Email:* ${form.value.email || 'Not provided'}
*Phone:* ${form.value.phone}
*Service:* ${form.value.service}
*Preferred Date:* ${form.value.preferredDate || 'Flexible'}
*Preferred Time:* ${form.value.preferredTime || 'Flexible'}
*Message:* ${form.value.message || 'No additional message'}

Please confirm my booking and let me know the next steps. Thank you! 🙏`

  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/918839479884?text=${encodedMessage}`
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank')
  
  isSubmitting.value = false
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  }
}
</script>

<template>
  <div class="page-container">
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="text-center py-16">
        <div class="glow-lotus mx-auto mb-8">
          <span>📅</span>
        </div>
        <h1 class="section-title">Book Your Sacred Session</h1>
        <p class="text-xl text-maroon/80 max-w-3xl mx-auto leading-relaxed">
          Take the first step toward transformation. Choose your healing journey 
          and let's create a sacred space for your spiritual growth.
        </p>
      </section>

      <!-- About Me Section -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Image -->
            <div class="order-2 lg:order-1">
              <div class="card-service h-80 flex items-center justify-center bg-gradient-to-br from-lightgold/20 to-darkgold/10">
                <img src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="Spiritual Healer" 
                     class="object-cover w-full h-full rounded-lg">
              </div>
            </div>

            <!-- About Text -->
            <div class="order-1 lg:order-2 space-y-6">
              <h2 class="text-3xl font-serif font-bold text-maroon">Meet Vanya (Shafali Soni)</h2>
              <p class="text-lg text-maroon/80 leading-relaxed">
                As a Reiki Grandmaster and intuitive healer with over 8 years of experience, 
                I've guided 500+ souls on their journey to healing and spiritual awakening.
              </p>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="text-darkgold">✨</span>
                  <span class="text-maroon/80">Certified in 8+ healing modalities</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-darkgold">🌟</span>
                  <span class="text-maroon/80">4.9/5 average client rating</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-darkgold">💜</span>
                  <span class="text-maroon/80">Compassionate, non-judgmental approach</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-darkgold">🔮</span>
                  <span class="text-maroon/80">Specializes in soul transformation</span>
                </div>
              </div>
              <p class="text-maroon/70 italic">
                "Every session is a sacred experience that blends intuition, ancient sciences, 
                and energetic precision to support your unique healing journey."
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Services -->
      <section class="py-16">
        <h2 class="section-subtitle mb-12">Choose Your Healing Experience</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div v-for="service in featuredServices" :key="service.title" 
               class="card-service text-center group relative cursor-pointer"
               @click="form.service = service.title">
            <div v-if="service.popular" 
                 class="absolute -top-2 -right-2 bg-darkgold text-maroon text-xs font-bold px-2 py-1 rounded-full">
              POPULAR
            </div>
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ service.icon }}
            </div>
            <h3 class="text-lg font-serif font-semibold text-maroon mb-2">{{ service.title }}</h3>
            <div class="flex justify-between items-center text-sm text-darkgold mb-3">
              <span>{{ service.duration }}</span>
              <span class="font-bold">{{ service.price }}</span>
            </div>
            <p class="text-maroon/70 text-sm leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
        <div class="text-center">
          <RouterLink to="/services" class="text-darkgold hover:text-maroon transition-colors">
            View all services →
          </RouterLink>
        </div>
      </section>

      <!-- Booking Form -->
      <section class="py-16">
        <div class="max-w-2xl mx-auto">
          <div class="card-service">
            <h2 class="text-2xl font-serif font-bold text-maroon mb-8 text-center">
              Book Your Session
            </h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Personal Information -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Full Name *</label>
                  <input v-model="form.name" 
                         type="text" 
                         required 
                         class="form-input"
                         placeholder="Enter your full name">
                </div>
                <div>
                  <label class="form-label">Phone Number *</label>
                  <input v-model="form.phone" 
                         type="tel" 
                         required 
                         class="form-input"
                         placeholder="Your WhatsApp number">
                </div>
              </div>

              <div>
                <label class="form-label">Email Address</label>
                <input v-model="form.email" 
                       type="email" 
                       class="form-input"
                       placeholder="your.email@example.com">
              </div>

              <!-- Service Selection -->
              <div>
                <label class="form-label">Choose Your Service *</label>
                <select v-model="form.service" 
                        required 
                        class="form-input">
                  <option value="">Select a service</option>
                  <option v-for="service in featuredServices" 
                          :key="service.title" 
                          :value="service.title">
                    {{ service.title }} - {{ service.price }}
                  </option>
                  <option value="Other">Other (please specify in message)</option>
                </select>
              </div>

              <!-- Date and Time Preferences -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Preferred Date</label>
                  <input v-model="form.preferredDate" 
                         type="date" 
                         class="form-input"
                         :min="new Date().toISOString().split('T')[0]">
                </div>
                <div>
                  <label class="form-label">Preferred Time</label>
                  <select v-model="form.preferredTime" class="form-input">
                    <option value="">Select time (flexible)</option>
                    <option v-for="time in timeSlots" :key="time" :value="time">
                      {{ time }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Additional Message -->
              <div>
                <label class="form-label">Additional Message</label>
                <textarea v-model="form.message" 
                          rows="4" 
                          class="form-input"
                          placeholder="Share any specific intentions, questions, or requirements for your session..."></textarea>
              </div>

              <!-- Important Notes -->
              <div class="bg-lightgold/30 border border-darkgold/30 rounded-lg p-4">
                <h4 class="font-semibold text-maroon mb-2">📋 Important Notes:</h4>
                <ul class="text-sm text-maroon/80 space-y-1">
                  <li>• Sessions are available both in-person and online</li>
                  <li>• Payment can be made via UPI, bank transfer, or cash</li>
                  <li>• 24-hour cancellation policy applies</li>
                  <li>• You'll receive preparation guidelines before your session</li>
                </ul>
              </div>

              <!-- Submit Button -->
              <button type="submit" 
                      :disabled="isSubmitting"
                      class="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-2">
                <span v-if="isSubmitting">Processing...</span>
                <span v-else>Continue to WhatsApp</span>
                <span v-if="!isSubmitting">📱</span>
              </button>
            </form>

            <!-- WhatsApp Info -->
            <div class="mt-6 text-center">
              <p class="text-sm text-maroon/70">
                After submitting, you'll be redirected to WhatsApp to confirm your booking 
                and receive immediate response from Vanya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="py-16">
        <h2 class="section-subtitle mb-12">Why Choose Vyana Aura?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card-service text-center">
            <div class="text-3xl mb-4">🌟</div>
            <h3 class="font-serif font-semibold text-maroon mb-3">Personalized Approach</h3>
            <p class="text-sm text-maroon/70">Every session is uniquely tailored to your specific needs and spiritual journey.</p>
          </div>
          <div class="card-service text-center">
            <div class="text-3xl mb-4">💜</div>
            <h3 class="font-serif font-semibold text-maroon mb-3">Safe Sacred Space</h3>
            <p class="text-sm text-maroon/70">Experience healing in a judgment-free environment filled with love and compassion.</p>
          </div>
          <div class="card-service text-center">
            <div class="text-3xl mb-4">✨</div>
            <h3 class="font-serif font-semibold text-maroon mb-3">Proven Results</h3>
            <p class="text-sm text-maroon/70">Join 500+ souls who have experienced profound transformation and healing.</p>
          </div>
        </div>
      </section>

      <!-- Contact Alternative -->
      <section class="py-16 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl font-serif font-bold text-maroon mb-6">
            Have Questions Before Booking?
          </h2>
          <p class="text-lg text-maroon/80 mb-8">
            Feel free to reach out if you'd like to discuss which service would be best for you 
            or if you have any questions about the healing process.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/918839479884" 
               target="_blank" 
               rel="noopener noreferrer"
               class="btn-primary inline-flex items-center space-x-2">
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
            <RouterLink to="/contact" class="btn-secondary">
              View All Contact Options
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>