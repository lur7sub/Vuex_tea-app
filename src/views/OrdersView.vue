<template>
  <h2 class="text-center my-5">訂單</h2>
  <div class="my-5">
    <div
      v-for="(quantity, item) in $store.state.cart"
      :key="item"
      class="my-4 text-center"
    >
      <!-- 商品 -->
      <h5 class="d-inline-block order-block">
        {{ item }}
      </h5>
      <!-- 單價 -->
      <h5 class="d-inline-block order-block">
        {{ $store.state.inventory.find((i) => i.name === item).price }} / 罐
      </h5>
      <!-- 數量 -->
      <h5 class="d-inline-block order-block">
        <button
          @click="$store.commit('decreaseQuantity', item)"
          class="btn btn-sm"
        >
          -
        </button>
        {{ quantity }}
        <button
          @click="$store.commit('increaseQuantity', item)"
          class="btn btn-sm"
        >
          +
        </button>
      </h5>
      <!-- 小計 -->
      <h5 class="d-inline-block order-block">
        {{
          $store.state.inventory.find((i) => i.name === item).price * quantity
        }}元
      </h5>
      <!-- 移除 -->
      <button @click="$store.commit('removeItem', item)" class="btn btn-sm">
        x
      </button>
    </div>
    <!-- 如果沒有商品 -->
  </div>
  <p v-show="!Object.keys($store.state.cart).length" class="my-5 text-center">
    目前沒有商品
  </p>
  <hr />
  <!-- 訂購人資訊 | 訂單資訊 -->
  <form @submit.prevent="thankYou">
    <div class="d-flex text-center">
      <div class="col-6">
        <!-- 顧客資訊 -->
        <h3 class="my-4">訂購人資訊</h3>
        <!-- 表單 -->
        <div class="my-5">
          <div class="input-group w-50 mx-auto my-4">
            <div class="input-group-prepend">
              <span class="input-group-text">姓名</span>
            </div>
            <input required type="text" class="form-control" />
          </div>
          <div class="input-group w-50 mx-auto my-4">
            <div class="input-group-prepend">
              <span class="input-group-text">手機</span>
            </div>
            <input
              required
              type="tel"
              pattern="[0-9]{10}"
              class="form-control"
            />
          </div>
          <div class="input-group w-50 mx-auto my-4">
            <div class="input-group-prepend">
              <span class="input-group-text">信箱</span>
            </div>
            <input required type="email" class="form-control" />
          </div>
          <div class="input-group w-50 mx-auto my-4">
            <div class="input-group-prepend">
              <span class="input-group-text">地址</span>
            </div>
            <input required type="text" class="form-control" />
          </div>
          <div class="input-group w-50 mx-auto my-4">
            <div class="input-group-prepend">
              <span class="input-group-text">付款</span>
            </div>
            <select required class="form-control">
              <option selected disabled value="">請選擇</option>
              <option value="1">現金</option>
              <option value="2">轉帳</option>
              <option value="3">信用卡</option>
            </select>
          </div>
        </div>
      </div>
      <!-- 訂單資訊 -->
      <div class="col-6">
        <h3 class="my-4">付款資訊</h3>
        <div class="my-5 py-4">
          <p class="h5">
            小計 <span>{{ $store.getters.cartTotal }} 元</span>
          </p>
          <p class="h5 my-4">
            運費
            <span v-show="Object.keys($store.state.cart).length">100元</span>
            <span v-show="!Object.keys($store.state.cart).length">0元</span>
          </p>
          <p class="h5">
            合計
            <span v-show="Object.keys($store.state.cart).length"
              >{{ $store.getters.cartTotal + 100 }} 元</span
            >
            <span v-show="!Object.keys($store.state.cart).length"
              >{{ $store.getters.cartTotal }} 元</span
            >
          </p>
        </div>
        <!-- 送出 -->
        <button
          v-show="Object.keys($store.state.cart).length"
          class="btn submit-btn btn-lg"
          type="submit"
        >
          送出
        </button>
        <router-link to="/products" class="text-white nav-text">
          <button
            v-show="!Object.keys($store.state.cart).length"
            class="btn submit-btn btn-lg"
          >
            返回選購
          </button>
        </router-link>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  methods: {
    thankYou() {
      this.$store.commit("clearCart");
      this.$router.push({ path: "/order-submit" });
      setTimeout(() => {
        this.$router.push({ path: "/" });
      }, 5000);
    },
  },
};
</script>
