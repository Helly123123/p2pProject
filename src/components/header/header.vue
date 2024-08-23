<script setup>
import { useRouter } from "vue-router";
import { ref, inject, provide } from "vue";
import Menu from "./menu.vue";

const MenuStatiom = ref(false);

const MenuStatiomOn = () => {
  MenuStatiom.value = true;
};

const MenuStatiomOff = () => {
  MenuStatiom.value = false;
};
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

provide("menu", MenuStatiomOff);
</script>
<template>
  <nav class="nav-pc">
    <article class="logo-cont">
      <h1 @click="navigateToPersonalAccount" class="logo">LOGO</h1>
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
  <nav class="nav-phone">
    <h1 class="logo-phone">LOGO</h1>
    <img @click="MenuStatiomOn" src="/header/menu.svg" alt="" />
  </nav>
</template>

<style scoped>
.nav-pc {
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

.nav-phone {
  display: none;
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

@media screen and (max-width: 1750px) {
  .nav-pc {
    gap: 250px;
  }

  .line {
    width: 1530px;
  }
}

@media screen and (max-width: 1650px) {
  .nav-pc {
    gap: 150px;
  }

  .line {
    width: 1440px;
  }
}

@media screen and (max-width: 1500px) {
  .nav-pc {
    gap: 50px;
  }

  .logo-cont {
    gap: 40px;
  }

  .line {
    width: 1320px;
  }
}

@media screen and (max-width: 1350px) {
  .nav-pc {
    gap: 20px;
  }

  .logo-cont {
    gap: 0px;
  }

  .logo {
    font-size: 35px;
  }

  a {
    font-size: 14px;
  }

  .support-button {
    width: 160px;
    height: 44px;
    font-size: 14px;
  }

  .headphones-img {
    margin-right: 8px;
    width: 18px;
  }

  .log-in-button {
    padding: 10px 22px;
    font-size: 16px;
  }

  .register-button {
    padding: 10px 22px;
    font-size: 16px;
  }

  .line {
    width: 1170px;
  }
}

@media screen and (max-width: 1200px) {
  .nav-pc {
    gap: 0px;
  }

  .logo-cont {
    gap: 0px;
  }

  .logo {
    font-size: 30px;
  }

  a {
    font-size: 12px;
  }

  .support-button {
    width: 140px;
    height: 40px;
    font-size: 12px;
  }

  .headphones-img {
    margin-right: 8px;
    width: 18px;
  }

  .log-in-button {
    padding: 8px 18px;
    font-size: 14px;
  }

  .register-button {
    padding: 8px 18px;
    font-size: 14px;
  }

  .line {
    width: 1030px;
    height: 2px;
  }
}

@media screen and (max-width: 1050px) {
  .logo-cont {
    gap: 0px;
  }

  .logo {
    font-size: 25px;
  }

  a {
    font-size: 10px;
  }

  .support-button {
    width: 130px;
    height: 35px;
    font-size: 10px;
  }

  .headphones-img {
    margin-right: 8px;
    width: 15px;
  }

  .log-in-button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .register-button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .line {
    width: 960px;
    height: 3px;
  }
}

@media screen and (max-width: 1000px) {
  .logo-cont {
    gap: 0px;
  }

  .logo {
    font-size: 25px;
  }

  a {
    font-size: 10px;
  }

  .support-button {
    width: 130px;
    height: 35px;
    font-size: 10px;
  }

  .headphones-img {
    margin-right: 8px;
    width: 15px;
  }

  .log-in-button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .register-button {
    padding: 8px 16px;
    font-size: 14px;
  }

  .line {
    width: 900px;
    height: 3px;
  }

  .ul-page-navigation {
    gap: 8px;
  }

  .ul-button-navigation {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

@media screen and (max-width: 900px) {
  .logo-cont {
    gap: 0px;
  }

  .logo {
    font-size: 20px;
  }

  a {
    font-size: 8px;
  }

  .list-navigation {
    padding: 10px 16px;
  }

  .support-button {
    width: 120px;
    height: 35px;
    font-size: 10px;
  }

  .headphones-img {
    margin-right: 8px;
    width: 15px;
  }

  .log-in-button {
    padding: 8px 14px;
    font-size: 12px;
  }

  .register-button {
    padding: 8px 14px;
    font-size: 12px;
  }

  .line {
    width: 770px;
    height: 3px;
  }

  .ul-page-navigation {
    gap: 6px;
  }

  .ul-button-navigation {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

@media screen and (max-width: 768px) {
  .nav-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 530px;
    position: relative;
  }

  .nav-pc {
    gap: 0px;
    display: none;
  }

  .line {
    width: 770px;
    height: 3px;
    display: none;
  }

  .logo-phone {
    font-weight: 600;
    font-size: 30px;
    color: #fff;
  }
}

@media screen and (max-width: 650px) {
  .nav-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 430px;
  }

  .logo-phone {
    font-weight: 600;
    font-size: 30px;
    color: #fff;
  }
}

@media screen and (max-width: 550px) {
  .nav-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 330px;
  }

  .logo-phone {
    font-weight: 600;
    font-size: 30px;
    color: #fff;
  }
}

@media screen and (max-width: 450px) {
  .nav-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 230px;
  }

  .logo-phone {
    font-weight: 600;
    font-size: 30px;
    color: #fff;
  }
}
</style>
