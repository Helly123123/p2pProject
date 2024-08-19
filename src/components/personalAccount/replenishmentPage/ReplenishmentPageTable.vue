<script setup>
import { reactive, provide, inject } from "vue";
const replenishment = inject("replenishment");
const replenishmentInfo = inject("replenishmentInfo");
const replenishmentInfoStationOn = inject("replenishmentInfoStationOn");
const clearReplenishmentInfo = async () => {
  replenishmentInfo.value = [];
};

const addToReplenishmentInfo = (replenishment) => {
  replenishmentInfo.value.push(replenishment);
};

const onClickOpenReplenishmentInfo = async (replenishment) => {
  if (replenishmentInfo) {
    await clearReplenishmentInfo();
    addToReplenishmentInfo(replenishment);
    replenishmentInfoStationOn();
    console.log(replenishmentInfo);
  } else {
    await addToReplenishmentInfo(replenishment);
    replenishmentInfoStationOn();
  }
};
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
    <tbody v-if="replenishment.length > 0">
      <tr
        @click="onClickOpenReplenishmentInfo(replenishment)"
        v-for="replenishment in replenishment"
        :key="replenishment.id"
      >
        <td class="time-text">{{ replenishment.time }}</td>
        <td class="text">{{ replenishment.amount }} USDT</td>
        <td class="text">{{ replenishment.commission }} USDT</td>
        <td class="text credited-text">{{ replenishment.credited }} USDT</td>
      </tr>
    </tbody>
  </table>
  <article v-if="replenishment.length === 0" class="no-pay-cont">
    <img src="/personalAccount/replenishmentPage/pay.svg" alt="" />
    <h1 class="no-pay-text">Пополнений пока не было</h1>
  </article>
  <button v-if="replenishment.length > 0" class="show-more-button">
    Показать еще
  </button>
</template>

<style scoped>
.line {
  position: absolute;
  top: 75px;
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

.time-text {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 700px;
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
</style>
