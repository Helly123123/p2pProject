import './assets/main.css'
import { createRouter, createWebHashHistory } from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'
import MainPage from "./pages/MainPage.vue";
import FAQ from "./pages/FAQ.vue";
import Contacts from "./pages/Сontacts.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Registation.vue";
import ForgotPassword from "./pages/ForgotPassword.vue";

const routes = [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/FAQ", name: "FAQ", component: FAQ },
    { path: "/contacts", name: "Contacts", component: Contacts },
    { path: "/login", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
    { path: "/forgotPassword", name: "ForgotPassword", component: ForgotPassword },
  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  const app = createApp(App);
  app.use(router);
  app.mount("#app");
