<template>
  <!-- product就是food.json的資料 -->
  <div class="card col-4 mt-5">
    <div class="card-body">
      <div class="text-center">
        <img
          :src="require(`../assets/img/${product.id}.jpg`)"
          class="card-img-top card-img w-50"
        />
      </div>
      <div class="card-text my-4">
        <h5 class="card-title">{{ product.name }}</h5>
        <h6>類別： {{ product.type }}</h6>
        <h6>單價： {{ product.price }} / 75g</h6>
      </div>
      <input
        class="text-center w-25"
        v-model.number="quantity"
        placeholder="數量"
        @keyup.enter="addToCart(product.name, quantity)"
      />
      <button
        @click="addToCart(product.name, quantity)"
        class="btn btn-secondary add-to-cart"
      >
        加入購物車
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "addToCart"],
  data() {
    return {
      quantity: 0,
    };
  },
};
</script>
