<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  preferredContact: 'email'
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  isSubmitting.value = false
  isSubmitted.value = true
  
  // Reset form after success
  setTimeout(() => {
    isSubmitted.value = false
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'email'
    }
  }, 3000)
}

const contactMethods = [
  {
    icon: '📱',
    title: 'WhatsApp',
    value: '+1 (555) 123-4567',
    action: 'Message Now',
    link: 'https://wa.me/15551234567'
  },
  {
    icon: '✉️',
    title: 'Email',
    value: 'hello@vyanaaura.com',
    action: 'Send Email',
    link: 'mailto:hello@vyanaaura.com'
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Sacred Healing Studio\nLos Angeles, CA',
    action: 'Get Directions',
    link: '#'
  },
  {
    icon: '🕐',
    title: 'Hours',
    value: 'Mon-Fri: 9AM-7PM\nSat-Sun: 10AM-5PM',
    action: 'View Calendar',
    link: '/book'
  }
]

const faqs = [
  {
    question: 'How do I prepare for my first session?',
    answer: 'Come with an open heart and mind. Wear comfortable clothing, avoid alcohol 24 hours before, and set a clear intention for your healing. I\'ll send detailed preparation guidelines upon booking.'
  },
  {
    question: 'Are sessions available online?',
    answer: 'Yes! Many of our services including Tarot readings, Akashic Records, and spiritual coaching are available via video call. Energy healing works beautifully across distance.'
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'We\'ll begin with a brief consultation to understand your needs and intentions. Each session is tailored to you, creating a safe and sacred space for healing and transformation.'
  },
  {
    question: 'How often should I book sessions?',
    answer: 'This varies by individual and healing goals. Some clients benefit from weekly sessions initially, while others prefer monthly maintenance. We\'ll discuss what feels right for your journey.'
  }
]
</script>

<template>
  <div class="page-container">
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="text-center py-16">
        <div class="glow-lotus mx-auto mb-8">
          <span>💌</span>
        </div>
        <h1 class="section-title">Connect with Us</h1>
        <p class="text-xl text-maroon/80 max-w-3xl mx-auto leading-relaxed">
          Ready to begin your healing journey? Reach out and let's create something 
          beautiful together. Every message is answered with love and care.
        </p>
      </section>

      <!-- Contact Methods -->
      <section class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="method in contactMethods" :key="method.title" class="card-service text-center group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ method.icon }}
            </div>
            <h3 class="font-serif font-semibold text-maroon mb-2">{{ method.title }}</h3>
            <p class="text-sm text-maroon/70 mb-4 whitespace-pre-line">{{ method.value }}</p>
            <a :href="method.link" 
               :class="method.link.startsWith('http') ? 'btn-primary' : 'btn-secondary'"
               class="text-sm px-4 py-2 inline-block">
              {{ method.action }}
            </a>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <!-- Info & Hours -->
            <div class="space-y-8">
              <!-- Quick Info -->
              <div class="card-service">
                <h3 class="text-xl font-serif font-semibold text-maroon mb-4">Sacred Healing Studio</h3>
                <div class="space-y-3 text-sm text-maroon/80">
                  <p class="flex items-center">
                    <span class="text-gold mr-3">📍</span>
                    123 Healing Way, Los Angeles, CA 90210
                  </p>
                  <p class="flex items-center">
                    <span class="text-gold mr-3">🕐</span>
                    Monday - Friday: 9:00 AM - 7:00 PM
                  </p>
                  <p class="flex items-center">
                    <span class="text-gold mr-3">🕐</span>
                    Saturday - Sunday: 10:00 AM - 5:00 PM
                  </p>
                  <p class="flex items-center">
                    <span class="text-gold mr-3">📱</span>
                    Emergency sessions available by appointment
                  </p>
                </div>
              </div>

              <!-- Response Time -->
              <div class="card-service">
                <h3 class="text-xl font-serif font-semibold text-maroon mb-4">Response Times</h3>
                <div class="space-y-2 text-sm text-maroon/80">
                  <p><span class="text-gold">✉️ Email:</span> Within 24 hours</p>
                  <p><span class="text-gold">📱 WhatsApp:</span> Within 4 hours</p>
                  <p><span class="text-gold">📞 Phone:</span> Same day callback</p>
                  <p><span class="text-gold">🚨 Urgent:</span> Text for immediate response</p>
                </div>
              </div>

              <!-- Emergency Contact -->
              <div class="card-service bg-gradient-to-br from-gold/10 to-lavender/10">
                <h3 class="text-xl font-serif font-semibold text-maroon mb-4">Need Immediate Support?</h3>
                <p class="text-sm text-maroon/80 mb-4">
                  If you're experiencing a spiritual emergency or urgent need for guidance, 
                  please reach out immediately via WhatsApp or call our emergency line.
                </p>
                <a href="https://wa.me/15551234567" class="btn-primary inline-block">
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16">
        <h2 class="section-subtitle mb-12">Frequently Asked Questions</h2>
        <div class="max-w-4xl mx-auto space-y-6">
          <div v-for="faq in faqs" :key="faq.question" class="card-service">
            <h3 class="font-serif font-semibold text-maroon mb-3">{{ faq.question }}</h3>
            <p class="text-maroon/80 text-sm leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </section>

      <!-- Map Placeholder -->
      <section class="py-16">
        <h2 class="section-subtitle mb-12">Find Our Sacred Space</h2>
        <div class="max-w-4xl mx-auto">
          <div class="card-service h-64 flex items-center justify-center bg-gradient-to-br from-lavender/20 to-gold/10">
            <div class="text-center">
              <div class="text-4xl mb-4">🗺️</div>
              <p class="text-maroon/60">Interactive map coming soon</p>
              <p class="text-sm text-maroon/50">123 Healing Way, Los Angeles, CA 90210</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>