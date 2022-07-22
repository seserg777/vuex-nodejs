import { createApp } from "vue";
import App from "./components/App.vue";
import "./css/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from './store'

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .mount("#app");