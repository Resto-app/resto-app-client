import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import MenyView from './components/MenyView.vue'
import ListRestaurants from './components/ListRestaurants.vue'

const routes = [
  {
    name: "HomeView",
    component: HomeView,
    path: "/",
  },
  {
    name: "MenyView",
    component: MenyView,
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
