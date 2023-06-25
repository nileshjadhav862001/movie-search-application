import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/js/bootstrap.js'
import VueRouter from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/HomePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  routes: routes,
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
