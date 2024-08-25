<script setup>
import PaymentsTable from "./PaymentsTable.vue";
import PaymentsInfoCard from "./paymentsInfo/paymentsInfoList.vue";
import PaymentsCardList from "./shopCard/PaymentsCardList.vue";
import { reactive, inject, provide, ref } from "vue";
const paymentsInfo = ref([]);

const paymentsInfoStation = ref(false);

function paymentsInfoStationOn() {
  paymentsInfoStation.value = true;
}

function paymentsInfoStationOff() {
  paymentsInfoStation.value = false;
}

const stationList = reactive({
  period: false,
  selectedPeriod: null,
  currency: false,
  selectedСurrency: null,
});

function selectPeriod(period) {
  stationList.selectedPeriod = period;
  stationList.period = false;
}

function selectСurrency(currency) {
  stationList.selectedСurrency = currency;
  stationList.currency = false;
}

function stationListPeriodOn() {
  stationList.period = !stationList.period;
}

function stationListCurrencyOn() {
  stationList.currency = !stationList.currency;
}

const transfeData = reactive({
  currency: "",
  amount: null,
  cardholder: "",
  cardNumber: null,
  nameBank: "",
  iban: null,
  recipientNumber: null,
  recipientEmail: "",
  other: "",
});

const payments = reactive([
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: false,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: false,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    payName: "CX0402144",
    recipientName: "Иванов И. И.",
    recipientMail: "info@mail.ru",
    recipientNumber: "+7 (000) 000-00-00",
    currency: "Рубль",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1566,
    amountUsdt: 1050,
    status: true,
  },
]);

const clearPaymentsInfo = async () => {
  paymentsInfo.value = [];
};

const addToPaymentsInfo = (payments) => {
  paymentsInfo.value.push(payments);
};

const onClickOpenInfoCard = async (payments) => {
  if (paymentsInfo) {
    await clearPaymentsInfo();
    paymentsInfoStationOn();
    addToPaymentsInfo(payments);
    console.log(paymentsInfo);
  } else {
    await addToPaymentsInfo(payments);
    paymentsInfoStationOn();
  }
};

provide("payments", payments);
provide("paymentsInfo", paymentsInfo);
provide("paymentsInfoStationOn", paymentsInfoStationOn);
provide("paymentsInfoStationOff", paymentsInfoStationOff);
</script>

<template>
  <PaymentsInfoCard v-if="paymentsInfoStation" />
  <section class="payment-table-section">
    <article class="pay-title-cont">
      <article class="pay-title-cont-sect">
        <h2 class="pay-text">Выплата</h2>
        <article class="search-sect">
          <article class="search-cont">
            <input
              class="search"
              type="text"
              placeholder="Поиск по ID"
              name=""
              id=""
            />
            <img
              class="search-img"
              src="/personalAccount/PaymentsTable/Search.svg"
              alt=""
            />
          </article>
        </article>
      </article>
      <button class="payment-acceptance-button" @click="stationListPeriodOn">
        {{ stationList.selectedPeriod || "Период" }}
        <img :src="stationList.period ? '/up.svg' : '/down.svg'" alt="" />
      </button>
      <article v-if="stationList.period" class="payment-acceptance-list">
        <p class="payment-acceptance-text" @click="selectPeriod('Неделя')">
          Неделя
        </p>
        <p class="payment-acceptance-text" @click="selectPeriod('Месяц')">
          Месяц
        </p>
        <p class="payment-acceptance-text" @click="selectPeriod('Год')">Год</p>
      </article>
    </article>
    <section class="payments-table">
      <section class="payments-table-cont">
        <PaymentsTable />
      </section>
      <PaymentsCardList
        @open-card="onClickOpenInfoCard"
        v-if="payments.length > 0"
        class="PaymentsCardList"
      />
      <article v-else class="no-pay-cont">
        <img src="/personalAccount/PaymentsTable/Send.svg" alt="" />
        <h1 class="no-pay-text">Выплат пока не было</h1>
      </article>
    </section>
  </section>
</template>

<style scoped>
.money-transfer-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.no-pay-cont {
  margin-top: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: none;
}

.no-pay-text {
  font-weight: 700;
  font-size: 18px;
  line-height: 115%;
  color: #fff;
  opacity: 0.3;
}

.PaymentsCardList {
  display: none;
}

.money-transfer-section-phone {
  display: none;
}

.input-section {
  border-radius: 16px;
  width: 880px;
  height: 171px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
}

.pay-title-cont-sect {
  display: flex;
  align-items: center;
  gap: 30px;
}

form {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 16px;
}

.currency-button-open {
  border-radius: 12px;
  width: 200px;
  height: 41px;
  background: #02020e;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
}

.currency-list {
  position: absolute;
  left: 145px;
  top: 60px;
  z-index: 100;
  text-align: right;
  list-style-type: none;
  border: 1px solid rgba(18, 211, 192, 0.2);
  border-radius: 8px;
  padding: 5px 12px 5px 12px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: #02020e;
}

.currency-list-text {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 7px;
  cursor: pointer;
}

.payment-acceptance-button {
  border-radius: 8px;
  width: 100px;
  height: 31px;
  background: #02020e;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.payment-acceptance-list {
  position: absolute;
  right: 18px;
  top: 75px;
  z-index: 100;
  text-align: right;
  list-style-type: none;
  border: 1px solid rgba(18, 211, 192, 0.2);
  border-radius: 8px;
  padding: 5px 12px 5px 12px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: #02020e;
}

.payment-acceptance-text {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 5px;
  cursor: pointer;
}

.period-list-cont {
  position: absolute;
}

.period-list-button {
  margin-left: 670px;
  border-radius: 8px;
  width: 100px;
  height: 31px;
  background: #02020e;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
}

.period-list {
  border: 1px solid rgba(18, 211, 192, 0.2);
  border-radius: 8px;
  width: 74px;
  height: 89px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: #02020e;
  position: absolute;
  top: 10px;
  right: 0;
}

.input-pay {
  padding: 0px 0px 0px 10px;
  border-radius: 12px;
  width: 190px;
  height: 41px;
  background: #02020e;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  border: none;
  outline: none;
}

.input-other {
  position: absolute;
  padding: 0px 0px 0px 10px;
  border-radius: 12px;
  width: 412px;
  height: 41px;
  background: #02020e;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  border: none;
  outline: none;
}

.translate-button {
  position: absolute;
  border-radius: 50px;
  width: 206px;
  height: 41px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
  right: 25px;
}

.balance-section {
  border-radius: 16px;
  padding: 10px 0px;
  width: 340px;
  height: 150px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  position: relative;
}

.balance-cont-usdt {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.balance-cont-rub {
  display: flex;
  align-items: center;
  margin-top: 35px;
}

.balance {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
  margin-left: 16px;
}

.balance-usdt {
  border-radius: 20px;
  width: 200px;
  height: 41px;
  background: rgba(18, 211, 192, 0.1);
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
}

.balance-rub {
  border-radius: 20px;
  width: 200px;
  height: 41px;
  background: rgba(18, 211, 192, 0.1);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
}

.pay-text {
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
  margin: 0;
}

.search-cont {
  position: relative;
}

.search {
  border: 1px solid #12d3c0;
  border-radius: 20px;
  padding: 0px 0px 0px 16px;
  width: 240px;
  height: 32px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  opacity: 0.6;
  background-color: transparent;
  position: relative;
}

.search-img {
  position: absolute;
  right: 15px;
  top: 9px;
}

.payment-table-section {
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  margin-top: 30px;
  position: relative;
}

.pay-title-cont {
  display: flex;
  align-items: center;
  gap: 600px;
  margin-top: 16px;
}

.payments-table {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
}

.payments-table-cont {
  border: 1px solid rgba(45, 237, 218, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.show-more-button {
  border: 1px solid #12d3c0;
  border-radius: 40px;
  width: 1200px;
  height: 30px;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  margin-top: -10px;
}

@media screen and (max-width: 1800px) {
  .input-section {
    width: 860px;
    height: 171px;
  }

  .translate-button {
    width: 206px;
    height: 41px;
    font-size: 20px;
    right: 20px;
  }

  .payments-table-cont {
    width: 1200px;
    padding: 10px 0px;
  }

  .pay-title-cont {
    gap: 680px;
    margin-top: 16px;
  }

  .currency-list {
    left: 135px;
  }
}

@media screen and (max-width: 1700px) {
  .input-section {
    width: 770px;
    height: 171px;
  }

  .translate-button {
    width: 180px;
    height: 35px;
    font-size: 18px;
    right: 15px;
  }

  .payments-table-cont {
    width: 1105px;
    padding: 10px 0px;
  }

  .input-other {
    width: 360px;
    height: 41px;
    font-size: 14px;
  }

  .pay-title-cont {
    gap: 590px;
    margin-top: 16px;
  }
  .input-pay {
    width: 170px;
    height: 41px;
    font-size: 14px;
  }

  .currency-list {
    left: 115px;
  }

  .currency-button-open {
    width: 180px;
    height: 41px;
    font-size: 14px;
    gap: 70px;
  }
}

@media screen and (max-width: 1550px) {
  .input-section {
    width: 665px;
    height: 171px;
  }

  .translate-button {
    width: 150px;
    height: 35px;
    font-size: 16px;
    right: 20px;
  }

  .currency-list {
    left: 90px;
  }

  .payments-table-cont {
    width: 1000px;
    padding: 10px 0px;
  }

  .input-other {
    width: 300px;
    height: 41px;
    font-size: 14px;
  }

  .pay-title-cont {
    gap: 480px;
    margin-top: 16px;
  }
  .input-pay {
    width: 140px;
    height: 41px;
    font-size: 12px;
  }

  .currency-button-open {
    width: 150px;
    height: 41px;
    font-size: 12px;
    gap: 60px;
  }
}

@media screen and (max-width: 1450px) {
  .input-section {
    width: 600px;
    height: 171px;
  }

  .currency-list {
    left: 70px;
  }

  .translate-button {
    width: 140px;
    height: 35px;
    font-size: 14px;
    right: 10px;
  }

  .payments-table-cont {
    width: 900px;
    padding: 10px 0px;
  }

  .input-other {
    width: 280px;
    height: 41px;
    font-size: 14px;
  }

  .pay-title-cont {
    gap: 360px;
    margin-top: 16px;
  }

  .input-pay {
    width: 130px;
    height: 41px;
    font-size: 12px;
  }

  .currency-button-open {
    width: 140px;
    height: 41px;
    font-size: 12px;
    gap: 50px;
  }

  .balance-section {
    width: 300px;
    height: 150px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 14px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 150px;
    height: 40px;
    font-size: 14px;
    right: 10px;
  }

  .balance-rub {
    width: 150px;
    height: 40px;
    font-size: 14px;
    right: 10px;
  }
}

@media screen and (max-width: 1350px) {
  .input-section {
    width: 510px;
    height: 171px;
  }

  .currency-list {
    left: 50px;
  }

  .translate-button {
    width: 110px;
    height: 30px;
    font-size: 14px;
    right: 20px;
  }

  .payments-table-cont {
    width: 800px;
    padding: 10px 0px;
  }

  .input-other {
    width: 220px;
    height: 41px;
    font-size: 12px;
  }

  .pay-title-cont {
    gap: 280px;
    margin-top: 16px;
  }

  .input-pay {
    width: 100px;
    height: 41px;
    font-size: 10px;
  }

  .currency-button-open {
    width: 110px;
    height: 41px;
    font-size: 12px;
    gap: 30px;
  }

  .balance-section {
    width: 300px;
    height: 150px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 14px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 150px;
    height: 40px;
    font-size: 14px;
    right: 10px;
  }

  .balance-rub {
    width: 150px;
    height: 40px;
    font-size: 14px;
    right: 10px;
  }
}

@media screen and (max-width: 1250px) {
  .input-section {
    width: 420px;
    height: 171px;
  }

  .currency-list {
    left: 25px;
  }

  .translate-button {
    width: 90px;
    height: 30px;
    font-size: 11px;
    right: 20px;
  }

  .payments-table-cont {
    width: 720px;
    padding: 10px 0px;
  }

  .input-other {
    width: 180px;
    height: 41px;
    font-size: 10px;
  }

  .pay-title-cont {
    gap: 200px;
    margin-top: 16px;
  }

  .input-pay {
    width: 80px;
    height: 41px;
    font-size: 7px;
  }

  .currency-button-open {
    width: 90px;
    height: 41px;
    font-size: 12px;
    gap: 10px;
  }

  .balance-section {
    width: 300px;
    height: 150px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 14px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 150px;
    height: 40px;
    font-size: 14px;
    right: 10px;
  }

  .balance-rub {
    width: 150px;
    height: 40px;
    font-size: 14px;
    right: 10px;
  }
}

@media screen and (max-width: 1150px) {
  .input-section {
    width: 420px;
    height: 140px;
  }

  .currency-list {
    left: 45px;
  }
  .translate-button {
    width: 90px;
    height: 25px;
    font-size: 11px;
    right: 20px;
  }

  .payments-table-cont {
    width: 620px;
    padding: 10px 0px;
  }

  .input-other {
    width: 180px;
    height: 30px;
    font-size: 10px;
  }

  .pay-title-cont {
    gap: 100px;
    margin-top: 16px;
  }

  .input-pay {
    width: 80px;
    height: 30px;
    font-size: 7px;
  }

  .currency-button-open {
    width: 90px;
    height: 30px;
    font-size: 10px;
    gap: 10px;
  }

  .balance-section {
    width: 200px;
    height: 120px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 10px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 90px;
    height: 35px;
    font-size: 14px;
    right: 10px;
  }

  .balance-rub {
    width: 90px;
    height: 35px;
    font-size: 14px;
    right: 10px;
  }
}

@media screen and (max-width: 1050px) {
  .input-section {
    width: 550px;
    height: 140px;
  }

  .translate-button {
    width: 125px;
    height: 25px;
    font-size: 12px;
    right: 15px;
  }

  .payments-table-cont {
    width: 500px;
    padding: 10px 0px;
  }

  .input-other {
    width: 250px;
    height: 30px;
    font-size: 12px;
  }

  .pay-title-cont {
    gap: 80px;
    margin-top: 16px;
  }

  .input-pay {
    width: 115px;
    height: 30px;
    font-size: 10px;
  }

  .currency-button-open {
    width: 115px;
    height: 30px;
    font-size: 10px;
    gap: 40px;
  }

  .balance-section {
    width: 550px;
    height: 120px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .search {
    width: 140px;
    height: 30px;
    font-size: 12px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 16px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .balance-rub {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .money-transfer-section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }
}

@media screen and (max-width: 820px) {
  .input-section {
    width: 500px;
    height: 140px;
  }

  .translate-button {
    width: 110px;
    height: 25px;
    font-size: 12px;
    right: 15px;
  }

  .payments-table-cont {
    width: 465px;
    padding: 10px 0px;
  }

  .input-other {
    width: 250px;
    height: 30px;
    font-size: 12px;
  }

  .pay-title-cont {
    gap: 90px;
    margin-top: 16px;
  }

  .input-pay {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }

  .currency-button-open {
    width: 100px;
    height: 30px;
    font-size: 10px;
    gap: 30px;
  }

  .balance-section {
    width: 500px;
    height: 120px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .search {
    width: 140px;
    height: 30px;
    font-size: 12px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 16px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .pay-text {
    font-size: 20px;
  }

  .balance-rub {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .money-transfer-section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }
}

@media screen and (max-width: 768px) {
  .input-section {
    width: 500px;
    height: 140px;
  }

  .translate-button {
    width: 110px;
    height: 25px;
    font-size: 12px;
    right: 15px;
  }

  .pay-title-cont-sect {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .payments-table-cont {
    display: none;
    width: 700px;
    padding: 10px 0px;
  }

  .input-other {
    width: 250px;
    height: 30px;
    font-size: 12px;
  }

  .payment-acceptance-button {
    width: 150px;
    height: 35px;
    font-size: 12px;
    gap: 60px;
    position: absolute;
    right: 20px;
    top: 100px;
  }

  .pay-title-cont {
    gap: 0px;
    margin-top: 16px;
    flex-direction: column;
  }

  .PaymentsCardList {
    margin-top: 200px;
  }

  .search-sect {
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .input-pay {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }

  .search-img {
    position: absolute;
    right: 15px;
    top: 14px;
  }

  .currency-button-open {
    width: 100px;
    height: 30px;
    font-size: 10px;
    gap: 30px;
    position: absolute;
  }

  .balance-section {
    width: 500px;
    height: 120px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .search {
    width: 530px;
    height: 40px;
    font-size: 16px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 16px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .pay-text {
    font-size: 40px;
    position: absolute;
    left: 20px;
  }

  .balance-rub {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .money-transfer-section {
    display: none;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }

  .money-transfer-section-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .no-pay-cont {
    display: flex;
  }

  .balance-sect-phone {
    border-radius: 16px;
    padding: 12px;
    width: 630px;
    backdrop-filter: blur(150px);
    background: rgba(10, 10, 26, 0.8);
  }

  .text-balance-phone {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .usdt-balance-phone {
    border-radius: 20px;
    width: 170px;
    height: 41px;
    background: rgba(18, 211, 192, 0.1);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }

  .balance-cont-phone {
    display: flex;
    align-items: center;
  }

  .PaymentsCardList {
    display: block;
  }

  .rub-balance-phone {
    border-radius: 20px;
    width: 170px;
    height: 41px;
    background: rgba(18, 211, 192, 0.1);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }

  .payment-acceptance-list {
    right: 20px;
    top: 140px;
  }
}

@media screen and (max-width: 650px) {
  .input-section {
    width: 500px;
    height: 140px;
  }

  .translate-button {
    width: 110px;
    height: 25px;
    font-size: 12px;
    right: 15px;
  }

  .pay-title-cont-sect {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .payments-table-cont {
    width: 700px;
    padding: 10px 0px;
  }

  .input-other {
    width: 250px;
    height: 30px;
    font-size: 12px;
  }

  .payment-acceptance-button {
    width: 150px;
    height: 35px;
    font-size: 12px;
    gap: 60px;
    position: absolute;
    right: 20px;
    top: 100px;
  }

  .pay-title-cont {
    gap: 0px;
    margin-top: 16px;
    flex-direction: column;
  }

  .PaymentsCardList {
    margin-top: 200px;
  }

  .search-sect {
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .input-pay {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }

  .search-img {
    position: absolute;
    right: 15px;
    top: 14px;
  }

  .currency-button-open {
    width: 100px;
    height: 30px;
    font-size: 10px;
    gap: 30px;
    position: absolute;
  }

  .balance-section {
    width: 500px;
    height: 120px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .search {
    width: 500px;
    height: 40px;
    font-size: 16px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 16px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .pay-text {
    font-size: 40px;
    position: absolute;
    left: 20px;
  }

  .balance-rub {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .money-transfer-section {
    display: none;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }

  .money-transfer-section-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .balance-sect-phone {
    border-radius: 16px;
    padding: 12px;
    width: 530px;
    backdrop-filter: blur(150px);
    background: rgba(10, 10, 26, 0.8);
  }

  .text-balance-phone {
    font-size: 20px;
  }

  .usdt-balance-phone {
    border-radius: 20px;
    width: 170px;
    height: 41px;
    background: rgba(18, 211, 192, 0.1);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }

  .balance-cont-phone {
    display: flex;
    align-items: center;
  }

  .rub-balance-phone {
    border-radius: 20px;
    width: 170px;
    height: 41px;
    background: rgba(18, 211, 192, 0.1);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }
}

@media screen and (max-width: 550px) {
  .input-section {
    width: 500px;
    height: 140px;
  }

  .translate-button {
    width: 110px;
    height: 25px;
    font-size: 12px;
    right: 15px;
  }

  .pay-title-cont-sect {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .payments-table-cont {
    width: 700px;
    padding: 10px 0px;
  }

  .input-other {
    width: 250px;
    height: 30px;
    font-size: 12px;
  }

  .payment-acceptance-button {
    width: 150px;
    height: 35px;
    font-size: 12px;
    gap: 60px;
    position: absolute;
    right: 20px;
    top: 100px;
  }

  .pay-title-cont {
    gap: 0px;
    margin-top: 16px;
    flex-direction: column;
  }

  .PaymentsCardList {
    margin-top: 200px;
  }

  .search-sect {
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .input-pay {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }

  .search-img {
    position: absolute;
    right: 15px;
    top: 14px;
  }

  .currency-button-open {
    width: 100px;
    height: 30px;
    font-size: 10px;
    gap: 30px;
    position: absolute;
  }

  .balance-section {
    width: 500px;
    height: 120px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .search {
    width: 400px;
    height: 40px;
    font-size: 16px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 16px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .pay-text {
    font-size: 40px;
    position: absolute;
    left: 20px;
  }

  .balance-rub {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .money-transfer-section {
    display: none;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }

  .money-transfer-section-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .balance-sect-phone {
    border-radius: 16px;
    padding: 12px;
    width: 430px;
    backdrop-filter: blur(150px);
    background: rgba(10, 10, 26, 0.8);
  }

  .text-balance-phone {
    font-size: 20px;
  }

  .usdt-balance-phone {
    border-radius: 20px;
    width: 170px;
    height: 41px;
    background: rgba(18, 211, 192, 0.1);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }

  .balance-cont-phone {
    display: flex;
    align-items: center;
  }

  .rub-balance-phone {
    border-radius: 20px;
    width: 170px;
    height: 41px;
    background: rgba(18, 211, 192, 0.1);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }
}

@media screen and (max-width: 450px) {
  .input-section {
    width: 500px;
    height: 140px;
  }

  .translate-button {
    width: 110px;
    height: 25px;
    font-size: 12px;
    right: 15px;
  }

  .pay-title-cont-sect {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .payments-table-cont {
    width: 700px;
    padding: 10px 0px;
  }

  .input-other {
    width: 250px;
    height: 30px;
    font-size: 12px;
  }

  .payment-acceptance-button {
    width: 150px;
    height: 35px;
    font-size: 12px;
    gap: 60px;
    position: absolute;
    right: 20px;
    top: 100px;
  }

  .pay-title-cont {
    gap: 0px;
    margin-top: 16px;
    flex-direction: column;
  }

  .PaymentsCardList {
    margin-top: 200px;
  }

  .search-sect {
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .input-pay {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }

  .search-img {
    position: absolute;
    right: 15px;
    top: 14px;
  }

  .currency-button-open {
    width: 100px;
    height: 30px;
    font-size: 10px;
    gap: 30px;
    position: absolute;
  }

  .balance-section {
    width: 500px;
    height: 120px;
  }

  .balance-cont-usdt {
    margin-top: 16px;
  }

  .search {
    width: 300px;
    height: 40px;
    font-size: 16px;
  }

  .balance-cont-rub {
    margin-top: 35px;
  }

  .balance {
    font-size: 16px;
    margin-left: 16px;
  }

  .balance-usdt {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .pay-text {
    font-size: 40px;
    position: absolute;
    left: 20px;
  }

  .balance-rub {
    width: 200px;
    height: 35px;
    font-size: 16px;
    right: 10px;
  }

  .money-transfer-section {
    display: none;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }

  .money-transfer-section-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .balance-sect-phone {
    border-radius: 16px;
    padding: 12px;
    width: 330px;
    backdrop-filter: blur(150px);
    background: rgba(10, 10, 26, 0.8);
  }

  .text-balance-phone {
    font-size: 20px;
  }

  .usdt-balance-phone {
    border-radius: 20px;
    width: 170px;
    height: 41px;
    background: rgba(18, 211, 192, 0.1);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }

  .balance-cont-phone {
    display: flex;
    align-items: center;
  }

  .rub-balance-phone {
    border-radius: 20px;
    width: 170px;
    height: 41px;
    background: rgba(18, 211, 192, 0.1);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }
}
</style>
