<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-indigo-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center">
          <a href="#"
             class="flex items-center space-x-2"
          >
            <Moon class="h-8 w-8 text-purple-300" />
            <span class="text-white font-serif text-xl font-medium">
              Celestial Guidance
            </span>
          </a>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <a
              href="#home"
              class="text-purple-200 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              class="text-purple-200 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#services"
              class="text-purple-200 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#testimonials"
              class="text-purple-200 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              Testimonials
            </a>
            <a
              href="#booking"
              class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium flex items-center"
            >
              <Star class="h-4 w-4 mr-2" />
              Book Reading
            </a>
          </div>
        </div>
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-white hover:text-purple-300 transition-colors"
          >
            <template v-if="isMenuOpen">
              <X class="h-6 w-6" />
            </template>
            <template v-else>
              <Menu class="h-6 w-6" />
            </template>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-indigo-950/95 backdrop-blur-md shadow-xl">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#home"
          class="text-purple-200 hover:text-white block px-3 py-2 text-base font-medium"
          @click="closeMenu"
        >
          Home
        </a>
        <a
          href="#about"
          class="text-purple-200 hover:text-white block px-3 py-2 text-base font-medium"
          @click="closeMenu"
        >
          About
        </a>
        <a
          href="#services"
          class="text-purple-200 hover:text-white block px-3 py-2 text-base font-medium"
          @click="closeMenu"
        >
          Services
        </a>
        <a
          href="#testimonials"
          class="text-purple-200 hover:text-white block px-3 py-2 text-base font-medium"
          @click="closeMenu"
        >
          Testimonials
        </a>
        <a
          href="#booking"
          class="bg-purple-500 hover:bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4 mx-3 text-center"
          @click="closeMenu"
        >
          Book Reading
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Menu, X, Moon, Star } from 'lucide-vue-next' 

const isMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>