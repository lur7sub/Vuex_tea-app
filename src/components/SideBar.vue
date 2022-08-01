<template>
  <aside class="cart text-white font-weight-bold">
    <!-- 標題 -->
    <h1 class="cart-title">
      <span>訂單</span>
      <!-- 退出 -->
      <button @click="toggle" class="cart-close text-white">x</button>
    </h1>
    <!-- 表格 -->
    <div class="mt-4 p-relative">
      <table class="cart-table">
        <thead v-if="Object.keys($store.state.cart).length">
          <tr>
            <th>商品</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(quantity, item) in $store.state.cart" :key="item">
            <!-- 商品 -->
            <td>{{ item }}</td>
            <!-- 單價 -->
            <td>
              {{ $store.state.inventory.find((i) => i.name === item).price }}
            </td>

            <td class="cart-quantity">{{ quantity }}</td>
            <!-- 小計 -->
            <!-- cart 沒有價錢 要從 inventory取得 -->
            <td>
              {{
                $store.state.inventory.find((i) => i.name === item).price *
                quantity
              }}
            </td>
            <!-- 移除 -->
            <td>
              <button
                @click="$store.commit('removeItem', item)"
                class="btn cart-remove text-white"
              >
                x
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 如果cart{}裡面沒東西 => 顯示 -->
      <p v-if="!Object.keys($store.state.cart).length" class="my-4">
        目前沒有商品
      </p>
      <div class="cart-total">
        <span>
          <strong>總計：</strong>
          <!-- 總計 -->
          {{ $store.getters.cartTotal }} 元
        </span>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["toggle"],
};
</script>
