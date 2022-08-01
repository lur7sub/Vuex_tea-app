<template>
  <div class="container">
    <!-- 輪播圖片 -->
    <div>
      <carousel>
        <slide></slide>
        <slide></slide>
        <slide></slide>
      </carousel>
    </div>
    <!-- 季節商品 -->
    <h2 v-if="$store.state.maxT > 24" class="my-3 p-0">春夏茶款</h2>
    <h2 v-else class="my-3 p-0">秋冬茶款</h2>
    <div class="row">
      <!-- 卡片 -->
      <!-- .slice(0,3) 回傳一個新陣列 .slice(begin,end)不含(end) -->
      <ProductCard
        v-for="product in $store.state.inventory.filter((p) => {
          if ($store.state.maxT > 24) {
            return p.property === '夏天';
          } else {
            return p.property === '冬天';
          }
        })"
        :key="product.id"
        :product="product"
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
