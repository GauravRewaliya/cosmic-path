<script setup lang="ts">
const services = [
  {
    title: 'Tarot Reading',
    icon: '🔮',
    duration: '60 minutes',
    price: '₹75',
    description: 'Gain deep insights into your life path, relationships, and spiritual journey through the ancient wisdom of tarot cards.',
    includes: [
      'In-depth card reading',
      'Spiritual guidance',
      'Written summary',
      'Follow-up support'
    ]
  },
  {
    title: 'Reiki Energy Healing',
    icon: '✨',
    duration: '90 minutes',
    price: '₹90',
    description: 'Experience profound relaxation and healing as universal life force energy flows through gentle touch and intention.',
    includes: [
      'Full body energy healing',
      'Chakra balancing',
      'Aura cleansing',
      'Integration guidance'
    ]
  },
  {
    title: 'Vastu Consultation',
    icon: '🏠',
    duration: '2 hours',
    price: '₹150',
    description: 'Harmonize your living or working space with ancient architectural principles to enhance prosperity and well-being.',
    includes: [
      'Space analysis',
      'Remedial suggestions',
      'Energy enhancement tips',
      'Follow-up consultation'
    ]
  },
  {
    title: 'Akashic Records Reading',
    icon: '📜',
    duration: '75 minutes',
    price: '₹120',
    description: 'Access your soul\'s eternal wisdom and past-life insights for deep healing and spiritual understanding.',
    includes: [
      'Soul records access',
      'Past-life insights',
      'Karmic healing',
      'Divine guidance'
    ]
  },
  {
    title: 'Crystal Healing Session',
    icon: '💎',
    duration: '60 minutes',
    price: '₹85',
    description: 'Harness the powerful vibrations of crystals to balance your energy centers and promote healing.',
    includes: [
      'Crystal grid therapy',
      'Chakra stone placement',
      'Energy cleansing',
      'Crystal recommendations'
    ]
  },
  {
    title: 'Spiritual Life Coaching',
    icon: '🌟',
    duration: '90 minutes',
    price: '₹110',
    description: 'Receive personalized guidance to align your life with your soul\'s purpose and highest potential.',
    includes: [
      'Soul purpose discovery',
      'Goal alignment',
      'Spiritual practices',
      'Ongoing support'
    ]
  },
  {
    title: 'Past Life Regression',
    icon: '🌀',
    duration: '2 hours',
    price: '₹160',
    description: 'Journey into your past lives to understand current patterns and release limiting beliefs.',
    includes: [
      'Guided regression',
      'Past-life exploration',
      'Healing integration',
      'Recording provided'
    ]
  },
  {
    title: 'Chakra Balancing',
    icon: '🌈',
    duration: '75 minutes',
    price: '₹95',
    description: 'Restore harmony to your energy centers through sound, color, and energy healing techniques.',
    includes: [
      'Chakra assessment',
      'Sound healing',
      'Color therapy',
      'Balancing meditation'
    ]
  }
]

const packs = [
  {
    title: 'Spiritual Awakening pack',
    sessions: '3 Sessions',
    price: '₹285',
    originalPrice: '₹315',
    description: 'Perfect for beginners seeking spiritual guidance and healing.',
    includes: ['Tarot Reading', 'Reiki Healing', 'Chakra Balancing']
  },
  {
    title: 'Deep Healing Journey',
    sessions: '5 Sessions',
    price: '₹450',
    originalPrice: '₹540',
    description: 'Comprehensive healing for profound transformation.',
    includes: ['Akashic Records', 'Past Life Regression', 'Reiki', 'Crystal Healing', 'Spiritual Coaching']
  },
  {
    title: 'Monthly Spiritual Support',
    sessions: 'Monthly',
    price: '₹200/month',
    originalPrice: '₹240',
    description: 'Ongoing spiritual guidance and energy maintenance.',
    includes: ['Monthly Tarot Reading', 'Reiki Session', 'Email Support', 'Priority Booking']
  }
]
</script>

<template>
  <div class="page-container">
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="text-center py-16">
        <div class="glow-lotus mx-auto mb-8">
          <span>🔮</span>
        </div>
        <h1 class="section-title">Healing Services</h1>
        <p class="text-xl text-maroon/80 max-w-3xl mx-auto leading-relaxed">
          Discover transformative healing modalities designed to awaken your inner wisdom 
          and guide you toward spiritual growth and inner peace
        </p>
      </section>

      <!-- Individual Services -->
      <section class="py-16">
        <h2 class="section-subtitle mb-12">Individual Sessions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="card-service group">
            <div class="text-center mb-6">
              <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {{ service.icon }}
              </div>
              <h3 class="text-xl font-serif font-semibold text-maroon mb-2">{{ service.title }}</h3>
              <div class="flex justify-between items-center text-sm text-gold mb-4">
                <span>{{ service.duration }}</span>
                <span class="font-bold text-lg">{{ service.price }}</span>
              </div>
            </div>
            
            <p class="text-maroon/70 text-sm mb-6 leading-relaxed">{{ service.description }}</p>
            
            <div class="space-y-2 mb-6">
              <h4 class="font-semibold text-maroon text-sm">Includes:</h4>
              <ul class="space-y-1">
                <li v-for="item in service.includes" :key="item" class="text-xs text-maroon/70 flex items-center">
                  <span class="text-gold mr-2">✨</span>
                  {{ item }}
                </li>
              </ul>
            </div>
            
            <RouterLink to="/book" class="btn-primary w-full text-center block">
              Book Session
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- Service packs -->
      <section class="py-16">
        <h2 class="section-subtitle mb-12">Healing packs</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="pack in packs" :key="pack.title" class="card-service text-center relative group">
            <div v-if="pack.originalPrice" class="absolute top-4 right-4 bg-gold text-maroon text-xs font-bold px-2 py-1 rounded-full">
              SAVE {{ Math.round((parseInt(pack.originalPrice.replace('₹', '')) - parseInt(pack.price.replace('₹', '').replace('/month', ''))) / parseInt(pack.originalPrice.replace('₹', '')) * 100) }}%
            </div>
            
            <div class="text-3xl mb-4">💫</div>
            <h3 class="text-xl font-serif font-semibold text-maroon mb-2">{{ pack.title }}</h3>
            <div class="mb-4">
              <span class="text-2xl font-bold text-gold">{{ pack.price }}</span>
              <span v-if="pack.originalPrice" class="text-sm text-maroon/50 line-through ml-2">{{ pack.originalPrice }}</span>
            </div>
            <p class="text-sm text-maroon/70 mb-6">{{ pack.description }}</p>
            
            <div class="space-y-2 mb-6">
              <h4 class="font-semibold text-maroon text-sm">pack Includes:</h4>
              <ul class="space-y-1">
                <li v-for="item in pack.includes" :key="item" class="text-xs text-maroon/70 flex items-center justify-center">
                  <span class="text-gold mr-2">⭐</span>
                  {{ item }}
                </li>
              </ul>
            </div>
            
            <RouterLink to="/book" class="btn-primary w-full text-center block">
              Choose pack
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="py-16">
        <h2 class="section-subtitle mb-12">How Your Healing Journey Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="glow-lotus mx-auto mb-4">
              <span>1️⃣</span>
            </div>
            <h3 class="font-serif font-semibold text-maroon mb-2">Book</h3>
            <p class="text-sm text-maroon/70">Choose your service and schedule a convenient time</p>
          </div>
          <div class="text-center">
            <div class="glow-lotus mx-auto mb-4">
              <span>2️⃣</span>
            </div>
            <h3 class="font-serif font-semibold text-maroon mb-2">Prepare</h3>
            <p class="text-sm text-maroon/70">Receive preparation guidelines and set your intentions</p>
          </div>
          <div class="text-center">
            <div class="glow-lotus mx-auto mb-4">
              <span>3️⃣</span>
            </div>
            <h3 class="font-serif font-semibold text-maroon mb-2">Experience</h3>
            <p class="text-sm text-maroon/70">Enjoy your transformative healing session</p>
          </div>
          <div class="text-center">
            <div class="glow-lotus mx-auto mb-4">
              <span>4️⃣</span>
            </div>
            <h3 class="font-serif font-semibold text-maroon mb-2">Integrate</h3>
            <p class="text-sm text-maroon/70">Receive follow-up guidance and integration support</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="text-center py-16">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-serif font-bold text-maroon mb-6">Ready to Begin Your Transformation?</h2>
          <p class="text-lg text-maroon/80 mb-8 leading-relaxed">
            Choose the healing modality that resonates with your soul and take the first step 
            toward profound transformation and spiritual awakening.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/book" class="btn-primary text-lg px-8 py-4">
              Book Your Session
            </RouterLink>
            <RouterLink to="/contact" class="btn-secondary text-lg px-8 py-4">
              Ask Questions
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>