<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    name: 'Radhika Sharma',
    service: 'Tarot Reading',
    rating: 5,
    text: 'Shafali\'s reading completely shifted my perspective on life. The insights I received about my soul\'s purpose were profound and have guided me toward making positive changes. I feel more aligned than ever before.',
    location: 'Indore, India'
  },
]

const currentIndex = ref(0)
let slideInterval: any = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>

<template>
  <div class="page-container">
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="text-center py-16">
        <div class="glow-lotus mx-auto mb-8">
          <span>💕</span>
        </div>
        <h1 class="section-title">What Our Souls Say</h1>
        <p class="text-xl text-maroon/80 max-w-3xl mx-auto leading-relaxed">
          Heartfelt testimonials from beautiful souls who have experienced 
          profound healing and transformation on their spiritual journey
        </p>
      </section>

      <!-- Featured Testimonial Slider -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto">
          <div class="relative overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out" 
                 :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div v-for="(testimonial, index) in testimonials" :key="index" 
                   class="w-full flex-shrink-0">
                <div class="card-testimonial mx-4">
                  <div class="text-center mb-6">
                    <div class="flex justify-center mb-4">
                      <span v-for="star in testimonial.rating" :key="star" class="text-gold text-xl">⭐</span>
                    </div>
                    <blockquote class="text-lg text-maroon/80 italic leading-relaxed mb-6">
                      "{{ testimonial.text }}"
                    </blockquote>
                    <div>
                      <h4 class="font-serif font-semibold text-maroon text-lg">{{ testimonial.name }}</h4>
                      <p class="text-gold text-sm font-medium">{{ testimonial.service }}</p>
                      <p class="text-maroon/60 text-sm">{{ testimonial.location }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation arrows -->
            <button @click="prevSlide" 
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gold/20 hover:bg-gold/30 rounded-full p-3 transition-all duration-300">
              <span class="text-maroon text-xl">←</span>
            </button>
            <button @click="nextSlide" 
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gold/20 hover:bg-gold/30 rounded-full p-3 transition-all duration-300">
              <span class="text-maroon text-xl">→</span>
            </button>
          </div>

          <!-- Dots indicator -->
          <div class="flex justify-center space-x-2 mt-8">
            <button v-for="(_, index) in testimonials" :key="index"
                    @click="goToSlide(index)"
                    :class="[
                      'w-3 h-3 rounded-full transition-all duration-300',
                      currentIndex === index ? 'bg-gold' : 'bg-gold/30'
                    ]">
            </button>
          </div>
        </div>
      </section>

      <!-- All Testimonials Grid -->
      <section class="py-16">
        <h2 class="section-subtitle mb-12">All Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="`grid-${index}`" 
               class="card-service">
            <div class="flex justify-center mb-4">
              <span v-for="star in testimonial.rating" :key="star" class="text-gold">⭐</span>
            </div>
            <blockquote class="text-sm text-maroon/80 italic mb-4 leading-relaxed">
              "{{ testimonial.text }}"
            </blockquote>
            <div class="text-center">
              <h4 class="font-serif font-semibold text-maroon">{{ testimonial.name }}</h4>
              <p class="text-gold text-xs font-medium">{{ testimonial.service }}</p>
              <p class="text-maroon/60 text-xs">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="card-service">
            <div class="text-3xl font-bold text-gold mb-2">500+</div>
            <p class="text-maroon font-medium">Souls Healed</p>
          </div>
          <div class="card-service">
            <div class="text-3xl font-bold text-gold mb-2">8+</div>
            <p class="text-maroon font-medium">Years Experience</p>
          </div>
          <div class="card-service">
            <div class="text-3xl font-bold text-gold mb-2">4.9</div>
            <p class="text-maroon font-medium">Average Rating</p>
          </div>
          <div class="card-service">
            <div class="text-3xl font-bold text-gold mb-2">98%</div>
            <p class="text-maroon font-medium">Client Satisfaction</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center py-16">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-serif font-bold text-maroon mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p class="text-lg text-maroon/80 mb-8 leading-relaxed">
            Join hundreds of souls who have experienced profound transformation and healing. 
            Your journey toward spiritual awakening and inner peace begins with a single step.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/book" class="btn-primary text-lg px-8 py-4">
              Start Your Journey
            </RouterLink>
            <RouterLink to="/services" class="btn-secondary text-lg px-8 py-4">
              Explore Services
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>