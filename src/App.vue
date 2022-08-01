<template>
  <div class="d-flex justify-content-around py-3 navbar">
    <div>
      <!-- 首頁 -->
      <router-link to="/" class="nav-text text-white">
        <span>首頁</span>
      </router-link>
      <span class="mx-3 nav-text text-white">|</span>
      <!-- 餐茶搭配 -->
      <router-link to="/tea-pairing" class="nav-text text-white">
        <span>餐茶搭配</span>
      </router-link>
      <span class="mx-3 nav-text text-white">|</span>
      <!-- 全部 -->
      <router-link to="/products" class="nav-text text-white">
        <span>全部品項</span>
      </router-link>
    </div>
    <!-- 氣象API -->
    <div class="weather-view text-white">
      <span>
        <span class="mx-2">{{ $store.state.weatherState }}</span>
        <span class="mx-2"
          >{{ $store.state.minT }}<span>-</span>{{ $store.state.maxT
          }}<span>℃</span>
        </span>
        <span class="mx-2">{{ $store.state.weatherDesc }}</span>
        <span class="mx-2">
          <font-awesome-icon icon="fa-solid fa-cloud-rain" class="text-white" />
          {{ $store.state.pop }}%</span
        >
      </span>
    </div>
    <!-- 購物車 -->
    <div @click="toggleSidebar" class="cart-handler">
      <!-- Cart(0) -->
      <span class="text-white nav-text">
        <font-awesome-icon
          icon="fa-solid fa-cart-shopping"
          class="text-white"
        />
        購物車({{ $store.getters.totalQuantity }})
      </span>
    </div>
  </div>

  <!-- 因為是動態的 所以屬性要傳下去 -->
  <router-view />
  <!-- 側欄 -->
  <Sidebar v-if="showSidebar" :toggle="toggleSidebar" />
</template>

<script>
// 引用Component
import Sidebar from "@/components/SideBar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      // 側欄開關
      showSidebar: false,
    };
  },
  methods: {
    // 顯示側欄
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
  mounted() {
    this.$store.dispatch("getWeather");
  },
};
</script>
