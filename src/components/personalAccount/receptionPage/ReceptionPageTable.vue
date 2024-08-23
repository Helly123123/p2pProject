<script setup>
import { reactive, provide, inject } from "vue";
const reception = inject("reception");
</script>

<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th class="time">Время</th>
        <th class="amount">Сумма</th>
        <th class="commission">Комиссия</th>
        <th class="credited">Зачислено</th>
      </tr>
    </thead>
    <img class="line" src="/personalAccount/PaymentsTable/line.svg" alt="" />
    <tbody v-if="reception.length > 0">
      <tr v-for="reception in reception" :key="reception.id">
        <td class="time-text">{{ reception.time }}</td>
        <td class="text">{{ reception.amount }} USDT</td>
        <td class="text">{{ reception.commission }} USDT</td>
        <td class="text credited-text">{{ reception.credited }} USDT</td>
      </tr>
    </tbody>
  </table>
  <article v-if="reception.length === 0" class="no-pay-cont">
    <img src="/personalAccount/ReceptionPageTable/Send.svg" alt="" />
    <h1 class="no-pay-text">Приёма пока не было</h1>
  </article>
  <button v-if="reception.length > 0" class="show-more-button">
    Показать еще
  </button>
</template>

<style scoped>
.line {
  position: absolute;
  top: 75px;
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.no-pay-text {
  font-weight: 700;
  font-size: 18px;
  line-height: 115%;
  color: #fff;
  opacity: 0.3;
}

.no-pay-cont {
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.time {
  text-align: left;
}

.table {
  width: 100px;
}

.amount {
  width: 100px;
  text-align: right;
}

.commission {
  text-align: right;
}

.credited {
  text-align: right;
}

.text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 100px;
  text-align: right;
}

.time-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 700px;
}

.credited-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #12d3c0;
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
  margin-bottom: 16px;
}

.styled-table {
  width: 97%;
  border-collapse: collapse;
  margin: 1em 0;
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
  padding: 16px 16px 50px 16px;
}

.styled-table td {
  padding: 16px;
}

.styled-table tr {
}

.styled-table tbody tr:nth-child(odd) {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  width: 1198px;
  height: 44px;
}

@media screen and (max-width: 1800px) {
  .line {
    width: 1050px;
    height: 3px;
  }

  .show-more-button {
    width: 1150px;
    height: 30px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }
}

@media screen and (max-width: 1700px) {
  .line {
    width: 950px;
    height: 3px;
  }

  .show-more-button {
    width: 1050px;
    height: 30px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 14px;
    width: 700px;
  }

  .text {
    font-size: 14px;
    width: 100px;
  }
}

@media screen and (max-width: 1550px) {
  .show-more-button {
    width: 950px;
    height: 30px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }
}

@media screen and (max-width: 1450px) {
  .line {
    width: 750px;
    height: 3px;
  }

  .show-more-button {
    width: 850px;
    height: 30px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 12px;
    width: 700px;
  }

  .text {
    font-size: 12px;
    width: 100px;
  }
}

@media screen and (max-width: 1350px) {
  .show-more-button {
    width: 770px;
    height: 30px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }
}

@media screen and (max-width: 1250px) {
  .line {
    width: 680px;
    height: 3px;
  }

  .show-more-button {
    width: 680px;
    height: 30px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 10px;
    width: 700px;
  }

  .text {
    font-size: 10px;
    width: 100px;
  }
}

@media screen and (max-width: 1150px) {
  .line {
    width: 580px;
    height: 3px;
  }

  .show-more-button {
    width: 580px;
    height: 30px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 10px;
    width: 700px;
  }

  .text {
    font-size: 10px;
    width: 100px;
  }
}

@media screen and (max-width: 1050px) {
  .line {
    width: 480px;
    height: 3px;
  }

  .show-more-button {
    width: 480px;
    height: 30px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 10px;
    width: 700px;
  }

  .text {
    font-size: 10px;
    width: 100px;
  }
}

@media screen and (max-width: 830px) {
  .line {
    width: 420px;
    height: 3px;
  }

  .show-more-button {
    width: 440px;
    height: 25px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 10px;
    width: 700px;
  }

  .text {
    font-size: 9px;
    width: 100px;
  }
}

@media screen and (max-width: 768px) {
  .line {
    width: 600px;
    height: 5px;
  }

  .show-more-button {
    width: 600px;
    height: 25px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 11px;
    width: 700px;
  }

  .text {
    font-size: 11px;
    width: 100px;
  }
}

@media screen and (max-width: 650px) {
  .line {
    width: 500px;
    height: 5px;
  }

  .show-more-button {
    width: 500px;
    height: 25px;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 11px;
    width: 700px;
  }

  .text {
    font-size: 11px;
    width: 100px;
  }
}

@media screen and (max-width: 550px) {
  .line {
    width: 400px;
    height: 5px;
  }

  .show-more-button {
    width: 400px;
    height: 25px;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 10px;
    width: 700px;
  }

  .text {
    font-size: 10px;
    width: 100px;
  }
}

@media screen and (max-width: 450px) {
  .line {
    width: 300px;
    height: 5px;
  }

  .show-more-button {
    width: 300px;
    height: 25px;
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 16px;
  }

  .time-text {
    font-size: 8px;
    width: 700px;
  }

  .text {
    font-size: 8px;
    width: 100px;
  }

  .styled-table th {
    font-size: 10px;
  }
}
</style>
