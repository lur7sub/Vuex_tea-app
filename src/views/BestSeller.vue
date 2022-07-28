<template>
  <div class="container px-5">
    <h2 v-if="$store.state.maxT > 24" class="m-0 p-0">春夏茶款</h2>
    <h2 v-else class="m-0 p-0">秋冬茶款</h2>
    <div class="row">
      <!-- card -->
      <!-- product就是food.json的資料 -->
      <!-- 參數index讓購物車分辨 -->
      <!-- .slice(0,3) 回傳一個新陣列 .slice(begin,end)不含(end) -->
      <ProductCard
        v-for="product in inventory.filter((p) => {
          if ($store.state.maxT > 24) {
            return p.property === '夏天';
          } else {
            return p.property === '冬天';
          }
        })"
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
  name: "HomeView",
  props: ["inventory", "addToCart"],
  components: {
    ProductCard,
  },
};
</script>
