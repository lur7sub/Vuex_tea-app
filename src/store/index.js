import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getWeather() {
      const yyyy = new Date().getFullYear().toString();
      const mm = ("0" + (new Date().getMonth() + 1)).toString();
      const dd = new Date().getDate().toString();
      const today = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-13748D92-B0B0-42F6-BAD1-04932D02398A&format=JSON&locationName=%E8%87%BA%E5%8C%97%E5%B8%82&elementName=&startTime=${yyyy}-${mm}-${dd}T06%3A00%3A00`;
      axios.get(today).then((response) => {
        console.log(
          response.data.records.location[0].weatherElement[0].time[0].parameter
            .parameterName
          // 晴天
        );
        console.log(
          response.data.records.location[0].weatherElement[1].time[0].parameter
            .parameterName
          // 降雨機率
        );
        console.log(
          response.data.records.location[0].weatherElement[2].time[0].parameter
            .parameterName
          // 最低溫度
        );
        console.log(
          response.data.records.location[0].weatherElement[3].time[0].parameter
            .parameterName
          // 天氣描述
        );
        console.log(
          response.data.records.location[0].weatherElement[4].time[0].parameter
            .parameterName
          // 最高溫
        );
        // commit("getWeather", response.data);
      });
    },
  },
  modules: {},
});
