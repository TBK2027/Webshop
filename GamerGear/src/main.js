import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import "./styles/main.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/SearchBar.css";
import "./styles/ProductSection.css";
import "./styles/ProductCard.css";
import "./styles/Newsletter.css";
import "./styles/Footer.css";
import "./styles/Responsive.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/products", name: "products", component: Products },
  ],
});

createApp(App).use(router).mount("#app");