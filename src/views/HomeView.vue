<template>
  <main class="main-layout">
    <!-- Header -->
    <header class="header">
      <h1 class="site-title">Vyana Aura</h1>
      <p class="site-subtitle">Heal. Align. Transform.</p>
    </header>

    <!-- About Section -->
    <section class="section">
      <h2 class="section-title">✨ About Vyana Aura</h2>
      <p class="section-text">
        Vyana Aura is a sacred space for deep spiritual healing, soul guidance, and energy alignment.
        Founded by Vanya (Shafali Soni), a seasoned Tarot Reader, Reiki Grandmaster, Numerologist, Spiritual Healer, and more,
        it offers a compassionate and transformative space to heal, align, and rise.
      </p>
    </section>

    <!-- Services Section -->
    <section class="section">
      <h2 class="section-title">🌼 Services Offered</h2>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <h3 class="service-title">{{ service.icon }} {{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul v-if="service.uses" class="service-uses">
            <li v-for="(use, i) in service.uses" :key="i">• {{ use }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="section">
      <h2 class="section-title">🌟 Vision & Motto</h2>
      <p class="section-text italic text-lg">
        “Heal. Align. Transform.”  
      </p>
      <p class="section-text">
        When you align with your inner truth, everything around you transforms. Vyana Aura is here to guide you back to your natural state of wholeness through sacred tools, soulful connection, and energy mastery.
      </p>
    </section>

    <!-- Contact Section -->
    <section class="section">
      <h2 class="section-title">📩 Contact</h2>
      <p class="section-text">
        WhatsApp / Call: +91-XXXXXXXXXX  
        <br />
        Email: vyanaaura@example.com  
        <br />
        Location: India (Online & On-site Sessions)
      </p>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-text">© 2025 Vyana Aura – Designed with spirit & soul</p>
    </footer>
  </main>
</template>

<script setup>
const services = [
  {
    icon: "🔮",
    title: "Tarot Reading",
    description: "Personalized tarot sessions for love, career, and soul guidance.",
    uses: ["Love & Relationship", "Career Decisions", "Spiritual Blocks", "Future Pathway"],
  },
  {
    icon: "🌕",
    title: "Reiki Healing",
    description: "Channeling universal energy for emotional and spiritual healing.",
    uses: ["Chakra Balancing", "Aura Cleansing", "Energy Shielding", "Distance Healing"],
  },
  {
    icon: "✍️",
    title: "Name Correction",
    description: "Numerology-based correction to align your name with cosmic vibrations.",
    uses: ["Career Growth", "Life Harmony", "Emotional Balance", "Success Activation"],
  },
  {
    icon: "🧱",
    title: "Vastu Consultation",
    description: "Harmonizing spaces through ancient Vastu energy principles.",
    uses: ["Homes", "Offices", "Shops", "Online/Offline Consultations"],
  },
  {
    icon: "🌀",
    title: "Hypnosis Therapy",
    description: "Access the subconscious to break patterns & heal trauma.",
    uses: ["Fear Release", "Past Life Regression", "Inner Child Healing", "Self-Worth"],
  },
  {
    icon: "📜",
    title: "Akashic Record Reading",
    description: "Explore your soul’s blueprint, past lives, and karmic story.",
    uses: ["Karmic Cleansing", "Soul Awakening", "Purpose Discovery", "Energy Recalibration"],
  },
  {
    icon: "🌸",
    title: "Spiritual Healing",
    description: "Realign with your soul through aura healing and intuitive lightwork.",
    uses: ["Aura Scanning", "Light Activation", "Energy Shifts", "Soul Realignment"],
  },
];
</script>
