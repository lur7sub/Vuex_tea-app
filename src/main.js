import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faCloudRain,
  faCartShopping,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCloudRain, faCartShopping, faChevronRight, faChevronLeft);
// bootstarp
import "bootstrap/dist/css/bootstrap.css";

// scss
import "./assets/styles/style.scss";

createApp(App)
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
