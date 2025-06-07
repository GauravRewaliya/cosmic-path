<template>
  <section id="home" class="relative h-screen overflow-hidden">
    <StarBackground />

    <div class="absolute inset-0 flex items-center justify-center z-10">
      <div class="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1
          ref="titleRef"
          class="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 opacity-0 transition-opacity duration-1000"
        >
          Discover Your Cosmic Path
        </h1>
        <p
          ref="subtitleRef"
          class="text-xl sm:text-2xl text-purple-200 mb-8 opacity-0 transition-opacity duration-1000 delay-300"
        >
          Personalized astrology readings for clarity, love, and success
        </p>
        <a
          ref="buttonRef"
          href="#booking"
          class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 opacity-0 transition-opacity duration-1000 delay-600"
        >
          <Star class="h-5 w-5 mr-2" />
          Begin Your Journey
        </a>
      </div>
    </div>

    <!-- Subtle scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-purple-300"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Star } from 'lucide-vue-next'

import StarBackground from './StarBackground.vue'

const titleRef = ref(null)
const subtitleRef = ref(null)
const buttonRef = ref(null)

onMounted(() => {
  const title = titleRef.value
  const subtitle = subtitleRef.value
  const button = buttonRef.value

  if (title) {
    title.classList.add('animate-fade-in')
  }

  if (subtitle) {
    setTimeout(() => {
      subtitle.classList.add('animate-fade-in')
    }, 300)
  }

  if (button) {
    setTimeout(() => {
      button.classList.add('animate-fade-in')
    }, 600)
  }
})
</script>