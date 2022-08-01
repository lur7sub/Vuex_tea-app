<template>
  <!-- product就是food.json的資料 -->
  <div class="card col-4">
    <div class="card-body">
      <div class="text-center">
        <img
          :src="require(`../assets/img/${product.id}.jpg`)"
          class="card-img w-50"
        />
      </div>
      <div class="my-4">
        <h4>{{ product.name }}</h4>
        <h6>類別： {{ product.type }}</h6>
        <h6>單價： {{ product.price }} / 75g</h6>
      </div>
      <span
        ><button @click="minusQuantity" class="card-btn btn btn-sm">-</button>
        <span class="mx-2"> {{ quantity }}</span
        ><button @click="addQuantity" class="card-btn btn btn-sm">
          +
        </button></span
      >
      <button
        @click="$store.commit('addToCart', [product.name, this.quantity])"
        class="btn add-to-cart"
      >
        加入購物車
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    minusQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      } else {
        return;
      }
    },
    addQuantity() {
      this.quantity++;
    },
  },
};
</script>
