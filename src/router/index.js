import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeaPairingView from "../views/TeaPairingView.vue";
import ProductsView from "../views/ProductsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tea-pairing",
    name: "tea-pairing",
    component: TeaPairingView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
];

// -
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
