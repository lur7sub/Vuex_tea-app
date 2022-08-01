<template>
  <div class="container">
    <!-- 回傳一個新陣列 .slice(begin,end)不含(end) -->
    <div class="row mt-5">
      <ProductCard
        v-for="product in $store.state.inventory.slice(0, 6)"
        :key="product.id"
        :product="product"
        class="mb-5"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>
