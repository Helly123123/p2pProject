<script setup>
import PaymentsTable from "./PaymentsTable.vue";
import { reactive, inject } from "vue";
const payments = inject("payments");
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

const people = reactive([
  { id: 1, name: "Иван", age: 28, city: "Москва" },
  { id: 2, name: "Анна", age: 22, city: "Санкт-Петербург" },
  { id: 3, name: "Сергей", age: 30, city: "Новосибирск" },
  { id: 4, name: "Мария", age: 25, city: "Екатеринбург" },
]);
</script>

<template>
  <section class="money-transfer-section">
    <section class="input-section">
      <article class="form-cont">
        <form novalidate>
          <div class="form-group">
            <input
              class="input-pay"
              type="text"
              id="currency"
              v-model="transfeData.currency"
              placeholder="Валюта"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="input-pay"
              type="number"
              id="amount"
              v-model="transfeData.amount"
              placeholder="Сумма"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="input-pay"
              type="text"
              id="cardholder"
              v-model="transfeData.cardholder"
              placeholder="Владелец карты"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="input-pay"
              type="number"
              id="cardNumber"
              v-model="transfeData.cardNumber"
              placeholder="Номер карты"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="input-pay"
              type="text"
              id="nameBank"
              v-model="transfeData.nameBank"
              placeholder="Название банка"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="input-pay"
              type="number"
              id="iban"
              v-model="transfeData.iban"
              placeholder="IBAN"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="input-pay"
              type="number"
              id="recipientNumber"
              v-model="transfeData.recipientNumber"
              placeholder="Номер получателя"
              required
            />
          </div>
          <div class="form-group">
            <input
              class="input-pay"
              type="text"
              id="recipientEmail"
              v-model="transfeData.recipientEmail"
              placeholder="E-mail получателя"
              required
            />
          </div>
          <article>
            <div class="form-group">
              <input
                class="input-other"
                type="text"
                id="other"
                v-model="transfeData.other"
                placeholder="Другое"
                required
              />
            </div>
            <button class="translate-button">Перевести</button>
          </article>
        </form>
      </article>
    </section>
    <section class="balance-section">
      <article class="balance-cont-usdt">
        <p class="balance">Баланс USDT</p>
        <h2 class="balance-usdt">0.00</h2>
      </article>
      <article class="balance-cont-rub">
        <p class="balance">Баланс RUB</p>
        <h2 class="balance-rub">27.50</h2>
      </article>
    </section>
  </section>
  <section class="payment-table-section">
    <article class="pay-title-cont">
      <h2 class="pay-text">Выплата</h2>
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
    <section class="payments-table">
      <section class="payments-table-cont">
        <PaymentsTable />
      </section>
    </section>
  </section>
</template>

<style scoped>
.money-transfer-section {
  display: flex;
  align-items: center;
  gap: 30px;
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

form {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 16px;
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
  width: 360px;
  height: 171px;
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
  width: 1270px;
  height: 580px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  margin-top: 30px;
}

.pay-title-cont {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 16px;
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
  padding: 16px;
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
</style>
