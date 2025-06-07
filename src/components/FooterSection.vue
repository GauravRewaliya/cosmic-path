<script setup>
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer">
    <div class="footer-stars">
      <div class="star" v-for="i in 20" :key="i"></div>
    </div>
    
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <h3 class="brand-title serif">Luna Celestine</h3>
            <p class="brand-subtitle">Astrologer & Spiritual Guide</p>
            <p class="brand-description">
              Guiding souls through cosmic wisdom to unlock their highest potential 
              and create a life aligned with the stars.
            </p>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Birth Chart Analysis</a></li>
                <li><a href="#services">Relationship Guidance</a></li>
                <li><a href="#services">Horoscope Readings</a></li>
                <li><a href="#booking">Book a Reading</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h4>About</h4>
              <ul>
                <li><a href="#about">My Story</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#booking">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-contact">
            <h4>Connect With Me</h4>
            <div class="contact-info">
              <div class="contact-item">
                <Mail :size="18" />
                <span>luna@celestialinsights.com</span>
              </div>
              <div class="contact-item">
                <Phone :size="18" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="contact-item">
                <MapPin :size="18" />
                <span>Available Worldwide</span>
              </div>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Instagram">
                <Instagram :size="20" />
              </a>
              <a href="#" class="social-link" aria-label="Facebook">
                <Facebook :size="20" />
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <Twitter :size="20" />
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-bottom-content">
            <p class="copyright">
              © 2024 Luna Celestine. All rights reserved. Made with 
              <Heart :size="16" class="heart-icon" /> 
              and cosmic energy.
            </p>
            <p class="disclaimer">
              Astrology readings are for entertainment and guidance purposes. 
              Individual results may vary.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0f0f23 0%, #1e1b4b 50%, #312e81 100%);
  position: relative;
  overflow: hidden;
  padding: 4rem 0 2rem;
}

.footer-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--starlight);
  border-radius: 50%;
  opacity: 0.6;
  animation: twinkle 3s ease-in-out infinite;
}

.star:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.star:nth-child(2) { top: 20%; left: 80%; animation-delay: 0.5s; }
.star:nth-child(3) { top: 30%; left: 30%; animation-delay: 1s; }
.star:nth-child(4) { top: 40%; left: 70%; animation-delay: 1.5s; }
.star:nth-child(5) { top: 50%; left: 20%; animation-delay: 2s; }
.star:nth-child(6) { top: 60%; left: 90%; animation-delay: 2.5s; }
.star:nth-child(7) { top: 70%; left: 40%; animation-delay: 0.3s; }
.star:nth-child(8) { top: 80%; left: 60%; animation-delay: 0.8s; }
.star:nth-child(9) { top: 15%; left: 50%; animation-delay: 1.3s; }
.star:nth-child(10) { top: 25%; left: 15%; animation-delay: 1.8s; }
.star:nth-child(11) { top: 35%; left: 85%; animation-delay: 0.2s; }
.star:nth-child(12) { top: 45%; left: 25%; animation-delay: 0.7s; }
.star:nth-child(13) { top: 55%; left: 75%; animation-delay: 1.2s; }
.star:nth-child(14) { top: 65%; left: 35%; animation-delay: 1.7s; }
.star:nth-child(15) { top: 75%; left: 80%; animation-delay: 0.4s; }
.star:nth-child(16) { top: 85%; left: 10%; animation-delay: 0.9s; }
.star:nth-child(17) { top: 5%; left: 65%; animation-delay: 1.4s; }
.star:nth-child(18) { top: 95%; left: 45%; animation-delay: 1.9s; }
.star:nth-child(19) { top: 12%; left: 95%; animation-delay: 0.6s; }
.star:nth-child(20) { top: 88%; left: 5%; animation-delay: 1.1s; }

.footer-content {
  position: relative;
  z-index: 1;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.brand-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background: var(--gradient-starlight);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-subtitle {
  color: var(--text-muted);
  margin-bottom: 1rem;
  font-style: italic;
}

.brand-description {
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 300px;
}

.link-group h4 {
  color: var(--text-light);
  font-weight: 600;
  margin-bottom: 1rem;
}

.link-group ul {
  list-style: none;
}

.link-group li {
  margin-bottom: 0.5rem;
}

.link-group a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--starlight);
}

.footer-contact h4 {
  color: var(--text-light);
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-info {
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--text-muted);
}

.contact-item svg {
  color: var(--starlight);
  flex-shrink: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-purple);
  color: var(--text-light);
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin-bottom: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.heart-icon {
  color: #ef4444;
  animation: pulse 2s ease-in-out infinite;
}

.disclaimer {
  color: var(--text-muted);
  font-size: 0.8rem;
  opacity: 0.7;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .brand-description {
    max-width: none;
  }
}
</style>