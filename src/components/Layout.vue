<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950">
    <Navbar />
    <main><slot /></main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import WhatsAppButton from './WhatsAppButton.vue'

export default {
  components: {
    Navbar,
    Footer,
    WhatsAppButton
  }
}
</script>