<script setup lang="ts">
import { RouterLink } from 'vue-router'

const topServices = [
  {
    title: 'Tarot Reading',
    description: 'Gain clarity and insight into your life\'s path through ancient tarot wisdom.',
    icon: '🔮',
    price: 'From $75'
  },
  {
    title: 'Reiki Healing',
    description: 'Experience deep relaxation and energy healing through gentle touch therapy.',
    icon: '✨',
    price: 'From $90'
  },
  {
    title: 'Vastu Consultation',
    description: 'Harmonize your living space with ancient architectural wisdom.',
    icon: '🏠',
    price: 'From $150'
  },
  {
    title: 'Akashic Records',
    description: 'Access your soul\'s journey and past-life insights for healing.',
    icon: '📜',
    price: 'From $120'
  }
]
</script>

<template>
  <div class="page-container">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 lg:py-32">
      <div class="content-wrapper text-center">
        <div class="max-w-4xl mx-auto">
          <!-- Floating spiritual elements -->
          <div class="absolute top-10 left-10 spiritual-icon">🌙</div>
          <div class="absolute top-20 right-10 spiritual-icon">⭐</div>
          <div class="absolute bottom-10 left-20 spiritual-icon">🪷</div>
          
          <h1 class="hero-text mb-8">
            Vyana Aura
          </h1>
          <p class="text-xl md:text-2xl text-ivory/90 mb-4 font-light">
            Mystic Bloom
          </p>
          <p class="text-lg md:text-xl text-ivory/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Awaken your inner light and discover your true path through ancient wisdom, 
            modern healing practices, and sacred energy work.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <RouterLink to="/book" class="btn-primary text-lg px-8 py-4">
              Begin Your Journey
            </RouterLink>
            <RouterLink to="/services" class="btn-secondary text-lg px-8 py-4">
              Explore Services
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-darkgold/10 to-golden/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-golden/10 to-darkgold/10 rounded-full blur-3xl"></div>
    </section>

    <!-- Introduction Section -->
    <section class="py-16">
      <div class="content-wrapper">
        <div class="max-w-4xl mx-auto text-center">
          <div class="glow-lotus mx-auto mb-8">
            <span>🧘‍♀️</span>
          </div>
          <h2 class="section-title">Welcome to Your Spiritual Sanctuary</h2>
          <p class="text-lg text-maroon/80 leading-relaxed max-w-3xl mx-auto mb-8">
            At Vyana Aura, we believe that every soul carries infinite wisdom and healing potential. 
            Our sacred space offers transformative experiences that bridge ancient spiritual practices 
            with modern healing modalities, guiding you toward profound self-discovery and inner peace.
          </p>
          <p class="text-md text-maroon/70 max-w-2xl mx-auto">
            Whether you're seeking clarity, healing, or spiritual growth, 
            our personalized approach honors your unique journey and sacred path.
          </p>
        </div>
      </div>
    </section>

    <!-- Top Services Section -->
    <section class="py-16">
      <div class="content-wrapper">
        <h2 class="section-title mb-16">Featured Healing Services</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div v-for="service in topServices" :key="service.title" class="card-service text-center group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ service.icon }}
            </div>
            <h3 class="text-xl font-serif font-semibold text-maroon mb-3">{{ service.title }}</h3>
            <p class="text-maroon/70 text-sm mb-4 leading-relaxed">{{ service.description }}</p>
            <p class="text-darkgold font-semibold text-sm">{{ service.price }}</p>
          </div>
        </div>

        <div class="text-center">
          <RouterLink to="/services" class="btn-primary inline-flex items-center space-x-2">
            <span>View All Services</span>
            <span>→</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-maroon/20 to-golden/20"></div>
      <div class="content-wrapper relative">
        <div class="max-w-3xl mx-auto text-center">
          <div class="flex justify-center space-x-4 mb-8">
            <div class="glow-lotus">🌟</div>
            <div class="glow-lotus">🪷</div>
            <div class="glow-lotus">🌙</div>
          </div>
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-maroon mb-6">
            Ready to Transform Your Life?
          </h2>
          <p class="text-xl text-maroon/80 mb-8 leading-relaxed">
            Take the first step toward healing, clarity, and spiritual awakening. 
            Your journey to inner peace begins with a single intention.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/book" class="btn-primary text-lg px-8 py-4">
              Book Your Session
            </RouterLink>
            <RouterLink to="/contact" class="btn-secondary text-lg px-8 py-4">
              Ask a Question
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>