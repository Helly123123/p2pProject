<script setup>
import { ref, reactive, provide } from "vue";
const replenishmentInfo = ref([]);
import ReplenishmentPageTable from "./ReplenishmentPageTable.vue";
import replenishmentInfoList from "./replenishmentInfo/replenishmentInfoList.vue";
const textToCopyOne = ref("TXFe3cFbGLrQKvYEgoapvPAkGqSZNjcEcS");

const replenishmentInfoStation = ref(false);

function copyTextOne() {
  navigator.clipboard
    .writeText(textToCopyOne.value)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

const stationList = reactive({
  replenishment: false,
  selectedReplenishment: null,
  period: false,
  selectedPeriod: null,
});

function selectReplenishment(replenishment) {
  stationList.selectedReplenishment = replenishment;
  stationList.replenishment = false;
}

function selectPeriod(period) {
  stationList.selectedPeriod = period;
  stationList.period = false;
}

function stationListPeriodOn() {
  stationList.period = !stationList.period;
}

function stationListReplenishmenOn() {
  stationList.replenishment = !stationList.replenishment;
}

function replenishmentInfoStationOn() {
  replenishmentInfoStation.value = true;
}

function replenishmentInfoStationOff() {
  replenishmentInfoStation.value = false;
}

const replenishment = reactive([
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

provide("replenishment", replenishment);
provide("replenishmentInfo", replenishmentInfo);
provide("replenishmentInfoStationOn", replenishmentInfoStationOn);
provide("replenishmentInfoStationOff", replenishmentInfoStationOff);
</script>

<template>
  <replenishmentInfoList v-if="replenishmentInfoStation" />
  <section class="replenishment-section">
    <h2 class="replenishment-title">Пополнение</h2>
    <article class="replenishment-address-cont">
      <h2 class="sutitle-replenishment">Адрес для пополнения USDT</h2>
      <button
        @click="stationListReplenishmenOn"
        class="replenishment-address-button"
      >
        {{ stationList.selectedReplenishment || "TRC20" }}
        <img
          :src="stationList.replenishment ? '/up.svg' : '/down.svg'"
          alt=""
        />
      </button>
      <article
        v-if="stationList.replenishment"
        class="replenishment-address-list"
      >
        <p
          @click="selectReplenishment('Вариант')"
          class="replenishment-address-list-text"
        >
          Вариант
        </p>
        <p
          @click="selectReplenishment('Вариант')"
          class="replenishment-address-list-text"
        >
          Вариант
        </p>
        <p
          @click="selectReplenishment('Вариант')"
          class="replenishment-address-list-text"
        >
          Вариант
        </p>
      </article>
      <p class="addres-text">
        TXFe3cFbGLrQKvYEgoapvPAkGqSZNjcEcS
        <img
          class="img-copy"
          @click="copyTextOne"
          src="/personalAccount/payInfo/copy.svg"
          alt=""
        />
      </p>
    </article>
  </section>
  <section class="replenishment-history-section">
    <article class="title-cont">
      <h2 class="replenishment-history-title">История пополнений</h2>
      <button class="replenishment-history-button" @click="stationListPeriodOn">
        {{ stationList.selectedPeriod || "Период" }}
        <img :src="stationList.period ? '/up.svg' : '/down.svg'" alt="" />
      </button>
      <article v-if="stationList.period" class="replenishment-history-list">
        <p class="replenishment-history-text" @click="selectPeriod('Неделя')">
          Неделя
        </p>
        <p class="replenishment-history-text" @click="selectPeriod('Месяц')">
          Месяц
        </p>
        <p class="replenishment-history-text" @click="selectPeriod('Год')">
          Год
        </p>
      </article>
    </article>
    <section class="replenishment-history-table-cont">
      <section class="replenishment-history-table-section">
        <ReplenishmentPageTable />
      </section>
    </section>
  </section>
</template>

<style scoped>
.replenishment-section {
  border-radius: 16px;
  padding: 16px;
  width: 1270px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  margin-bottom: 30px;
}

.replenishment-address-cont {
  display: flex;
  align-items: center;
  gap: 16px;
}

.replenishment-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
  margin: 0;
  margin-bottom: 24px;
}

.sutitle-replenishment {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
}

.replenishment-address-button {
  border-radius: 12px;
  width: 120px;
  height: 41px;
  background: #02020e;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.replenishment-address-list {
  position: absolute;
  left: 300px;
  top: 120px;
  z-index: 100;
  text-align: right;
  list-style-type: none;
  border: 1px solid rgba(18, 211, 192, 0.2);
  border-radius: 8px;
  padding: 5px 12px 5px 12px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: #02020e;
}

.replenishment-address-list-text {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 7px;
  cursor: pointer;
}

.addres-text {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.img-copy {
  cursor: pointer;
}

.replenishment-history-section {
  border-radius: 16px;
  padding: 16px;
  width: 1270px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
}

.title-cont {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 935px;
}

.replenishment-history-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 115%;
  color: #fff;
  margin: 0;
}

.replenishment-history-button {
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

.replenishment-history-list {
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

.replenishment-history-text {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 5px;
  cursor: pointer;
}

.replenishment-history-table-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.replenishment-history-table-section {
  border: 1px solid rgba(45, 237, 218, 0.1);
  border-radius: 12px;
  width: 1270px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
