<script setup lang="ts">
import { ref, computed } from 'vue'

const currentStep = ref(1)
const selectedService = ref('')
const selectedDate = ref('')
const selectedTime = ref('')
const bookingForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  experience: '',
  goals: '',
  specialRequests: ''
})

const services = [
  {
    id: 'tarot',
    name: 'Tarot Reading',
    duration: '60 minutes',
    price: '$75',
    description: 'Gain insights into your life path and spiritual journey'
  },
  {
    id: 'reiki',
    name: 'Reiki Energy Healing',
    duration: '90 minutes',
    price: '$90',
    description: 'Experience deep relaxation and energy healing'
  },
  {
    id: 'vastu',
    name: 'Vastu Consultation',
    duration: '2 hours',
    price: '$150',
    description: 'Harmonize your space with ancient principles'
  },
  {
    id: 'akashic',
    name: 'Akashic Records Reading',
    duration: '75 minutes',
    price: '$120',
    description: 'Access your soul\'s eternal wisdom'
  },
  {
    id: 'crystal',
    name: 'Crystal Healing',
    duration: '60 minutes',
    price: '$85',
    description: 'Balance your energy with crystal vibrations'
  },
  {
    id: 'coaching',
    name: 'Spiritual Life Coaching',
    duration: '90 minutes',
    price: '$110',
    description: 'Align your life with your soul\'s purpose'
  }
]

const availableDates = [
  '2024-01-15',
  '2024-01-16',
  '2024-01-17',
  '2024-01-18',
  '2024-01-19',
  '2024-01-22',
  '2024-01-23',
  '2024-01-24',
  '2024-01-25',
  '2024-01-26'
]

const timeSlots = [
  '9:00 AM',
  '10:30 AM',
  '12:00 PM',
  '1:30 PM',
  '3:00 PM',
  '4:30 PM',
  '6:00 PM'
]

const selectedServiceDetails = computed(() => {
  return services.find(service => service.id === selectedService.value)
})

const canProceedToStep2 = computed(() => {
  return selectedService.value !== ''
})

const canProceedToStep3 = computed(() => {
  return selectedDate.value !== '' && selectedTime.value !== ''
})

const canSubmitBooking = computed(() => {
  return bookingForm.value.firstName && 
         bookingForm.value.lastName && 
         bookingForm.value.email && 
         bookingForm.value.phone
})

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const submitBooking = () => {
  // Handle booking submission
  console.log('Booking submitted:', {
    service: selectedServiceDetails.value,
    date: selectedDate.value,
    time: selectedTime.value,
    form: bookingForm.value
  })
  nextStep()
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<template>
  <div class="page-container">
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="text-center py-16">
        <div class="glow-lotus mx-auto mb-8">
          <span>📅</span>
        </div>
        <h1 class="section-title">Book Your Sacred Session</h1>
        <p class="text-xl text-maroon/80 max-w-3xl mx-auto leading-relaxed">
          Begin your transformative journey with a personalized healing session. 
          Choose your service, schedule your time, and prepare for beautiful transformation.
        </p>
      </section>

      <!-- Progress Bar -->
      <section class="py-8">
        <div class="max-w-4xl mx-auto">
          <div class="flex items-center justify-between mb-8">
            <div v-for="step in 4" :key="step" 
                 :class="[
                   'flex items-center justify-center w-12 h-12 rounded-full font-semibold text-sm',
                   step <= currentStep ? 'bg-gold text-maroon' : 'bg-ivory border-2 border-gold/30 text-maroon/50'
                 ]">
              {{ step }}
            </div>
          </div>
          <div class="flex justify-between text-sm text-maroon/70">
            <span>Choose Service</span>
            <span>Select Date & Time</span>
            <span>Your Information</span>
            <span>Confirmation</span>
          </div>
        </div>
      </section>

      <!-- Step 1: Service Selection -->
      <section v-if="currentStep === 1" class="py-16">
        <div class="max-w-6xl mx-auto">
          <h2 class="section-subtitle mb-12">Choose Your Healing Service</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.id" 
                 @click="selectedService = service.id"
                 :class="[
                   'card-service cursor-pointer transition-all duration-300',
                   selectedService === service.id ? 'ring-2 ring-gold bg-gold/10' : ''
                 ]">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-serif font-semibold text-maroon">{{ service.name }}</h3>
                <div :class="[
                  'w-6 h-6 rounded-full border-2 transition-all duration-300',
                  selectedService === service.id ? 'bg-gold border-gold' : 'border-gold/30'
                ]">
                  <div v-if="selectedService === service.id" 
                       class="w-full h-full flex items-center justify-center text-maroon text-xs">
                    ✓
                  </div>
                </div>
              </div>
              <p class="text-sm text-maroon/70 mb-4">{{ service.description }}</p>
              <div class="flex justify-between text-sm">
                <span class="text-gold font-medium">{{ service.duration }}</span>
                <span class="text-maroon font-bold">{{ service.price }}</span>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <button @click="nextStep" 
                    :disabled="!canProceedToStep2"
                    :class="[
                      'btn-primary px-8 py-3',
                      !canProceedToStep2 ? 'opacity-50 cursor-not-allowed' : ''
                    ]">
              Continue to Date & Time
            </button>
          </div>
        </div>
      </section>

      <!-- Step 2: Date & Time Selection -->
      <section v-if="currentStep === 2" class="py-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="section-subtitle mb-8">Select Date & Time</h2>
          
          <div v-if="selectedServiceDetails" class="card-service mb-8 text-center">
            <h3 class="font-serif font-semibold text-maroon mb-2">{{ selectedServiceDetails.name }}</h3>
            <p class="text-sm text-maroon/70 mb-2">{{ selectedServiceDetails.description }}</p>
            <div class="flex justify-center space-x-4 text-sm">
              <span class="text-gold">{{ selectedServiceDetails.duration }}</span>
              <span class="text-maroon font-bold">{{ selectedServiceDetails.price }}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Date Selection -->
            <div>
              <h3 class="text-lg font-serif font-semibold text-maroon mb-4">Choose Date</h3>
              <div class="grid grid-cols-2 gap-3">
                <button v-for="date in availableDates" :key="date"
                        @click="selectedDate = date"
                        :class="[
                          'p-3 rounded-lg border text-sm transition-all duration-300',
                          selectedDate === date 
                            ? 'bg-gold text-maroon border-gold' 
                            : 'bg-ivory border-gold/30 text-maroon hover:border-gold'
                        ]">
                  {{ formatDate(date) }}
                </button>
              </div>
            </div>

            <!-- Time Selection -->
            <div>
              <h3 class="text-lg font-serif font-semibold text-maroon mb-4">Choose Time</h3>
              <div class="grid grid-cols-2 gap-3">
                <button v-for="time in timeSlots" :key="time"
                        @click="selectedTime = time"
                        :class="[
                          'p-3 rounded-lg border text-sm transition-all duration-300',
                          selectedTime === time 
                            ? 'bg-gold text-maroon border-gold' 
                            : 'bg-ivory border-gold/30 text-maroon hover:border-gold'
                        ]">
                  {{ time }}
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-between mt-12">
            <button @click="prevStep" class="btn-secondary px-8 py-3">
              Back to Services
            </button>
            <button @click="nextStep" 
                    :disabled="!canProceedToStep3"
                    :class="[
                      'btn-primary px-8 py-3',
                      !canProceedToStep3 ? 'opacity-50 cursor-not-allowed' : ''
                    ]">
              Continue to Information
            </button>
          </div>
        </div>
      </section>

      <!-- Step 3: Personal Information -->
      <section v-if="currentStep === 3" class="py-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="section-subtitle mb-8">Your Information</h2>
          
          <div class="card-service">
            <form @submit.prevent="submitBooking" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">First Name *</label>
                  <input v-model="bookingForm.firstName" type="text" required class="form-input">
                </div>
                <div>
                  <label class="form-label">Last Name *</label>
                  <input v-model="bookingForm.lastName" type="text" required class="form-input">
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">Email *</label>
                  <input v-model="bookingForm.email" type="email" required class="form-input">
                </div>
                <div>
                  <label class="form-label">Phone *</label>
                  <input v-model="bookingForm.phone" type="tel" required class="form-input">
                </div>
              </div>

              <div>
                <label class="form-label">Previous Experience with Healing</label>
                <select v-model="bookingForm.experience" class="form-input">
                  <option value="">Select your experience level</option>
                  <option value="none">First time</option>
                  <option value="some">Some experience</option>
                  <option value="experienced">Very experienced</option>
                </select>
              </div>

              <div>
                <label class="form-label">What are your goals for this session?</label>
                <textarea v-model="bookingForm.goals" rows="3" class="form-input" 
                         placeholder="Share what you hope to gain or heal..."></textarea>
              </div>

              <div>
                <label class="form-label">Special Requests or Health Considerations</label>
                <textarea v-model="bookingForm.specialRequests" rows="3" class="form-input" 
                         placeholder="Any physical limitations, allergies, or special needs..."></textarea>
              </div>
            </form>
          </div>

          <div class="flex justify-between mt-12">
            <button @click="prevStep" class="btn-secondary px-8 py-3">
              Back to Date & Time
            </button>
            <button @click="submitBooking" 
                    :disabled="!canSubmitBooking"
                    :class="[
                      'btn-primary px-8 py-3',
                      !canSubmitBooking ? 'opacity-50 cursor-not-allowed' : ''
                    ]">
              Review & Confirm
            </button>
          </div>
        </div>
      </section>

      <!-- Step 4: Confirmation -->
      <section v-if="currentStep === 4" class="py-16">
        <div class="max-w-4xl mx-auto text-center">
          <div class="glow-lotus mx-auto mb-8">
            <span>🎉</span>
          </div>
          <h2 class="section-title mb-8">Booking Confirmed!</h2>
          
          <div class="card-testimonial max-w-2xl mx-auto mb-8">
            <h3 class="text-xl font-serif font-semibold text-maroon mb-6">Your Sacred Session Details</h3>
            
            <div class="space-y-4 text-left">
              <div class="flex justify-between">
                <span class="text-maroon/70">Service:</span>
                <span class="font-medium text-maroon">{{ selectedServiceDetails?.name }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-maroon/70">Date:</span>
                <span class="font-medium text-maroon">{{ formatDate(selectedDate) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-maroon/70">Time:</span>
                <span class="font-medium text-maroon">{{ selectedTime }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-maroon/70">Duration:</span>
                <span class="font-medium text-maroon">{{ selectedServiceDetails?.duration }}</span>
              </div>
              <div class="flex justify-between border-t border-gold/20 pt-4">
                <span class="text-maroon font-semibold">Total Investment:</span>
                <span class="font-bold text-gold text-lg">{{ selectedServiceDetails?.price }}</span>
              </div>
            </div>
          </div>

          <div class="card-service max-w-2xl mx-auto mb-8 text-left">
            <h4 class="font-serif font-semibold text-maroon mb-4">What Happens Next?</h4>
            <ul class="space-y-3 text-sm text-maroon/80">
              <li class="flex items-start">
                <span class="text-gold mr-2">✨</span>
                You'll receive a confirmation email with preparation guidelines
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-2">✨</span>
                A reminder will be sent 24 hours before your session
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-2">✨</span>
                Payment can be made at the time of service
              </li>
              <li class="flex items-start">
                <span class="text-gold mr-2">✨</span>
                Feel free to reach out with any questions via WhatsApp
              </li>
            </ul>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/15551234567" class="btn-primary">
              Message on WhatsApp
            </a>
            <RouterLink to="/" class="btn-secondary">
              Return to Home
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>