<script setup>
import { ref, reactive, provide } from "vue";
const replenishmentInfo = ref([]);
import ReplenishmentPageTable from "./ReplenishmentPageTable.vue";
import replenishmentInfoList from "./replenishmentInfo/replenishmentInfoList.vue";
import ReceptionCard from "./shopCard/ReceptionCardList.vue";
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
  // {
  //   id: 1,
  //   time: "17 июл. 12:35",
  //   amount: 1000,
  //   commission: 1,
  //   credited: 1000,
  // },
  // {
  //   id: 2,
  //   time: "17 июл. 12:35",
  //   amount: 1000,
  //   commission: 1,
  //   credited: 1000,
  // },
  // {
  //   id: 3,
  //   time: "17 июл. 12:35",
  //   amount: 1000,
  //   commission: 1,
  //   credited: 1000,
  // },
  // {
  //   id: 4,
  //   time: "17 июл. 12:35",
  //   amount: 1000,
  //   commission: 1,
  //   credited: 1000,
  // },
  // {
  //   id: 5,
  //   time: "17 июл. 12:35",
  //   amount: 1000,
  //   commission: 1,
  //   credited: 1000,
  // },
  // {
  //   id: 6,
  //   time: "17 июл. 12:35",
  //   amount: 1000,
  //   commission: 1,
  //   credited: 1000,
  // },
  // {
  //   id: 7,
  //   time: "17 июл. 12:35",
  //   amount: 1000,
  //   commission: 1,
  //   credited: 1000,
  // },
  // {
  //   id: 8,
  //   time: "17 июл. 12:35",
  //   amount: 1000,
  //   commission: 1,
  //   credited: 1000,
  // },
]);

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
      <section class="ReceptionCard">
        <ReceptionCard
          @open-card="onClickOpenReplenishmentInfo"
          v-if="replenishment.length > 0"
        />
        <article v-if="replenishment.length === 0" class="no-pay-cont">
          <img src="/nopay.svg" alt="" />
          <h1 class="no-pay-text">Пополнений пока не было</h1>
        </article>
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

.ReceptionCard {
  display: none;
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
  left: 380px;
  top: 60px;
  z-index: 40;
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
  justify-content: center;
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
  top: 55px;
  z-index: 120;
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

@media screen and (max-width: 1800px) {
  .replenishment-section {
    width: 1200px;
    margin-bottom: 30px;
  }

  .replenishment-history-table-section {
    width: 1200px;
  }

  .replenishment-history-section {
    width: 1200px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 860px;
  }
}

@media screen and (max-width: 1700px) {
  .replenishment-section {
    width: 1110px;
    margin-bottom: 30px;
  }

  .replenishment-history-table-section {
    width: 1110px;
  }

  .replenishment-history-section {
    width: 1110px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 760px;
  }
}

@media screen and (max-width: 1550px) {
  .replenishment-section {
    width: 1000px;
    margin-bottom: 30px;
  }

  .replenishment-history-table-section {
    width: 1000px;
  }

  .replenishment-history-section {
    width: 1000px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 660px;
  }
}

@media screen and (max-width: 1450px) {
  .replenishment-section {
    width: 900px;
    margin-bottom: 30px;
  }

  .replenishment-history-table-section {
    width: 900px;
  }

  .replenishment-history-section {
    width: 900px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 560px;
  }
}

@media screen and (max-width: 1350px) {
  .replenishment-section {
    width: 800px;
    margin-bottom: 30px;
  }

  .replenishment-history-table-section {
    width: 800px;
  }

  .replenishment-history-section {
    width: 800px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 460px;
  }
}

@media screen and (max-width: 1250px) {
  .replenishment-section {
    width: 710px;
    margin-bottom: 30px;
  }

  .replenishment-history-table-section {
    width: 710px;
  }

  .replenishment-history-section {
    width: 710px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 370px;
  }

  .replenishment-address-list {
    left: 365px;
    top: 60px;
  }
}

@media screen and (max-width: 1150px) {
  .replenishment-section {
    width: 620px;
    margin-bottom: 30px;
  }

  .replenishment-address-list {
    left: 325px;
    top: 55px;
  }

  .replenishment-history-table-section {
    width: 620px;
  }

  .replenishment-history-section {
    width: 620px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 28 0px;
  }

  .addres-text {
    font-size: 12px;
    margin-left: 15px;
    gap: 9px;
  }

  .sutitle-replenishment {
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .replenishment-address-button {
    width: 100px;
    height: 40px;
    font-size: 12px;
    gap: 20px;
  }

  .replenishment-address-cont {
    gap: 10px;
  }
}

@media screen and (max-width: 1050px) {
  .replenishment-section {
    width: 520px;
    margin-bottom: 30px;
  }

  .replenishment-history-table-section {
    width: 520px;
  }

  .replenishment-history-section {
    width: 520px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 180px;
  }

  .replenishment-address-list {
    left: 225px;
    top: 80px;
  }

  .addres-text {
    font-size: 12px;
    margin-left: 15px;
    gap: 9px;
  }

  .sutitle-replenishment {
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .replenishment-address-button {
    width: 100px;
    height: 40px;
    font-size: 12px;
    gap: 20px;
  }

  .replenishment-address-cont {
    gap: 10px;
  }
}

@media screen and (max-width: 830px) {
  .replenishment-section {
    width: 460px;
    margin-bottom: 30px;
  }

  .replenishment-history-table-section {
    width: 460px;
  }

  .replenishment-history-section {
    width: 460px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 120px;
  }

  .addres-text {
    font-size: 16px;
    margin-left: 15px;
    gap: 9px;
  }

  .sutitle-replenishment {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .replenishment-address-button {
    width: 150px;
    height: 40px;
    font-size: 16px;
    gap: 50px;
  }

  .replenishment-address-cont {
    margin-left: -10px;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-start;
    gap: 0px;
  }

  .replenishment-address-list {
    left: 175px;
    top: 120px;
  }
}

@media screen and (max-width: 768px) {
  .replenishment-section {
    width: 620px;
    margin-bottom: 30px;
  }

  .replenishment-history-title {
    font-size: 40px;
    position: absolute;
    left: 19px;
  }

  .replenishment-history-table-section {
    width: 460px;
  }

  .replenishment-history-button {
    width: 150px;
    height: 40px;
    font-size: 14px;
    gap: 50px;
    position: absolute;
    right: 19px;
    top: 50px;
  }

  .replenishment-title {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .replenishment-history-section {
    width: 620px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 120px;
    margin-top: 50px;
    position: relative;
    margin-bottom: 100px;
  }

  .addres-text {
    font-size: 20px;
    margin-left: 15px;
    gap: 9px;
  }

  .sutitle-replenishment {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .replenishment-address-button {
    width: 620px;
    height: 40px;
    font-size: 29px;
    gap: 470px;
  }

  .replenishment-address-cont {
    margin-left: -15px;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-start;
    gap: 0px;
  }

  .replenishment-address-list {
    left: 550px;
    top: 175px;
  }

  .ReceptionCard {
    display: block;
  }

  .replenishment-history-table-section {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .replenishment-section {
    width: 520px;
    margin-bottom: 30px;
  }

  .replenishment-history-title {
    font-size: 40px;
    position: absolute;
    left: 19px;
  }

  .replenishment-history-button {
    width: 150px;
    height: 40px;
    font-size: 14px;
    gap: 50px;
    position: absolute;
    right: 19px;
    top: 50px;
  }

  .replenishment-title {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .replenishment-history-section {
    width: 520px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 120px;
    margin-top: 50px;
    position: relative;
    margin-bottom: 100px;
  }

  .addres-text {
    font-size: 20px;
    margin-left: 15px;
    gap: 9px;
  }

  .sutitle-replenishment {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .replenishment-address-button {
    width: 520px;
    height: 40px;
    font-size: 29px;
    gap: 370px;
  }

  .replenishment-address-cont {
    margin-left: -15px;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-start;
    gap: 0px;
  }

  .replenishment-address-list {
    left: 450px;
    top: 175px;
  }
}

@media screen and (max-width: 550px) {
  .replenishment-section {
    width: 420px;
    margin-bottom: 30px;
  }

  .replenishment-history-title {
    font-size: 30px;
    position: absolute;
    left: 19px;
  }

  .replenishment-history-button {
    width: 150px;
    height: 40px;
    font-size: 14px;
    gap: 50px;
    position: absolute;
    right: 19px;
    top: 50px;
  }

  .replenishment-title {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .replenishment-history-section {
    width: 420px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 120px;
    margin-top: 50px;
    position: relative;
    margin-bottom: 100px;
  }

  .addres-text {
    font-size: 16px;
    margin-left: 15px;
    gap: 9px;
  }

  .sutitle-replenishment {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .replenishment-address-button {
    width: 420px;
    height: 40px;
    font-size: 29px;
    gap: 270px;
  }

  .replenishment-address-cont {
    margin-left: -15px;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-start;
    gap: 0px;
  }

  .replenishment-address-list {
    left: 310px;
    top: 160px;
  }
}

@media screen and (max-width: 450px) {
  .replenishment-section {
    width: 320px;
    margin-bottom: 30px;
  }

  .replenishment-history-title {
    font-size: 24px;
    position: absolute;
    left: 19px;
  }

  .replenishment-history-button {
    width: 150px;
    height: 40px;
    font-size: 14px;
    gap: 50px;
    position: absolute;
    right: 19px;
    top: 50px;
  }

  .replenishment-title {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .replenishment-history-section {
    width: 320px;
  }

  .title-cont {
    margin-bottom: 24px;
    gap: 120px;
    margin-top: 50px;
    position: relative;
    margin-bottom: 100px;
  }

  .addres-text {
    font-size: 13px;
    margin-left: 15px;
    gap: 9px;
  }

  .sutitle-replenishment {
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .replenishment-address-button {
    width: 320px;
    height: 40px;
    font-size: 29px;
    gap: 170px;
  }

  .replenishment-address-cont {
    margin-left: -15px;
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-start;
    gap: 0px;
  }

  .replenishment-address-list {
    left: 210px;
    top: 150px;
  }
}
</style>
