<script setup>
import Navigation from "../components/personalAccount/Navigation.vue";
import NavigationAside from "../components/personalAccount/PersonalAccountNavigation.vue";
import MainPage from "../components/personalAccount/mainPage/MainPage.vue";
import PaymentsPage from "../components/personalAccount/paymentsPage/PaymentsPage.vue";
import ReceptionPage from "../components/personalAccount/receptionPage/ReceptionPage.vue";
import ReportPage from "../components/personalAccount/reportPage/ReportPage.vue";
import ApiPage from "../components/personalAccount/apiPage/ApiPage.vue";
import SettingsPage from "../components/personalAccount/settingsPage/SettingsPage.vue";
import ReplenishmentPage from "../components/personalAccount/replenishmentPage/ReplenishmentPage.vue";

import { reactive, inject, ref } from "vue";

const pages = ["Главная", "Приём", "Выплаты", "Отчёты", "API", "Настройки"];
const currentPage = ref(pages[0]);

const selectedPage = ref(0);

function changePage(index) {
  currentPage.value = pages[index];
  selectedPage.value = index;
}
</script>

<template>
  <section class="cont">
    <aside>
      <h1 class="logo">LOGO</h1>
      <img class="line" src="/personalAccount/line.svg" alt="" />
      <section class="balance-cont">
        <article class="text-cont">
          <p class="balance">Баланс</p>
          <h2 class="balance-text">1 240 USDT</h2>
        </article>
        <article class="balance-button-cont">
          <button class="replenish-button">Пополнить</button>
          <button class="bring-out-button">Вывести</button>
        </article>
      </section>
      <img class="line" src="/personalAccount/line.svg" alt="" />
      <nav class="nav-button-cont">
        <button
          v-for="(page, index) in pages"
          :key="index"
          class="nav-button"
          :class="{ active: selectedPage === index }"
          @click="changePage(index)"
        >
          {{ page }}
        </button>
      </nav>
    </aside>
    <article class="main">
      <Navigation />
      <MainPage v-if="currentPage === 'Главная'" />
      <PaymentsPage v-if="currentPage === 'Выплаты'" />
      <ReceptionPage v-if="currentPage === 'Приём'" />
      <ReportPage v-if="currentPage === 'Отчёты'" />
      <ApiPage v-if="currentPage === 'API'" />
      <SettingsPage v-if="currentPage === 'Настройки'" />
      <!-- <ReplenishmentPage /> -->
    </article>
  </section>
</template>

<style scoped>
.cont {
  display: flex;
  align-items: flex-start;
  gap: 60px;
}

.usdt-text {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

aside {
  margin: 25px 0px 0px 16px;
  border: 1px solid rgba(45, 237, 218, 0.2);
  border-radius: 12px;
  width: 409px;
  height: 95vh;
  background: #02020e;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
}

.logo {
  font-weight: 600;
  font-size: 40px;
  color: #fff;
  margin: 0;
  margin-top: 24px;
  width: 320px;
  text-align: left;
}

.balance-cont {
  border: 1px solid rgba(45, 237, 218, 0.1);
  border-radius: 24px;
  width: 329px;
  height: 110px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
}

.text-cont {
  display: flex;
  align-items: flex-end;
  gap: 96px;
}

.balance {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
}

.balance-text {
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
}

.balance-button-cont {
  display: flex;
  align-items: center;
  gap: 12px;
}

.replenish-button {
  border-radius: 40px;
  width: 142px;
  height: 33px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #02020e;
}

.bring-out-button {
  border: 1px solid #12d3c0;
  border-radius: 40px;
  width: 142px;
  height: 33px;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
}

.nav-button-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.nav-button {
  border-radius: 30px;
  width: 330px;
  height: 44px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  text-align: left;
  padding: 0px 0px 0px 20px;
  margin-bottom: 12px;
  border-left: 0px;
  border-width: 2px;
}

.nav-button.active {
  color: #12d3c0;
  border-left: 2px solid #12d3c0;
}
</style>
