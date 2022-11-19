import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Booking from './components/Booking.vue'
import Meny from './components/Meny.vue'
import ListRestaurants from './components/ListRestaurants.vue'

// import Update from './components/Update.vue'

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Booking",
    component: Booking,
    path: "/booking",
  },
  {
    name: "Meny",
    component: Meny,
    path: "/meny",
  },
  {
    name: "ListRestaurants",
    component: ListRestaurants,
    path: "/restaurants",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
