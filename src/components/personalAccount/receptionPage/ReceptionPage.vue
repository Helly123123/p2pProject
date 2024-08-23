<script setup>
import { reactive, provide } from "vue";
import ReceptionPageTable from "./ReceptionPageTable.vue";

import ReceptionCardList from "./shopCard/ReceptionCardList.vue";

const reception = reactive([
  {
    id: 1,
    time: "17 июл. 12:35",
    amount: 1000,
    commission: 1,
    credited: 1000,
  },
  {
    id: 2,
    time: "17 июл. 12:35",
    amount: 1000,
    commission: 1,
    credited: 1000,
  },
  {
    id: 3,
    time: "17 июл. 12:35",
    amount: 1000,
    commission: 1,
    credited: 1000,
  },
  {
    id: 4,
    time: "17 июл. 12:35",
    amount: 1000,
    commission: 1,
    credited: 1000,
  },
  {
    id: 5,
    time: "17 июл. 12:35",
    amount: 1000,
    commission: 1,
    credited: 1000,
  },
  {
    id: 6,
    time: "17 июл. 12:35",
    amount: 1000,
    commission: 1,
    credited: 1000,
  },
  {
    id: 7,
    time: "17 июл. 12:35",
    amount: 1000,
    commission: 1,
    credited: 1000,
  },
  {
    id: 8,
    time: "17 июл. 12:35",
    amount: 1000,
    commission: 1,
    credited: 1000,
  },
]);

const stationList = reactive({
  period: false,
  selectedPeriod: null,
});

function stationListPeriodOn() {
  stationList.period = !stationList.period;
}

function selectPeriod(period) {
  stationList.selectedPeriod = period;
  stationList.period = false; // Закрыть список после выбора
}

provide("reception", reception);
</script>

<template>
  <section class="reception-section">
    <article class="title-cont">
      <h2 class="title">История приёма</h2>
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
    <section class="reception-section-table-cont">
      <section class="reception-section-table">
        <ReceptionPageTable />
      </section>
      <section>
        <ReceptionCardList
          v-if="reception.length > 0"
          class="ReceptionCardList"
        />
        <article v-if="reception.length === 0" class="no-pay-cont">
          <img src="/personalAccount/ReceptionPageTable/Send.svg" alt="" />
          <h1 class="no-pay-text">Приёма пока не было</h1>
        </article>
      </section>
    </section>
  </section>
</template>

<style scoped>
.reception-section {
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
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
  display: none;
}

.ReceptionCardList {
  display: none;
}

.payment-acceptance-text {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 5px;
  cursor: pointer;
}

.title-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 870px;
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

.reception-section-table-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reception-section-table {
  border: 1px solid rgba(45, 237, 218, 0.1);
  border-radius: 12px;
  width: 1238px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title {
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
  margin-top: 16px;
}

@media screen and (max-width: 1800px) {
  .reception-section-table {
    width: 1200px;
  }

  .title-cont {
    gap: 840px;
  }
}

@media screen and (max-width: 1700px) {
  .reception-section-table {
    width: 1100px;
  }

  .title-cont {
    gap: 740px;
  }
}

@media screen and (max-width: 1550px) {
  .reception-section-table {
    width: 1000px;
  }

  .title-cont {
    gap: 640px;
  }
}

@media screen and (max-width: 1450px) {
  .reception-section-table {
    width: 900px;
  }

  .title-cont {
    gap: 550px;
  }
}

@media screen and (max-width: 1350px) {
  .reception-section-table {
    width: 800px;
  }

  .title-cont {
    gap: 440px;
  }
}

@media screen and (max-width: 1250px) {
  .reception-section-table {
    width: 720px;
  }

  .title-cont {
    gap: 360px;
  }
}

@media screen and (max-width: 1150px) {
  .reception-section-table {
    width: 620px;
  }

  .title-cont {
    gap: 270px;
  }
}

@media screen and (max-width: 1050px) {
  .reception-section-table {
    width: 520px;
  }

  .title-cont {
    gap: 165px;
  }
}

@media screen and (max-width: 830px) {
  .reception-section-table {
    width: 460px;
  }

  .title-cont {
    gap: 180px;
  }

  .title {
    font-size: 20px;
  }
}
@media screen and (max-width: 768px) {
  .reception-section-table {
    width: 620px;
    display: none;
  }

  .ReceptionCardList {
    display: block;
  }

  .payment-acceptance-button {
    position: absolute;
    right: 50px;
    width: 130px;
    height: 40px;
    font-size: 14px;
    gap: 10px;
  }

  .title-cont {
    display: block;
    margin-bottom: 60px;
  }

  .title {
    font-size: 35px;
    margin-left: 5px;
  }

  .payment-acceptance-list {
    right: 50px;
    top: 145px;
  }

  .no-pay-cont {
    display: flex;
  }
}

@media screen and (max-width: 450px) {
  .reception-section-table {
    width: 620px;
    display: none;
  }

  .payment-acceptance-button {
    position: absolute;
    right: 28px;
    width: 100px;
    height: 30px;
    font-size: 12px;
    gap: 10px;
  }

  .title-cont {
    display: block;
    margin-bottom: 60px;
  }

  .title {
    font-size: 20px;
    margin-left: 5px;
  }
  .payment-acceptance-list {
    right: 30px;
    top: 110px;
  }
}
</style>
