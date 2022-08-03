import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeaPairingView from "../views/TeaPairingView.vue";
import ProductsView from "../views/ProductsView.vue";
import OrdersView from "../views/OrdersView.vue";
import OrderSubmit from "../views/OrderSubmit.vue";

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
  {
    path: "/orders",
    name: "orders",
    component: OrdersView,
  },
  {
    path: "/order-submit",
    name: "order-submit",
    component: OrderSubmit,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
