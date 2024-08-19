<script setup>
import { inject, ref } from "vue";

const paymentsInfoStationOff = inject("paymentsInfoStationOff");

const props = defineProps({
  payName: String,
  time: String,
  adres: String,
  bank: String,
  course: String,
  amount: Number,
  amountUsdt: Number,
  recipientName: String,
  recipientMail: String,
  recipientNumber: String,
  currency: String,
  status: Boolean,
});

function copyPropValue(propKey) {
  const propValue = ref(props[propKey]);

  navigator.clipboard
    .writeText(propValue.value)
    .then(() => {
      console.log(`${propKey} value copied to clipboard: ${propValue.value}`);
    })
    .catch((err) => {
      console.error(`Failed to copy ${propKey} value: `, err);
    });
}
</script>

<template>
  <div class="pay-info-cont"></div>
  <section class="pay-info">
    <img
      @click="paymentsInfoStationOff"
      class="close-icon"
      src="/personalAccount/payInfo/close.svg"
      alt=""
    />
    <h2 class="payment-name">
      Выплата {{ payName }}
      <img
        @click="copyPropValue('payName')"
        src="/personalAccount/payInfo/copy.svg"
        alt=""
      />
    </h2>
    <img src="/personalAccount/payInfo/line.svg" alt="" />
    <section class="text-cont">
      <article class="title-cont">
        <h2 class="title">Стаутс</h2>
        <h2 class="title">Время</h2>
        <h2 class="title">Получатель</h2>
        <h2 class="title">Реквизиты</h2>
        <h2 class="title">E-mail получателя</h2>
        <h2 class="title">Номер получателя</h2>
        <h2 class="title">Банк</h2>
        <h2 class="title">Валюта</h2>
        <h2 class="title">Курс</h2>
        <h2 class="title">Сумма</h2>
        <h2 class="title">
          Сумма списания <br />
          с баланса USDT
        </h2>
      </article>
      <article class="subtitle-cont">
        <span v-if="status" class="status">Успешно</span>
        <span v-if="!status" class="status-false">Отказано </span>
        <span class="subtitle"
          >{{ time }}
          <img
            @click="copyPropValue('time')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ recipientName }}
          <img
            @click="copyPropValue('recipientName')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ adres }}
          <img
            @click="copyPropValue('adres')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ recipientMail }}
          <img
            @click="copyPropValue('recipientMail')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ recipientNumber }}
          <img
            @click="copyPropValue('recipientNumber')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ bank }}
          <img
            @click="copyPropValue('bank')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ currency }}
          <img
            @click="copyPropValue('currency')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >course
          <img
            @click="copyPropValue('course')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ amount }} USDT
          <img
            @click="copyPropValue('amount')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ amountUsdt }} USDT
          <img
            @click="copyPropValue('amountUsdt')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
      </article>
    </section>
  </section>
</template>

<style scoped>
.pay-info-cont {
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(12px);
  background: rgba(2, 2, 14, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pay-info {
  border: 1px solid rgba(18, 211, 192, 0.2);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: #02020e;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.close-icon {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}

.payment-name {
  font-weight: 700;
  font-size: 24px;
  line-height: 115%;
  color: #fff;
  margin: 0;
  margin-bottom: 16px;
}

.text-cont {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 24px;
}

.title-cont {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.subtitle-cont {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #868686;
}

.status {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #63ef63;
}

.status-false {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #ed2d2d;
}

.subtitle {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #fff;
}
</style>
