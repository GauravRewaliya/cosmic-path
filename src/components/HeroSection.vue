<script setup>
import { Star, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <section class="hero">
    <div class="hero-background">
      <div class="cosmic-orb orb-1"></div>
      <div class="cosmic-orb orb-2"></div>
      <div class="cosmic-orb orb-3"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <div class="hero-icon">
          <Star :size="48" class="glow pulse" />
        </div>
        
        <h1 class="hero-title serif">
          Discover Your Cosmic Path
        </h1>
        
        <p class="hero-subtitle">
          Personalized astrology readings for clarity, love, and success.
          <br>
          Unlock the wisdom of the stars and transform your life's journey.
        </p>
        
        <div class="hero-buttons">
          <a href="#booking" class="btn btn-primary">
            <Sparkles :size="20" />
            Book Your Reading
          </a>
          <a href="#about" class="btn btn-outline">
            Learn More
          </a>
        </div>
        
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">500+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div class="stat">
            <div class="stat-number">5+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat">
            <div class="stat-number">1000+</div>
            <div class="stat-label">Readings Done</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.cosmic-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0.6;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  top: 10%;
  right: 10%;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
  bottom: 20%;
  left: 15%;
  animation: float 6s ease-in-out infinite reverse;
}

.orb-3 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%);
  top: 50%;
  left: 5%;
  animation: float 10s ease-in-out infinite;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-icon {
  margin-bottom: 2rem;
  color: var(--starlight);
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--gradient-starlight);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: var(--text-muted);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 500px;
  margin: 0 auto;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  color: var(--starlight);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .cosmic-orb {
    opacity: 0.3;
  }
}
</style>