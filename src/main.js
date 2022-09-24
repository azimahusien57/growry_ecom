import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

// ini adalah endpoint directory gambar gunakan cara ini bila mau nampilkan gambar

Vue.prototype.imageAssets = (imgCategory) => require("@/assets/" + imgCategory);
