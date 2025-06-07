<script setup>
import { Heart, Award, Users } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="about-content">
        <div class="about-image fade-in">
          <div class="image-container">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
              alt="Professional Astrologer"
              class="astrologer-photo"
            />
            <div class="image-glow"></div>
          </div>
        </div>
        
        <div class="about-text fade-in">
          <h2 class="section-title serif">About Luna Celestine</h2>
          <p class="section-subtitle">
            Guiding souls through cosmic wisdom for over 5 years
          </p>
          
          <div class="about-description">
            <p>
              Welcome, beautiful soul. I'm Luna Celestine, a certified astrologer and spiritual guide 
              dedicated to helping you unlock the profound wisdom written in the stars. My journey 
              into astrology began during a transformative period in my own life, where I discovered 
              the incredible power of cosmic guidance.
            </p>
            
            <p>
              With over 5 years of experience and 1000+ readings completed, I specialize in 
              birth chart analysis, relationship compatibility, and life path guidance. My approach 
              combines traditional astrological wisdom with modern psychological insights to provide 
              you with practical, empowering guidance.
            </p>
            
            <p>
              Every reading is a sacred conversation between you, me, and the cosmos. I believe 
              that astrology is not about predicting a fixed future, but about understanding 
              your unique cosmic blueprint and empowering you to make conscious choices aligned 
              with your highest potential.
            </p>
          </div>
          
          <div class="about-features">
            <div class="feature">
              <Heart :size="24" class="feature-icon" />
              <div>
                <h4>Compassionate Guidance</h4>
                <p>Every reading is delivered with love, empathy, and deep understanding</p>
              </div>
            </div>
            
            <div class="feature">
              <Award :size="24" class="feature-icon" />
              <div>
                <h4>Certified Expertise</h4>
                <p>Professionally trained with certifications in Western and Vedic astrology</p>
              </div>
            </div>
            
            <div class="feature">
              <Users :size="24" class="feature-icon" />
              <div>
                <h4>Trusted by Many</h4>
                <p>Over 500 satisfied clients who've found clarity and direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
}

.image-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.astrologer-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(99, 102, 241, 0.3);
  position: relative;
  z-index: 2;
}

.image-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: var(--gradient-starlight);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
  z-index: 1;
  animation: pulse 3s ease-in-out infinite;
}

.about-description {
  margin: 2rem 0;
}

.about-description p {
  margin-bottom: 1.5rem;
  color: var(--text-muted);
  line-height: 1.8;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.feature:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.feature-icon {
  color: var(--starlight);
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.feature h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.feature p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .image-container {
    width: 250px;
    height: 250px;
  }
  
  .about-features {
    text-align: left;
  }
}
</style>