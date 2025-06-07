<script setup>
import { Calendar, Heart, Star, Zap, Clock, Shield } from 'lucide-vue-next'

const services = [
  {
    icon: Star,
    title: 'Birth Chart Analysis',
    description: 'Deep dive into your complete astrological blueprint. Understand your personality, strengths, challenges, and life purpose through detailed planetary positions.',
    features: ['Complete natal chart interpretation', 'Personality insights', 'Life purpose guidance', 'Strengths & challenges'],
    price: 'From $89',
    duration: '60-90 minutes'
  },
  {
    icon: Heart,
    title: 'Relationship Guidance',
    description: 'Explore compatibility, understand relationship dynamics, and discover how to create deeper connections through astrological synastry.',
    features: ['Compatibility analysis', 'Relationship dynamics', 'Communication insights', 'Growth opportunities'],
    price: 'From $79',
    duration: '45-60 minutes'
  },
  {
    icon: Calendar,
    title: 'Horoscope Readings',
    description: 'Personalized monthly or yearly forecasts to help you navigate upcoming opportunities, challenges, and cosmic influences.',
    features: ['Monthly forecasts', 'Yearly overview', 'Best timing guidance', 'Opportunity insights'],
    price: 'From $49',
    duration: '30-45 minutes'
  }
]
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <h2 class="section-title serif fade-in">Sacred Services</h2>
      <p class="section-subtitle fade-in">
        Choose the cosmic guidance that resonates with your soul's journey
      </p>
      
      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card card fade-in float"
          :style="{ animationDelay: index * 0.2 + 's' }"
        >
          <div class="service-header">
            <div class="service-icon">
              <component :is="service.icon" :size="32" class="glow" />
            </div>
            <div class="service-meta">
              <div class="service-price">{{ service.price }}</div>
              <div class="service-duration">
                <Clock :size="16" />
                {{ service.duration }}
              </div>
            </div>
          </div>
          
          <h3 class="service-title serif">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          
          <div class="service-features">
            <div 
              v-for="feature in service.features" 
              :key="feature"
              class="feature-item"
            >
              <Zap :size="16" class="feature-icon" />
              {{ feature }}
            </div>
          </div>
          
          <div class="service-footer">
            <a href="#booking" class="btn btn-outline service-btn">
              Book Reading
            </a>
            <div class="trust-badge">
              <Shield :size="16" />
              100% Confidential
            </div>
          </div>
        </div>
      </div>
      
      <div class="services-note fade-in">
        <p>
          ✨ All readings include a detailed written report and 30-day email support for follow-up questions
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.service-icon {
  background: var(--gradient-starlight);
  padding: 1rem;
  border-radius: 16px;
  color: var(--midnight-blue);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-meta {
  text-align: right;
}

.service-price {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--starlight);
  margin-bottom: 0.5rem;
}

.service-duration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-light);
}

.service-description {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-features {
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.feature-icon {
  color: var(--starlight);
  flex-shrink: 0;
}

.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.service-btn {
  flex: 1;
  margin-right: 1rem;
  justify-content: center;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.services-note {
  text-align: center;
  padding: 2rem;
  background: rgba(251, 191, 36, 0.1);
  border-radius: 16px;
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.services-note p {
  color: var(--starlight);
  font-weight: 500;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .service-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .service-btn {
    margin-right: 0;
  }
  
  .trust-badge {
    justify-content: center;
  }
}
</style>