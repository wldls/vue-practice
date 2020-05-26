import Vue from "vue";
import VueRouter from "vue-router";
import IndexRoute from "../components/IndexRoute.vue";
import Barchart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";
import KakaoMap from "../components/KakaoMap.vue";
import KakaoMap2 from "../components/KakaoMap2.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: IndexRoute },
    { path: "/barChart", component: Barchart },
    { path: "/lineChart", component: LineChart },
    { path: "/kakaoMap", component: KakaoMap },
    { path: "/kakaoMap2", component: KakaoMap2 }
  ]
});

export default router;
