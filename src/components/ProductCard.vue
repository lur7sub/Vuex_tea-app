<template>
  <!-- product就是food.json的資料 -->
  <div class="card">
    <!-- card title -->
    <div class="card-title">{{ product.name }}</div>
    <!-- card body -->
    <div class="card-body">
      <form>
        <div class="row">
          <div class="cell">
            <label>類別：</label>
          </div>
          <div class="cell">
            <em>{{ product.type }}</em>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>單價：</label>
          </div>
          <div class="cell">${{ product.price }}</div>
        </div>
        <div class="row">
          <div class="cell">
            <label>數量：</label>
          </div>
          <div class="cell">
            <!-- 輸入值 -->
            <input type="number" v-model.number="quantity" />
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <!-- addToCart() -->
      <button @click="addToCart(product.name, quantity)" class="btn btn-light">
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
