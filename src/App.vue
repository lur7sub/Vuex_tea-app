<template>
  <div class="d-flex justify-content-around py-3 navbar">
    <div>
      <!-- 推薦 -->
      <router-link to="/" class="text-dark">
        <span>宜飲茶款</span>
      </router-link>
      <span class="mx-3">|</span>
      <!-- 菜單 -->
      <router-link to="/products" class="text-dark">
        <span>全部品項</span>
      </router-link>
    </div>
    <div class="weather-view">
      <span>
        <span class="mx-2">{{ $store.state.weatherState }}</span>
        <span class="mx-2"
          >{{ $store.state.minT }}<span>-</span>{{ $store.state.maxT
          }}<span>℃</span>
        </span>
        <span class="mx-2">{{ $store.state.weatherDesc }}</span>
        <span class="mx-2">
          <font-awesome-icon
            icon="fa-solid fa-cloud-rain"
            class="font-awesome-color"
          />
          {{ $store.state.pop }}%</span
        >
      </span>
    </div>
    <!-- 購物車 -->
    <div @click="toggleSidebar" class="cart-handler">
      <!-- Cart(0) -->
      <span>
        <font-awesome-icon
          icon="fa-solid fa-cart-shopping"
          class="font-awesome-color"
        />
        購物車({{ totalQuantity }})
      </span>
    </div>
  </div>

  <!-- 因為是動態的 所以屬性要傳下去 -->
  <router-view :inventory="inventory" :addToCart="addToCart" class="my-5" />
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
  mounted() {
    this.$store.dispatch("getWeather");
  },
};
</script>
