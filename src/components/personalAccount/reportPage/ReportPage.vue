<script setup>
import { reactive } from "vue";

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
  <section class="report-parameters-section">
    <section class="report-parameters-cont">
      <h2 class="title">Параметры отчёта</h2>
      <img src="/personalAccount/reportPage/line.svg" alt="" />
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
</style>
