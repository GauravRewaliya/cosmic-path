<script setup lang="ts">
const journey = [
  {
    year: '2015',
    title: 'Spiritual Awakening',
    description: 'My journey began with a profound spiritual awakening that opened my heart to energy healing and intuitive work.'
  },
  {
    year: '2017',
    title: 'Reiki Grandmaster',
    description: 'Achieved Reiki Grandmaster certification and began offering professional healing services.'
  },
  {
    year: '2019',
    title: 'Intuitive Mastery',
    description: 'Deepened my practice in Tarot, Numerology, and Name Correction, expanding my spiritual services.'
  },
  {
    year: '2021',
    title: 'Advanced Healing Modalities',
    description: 'Mastered Hypnosis, Akashic Records reading, and advanced spiritual healing techniques.'
  },
  {
    year: '2023',
    title: 'Vyana Aura Founded',
    description: 'Established Vyana Aura as a sacred space for soul transformation and spiritual awakening.'
  }
]

const certifications = [
  'Reiki Grandmaster',
  'Certified Akashic Records Reader',
  'Professional Tarot Reader',
  'Vastu Shastra Consultant',
  'Numerology Expert',
  'Name Correction Specialist',
  'Hypnosis Expert',
  'Spiritual Healer'
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
          A journey of spiritual awakening, healing, and serving as a bridge between the physical and spiritual realms
        </p>
      </section>

      <!-- About Content -->
      <section class="py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image Placeholder -->
          <div class="order-2 lg:order-1">
            <div class="card-service h-96 flex items-center justify-center bg-gradient-to-br from-lightgold/20 to-darkgold/10">
              <!-- <img src="@/assets/images/lotus-meditation.jpg" alt="Lotus Meditation" class="object-cover w-full h-full rounded-lg"> -->
               <img src="https://placehold.co/600x400" alt="Vyana Aura Logo">
            </div>
          </div>

          <!-- About Text -->
          <div class="order-1 lg:order-2 space-y-6">
            <h2 class="text-3xl font-serif font-bold text-maroon">Namaste, I'm Vanya</h2>
            <p class="text-lg text-maroon/80 leading-relaxed">
              Born as Shafali Soni, my spiritual path led me to the name Vanya, reflecting my calling to serve as a bridge 
              between the seen and unseen realms. As a soul guide, healer, and lightworker, I'm here to help you remember 
              who you truly are.
            </p>
            <p class="text-lg text-maroon/80 leading-relaxed">
              Through years of experience and intuitive mastery, I've developed expertise in multiple healing modalities 
              including Tarot Reading, Reiki, Numerology, Name Correction, Vastu Consultation, Hypnosis, and Akashic 
              Record Reading. Each of these practices has been integral to my own healing and awakening journey.
            </p>
            <p class="text-lg text-maroon/80 leading-relaxed">
              Whether you're carrying past karmic weight, feeling stuck in your present, or seeking intuitive guidance, 
              I welcome you with warmth, compassion, and zero judgment. Every session is a sacred experience that blends 
              intuition, ancient sciences, and energetic precision.
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
        <h2 class="section-title mb-16">Certifications & Expertise</h2>
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
              "At Vyana Aura, you will not just receive answers — you will feel seen, held, and energetically transformed. 
              Each soul is unique, and I honor that with a personalized, heart-centered approach that blends intuition, 
              ancient sciences, and energetic precision."
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