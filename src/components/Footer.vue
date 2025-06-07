<template>
  <footer class="relative pt-16 pb-8 overflow-hidden">
    <div class="absolute inset-0 bg-indigo-950">
      <div class="absolute inset-0 opacity-20">
        <!-- Static stars in the background -->
        <div
          v-for="i in 50"
          :key="i"
          class="absolute rounded-full bg-white"
          :style="{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
          }"
        ></div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <Moon class="h-6 w-6 text-purple-300" />
            <span class="text-white font-serif text-xl font-medium">
              Celestial Guidance
            </span>
          </div>
          <p class="text-purple-200 mb-6">
            Illuminating your path through the cosmos with personalized astrological insights.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-purple-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              class="text-purple-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="#"
              class="text-purple-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-serif font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#home"
                class="text-purple-200 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="text-purple-200 hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="text-purple-200 hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                class="text-purple-200 hover:text-white transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#booking"
                class="text-purple-200 hover:text-white transition-colors"
              >
                Book a Reading
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-serif font-semibold text-white mb-4">
            Contact
          </h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <Mail class="h-5 w-5 text-purple-400 mr-3" />
              <a
                href="mailto:contact@celestialguidance.com"
                class="text-purple-200 hover:text-white transition-colors"
              >
                contact@celestialguidance.com
              </a>
            </div>
            <div class="flex items-center">
              <Phone class="h-5 w-5 text-purple-400 mr-3" />
              <a
                href="tel:+1234567890"
                class="text-purple-200 hover:text-white transition-colors"
              >
                +123 456 7890
              </a>
            </div>
            <div class="mt-4">
              <div class="inline-flex items-center px-4 py-2 bg-indigo-800/50 rounded-full">
                <Sun class="h-4 w-4 text-yellow-300 mr-2" />
                <span class="text-sm text-white">
                  Available for readings 7 days a week
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-indigo-800 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-purple-300 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} Celestial Guidance. All rights reserved.
        </p>
        <div class="flex items-center">
          <div class="inline-flex items-center px-4 py-2 bg-indigo-800/50 rounded-full">
            <Star className="h-4 w-4 text-purple-400 mr-2" />
            <p className="text-purple-300 text-sm">
              Crafted with cosmic energy
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>