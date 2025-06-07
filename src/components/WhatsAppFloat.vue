<script setup>
import { MessageCircle, X } from 'lucide-vue-next'
import { ref } from 'vue'

const whatsappNumber = '+1234567890' // Replace with actual WhatsApp number
const whatsappMessage = encodeURIComponent('Hi Luna! I found your website and I\'m interested in booking an astrology reading.')
const isHovered = ref(false)
</script>

<template>
  <div class="whatsapp-container">
    <!-- Hover tooltip -->
    <div 
      class="whatsapp-tooltip"
      :class="{ 'visible': isHovered }"
    >
      <div class="tooltip-content">
        <div class="tooltip-header">
          <div class="avatar">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" 
              alt="Luna Celestine"
              class="avatar-img"
            />
            <div class="online-indicator"></div>
          </div>
          <div class="contact-info">
            <div class="name">Luna Celestine</div>
            <div class="status">✨ Online now</div>
          </div>
        </div>
        <div class="tooltip-message">
          <p>Hi there! 👋</p>
          <p>Ready to discover what the stars have in store for you? Let's chat about your cosmic journey!</p>
        </div>
        <div class="tooltip-actions">
          <a 
            :href="`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`"
            target="_blank"
            rel="noopener noreferrer"
            class="chat-btn"
          >
            <MessageCircle :size="16" />
            Start Chat
          </a>
        </div>
      </div>
      <div class="tooltip-arrow"></div>
    </div>

    <!-- Main WhatsApp button -->
    <div 
      class="whatsapp-float"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <a 
        :href="`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-link"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle :size="24" />
        <div class="pulse-ring"></div>
        <div class="pulse-ring-2"></div>
      </a>
      
      <!-- Notification badge -->
      <div class="notification-badge">
        <span>1</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.whatsapp-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.whatsapp-float {
  position: relative;
  cursor: pointer;
}

.whatsapp-link {
  background: linear-gradient(135deg, #25d366 0%, #20ba5a 100%);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 20px rgba(37, 211, 102, 0.4),
    0 0 0 0 rgba(37, 211, 102, 0.7);
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.whatsapp-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.whatsapp-float:hover .whatsapp-link {
  transform: scale(1.1);
  box-shadow: 
    0 6px 25px rgba(37, 211, 102, 0.6),
    0 0 0 10px rgba(37, 211, 102, 0.1),
    0 0 0 20px rgba(37, 211, 102, 0.05);
}

.whatsapp-float:hover .whatsapp-link::before {
  left: 100%;
}

.pulse-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid #25d366;
  border-radius: 50%;
  animation: pulse-ring 2s ease-out infinite;
  opacity: 0;
}

.pulse-ring-2 {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  border: 1px solid #25d366;
  border-radius: 50%;
  animation: pulse-ring 2s ease-out infinite 1s;
  opacity: 0;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: linear-gradient(135deg, #ff4757 0%, #ff3742 100%);
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
  animation: bounce 2s ease-in-out infinite;
}

.whatsapp-tooltip {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 16px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.95);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1001;
}

.whatsapp-tooltip.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.tooltip-content {
  padding: 1.5rem;
  color: #333;
}

.tooltip-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.avatar {
  position: relative;
}

.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #25d366;
}

.online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  background: #25d366;
  border: 2px solid white;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.contact-info .name {
  font-weight: 600;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.25rem;
}

.contact-info .status {
  font-size: 0.85rem;
  color: #25d366;
  font-weight: 500;
}

.tooltip-message {
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.tooltip-message p {
  margin-bottom: 0.5rem;
  color: #555;
}

.tooltip-message p:first-child {
  font-weight: 600;
  color: #333;
}

.chat-btn {
  background: linear-gradient(135deg, #25d366 0%, #20ba5a 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.chat-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

.tooltip-arrow {
  position: absolute;
  bottom: -8px;
  right: 30px;
  width: 16px;
  height: 16px;
  background: white;
  transform: rotate(45deg);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0.7; 
  }
}

@media (max-width: 768px) {
  .whatsapp-container {
    bottom: 1rem;
    right: 1rem;
  }
  
  .whatsapp-link {
    width: 50px;
    height: 50px;
  }
  
  .whatsapp-tooltip {
    width: 280px;
    bottom: 70px;
    right: -10px;
  }
  
  .notification-badge {
    width: 20px;
    height: 20px;
    font-size: 11px;
  }
}
</style>