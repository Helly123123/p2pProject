<script setup>
import { reactive, inject } from "vue";

const accaunt = inject("accaunt");

const stationList = reactive({
  paymentAcceptance: false,
  paymentCurrency: false,
});

function paymentAcceptanceOn() {
  stationList.paymentAcceptance = !stationList.paymentAcceptance;
}

function paymentcurrencyOn() {
  stationList.paymentCurrency = !stationList.paymentCurrency;
}
</script>

<template>
  <section class="user-section">
    <section class="user-accaunt-cont" v-if="!editAccauntStation">
      <article class="user-accaunt-info">
        <img class="user-icon" src="/personalAccount/user.svg" alt="user" />
        <div>
          <h2 class="name-user">Сергей Б.</h2>
          <p class="user-text">@wasdwasd</p>
          <p class="user-text">info@mail.ru</p>
        </div>
      </article>
      <button class="edit-button-phone" @click="editAccauntStationOn">
        <img src="/personalAccount/mainPage/Edit.svg" alt="" />
      </button>
    </section>
    <EditAccaunt v-if="editAccauntStation" />
    <section class="user-balance-cont">
      <article class="balance-cont">
        <p class="balance">Баланс</p>
        <h2 class="balance-text">1 240 USDT</h2>
      </article>
      <article class="balance-button-cont">
        <button class="replenish-button">Пополнить</button>
        <button class="bring-out-button">Вывести</button>
      </article>
    </section>
  </section>
  <section class="report-parameters-section">
    <section class="report-parameters-cont">
      <h2 class="title">Параметры отчёта</h2>
      <img class="line" src="/personalAccount/reportPage/line.svg" alt="" />
      <article class="cont-acceptance">
        <h2 class="subtitle">Тип отчёта</h2>
        <button class="payment-acceptance-button" @click="paymentAcceptanceOn">
          Приём платежа
          <img
            :src="stationList.paymentAcceptance ? '/up.svg' : '/down.svg'"
            alt=""
          />
        </button>
        <article
          v-if="stationList.paymentAcceptance"
          class="payment-acceptance-list"
        >
          <p class="payment-acceptance-text">Вариант</p>
          <p class="payment-acceptance-text">Вариант</p>
          <p class="payment-acceptance-text">Вариант</p>
        </article>
      </article>
      <article class="cont-period">
        <h2 class="subtitle">Период</h2>
        <article>
          <input placeholder="от" type="text" />
          <input placeholder="до" type="text" />
        </article>
      </article>
      <article class="payment-currency-cont">
        <h2 class="subtitle">Валюта</h2>
        <button @click="paymentcurrencyOn" class="payment-currenc-button">
          USD
          <img
            :src="stationList.paymentCurrency ? '/up.svg' : '/down.svg'"
            alt=""
          />
        </button>
        <article
          class="payment-acceptance-list"
          v-if="stationList.paymentCurrency"
        >
          <p class="payment-acceptance-text">Вариант</p>
          <p class="payment-acceptance-text">Вариант</p>
          <p class="payment-acceptance-text">Вариант</p>
        </article>
      </article>
      <button class="export-report-button">Экспортировать отчёт в PDF</button>
    </section>
  </section>
</template>

<style scoped>
.report-parameters-section {
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
}

.user-section {
  display: none;
}

.report-parameters-cont {
  margin-left: 16px;
}

.payment-acceptance-button {
  border-radius: 12px;
  width: 320px;
  height: 41px;
  background: #02020e;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
}

.payment-acceptance-list {
  right: -40px;
  top: 0px;
  position: absolute;
  text-align: center;
  list-style-type: none;
  border: 1px solid rgba(18, 211, 192, 0.2);
  border-radius: 8px;
  width: 90px;
  height: 95px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: #02020e;
}

.payment-acceptance-text {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 5px;
}

.cont-acceptance {
  display: flex;
  align-items: center;
  position: relative;
  gap: 30px;
  width: 500px;
  margin-bottom: 16px;
  margin-top: 24px;
}

.cont-period {
  display: flex;
  align-items: center;
  gap: 45px;
  margin-bottom: 16px;
}

.payment-currency-cont {
  position: relative;
  display: flex;
  align-items: center;
  gap: 55px;
  width: 500px;
}

.title {
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
  margin: 0;
  margin-bottom: 24px;
}

.subtitle {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
}

input {
  border-radius: 12px;
  padding: 0px 0px 0px 10px;
  width: 145px;
  height: 41px;
  background: #02020e;
  border: none;
  outline: none;
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
}

.payment-currenc-button {
  border-radius: 12px;
  width: 320px;
  height: 41px;
  background: #02020e;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 240px;
}

.export-report-button {
  border-radius: 50px;
  width: 364px;
  height: 56px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
  margin-top: 24px;
}

@media screen and (max-width: 1800px) {
  .line {
    width: 1180px;
  }
}

@media screen and (max-width: 1700px) {
  .line {
    width: 1100px;
  }
}

@media screen and (max-width: 1550px) {
  .line {
    width: 1000px;
  }
}

@media screen and (max-width: 1450px) {
  .line {
    width: 900px;
  }
}

@media screen and (max-width: 1350px) {
  .line {
    width: 800px;
  }
}

@media screen and (max-width: 1250px) {
  .line {
    width: 700px;
  }
}

@media screen and (max-width: 1150px) {
  .line {
    width: 600px;
  }
}

@media screen and (max-width: 1050px) {
  .line {
    width: 500px;
  }
}

@media screen and (max-width: 830px) {
  .line {
    width: 400px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .export-report-button {
    width: 340px;
    height: 40px;
    font-size: 18px;
    margin-top: 24px;
  }

  input {
    width: 130px;
    height: 41px;
    margin-left: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .payment-acceptance-button {
    width: 290px;
    height: 41px;
    font-size: 12px;
    gap: 150px;
  }

  .payment-currenc-button {
    width: 290px;
    height: 41px;
    font-size: 14px;
    gap: 220px;
  }

  .report-parameters-section {
    padding: 16px;
    width: 460px;
  }

  .payment-acceptance-list {
    right: -10px;
  }
}

@media screen and (max-width: 768px) {
  .line {
    width: 600px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .export-report-button {
    height: 40px;
    font-size: 18px;
    margin-top: 24px;
    width: 100%;
  }

  input {
    width: 130px;
    height: 41px;
    margin-left: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .payment-acceptance-button {
    width: 290px;
    height: 41px;
    font-size: 12px;
    gap: 150px;
  }

  .payment-currenc-button {
    width: 290px;
    height: 41px;
    font-size: 14px;
    gap: 220px;
  }

  .report-parameters-section {
    padding: 16px;
    width: 620px;
  }

  .user-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;
  }

  .user-accaunt-cont {
    border-radius: 16px;
    width: 650px;
    height: 112px;
    backdrop-filter: blur(150px);
    background: rgba(10, 10, 26, 0.8);
    display: flex;
    align-items: center;
    justify-content: left;
    position: relative;
  }

  .user-accaunt-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 20px;
  }

  .name-user {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
    margin-bottom: 8px;
  }

  .user-text {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #fff;
    opacity: 0.4;
    margin: 0;
  }

  .edit-button-phone {
    position: absolute;
    right: 20px;
    border-radius: 40px;
    width: 40px;
    height: 32px;
    background: #12d3c0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-balance-cont {
    border-radius: 16px;
    width: 650px;
    height: 112px;
    backdrop-filter: blur(150px);
    background: rgba(10, 10, 26, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 245px;
    position: relative;
  }

  .balance-cont {
    position: absolute;
    left: 20px;
  }

  .balance {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
  }

  .balance-text {
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
    margin-top: 20px;
  }

  .replenish-button {
    border-radius: 40px;
    width: 150px;
    height: 33px;
    background: #12d3c0;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #02020e;
  }

  .balance-button-cont {
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: absolute;
    right: 20px;
  }

  .bring-out-button {
    border: 1px solid #12d3c0;
    border-radius: 40px;
    width: 150px;
    height: 33px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    background-color: transparent;
  }
}

@media screen and (max-width: 650px) {
  .line {
    width: 500px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .export-report-button {
    height: 40px;
    font-size: 18px;
    margin-top: 24px;
    width: 100%;
  }

  input {
    width: 130px;
    height: 41px;
    margin-left: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .payment-acceptance-button {
    width: 290px;
    height: 41px;
    font-size: 12px;
    gap: 150px;
  }

  .payment-currenc-button {
    width: 290px;
    height: 41px;
    font-size: 14px;
    gap: 220px;
  }

  .report-parameters-section {
    padding: 16px;
    width: 520px;
  }

  .user-section {
    margin-bottom: 30px;
  }

  .user-accaunt-cont {
    width: 550px;
    height: 112px;
  }

  .user-accaunt-info {
    gap: 12px;
    margin-left: 20px;
  }

  .name-user {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 14px;
  }

  .edit-button-phone {
    right: 20px;
    width: 40px;
    height: 32px;
  }

  .user-balance-cont {
    width: 550px;
    height: 112px;
    gap: 245px;
  }

  .balance-cont {
    position: absolute;
    left: 20px;
  }

  .balance {
    font-size: 16px;
  }

  .balance-text {
    font-size: 32px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 150px;
    height: 33px;
    font-size: 14px;
  }

  .balance-button-cont {
    gap: 14px;
    right: 20px;
  }

  .bring-out-button {
    width: 150px;
    height: 33px;
    font-size: 14px;
  }
}

@media screen and (max-width: 550px) {
  .line {
    width: 400px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .export-report-button {
    height: 40px;
    font-size: 18px;
    margin-top: 24px;
    width: 100%;
  }

  input {
    width: 100px;
    height: 41px;
    margin-left: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .payment-acceptance-button {
    width: 290px;
    height: 41px;
    font-size: 12px;
    gap: 150px;
  }

  .payment-currenc-button {
    width: 290px;
    height: 41px;
    font-size: 14px;
    gap: 220px;
  }

  .payment-acceptance-list {
    right: 130px;
    top: 0px;
  }

  .report-parameters-section {
    padding: 16px;
    width: 420px;
  }

  .user-section {
    margin-bottom: 30px;
  }

  .user-accaunt-cont {
    width: 450px;
    height: 112px;
  }

  .user-accaunt-info {
    gap: 12px;
    margin-left: 20px;
  }

  .name-user {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 14px;
  }

  .edit-button-phone {
    right: 20px;
    width: 40px;
    height: 32px;
  }

  .user-balance-cont {
    width: 450px;
    height: 112px;
    gap: 245px;
  }

  .balance-cont {
    position: absolute;
    left: 20px;
  }

  .balance {
    font-size: 16px;
  }

  .balance-text {
    font-size: 32px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 150px;
    height: 33px;
    font-size: 14px;
  }

  .balance-button-cont {
    gap: 14px;
    right: 20px;
  }

  .bring-out-button {
    width: 150px;
    height: 33px;
    font-size: 14px;
  }
}

@media screen and (max-width: 450px) {
  .line {
    width: 400px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .export-report-button {
    height: 40px;
    font-size: 16px;
    margin-top: 24px;
    width: 100%;
  }

  input {
    width: 100px;
    height: 41px;
    margin-left: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .payment-acceptance-list {
    right: 260px;
    top: 0px;
  }

  .payment-acceptance-button {
    width: 150px;
    height: 41px;
    font-size: 12px;
    gap: 10px;
  }

  .payment-currenc-button {
    width: 150px;
    height: 41px;
    font-size: 14px;
    gap: 70px;
  }

  .report-parameters-section {
    padding: 16px;
    width: 320px;
  }

  .user-section {
    margin-bottom: 30px;
  }

  .user-accaunt-cont {
    width: 350px;
    height: 112px;
  }

  .user-accaunt-info {
    gap: 12px;
    margin-left: 20px;
  }

  .name-user {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 14px;
  }

  .edit-button-phone {
    right: 20px;
    width: 40px;
    height: 32px;
  }

  .user-balance-cont {
    width: 350px;
    height: 112px;
    gap: 245px;
  }

  .balance-cont {
    position: absolute;
    left: 20px;
  }

  .balance {
    font-size: 14px;
  }

  .balance-text {
    font-size: 26px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 120px;
    height: 33px;
    font-size: 12px;
  }

  .balance-button-cont {
    gap: 14px;
    right: 20px;
  }

  .bring-out-button {
    width: 120px;
    height: 33px;
    font-size: 12px;
  }
}
</style>
