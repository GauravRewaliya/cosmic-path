<script setup lang="ts">
const journey = [
  {
    year: '2015',
    title: 'Spiritual Awakening',
    description: 'My journey began with a profound spiritual awakening that opened my heart to energy healing.'
  },
  {
    year: '2017',
    title: 'Reiki Mastery',
    description: 'Completed Reiki Master certification and began practicing energy healing professionally.'
  },
  {
    year: '2019',
    title: 'Tarot & Intuitive Reading',
    description: 'Developed deep intuitive abilities and began offering tarot and psychic readings.'
  },
  {
    year: '2021',
    title: 'Akashic Records Training',
    description: 'Learned to access the Akashic Records, providing soul-level healing and guidance.'
  },
  {
    year: '2023',
    title: 'Vyana Aura Founded',
    description: 'Established Vyana Aura to create a sacred space for transformation and healing.'
  }
]

const certifications = [
  'Usui Reiki Master Teacher',
  'Certified Akashic Records Reader',
  'Advanced Tarot & Oracle Card Reader',
  'Vastu Shastra Consultant',
  'Crystal Healing Practitioner',
  'Chakra Balancing Specialist'
]
</script>

<template>
  <div class="page-container">
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="text-center py-16">
        <div class="glow-lotus mx-auto mb-8">
          <span>🙏</span>
        </div>
        <h1 class="section-title">About the Healer</h1>
        <p class="text-xl text-maroon/80 max-w-3xl mx-auto leading-relaxed">
          A journey of spiritual awakening, healing, and service to the divine light within us all
        </p>
      </section>

      <!-- About Content -->
      <section class="py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image Placeholder -->
          <div class="order-2 lg:order-1">
            <div class="card-service h-96 flex items-center justify-center bg-gradient-to-br from-lightgold/20 to-darkgold/10">
              <div class="text-center">
                <div class="text-6xl mb-4">🧘‍♀️</div>
                <p class="text-maroon/60">Sacred healing portrait</p>
              </div>
            </div>
          </div>

          <!-- About Text -->
          <div class="order-1 lg:order-2 space-y-6">
            <h2 class="text-3xl font-serif font-bold text-maroon">Namaste, I'm Sarah</h2>
            <p class="text-lg text-maroon/80 leading-relaxed">
              My spiritual journey began over a decade ago when I experienced a profound awakening 
              that forever changed my understanding of life, energy, and healing. This sacred 
              transformation led me to dedicate my life to helping others discover their own 
              inner wisdom and healing potential.
            </p>
            <p class="text-lg text-maroon/80 leading-relaxed">
              Through years of study, practice, and deep spiritual work, I've developed a unique 
              approach that combines ancient wisdom traditions with modern healing modalities. 
              My mission is to create a safe, sacred space where souls can heal, grow, and 
              remember their divine essence.
            </p>
            <p class="text-lg text-maroon/80 leading-relaxed">
              Every session is guided by love, intuition, and the highest good of all involved. 
              I believe that healing happens in the space between souls, where authentic 
              connection and divine love can work their magic.
            </p>
          </div>
        </div>
      </section>

      <!-- Journey Timeline -->
      <section class="py-16">
        <h2 class="section-title mb-16">My Healing Journey</h2>
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div v-for="(milestone, index) in journey" :key="milestone.year" 
                 class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div class="flex-shrink-0">
                <div class="glow-lotus text-sm font-bold">
                  {{ milestone.year }}
                </div>
              </div>
              <div class="card-service flex-1">
                <h3 class="text-xl font-serif font-semibold text-maroon mb-2">{{ milestone.title }}</h3>
                <p class="text-maroon/70">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section class="py-16">
        <h2 class="section-title mb-16">Certifications & Training</h2>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="cert in certifications" :key="cert" class="card-service text-center">
              <div class="text-2xl mb-3">✨</div>
              <p class="text-maroon font-medium">{{ cert }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Philosophy -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="section-title mb-8">My Healing Philosophy</h2>
          <div class="card-testimonial">
            <p class="text-xl text-maroon/80 leading-relaxed italic mb-6">
              "Every soul carries within it the seeds of healing, wisdom, and divine love. 
              My role is simply to hold sacred space and provide gentle guidance as you 
              reconnect with your own inner healer and remember who you truly are."
            </p>
            <div class="flex justify-center space-x-2">
              <span class="text-darkgold text-xl">🌟</span>
              <span class="text-darkgold text-xl">🪷</span>
              <span class="text-darkgold text-xl">🌟</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="text-center py-16">
        <h2 class="text-3xl font-serif font-bold text-maroon mb-6">Ready to Begin Your Healing Journey?</h2>
        <p class="text-lg text-maroon/80 mb-8 max-w-2xl mx-auto">
          I would be honored to support you on your path to healing and spiritual growth.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/book" class="btn-primary">Schedule a Session</RouterLink>
          <RouterLink to="/contact" class="btn-secondary">Connect with Me</RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>