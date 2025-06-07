<script setup>
import { Star, Quote } from 'lucide-vue-next'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, NY',
    rating: 5,
    text: 'Luna\'s birth chart reading was absolutely transformative. She helped me understand patterns in my life that I never noticed before. Her insights about my career path were spot-on, and I finally feel aligned with my purpose.',
    service: 'Birth Chart Analysis'
  },
  {
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'The relationship reading Luna provided for my partner and me was incredible. She explained our compatibility in ways that made so much sense. We now understand each other better and our relationship has never been stronger.',
    service: 'Relationship Guidance'
  },
  {
    name: 'Emma Rodriguez',
    location: 'Austin, TX',
    rating: 5,
    text: 'I was going through a difficult transition in my life when I found Luna. Her compassionate guidance and accurate predictions helped me navigate through uncertainty. I can\'t recommend her enough!',
    service: 'Horoscope Reading'
  },
  {
    name: 'David Thompson',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Luna has a gift for making complex astrological concepts easy to understand. Her reading gave me clarity about my strengths and helped me make important life decisions with confidence.',
    service: 'Birth Chart Analysis'
  },
  {
    name: 'Jessica Park',
    location: 'Miami, FL',
    rating: 5,
    text: 'What sets Luna apart is her genuine care for her clients. She took the time to answer all my questions and provided ongoing support. Her insights have been life-changing.',
    service: 'Relationship Guidance'
  },
  {
    name: 'Robert Johnson',
    location: 'Chicago, IL',
    rating: 5,
    text: 'I was skeptical about astrology until I had a reading with Luna. Her accuracy and depth of knowledge completely changed my perspective. The timing guidance she provided was incredibly valuable.',
    service: 'Horoscope Reading'
  }
]
</script>

<template>
  <section class="section testimonials-section">
    <div class="container">
      <h2 class="section-title serif fade-in">Cosmic Testimonials</h2>
      <p class="section-subtitle fade-in">
        Hear from souls who've found clarity and transformation through the stars
      </p>
      
      <div class="testimonials-grid">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="testimonial-card card fade-in"
          :style="{ animationDelay: index * 0.1 + 's' }"
        >
          <div class="testimonial-header">
            <Quote :size="24" class="quote-icon" />
            <div class="rating">
              <Star 
                v-for="star in testimonial.rating" 
                :key="star"
                :size="16" 
                class="star-filled"
              />
            </div>
          </div>
          
          <p class="testimonial-text">{{ testimonial.text }}</p>
          
          <div class="testimonial-footer">
            <div class="client-info">
              <div class="client-name">{{ testimonial.name }}</div>
              <div class="client-location">{{ testimonial.location }}</div>
            </div>
            <div class="service-badge">{{ testimonial.service }}</div>
          </div>
        </div>
      </div>
      
      <div class="testimonials-stats fade-in">
        <div class="stat">
          <div class="stat-number">4.9/5</div>
          <div class="stat-label">Average Rating</div>
        </div>
        <div class="stat">
          <div class="stat-number">98%</div>
          <div class="stat-label">Client Satisfaction</div>
        </div>
        <div class="stat">
          <div class="stat-number">85%</div>
          <div class="stat-label">Return Clients</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background: rgba(0, 0, 0, 0.2);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.testimonial-card {
  position: relative;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.quote-icon {
  color: var(--starlight);
  opacity: 0.7;
}

.rating {
  display: flex;
  gap: 0.25rem;
}

.star-filled {
  color: var(--starlight);
  fill: currentColor;
}

.testimonial-text {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.client-name {
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 0.25rem;
}

.client-location {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.service-badge {
  background: var(--gradient-starlight);
  color: var(--midnight-blue);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.testimonials-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--starlight);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .testimonials-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>