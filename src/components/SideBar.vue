<template>
  <aside class="cart-container">
    <div class="cart">
      <!-- Cart title -->
      <h1 class="cart-title spread">
        <span>
          訂單
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <!-- x-btn -->
        <button @click="toggle" class="cart-close">x</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <!-- 表頭 -->
          <thead>
            <tr>
              <th>
                <span class="sr-only">Product Image</span>
              </th>
              <th>商品</th>
              <th>單價</th>
              <th>數量</th>
              <th>小計</th>
              <th>
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <!-- 表身 -->
          <tbody>
            <!-- v-for (value,key,index) -->
            <tr v-for="(quantity, item) in cart" :key="item">
              <!-- icon -->
              <td>
                <i class="icofont-carrot icofont-3x"></i>
              </td>
              <!-- 商品 -->
              <td>{{ item }}</td>
              <!-- 單價 -->
              <td>${{ getPrice(item) }}</td>
              <!-- 數量 -->
              <td class="center">{{ quantity }}</td>
              <!-- 小計 -->
              <td>${{ quantity * getPrice(item) }}</td>
              <!-- 移除 -->
              <td class="center">
                <button @click="remove(item)" class="btn btn-light cart-remove">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 總計 -->
        <!-- 如果cart{}裡面沒東西 => 顯示 -->
        <p v-if="!Object.keys(cart).length" class="center">
          <em>目前沒有商品</em>
        </p>
        <div class="spread">
          <span> <strong>總計：</strong> ${{ cartTotal() }} </span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  // 從父層傳屬性為toggle的toggleSidebar函式 下來用
  props: ["toggle", "cart", "inventory", "remove"],
  methods: {
    // 因為price不在cart裡面 要從inventory取得
    // 陣列好用方法: forEach, map, reduce, find
    getPrice(name) {
      const product = this.inventory.find((p) => {
        return p.name === name;
      });
      return product.price;
    },
    // 對物件使用陣列方法 是將物件轉為陣列
    // cart物件 {滷肉飯: 2, 麻醬麵: 1} 利用 Object.entries 迭代 [[滷肉飯, 2], [麻醬麵, 1]]
    // .reduce((preV,curV)=>{return preV + curV },init)
    // curV就是 ["name", quantity] curV[0]就是"name" curV[1]就是quantity
    cartTotal() {
      const total = Object.entries(this.cart).reduce((preV, curV) => {
        return preV + curV[1] * this.getPrice(curV[0]);
      }, 0);
      return total;
    },
  },
};
</script>
