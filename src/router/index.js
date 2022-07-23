import { createRouter, createWebHistory } from "vue-router";
import BestSeller from "../views/BestSeller.vue";
import ProductsView from "../views/ProductsView.vue";

const routes = [
  {
    path: "/",
    name: "best-seller",
    component: BestSeller,
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
