<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToLogin = () => {
  router.push("/Login");
};

const navigateToRegister = () => {
  router.push("/Register");
};
</script>
<template>
  <nav>
    <article class="logo-cont">
      <h1 class="logo">LOGO</h1>
      <ul class="ul-page-navigation">
        <li class="list-navigation">
          <a href="#">Главная</a>
        </li>
        <li class="list-navigation">
          <a href="#">С кем работаем?</a>
        </li>
        <li class="list-navigation">
          <a href="#/FAQ">FAQ</a>
        </li>
        <li class="list-navigation">
          <a href="#/contacts">О нас</a>
        </li>
      </ul>
    </article>
    <ul class="ul-button-navigation">
      <li>
        <button class="support-button">
          <img
            class="headphones-img"
            src="/header/headphones.svg"
            alt="headphones"
          />Поддержка
        </button>
      </li>
      <li>
        <button @click="navigateToLogin" class="log-in-button">Войти</button>
      </li>
      <li>
        <button @click="navigateToRegister" class="register-button">
          Регистрация
        </button>
      </li>
    </ul>
  </nav>
  <article class="line-cont">
    <img class="line" src="/mainPage/nav-line.svg" alt="" />
  </article>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 349px;
  position: relative;
}

.line {
  width: 1630px;
}

.line-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.ul-page-navigation {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-cont {
  display: flex;
  align-items: center;
  gap: 60px;
}

.ul-button-navigation {
  display: flex;
  align-items: center;
  gap: 32px;
}

.list-navigation {
  border-radius: 40px;
  padding: 12px 20px;
  background: #02020e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  font-weight: 600;
  font-size: 40px;
  color: #fff;
}

a {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: white;
  text-decoration: none;
}

.support-button {
  display: inline-block;
  border-radius: 50px;
  width: 179px;
  height: 44px;
  background: #02020e;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  text-align: center;
}

.headphones-img {
  vertical-align: middle;
  margin-right: 8px;
}

.log-in-button {
  border: 1px solid #12d3c0;
  border-radius: 50px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  background-color: transparent;
  cursor: pointer;
}

.register-button {
  border-radius: 50px;
  padding: 12px 24px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #02020e;
  cursor: pointer;
}
</style>
