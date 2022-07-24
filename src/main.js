import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// styles.scss是import所有sass的檔案
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";

createApp(App).use(router).use(store).mount("#app");
