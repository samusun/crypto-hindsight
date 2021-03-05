import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/signup.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:user?",
    name: "About",
    component: About,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
