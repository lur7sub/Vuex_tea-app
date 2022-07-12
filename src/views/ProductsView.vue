<template>
  <main class="wrapper">
    <h2>全部商品</h2>
    <!-- 回傳一個新陣列 .slice(begin,end)不含(end) -->
    <ProductCard
      v-for="product in inventory.slice(0, 6)"
      :key="product.id"
      :product="product"
      :addToCart="addToCart"
      class="card"
    />
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  props: ["inventory", "addToCart"],
  components: {
    ProductCard,
  },
};
</script>
