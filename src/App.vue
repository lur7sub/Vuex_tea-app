<template>
  <nav>
    <header class="d-flex">
      <nav class="top-bar-nav">
        <!-- 推薦 -->
        <router-link to="/" class="top-bar-link">
          <span>熱門商品</span>
        </router-link>
        |
        <!-- 菜單 -->
        <router-link to="/products" class="top-bar-link">
          <span>全品項</span>
        </router-link>
      </nav>
      <!-- 購物車 -->
      <div @click="toggleSidebar" class="top-bar-cart-link">
        <i class="icofont-cart-alt icofont-1x"></i>
        <!-- Cart(0) -->
        <p>購物車{{ totalQuantity }}</p>
      </div>
    </header>
  </nav>
  <!-- 因為是動態的 所以屬性要傳下去 -->
  <router-view :inventory="inventory" :addToCart="addToCart" />
  <!-- 側欄 -->
  <Sidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
// 引用JSON資料
import food from "./food.json";
// 引用Component
import Sidebar from "@/components/SideBar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      // JSON資料
      // { "id": 1,  "name": "Raddishes",   "icon": "raddish",    "price": { "USD": 3.26, "NOK": 17.43 }, "type": "vegetable" }
      inventory: food,
      // Sidebar開關
      showSidebar: false,
      // 購物車 name: quantity
      cart: {},
    };
  },

  computed: {
    // 購物車(0)
    totalQuantity() {
      // cart{}的所有值 quantity.reduce()
      // reduce((preV,curV)=>{return preV + curV})
      return Object.values(this.cart).reduce((preV, curV) => {
        return preV + curV;
      }, 0);
    },
  },
  methods: {
    // 顯示sidebar
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    // 加入cart{}
    addToCart(name, quantity) {
      // 沒東西時 數量是0
      if (!this.cart[name]) this.cart[name] = 0;
      // cart{}裡面 新增 屬性:值 name:quantity
      // cart{}裡面 新增name屬性 的數量
      this.cart[name] += quantity;
    },
    // 移除購物車
    removeItem(name) {
      delete this.cart[name];
    },
  },
};
</script>
