<script setup>
import { reactive } from "vue";
import ReceptionPageTable from "./ReceptionPageTable.vue";

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
  /* padding: 8px; */
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
  margin-left: 16px;
  margin-top: 16px;
}
</style>
