<script setup>
import { useRouter } from "vue-router";
import { ref, inject } from "vue";
import Menu from "./menu.vue";

const MenuStatiomOff = inject("menu");

const { navStationOff } = inject("navStation");

const router = useRouter();

const navigateToLogin = () => {
  router.push("/Login");
};

const navigateToRegister = () => {
  router.push("/Register");
};

const navStation = ref(false);

const navigateToPersonalAccount = () => {
  router.push("/personalAccount");
  navStationOff();
};
</script>

<template>
  <section class="menu-bg">
    <img class="close" src="/close-men.svg" @click="MenuStatiomOff" alt="" />
    <section class="menu">
      <h2 class="logo">LOGO</h2>
      <nav>
        <div class="page-cont">
          <a href="#" class="page">Главная</a>
        </div>
        <div class="page-cont">
          <a href="#" class="page">С кем работаем?</a>
        </div>
        <div class="page-cont">
          <a href="#/FAQ" class="page">FAQ</a>
        </div>
        <div class="page-cont">
          <a href="#/contacts" class="page">О нас</a>
        </div>
        <button class="support-btn">
          <img src="/header/headphones.svg" alt="" />Поддержка
        </button>
        <button @click="navigateToLogin" class="log-btn">Войти</button>
        <button @click="navigateToRegister" class="reg-btn">Регистрация</button>
      </nav>
      <section class="contacts-sect">
        <article class="card">
          <p class="card-name">E-mail</p>
          <h2 class="card-text">info@mail.ru</h2>
        </article>
        <article class="card">
          <p class="card-name">Тел</p>
          <h2 class="card-text">+7 (000) 000-00-00</h2>
          <h2 class="card-text">+7 (000) 000-00-00</h2>
        </article>
        <article class="card">
          <p class="card-name">ТГ</p>
          <h2 class="card-text">@wasdwasd</h2>
        </article>
      </section>
    </section>
  </section>
</template>

<style scoped>
.menu-bg {
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(12px);
  background: rgba(122, 45, 237, 0.3);
  position: fixed;
  z-index: 10;
}

.close {
  position: absolute;
  right: 20px;
  top: 20px;
}

.menu {
  position: absolute;
  border: 1px solid #12d3c0;
  border-radius: 12px;
  padding: 8px 12px;
  width: 280px;
  height: 800px;
  background: #02020e;
  margin: 10px;
}

.contacts-sect {
  margin-top: 54px;
}

.logo {
  font-weight: 600;
  font-size: 30px;
  color: #fff;
  margin: 0;
}

.page-cont {
  border-radius: 50px;
  width: 280px;
  height: 44px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
}

.page {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-decoration: none;
}

.support-btn {
  border-radius: 50px;
  width: 280px;
  height: 44px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
}

.log-btn {
  border: 1px solid #12d3c0;
  border-radius: 50px;
  background-color: transparent;
  width: 280px;
  height: 44px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  margin-top: 20px;
  margin-bottom: 8px;
}

.reg-btn {
  border-radius: 50px;
  width: 280px;
  height: 44px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #02020e;
}

.card {
  margin-top: 8px;
  border-radius: 10px;
  padding: 12px 12px;
  width: 256px;
  height: 69px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: #0a0a1a;
}

.card-name {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
}

.card-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #fff;
}
</style>
