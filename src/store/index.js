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
    // 購物車
    cart: {},
    // 天氣
    weatherState: "",
    weatherDesc: "",
    pop: "",
    minT: "",
    maxT: "",
  },
  getters: {
    // totalQuantity
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
  },
  actions: {
    getWeather({ commit }) {
      const yyyy = new Date().getFullYear();
      const mm = "0" + (new Date().getMonth() + 1);
      const dd = new Date().getDate() + 1;
      const today = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-13748D92-B0B0-42F6-BAD1-04932D02398A&format=JSON&locationName=%E8%87%BA%E5%8C%97%E5%B8%82&elementName=&startTime=${yyyy}-${mm}-${dd}T06%3A00%3A00`;
      axios.get(today).then((response) => {
        commit("getWeather", response.data.records.location[0]);
      });
    },
    // addToCart
    // removeItem
  },
  modules: {},
});
