import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

// 引用JSON資料
import food from "../food.json";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    // 商品
    inventory: food,
    // 購物車 {name: quaintity}
    cart: {},
    // 天氣
    weatherState: "",
    weatherDesc: "",
    pop: "",
    minT: "",
    maxT: "",
  },
  getters: {
    // 購物車(0)
    totalQuantity(state) {
      // cart{}的所有值 quantity.reduce()
      // reduce((preV,curV)=>{return preV + curV})
      return Object.values(state.cart).reduce((preV, curV) => {
        return preV + curV;
      }, 0);
    },
    // 對物件使用陣列方法 是將物件轉為陣列
    // cart物件 {福鼎白茶: 2, 文山包種茶: 1} 利用 Object.entries 迭代 [[福鼎白茶, 2], [文山包種茶, 1]]
    // .reduce((preV,curV)=>{return preV + curV },init)
    // curV就是 ["name", quantity] curV[0]就是"name" curV[1]就是quantity
    cartTotal(state) {
      return Object.entries(state.cart).reduce((preV, curV) => {
        return (
          preV +
          // 數量
          curV[1] *
            // 價錢
            state.inventory.filter((p) => p.name === curV[0])[0].price
        );
      }, 0);
    },
  },
  mutations: {
    getWeather(state, data) {
      state.weatherState =
        data.weatherElement[0].time[0].parameter.parameterName;
      state.pop = data.weatherElement[1].time[0].parameter.parameterName;
      state.minT = data.weatherElement[2].time[0].parameter.parameterName;
      state.weatherDesc =
        data.weatherElement[3].time[0].parameter.parameterName;
      state.maxT = data.weatherElement[4].time[0].parameter.parameterName;
    },
    // 加入購物車
    addToCart(state, params) {
      // { name: quaintity, }
      // 如果有數量傳進來
      if (params[1] != 0) {
        // 初始化
        if (!state.cart[params[0]]) state.cart[params[0]] = 0;
        // +=數量
        state.cart[params[0]] += params[1];
      }
    },
    // 移除購物清單
    removeItem(state, name) {
      delete state.cart[name];
    },
  },
  actions: {
    getWeather({ commit }) {
      const yyyy = new Date().getFullYear();
      const mm = "0" + (new Date().getMonth() + 1);
      const dd = new Date().getDate() + 1;
      const today = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-13748D92-B0B0-42F6-BAD1-04932D02398A&format=JSON&locationName=%E8%87%BA%E5%8C%97%E5%B8%82&elementName=&startTime=${yyyy}-${mm}-${dd}T06%3A00%3A00`;
      axios.get(today).then((res) => {
        commit("getWeather", res.data.records.location[0]);
      });
    },
  },
  modules: {},
});
