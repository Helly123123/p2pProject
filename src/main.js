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
import PersonalAccount from "./pages/PersonalAccount.vue";
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // или любой другой стиль

// Подключение языков, если требуется
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-css.min.js';

const routes = [
    { path: "/", name: "MainPage", component: MainPage },
    { path: "/FAQ", name: "FAQ", component: FAQ },
    { path: "/contacts", name: "Contacts", component: Contacts },
    { path: "/login", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
    { path: "/forgotPassword", name: "ForgotPassword", component: ForgotPassword },
    { path: "/personalAccount", name: "PersonalAccount", component: PersonalAccount },
  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  const app = createApp(App);
  app.use(router);
  app.mount("#app");
