<script setup>
import { reactive, provide, inject, ref } from "vue";
const paymentsInfoStationOn = inject("paymentsInfoStationOn");
const payments = inject("payments");

const paymentsInfo = inject("paymentsInfo");

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
      <tr
        v-for="payment in payments"
        :key="payment.id"
        @click="onClickOpenInfoCard(payment)"
      >
        <td class="id-text">{{ payment.id }}</td>
        <td class="time-text">{{ payment.time }}</td>
        <td class="addres-text">{{ payment.adres }}</td>
        <td class="bank-text">{{ payment.bank }}</td>
        <td class="course-text">{{ payment.course }}</td>
        <td class="amount-text">{{ payment.amount }}</td>
        <td class="amountUsdt-text">{{ payment.amountUsdt }}</td>
        <td v-if="payment.status" class="status-successfully">Успешно</td>
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

.styled-table tr {
  cursor: pointer;
}

.styled-table tbody tr:nth-child(odd) {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  width: 1198px;
  height: 44px;
}

@media screen and (max-width: 1800px) {
  .show-more-button {
    width: 1160px;
    height: 30px;
    font-size: 14px;
  }
}

@media screen and (max-width: 1700px) {
  .show-more-button {
    width: 1070px;
    height: 30px;
    font-size: 14px;
  }

  .line {
    top: 90px;
    width: 1070px;
    height: 2px;
  }
}

@media screen and (max-width: 1650px) {
  .show-more-button {
    width: 970px;
    height: 30px;
    font-size: 14px;
  }

  .line {
    top: 90px;
    width: 970px;
    height: 2px;
  }
}

@media screen and (max-width: 1450px) {
  .show-more-button {
    width: 870px;
    height: 30px;
    font-size: 14px;
  }

  .line {
    top: 90px;
    width: 870px;
    height: 3px;
  }

  .id-text {
    font-size: 14px;
  }

  .no-pay-cont {
    margin-top: 80px;
  }

  .no-pay-text {
    font-size: 18px;
  }

  .time-text {
    font-size: 14px;
  }

  .addres-text {
    font-size: 14px;
  }

  .bank-text {
    font-size: 14px;
    width: 100px;
  }

  .course-text {
    font-size: 14px;
  }

  .amount-text {
    font-size: 14px;
  }

  .amountUsdt-text {
    font-size: 14px;
  }

  .status-successfully {
    font-size: 14px;
  }

  .status-refused {
    font-size: 14px;
    color: #ed2d2d;
  }
}

@media screen and (max-width: 1350px) {
  .show-more-button {
    width: 770px;
    height: 30px;
    font-size: 14px;
  }

  .line {
    top: 80px;
    width: 770px;
    height: 4px;
  }

  .id-text {
    font-size: 14px;
  }

  .no-pay-cont {
    margin-top: 80px;
  }

  .no-pay-text {
    font-size: 18px;
  }

  .time-text {
    font-size: 12px;
  }

  .addres-text {
    font-size: 12px;
  }

  .bank-text {
    font-size: 12px;
    width: 100px;
  }

  .course-text {
    font-size: 12px;
  }

  .amount-text {
    font-size: 12px;
  }

  .amountUsdt-text {
    font-size: 12px;
  }

  .status-successfully {
    font-size: 12px;
  }

  .status-refused {
    font-size: 12px;
    color: #ed2d2d;
  }

  .styled-table th {
    font-size: 10px;
  }
}

@media screen and (max-width: 1250px) {
  .show-more-button {
    width: 700px;
    height: 30px;
    font-size: 14px;
  }

  .line {
    top: 80px;
    width: 700px;
    height: 4px;
  }

  .id-text {
    font-size: 14px;
  }

  .no-pay-cont {
    margin-top: 80px;
  }

  .no-pay-text {
    font-size: 18px;
  }

  .time-text {
    font-size: 12px;
  }

  .addres-text {
    font-size: 12px;
  }

  .bank-text {
    font-size: 12px;
    width: 100px;
  }

  .course-text {
    font-size: 12px;
  }

  .amount-text {
    font-size: 12px;
  }

  .amountUsdt-text {
    font-size: 12px;
  }

  .status-successfully {
    font-size: 12px;
  }

  .status-refused {
    font-size: 12px;
    color: #ed2d2d;
  }

  .styled-table th {
    font-size: 8px;
  }
}

@media screen and (max-width: 1150px) {
  .show-more-button {
    width: 600px;
    height: 30px;
    font-size: 14px;
  }

  .line {
    top: 80px;
    width: 600px;
    height: 4px;
  }

  .id-text {
    font-size: 12px;
  }

  .no-pay-cont {
    margin-top: 80px;
  }

  .no-pay-text {
    font-size: 16px;
  }

  .time-text {
    font-size: 10px;
  }

  .addres-text {
    font-size: 10px;
  }

  .bank-text {
    font-size: 10px;
    width: 100px;
  }

  .course-text {
    font-size: 10px;
  }

  .amount-text {
    font-size: 10px;
  }

  .amountUsdt-text {
    font-size: 10px;
  }

  .status-successfully {
    font-size: 10px;
  }

  .status-refused {
    font-size: 10px;
    color: #ed2d2d;
  }

  .styled-table th {
    font-size: 8px;
  }
}

@media screen and (max-width: 1050px) {
  .show-more-button {
    width: 480px;
    height: 30px;
    font-size: 14px;
  }

  .line {
    top: 80px;
    width: 480px;
    height: 4px;
  }

  .id-text {
    font-size: 12px;
  }

  .no-pay-cont {
    margin-top: 80px;
  }

  .no-pay-text {
    font-size: 16px;
  }

  .time-text {
    font-size: 10px;
  }

  .addres-text {
    font-size: 10px;
  }

  .bank-text {
    font-size: 10px;
    width: 100px;
  }

  .course-text {
    font-size: 10px;
  }

  .amount-text {
    font-size: 10px;
  }

  .amountUsdt-text {
    font-size: 10px;
  }

  .status-successfully {
    font-size: 10px;
  }

  .status-refused {
    font-size: 10px;
    color: #ed2d2d;
  }

  .styled-table th {
    font-size: 8px;
  }
}

@media screen and (max-width: 820px) {
  .show-more-button {
    width: 480px;
    height: 30px;
    font-size: 14px;
  }

  .line {
    top: 80px;
    width: 480px;
    height: 4px;
  }

  .id-text {
    font-size: 12px;
  }

  .no-pay-cont {
    margin-top: 80px;
  }

  .no-pay-text {
    font-size: 16px;
  }

  .time-text {
    font-size: 10px;
  }

  .addres-text {
    font-size: 10px;
  }

  .bank-text {
    font-size: 10px;
    width: 100px;
  }

  .course-text {
    font-size: 10px;
  }

  .amount-text {
    font-size: 10px;
  }

  .amountUsdt-text {
    font-size: 10px;
  }

  .status-successfully {
    font-size: 10px;
  }

  .status-refused {
    font-size: 10px;
    color: #ed2d2d;
  }

  .styled-table th {
    font-size: 8px;
  }
}
</style>
