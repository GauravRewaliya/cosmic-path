<script setup>
import { onMounted, ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import BookingSection from './components/BookingSection.vue'
import FooterSection from './components/FooterSection.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'

const fadeElements = ref([])

onMounted(() => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="app">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <BookingSection />
    <FooterSection />
    <WhatsAppFloat />
  </div>
</template>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
}
</style>