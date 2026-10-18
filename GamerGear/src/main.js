import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import "./styles/main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/products", name: "products", component: Products },
  ],
});

createApp(App).use(router).mount("#app");