import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue'
import Book from '../views/Book.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: Testimonials
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }
  ]
})

export default router
