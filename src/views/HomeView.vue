<template>
  <!-- 輪播圖片 -->
  <swiper-slider></swiper-slider>
  <div class="container seasons-select">
    <!-- 季節商品 -->
    <h2 v-if="$store.state.maxT > 24" class="py-4 ss-color">春夏茶款</h2>
    <h2 v-else class="py-4 aw-color">秋冬茶款</h2>
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
import SwiperSlider from "../components/SwiperSlider.vue";

export default {
  components: {
    ProductCard,
    SwiperSlider,
  },
  data() {
    return {
      slides: [],
    };
  },
};
</script>
