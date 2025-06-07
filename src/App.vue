<script setup>
import { onMounted } from 'vue'
import Layout from './components/Layout.vue'
import HeroSection from './components/HeroSection.vue'
// import AboutSection from './components/AboutSection.vue'
// import ServicesSection from './components/ServicesSection.vue'
// import TestimonialsSection from './components/TestimonialsSection.vue'
// import BookingSection from './components/BookingSection.vue'

onMounted(() => {
  document.title = 'Celestial Guidance | Astrology & Cosmic Readings'
})
</script>

<template>
  <Layout class="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
    <HeroSection />
    <!-- <AboutSection /> -->
    <!-- <ServicesSection /> -->
    <!-- <TestimonialsSection /> -->
    <!-- <BookingSection /> -->
  </Layout>
</template>

