import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import ChartPlugin from "./plugins/ChartPlugin";

Vue.config.productionTip = false;

Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
