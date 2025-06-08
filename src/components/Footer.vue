<script setup lang="ts">
</script>

<template>
  <footer class="bg-gradient-to-r from-maroon to-maroon/90 text-ivory py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start space-x-3 mb-4">
            <img src="https://placehold.co/600x400" alt="Vyana Aura Logo" class="w-12 h-8 object-cover rounded-lg shadow-md">
            <div>
              <h3 class="text-xl font-serif font-bold">Vyana Aura</h3>
              <p class="text-sm text-golden">Mystic Bloom</p>
            </div>
          </div>
          <p class="text-ivory/80 text-sm leading-relaxed">
            Awakening your inner light through ancient wisdom and modern healing practices.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-center">
          <h4 class="text-lg font-semibold mb-4 text-golden">Quick Links</h4>
          <div class="space-y-2">
            <RouterLink to="/services" class="block text-ivory/80 hover:text-golden transition-colors">Services</RouterLink>
            <RouterLink to="/about" class="block text-ivory/80 hover:text-golden transition-colors">About</RouterLink>
            <RouterLink to="/testimonials" class="block text-ivory/80 hover:text-golden transition-colors">Testimonials</RouterLink>
            <RouterLink to="/book" class="block text-ivory/80 hover:text-golden transition-colors">Book Session</RouterLink>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="text-center md:text-right">
          <h4 class="text-lg font-semibold mb-4 text-golden">Connect</h4>
          <div class="space-y-2 text-sm">
            <p class="text-ivory/80">📱 WhatsApp: +1 (555) 123-4567</p>
            <p class="text-ivory/80">✉️ hello@vyanaaura.com</p>
            <div class="flex justify-center md:justify-end space-x-4 mt-4">
              <a href="#" class="text-ivory/80 hover:text-golden transition-colors">
                <span class="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" class="text-ivory/80 hover:text-golden transition-colors">
                <span class="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" class="text-ivory/80 hover:text-golden transition-colors">
                <span class="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-golden/20 mt-8 pt-8 text-center">
        <p class="text-ivory/60 text-sm">
          © {{ new Date().getFullYear() }} Vyana Aura. All rights reserved. | Designed with 💜 for spiritual healing
        </p>
      </div>
    </div>
  </footer>
</template>