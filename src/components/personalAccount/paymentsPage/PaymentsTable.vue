<script setup>
import { reactive, provide } from "vue";
const payments = reactive([
  {
    id: 123231123,
    time: "17 июл. 12:35",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1000,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1000,
    amountUsdt: 1050,
    status: false,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1000,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1000,
    amountUsdt: 1050,
    status: false,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1000,
    amountUsdt: 1050,
    status: true,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1000,
    amountUsdt: 1050,
    status: false,
  },
  {
    id: 123231123,
    time: "17 июл. 12:35",
    adres: "4400 **** **** 5611",
    bank: "Sber",
    course: "87,52",
    amount: 1000,
    amountUsdt: 1050,
    status: false,
  },
]);

provide("payments", payments);
</script>

<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Время</th>
        <th>Адрес</th>
        <th>Банк</th>
        <th>Курс</th>
        <th>Сумма</th>
        <th>
          Сумма списания<br />
          с баланса USDT
        </th>
        <th>Статус</th>
      </tr>
    </thead>
    <article class="line-cont">
      <img class="line" src="/personalAccount/PaymentsTable/line.svg" alt="" />
    </article>
    <tbody v-if="payments.length > 0">
      <tr v-for="payments in payments" :key="payments.id">
        <td class="id-text">{{ payments.id }}</td>
        <td class="time-text">{{ payments.time }}</td>
        <td class="addres-text">{{ payments.adres }}</td>
        <td class="bank-text">{{ payments.bank }}</td>
        <td class="course-text">{{ payments.course }}</td>
        <td class="amount-text">{{ payments.amount }}</td>
        <td class="amountUsdt-text">{{ payments.amountUsdt }}</td>
        <td v-if="payments.status" class="status-successfully">Успешно</td>
        <td v-else class="status-refused">Отказано</td>
      </tr>
    </tbody>
  </table>
  <article v-if="payments.length === 0" class="no-pay-cont">
    <img src="/personalAccount/PaymentsTable/Send.svg" alt="" />
    <h1 class="no-pay-text">Выплат пока не было</h1>
  </article>
  <button v-if="payments.length > 0" class="show-more-button">
    Показать еще
  </button>
</template>

<style scoped>
.line-cont {
}

.line {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1165px;
  height: 2px;
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
}

.styled-table {
  width: 97%;
  border-collapse: collapse;
  margin: 1em 0;
}

.id-text {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
}

.no-pay-cont {
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.no-pay-text {
  font-weight: 700;
  font-size: 18px;
  line-height: 115%;
  color: #fff;
  opacity: 0.3;
}

.time-text {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
}

.addres-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
}

.bank-text {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 100px;
}

.course-text {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
}

.amount-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
}

.amountUsdt-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
}

.status-successfully {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #63ef63;
}

.status-refused {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-align: right;
  color: #ed2d2d;
}

.styled-table th {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
}

.styled-table th {
  padding: 10px 10px 30px 10px;
  text-align: left;
}

.styled-table td {
  padding: 10px;
  text-align: left;
}

.styled-table th {
  /* background-color: #f2f2f2; */
}

.styled-table tr {
}

.styled-table tbody tr:nth-child(odd) {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  width: 1198px;
  height: 44px;
}

/* table {
  width: 100%;
}

.id-text {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
  width: 110px;
}

.time-text {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 100px;
}

.addres-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 160px;
}

.bank-text {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 100px;
}

.course-text {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 30px;
}

.amount-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 80px;
  text-align: right;
}

.amount {
  width: 100px;
  text-align: right;
}

.amountUsdt-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  text-align: right;
}
.amount-usdt {
  width: 130px;
  text-align: right;
}

.status-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #63ef63;
  text-align: right;
}

.status {
  width: 100px;
  text-align: right;
}

td {
  margin-top: 12px;
}

th {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
  text-align: left;
} */
</style>
