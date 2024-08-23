<script setup>
import { useRouter } from "vue-router";
import { ref, inject } from "vue";

import Menu from "../header/menu.vue";

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
  <nav class="nav-pc">
    <article class="logo-cont">
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
      <li class="usdt-cont">
        <h2 class="usdt-text">1 240 USDT</h2>
      </li>
      <li class="user-info">
        <img class="user-icon" src="/header/user.svg " alt="user" />
        <h2 class="user-name">Сергей Б.</h2>
      </li>
    </ul>
  </nav>
  <article class="line-cont">
    <img class="line" src="/mainPage/nav-line.svg" alt="" />
  </article>
  <nav class="nav-phone">
    <h1 class="phone-logo">LOGO</h1>
    <ul class="nav-list-phone">
      <li>
        <img src="/header/user-img.svg" alt="" />
      </li>
      <li>
        <img src="/header/menu.svg" alt="" />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-pc {
  display: flex;
  align-items: center;
  gap: 380px;
  position: relative;
  z-index: 100;
  margin-top: 30px;
  margin-bottom: 24px;
}

.line {
  width: 1270px;
  margin-bottom: 32px;
  height: 2px;
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
  margin: 0;
  margin-left: -40px;
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
  background: #030303;
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

.usdt-cont {
  border-radius: 30px;
  width: 157px;
  height: 44px;
  backdrop-filter: blur(150px);
  background: #030303;
}

.usdt-text {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #fff;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-name {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
}

.nav-phone {
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}

.nav-phone {
  font-weight: 600;
  font-size: 30px;
  color: #fff;
  gap: 410px;
}

.nav-list-phone {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media screen and (max-width: 1800px) {
  .nav-pc {
    gap: 350px;
    margin-top: 30px;
    margin-bottom: 24px;
  }

  .line {
    width: 1230px;
    margin-bottom: 32px;
    height: 2px;
  }
}

@media screen and (max-width: 1700px) {
  .nav-pc {
    gap: 260px;
    margin-top: 30px;
    margin-bottom: 24px;
  }

  .line {
    width: 1140px;
    margin-bottom: 32px;
    height: 2px;
  }
}

@media screen and (max-width: 1550px) {
  .nav-pc {
    gap: 150px;
    margin-top: 30px;
    margin-bottom: 24px;
  }

  .line {
    width: 1030px;
    margin-bottom: 32px;
    height: 2px;
  }
}

@media screen and (max-width: 1450px) {
  .nav-pc {
    gap: 40px;
    margin-top: 30px;
    margin-bottom: 24px;
  }

  .line {
    width: 920px;
    margin-bottom: 32px;
    height: 2px;
  }
}

@media screen and (max-width: 1350px) {
  .nav-pc {
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 24px;
  }

  .line {
    width: 830px;
    margin-bottom: 32px;
    height: 2px;
  }

  .list-navigation {
    border-radius: 40px;
    padding: 10px 16px;
    background: #090922;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    font-size: 14px;
  }

  .ul-button-navigation {
    gap: 28px;
  }
}

@media screen and (max-width: 1250px) {
  .nav-pc {
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 24px;
  }

  .line {
    width: 740px;
    margin-bottom: 32px;
    height: 4px;
  }

  .list-navigation {
    border-radius: 40px;
    padding: 10px 16px;
    background: #090922;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    font-size: 12px;
  }

  .ul-button-navigation {
    gap: 10px;
  }

  .usdt-text {
    font-size: 16px;
  }

  .user-name {
    font-size: 14px;
  }

  .user-icon {
    width: 35px;
  }
}

@media screen and (max-width: 1150px) {
  .nav-pc {
    gap: 0px;
    margin-top: 30px;
    margin-bottom: 16px;
  }

  .line {
    width: 640px;
    margin-bottom: 32px;
    height: 6px;
  }

  a {
    font-size: 10px;
  }

  .ul-button-navigation {
    gap: 10px;
  }

  .usdt-text {
    font-size: 14px;
  }

  .user-name {
    font-size: 12px;
  }

  .user-icon {
    width: 35px;
  }

  .user-info {
    gap: 8px;
  }

  .usdt-cont {
    width: 120px;
    height: 44px;
    text-align: center;
  }
}

@media screen and (max-width: 1050px) {
  .nav-pc {
    gap: 0px;
    margin-top: 30px;
    margin-bottom: 16px;
  }

  .line {
    width: 550px;
    margin-bottom: 32px;
    height: 8px;
  }

  a {
    font-size: 8px;
  }

  .ul-button-navigation {
    gap: 5px;
    margin-left: -20px;
  }

  .usdt-text {
    font-size: 12px;
  }

  .user-name {
    font-size: 10px;
  }

  .user-icon {
    width: 30px;
  }

  .user-info {
    gap: 6px;
  }

  .list-navigation {
    padding: 8px 16px;
  }

  .usdt-cont {
    width: 100px;
    height: 44px;
    text-align: center;
    margin-top: 10px;
  }
}

@media screen and (max-width: 950px) {
  .nav-pc {
    gap: 0px;
    margin-top: 30px;
    margin-bottom: 16px;
  }

  .line {
    width: 480px;
    margin-bottom: 32px;
    height: 10px;
  }

  a {
    font-size: 8px;
  }

  .ul-button-navigation {
    gap: 5px;
    margin-left: -20px;
  }

  .usdt-text {
    font-size: 12px;
  }

  .user-name {
    font-size: 10px;
  }

  .user-icon {
    width: 30px;
  }

  .user-info {
    gap: 6px;
  }

  .list-navigation {
    padding: 8px 16px;
  }

  .usdt-cont {
    width: 100px;
    height: 44px;
    text-align: center;
    margin-top: 10px;
  }
}

@media screen and (max-width: 830px) {
  .nav-pc {
    gap: 0px;
    margin-top: 30px;
    margin-bottom: 16px;
  }

  a {
    font-size: 8px;
  }

  .ul-button-navigation {
    gap: 5px;
    margin-left: -20px;
  }

  .usdt-text {
    font-size: 12px;
  }

  .user-name {
    font-size: 10px;
  }

  .user-icon {
    width: 30px;
  }

  .user-info {
    gap: 6px;
  }

  .list-navigation {
    padding: 8px 11px;
  }

  .usdt-cont {
    width: 80px;
    height: 44px;
    text-align: center;
    margin-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  .nav-phone {
    display: flex;
  }

  .nav-pc {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .nav-phone {
    font-size: 30px;
    gap: 310px;
  }

  .nav-list-phone {
    gap: 20px;
  }
}

@media screen and (max-width: 550px) {
  .nav-phone {
    font-size: 30px;
    gap: 215px;
  }

  .nav-list-phone {
    gap: 20px;
  }
}

@media screen and (max-width: 450px) {
  .nav-phone {
    font-size: 30px;
    gap: 115px;
  }

  .nav-list-phone {
    gap: 20px;
  }
}
</style>
