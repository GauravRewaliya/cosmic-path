<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="bg-gradient-to-r from-maroon to-maroon/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-3">
          <img src="https://placehold.co/600x400" alt="Vyana Aura Logo" class="w-12 h-8 object-cover rounded-lg shadow-md">
          <div>
            <h1 class="text-2xl font-serif font-bold text-ivory">Vyana Aura</h1>
            <p class="text-xs text-golden">Mystic Bloom</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
          <RouterLink to="/services" class="nav-link">Services</RouterLink>
          <RouterLink to="/testimonials" class="nav-link">Testimonials</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          <RouterLink to="/book" class="btn-primary">Book Session</RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-ivory hover:text-golden transition-colors">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="md:hidden bg-maroon/95 backdrop-blur-md">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink to="/" class="block px-3 py-2 nav-link" @click="toggleMenu">Home</RouterLink>
        <RouterLink to="/about" class="block px-3 py-2 nav-link" @click="toggleMenu">About</RouterLink>
        <RouterLink to="/services" class="block px-3 py-2 nav-link" @click="toggleMenu">Services</RouterLink>
        <RouterLink to="/testimonials" class="block px-3 py-2 nav-link" @click="toggleMenu">Testimonials</RouterLink>
        <RouterLink to="/contact" class="block px-3 py-2 nav-link" @click="toggleMenu">Contact</RouterLink>
        <RouterLink to="/book" class="block mx-3 mt-4 btn-primary text-center" @click="toggleMenu">Book Session</RouterLink>
      </div>
    </div>
  </nav>
</template>