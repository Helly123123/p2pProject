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
      <button class="logout-button">
        Выйти <img src="/Logout.svg" alt="" />
      </button>
    </aside>
    <article class="main">
      <Navigation />
      <MainPage v-if="currentPage === 'Главная'" />
      <PaymentsPage v-if="currentPage === 'Выплаты'" />
      <ReceptionPage v-if="currentPage === 'Приём'" />
      <ReportPage v-if="currentPage === 'Отчёты'" />
      <ApiPage v-if="currentPage === 'API'" />
      <SettingsPage v-if="currentPage === 'Настройки'" />
    </article>
  </section>
  <section class="cont-phone">
    <Navigation />
    <img class="line-phone" src="/line-phone.svg" alt="" />
    <section class="phone-cont">
      <article class="button-cont-phone">
        <button
          v-for="(page, index) in pages"
          :key="index"
          class="phone-button"
          :class="{ active: selectedPage === index }"
          @click="changePage(index)"
        >
          {{ page }}
        </button>
      </article>
    </section>
    <img class="line-phone" src="/line-phone.svg" alt="" />
    <section>
      <MainPage v-if="currentPage === 'Главная'" />
      <PaymentsPage v-if="currentPage === 'Выплаты'" />
      <ReceptionPage v-if="currentPage === 'Приём'" />
      <ReportPage v-if="currentPage === 'Отчёты'" />
      <ApiPage v-if="currentPage === 'API'" />
      <SettingsPage v-if="currentPage === 'Настройки'" />
    </section>
    <img class="line-phone" src="/line-phone.svg" alt="" />
    <article class="leave-acc-cont-phone">
      <button class="leave-acc-button">
        Выйти <img src="/Logout.svg" alt="" />
      </button>
    </article>
  </section>
</template>

<style scoped>
.cont {
  display: flex;
  align-items: flex-start;
  gap: 60px;
}

.cont-phone {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: none;
}

.line-phone {
  width: 650px;
  margin-top: 32px;
  margin-bottom: 38px;
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

.logout-button {
  position: absolute;
  left: 60px;
  bottom: 100px;
  border-radius: 40px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ed2d2d;
  width: 110px;
  height: 36px;
  background: rgba(237, 45, 45, 0.1);
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
  position: relative;
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

.phone-button {
  border-radius: 30px;
  padding: 12px 24px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 0.02em;
  color: #fff;
}

.phone-button.active {
  color: #12d3c0;
  border-bottom: 2px solid #12d3c0;
}
.button-cont-phone {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}
.one-cont {
  display: flex;
  align-items: center;
  gap: 20px;
}

.two-cont {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media screen and (max-width: 900px) {
  .logout-button {
    left: 40px;
  }
}

@media screen and (max-width: 950px) {
  .cont {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  .nav-button {
    width: 220px;
    height: 44px;
    font-size: 16px;
    margin-bottom: 12px;
    border-left: 0px;
  }

  .balance-cont {
    width: 220px;
    height: 110px;
    gap: 16px;
  }

  .balance {
    font-size: 12px;
  }

  .balance-text {
    font-size: 16px;
  }

  .balance-button-cont {
    gap: 9px;
  }

  .replenish-button {
    width: 100px;
    height: 33px;
    font-size: 12px;
  }

  .bring-out-button {
    width: 100px;
    height: 33px;
    font-size: 12px;
  }

  .text-cont {
    gap: 60px;
  }

  .line {
    width: 240px;
  }

  .logo {
    font-size: 40px;
    margin-top: 24px;
    width: 220px;
    text-align: left;
  }
}

@media screen and (max-width: 1700px) {
  aside {
    width: 300px;
    height: 95vh;
    gap: 24px;
    padding: 0px 15px 0px 16px;
  }

  .balance-cont {
    width: 250px;
    height: 110px;
    gap: 16px;
  }

  .balance {
    font-size: 14px;
  }

  .balance-text {
    font-size: 16px;
  }

  .balance-button-cont {
    gap: 12px;
  }

  .replenish-button {
    width: 100px;
    height: 33px;
    font-size: 12px;
  }

  .bring-out-button {
    width: 100px;
    height: 33px;
    font-size: 12px;
  }

  .text-cont {
    gap: 60px;
  }

  .nav-button {
    width: 250px;
    height: 44px;
    font-size: 14px;
    margin-bottom: 12px;
    border-left: 0px;
    border-width: 2px;
  }

  .line {
    width: 240px;
    height: 3px;
  }

  .logo {
    font-weight: 600;
    font-size: 40px;
    color: #fff;
    margin: 0;
    margin-top: 24px;
    width: 240px;
    text-align: left;
  }
}

@media screen and (max-width: 900px) {
  aside {
    width: 200px;
    height: 95vh;
    gap: 24px;
    padding: 0px 15px 0px 16px;
  }

  .balance-cont {
    width: 200px;
    height: 110px;
    gap: 16px;
  }

  .balance {
    font-size: 12px;
  }

  .balance-text {
    font-size: 12px;
  }

  .balance-button-cont {
    gap: 12px;
  }

  .replenish-button {
    width: 80px;
    height: 30px;
    font-size: 10px;
  }

  .bring-out-button {
    width: 80px;
    height: 30px;
    font-size: 10px;
  }

  .text-cont {
    gap: 45px;
  }

  .nav-button {
    width: 200px;
    height: 40px;
    font-size: 14px;
    margin-bottom: 12px;
    border-left: 0px;
    border-width: 2px;
  }

  .line {
    width: 190px;
    height: 3px;
  }

  .logo {
    font-weight: 600;
    font-size: 30px;
    color: #fff;
    margin: 0;
    margin-top: 24px;
    width: 200px;
    text-align: left;
  }
}

@media screen and (max-width: 768px) {
  aside {
    display: none;
  }

  .cont {
    display: none;
  }

  .cont-phone {
    display: flex;
  }

  .leave-acc-button {
    border-radius: 40px;
    width: 650px;
    height: 40px;
    margin-bottom: 60px;
    background: rgba(237, 45, 45, 0.1);
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #ed2d2d;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 540px;
  }
}

@media screen and (max-width: 650px) {
  .phone-button {
    padding: 12px 24px;
    font-size: 28px;
  }
  .button-cont-phone {
    display: flex;
    gap: 16px;
  }
  .one-cont {
    gap: 20px;
  }

  .two-cont {
    gap: 20px;
  }

  .line-phone {
    width: 550px;
    margin-top: 32px;
    margin-bottom: 38px;
  }

  .leave-acc-button {
    width: 550px;
    height: 40px;
    font-size: 16px;
    gap: 440px;
  }
}

@media screen and (max-width: 550px) {
  .phone-button {
    padding: 12px 24px;
    font-size: 20px;
  }
  .button-cont-phone {
    gap: 16px;
  }
  .one-cont {
    gap: 20px;
  }

  .leave-acc-button {
    width: 450px;
    height: 40px;
    font-size: 16px;
    gap: 340px;
  }

  .two-cont {
    gap: 20px;
  }

  .line-phone {
    width: 450px;
    margin-top: 32px;
    margin-bottom: 38px;
  }
}

@media screen and (max-width: 450px) {
  .phone-button {
    padding: 12px 24px;
    font-size: 14px;
  }
  .button-cont-phone {
    gap: 16px;
  }
  .one-cont {
    gap: 20px;
  }

  .leave-acc-button {
    width: 350px;
    height: 40px;
    font-size: 16px;
    gap: 240px;
  }

  .two-cont {
    gap: 20px;
  }

  .line-phone {
    width: 350px;
    margin-top: 32px;
    margin-bottom: 38px;
  }
}
</style>
