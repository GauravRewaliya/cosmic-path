<template>
  <div class="page-wrapper relative overflow-hidden">
    <!-- Sacred Background -->
    <div class="sacred-bg">
      <img src="https://via.placeholder.com/800" alt="Mandala" class="bg-image" />
    </div>

    <!-- Intro Section -->
    <section class="section intro-section">
      <h1 class="main-title">Vyana Aura</h1>
      <p class="subtitle">
        A sacred space for deep spiritual healing, soul guidance, and energy alignment.
        <br />Heal. Align. Transform.
      </p>
    </section>

    <!-- About Section -->
    <section class="section fade-up">
      <h2 class="section-heading">About Vyana Aura</h2>
      <p class="section-text">
        Founded by Vanya (Shafali Soni) — a seasoned soul guide, Tarot Reader, Reiki Grandmaster,
        Numerologist, Spiritual Healer, Vastu Consultant, Hypnosis Expert, and Akashic Record Reader —
        Vyana Aura blends ancient wisdom with intuitive insight to help individuals rediscover their power and path.
      </p>
    </section>

    <!-- Services Section -->
    <section class="section fade-up">
      <h2 class="section-heading">Our Sacred Services</h2>
      <div class="service-list">
        <div v-for="service in services" :key="service.title" class="service-card animate-fade">
          <h3 class="service-title">{{ service.icon }} {{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>
          <ul v-if="service.useCases" class="use-cases">
            <li v-for="use in service.useCases" :key="use">• {{ use }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="section fade-up">
      <h2 class="section-heading">Our Vision</h2>
      <p class="section-text">
        "Heal. Align. Transform." We believe that when you align with your inner truth, everything around you begins to transform.
        Vyana Aura is here to help you return to your natural state of wholeness through sacred tools, soulful connection, and energy mastery.
      </p>
    </section>

    <!-- Who We Serve Section -->
    <section class="section fade-up">
      <h2 class="section-heading">Who We Serve</h2>
      <ul class="section-text list-disc list-inside">
        <li>People feeling emotionally drained or energetically blocked</li>
        <li>Professionals seeking spiritual alignment or clarity</li>
        <li>Individuals on a healing or awakening journey</li>
        <li>Anyone curious about energy work, name vibrations, or soul guidance</li>
        <li>Homes and businesses needing Vastu energy balancing</li>
      </ul>
    </section>

    <!-- Contact Section -->
    <section class="section fade-up">
      <h2 class="section-heading">Connect With Us</h2>
      <p class="section-text">
        WhatsApp: <a href="https://api.whatsapp.com/send?phone=918889101484&text=hi" target="_blank" class="link-glow">+91 88891 01484</a><br />
        Email: <a href="mailto:support@vyanaaura.com" class="link-glow">support@vyanaaura.com</a>
      </p>
    </section>

    <!-- WhatsApp Button -->
    <a
      href="https://api.whatsapp.com/send?phone=918889101484&text=hi"
      class="whatsapp-float"
      target="_blank"
      aria-label="Chat on WhatsApp"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="w-10 h-10" />
    </a>
  </div>
</template>

<script setup>
const services = [
  {
    icon: '🔮',
    title: 'Tarot Reading',
    description: 'Receive intuitive messages and divine insights through personalized Tarot sessions.',
    useCases: ['Love & Relationship Guidance', 'Career Decisions', 'Spiritual Blocks', 'Future Pathway Reading']
  },
  {
    icon: '🌕',
    title: 'Reiki Healing',
    description: 'A powerful energy therapy that channels universal life force to heal imbalances.',
    useCases: ['Chakra Balancing', 'Aura Cleansing', 'Energy Shielding', 'Distance & In-Person Healing']
  },
  {
    icon: '✍️',
    title: 'Name Correction',
    description: 'Analyze and adjust names using Numerology to attract harmony, success, and alignment.',
    useCases: ['Career Growth', 'Relationship Harmony', 'Emotional Stability', 'Life Path Activation']
  },
  {
    icon: '🧱',
    title: 'Vastu Consultation',
    description: 'Rebalance home or workspace using traditional Vastu principles for peace and prosperity.',
    useCases: ['Homes', 'Offices', 'Shops', 'Online and On-Site Consultations']
  },
  {
    icon: '🌀',
    title: 'Hypnosis Therapy',
    description: 'Safe, guided sessions to break patterns and create deep inner transformation.',
    useCases: ['Fear & Phobia Removal', 'Past Life Regression', 'Self-Esteem Boost', 'Inner Child Healing']
  },
  {
    icon: '📜',
    title: 'Akashic Record Reading',
    description: 'Access the soul’s divine blueprint for karmic clarity and higher purpose.',
    useCases: ['Karmic Cleansing', 'Purpose Awakening', 'Energy Recalibration', 'Spiritual Empowerment']
  },
  {
    icon: '🌸',
    title: 'Spiritual Healing',
    description: 'Energetic scanning, lightwork, and realignment to harmonize with universal flow.',
    useCases: ['Aura Healing', 'Lightwork', 'Soul Realignment', 'Intuitive Energy Shifts']
  }
]
</script>
