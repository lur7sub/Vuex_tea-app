<template>
  <div class="container px-5">
    <h2 class="m-0 p-0">全部商品</h2>
    <!-- 回傳一個新陣列 .slice(begin,end)不含(end) -->
    <div class="row">
      <ProductCard
        v-for="product in inventory.slice(0, 6)"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
  </div>
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
