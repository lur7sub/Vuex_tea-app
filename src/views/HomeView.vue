<template>
  <div class="splash-container">
    <div class="splash">
      <h1>茶</h1>
    </div>
  </div>
  <h2>熱門商品</h2>
  <div class="recommended">
    <!-- card -->
    <!-- product就是food.json的資料 -->
    <!-- 參數index讓購物車分辨 -->
    <!-- .slice(0,3) 回傳一個新陣列 .slice(begin,end)不含(end) -->
    <ProductCard
      v-for="product in inventory.filter((p) => {
        return p.recommended === true;
      })"
      :key="product.id"
      :product="product"
      :addToCart="addToCart"
      class="card"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "HomeView",
  props: ["inventory", "addToCart"],
  components: {
    ProductCard,
  },
};
</script>
