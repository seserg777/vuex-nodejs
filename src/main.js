import { createApp } from "vue";
import App from './App.vue';
import router from './router/router';
import store from './store';
import "./css/tailwind.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
//import { fab } from '@fortawesome/free-brands-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';
library.add(faShoppingCart, faUser);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount("#app");