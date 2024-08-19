<script setup>
import { useRouter } from "vue-router";
import { ref, inject } from "vue";

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
  <nav>
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
        <img src="/header/user.svg " alt="user" />
        <h2 class="user-name">Сергей Б.</h2>
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
  gap: 380px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 24px;
}

.line {
  width: 1270px;
  margin-bottom: 32px;
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
  background: #090922;
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
  background-color: #02020e;
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
</style>
