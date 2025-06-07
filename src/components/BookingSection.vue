<script setup>
import { MessageCircle, Calendar, Clock, Shield, Star } from 'lucide-vue-next'

const whatsappNumber = '+1234567890' // Replace with actual WhatsApp number
const whatsappMessage = encodeURIComponent('Hi Luna! I\'d like to book an astrology reading. Could you please share your availability?')
</script>

<template>
  <section id="booking" class="section booking-section">
    <div class="container">
      <div class="booking-content">
        <div class="booking-text fade-in">
          <h2 class="section-title serif">Begin Your Cosmic Journey</h2>
          <p class="section-subtitle">
            Ready to unlock the wisdom of the stars? Let's connect and discover what the universe has in store for you.
          </p>
          
          <div class="booking-features">
            <div class="booking-feature">
              <Calendar :size="24" class="feature-icon" />
              <div>
                <h4>Flexible Scheduling</h4>
                <p>Available 7 days a week with morning, afternoon, and evening slots</p>
              </div>
            </div>
            
            <div class="booking-feature">
              <Clock :size="24" class="feature-icon" />
              <div>
                <h4>Quick Response</h4>
                <p>I typically respond within 2-4 hours to schedule your reading</p>
              </div>
            </div>
            
            <div class="booking-feature">
              <Shield :size="24" class="feature-icon" />
              <div>
                <h4>Safe & Secure</h4>
                <p>All conversations and readings are completely confidential</p>
              </div>
            </div>
          </div>
          
          <div class="booking-process">
            <h3 class="process-title">How It Works</h3>
            <div class="process-steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Contact Me</h4>
                  <p>Send me a message via WhatsApp to discuss your needs</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Schedule</h4>
                  <p>We'll find a perfect time that works for both of us</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Prepare</h4>
                  <p>I'll send you a brief form to gather your birth details</p>
                </div>
              </div>
              
              <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4>Connect</h4>
                  <p>We'll have your reading via video call or phone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="booking-card card fade-in">
          <div class="card-header">
            <Star :size="32" class="card-icon glow" />
            <h3 class="card-title serif">Book Your Reading</h3>
            <p class="card-subtitle">Connect with me on WhatsApp to get started</p>
          </div>
          
          <div class="booking-options">
            <div class="booking-option">
              <h4>Quick Questions?</h4>
              <p>Not sure which reading is right for you? Let's chat!</p>
            </div>
            
            <div class="booking-option">
              <h4>Ready to Book?</h4>
              <p>Know exactly what you want? Let's schedule your session!</p>
            </div>
          </div>
          
          <a 
            :href="`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary booking-btn"
          >
            <MessageCircle :size="20" />
            Message on WhatsApp
          </a>
          
          <div class="booking-note">
            <p>
              💫 First-time clients receive a complimentary 15-minute consultation to ensure we're a perfect cosmic match!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.booking-section {
  background: rgba(0, 0, 0, 0.3);
}

.booking-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.booking-features {
  margin: 2rem 0;
}

.booking-feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-icon {
  color: var(--starlight);
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.booking-feature h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.booking-feature p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.process-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-light);
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  background: var(--gradient-starlight);
  color: var(--midnight-blue);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-light);
}

.step-content p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.booking-card {
  position: sticky;
  top: 2rem;
  text-align: center;
}

.card-header {
  margin-bottom: 2rem;
}

.card-icon {
  color: var(--starlight);
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.card-subtitle {
  color: var(--text-muted);
}

.booking-options {
  margin: 2rem 0;
  text-align: left;
}

.booking-option {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.booking-option h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.booking-option p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.booking-btn {
  width: 100%;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  padding: 1.2rem 2rem;
}

.booking-note {
  padding: 1rem;
  background: rgba(251, 191, 36, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.booking-note p {
  color: var(--starlight);
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .booking-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .booking-card {
    position: static;
  }
  
  .process-steps {
    gap: 1.5rem;
  }
}
</style>