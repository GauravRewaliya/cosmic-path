<template>
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
    aria-label="Contact via WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span class="absolute right-16 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Chat on WhatsApp
    </span>
  </a>
</template>

<script>
export default {
  name: 'WhatsAppButton'
}
</script>