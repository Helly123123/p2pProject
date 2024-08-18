<script setup>
import { ref, reactive } from "vue";
import ApiPageTable from "./ApiPageTable.vue";
const apiStation = ref(true);

const activeButtom = reactive({
  documentationApi: true,
  listApi: false,
});

function apiStatiOn() {
  apiStation.value = true;
  activeButtom.documentationApi = true;
  activeButtom.listApi = false;
}

function apiStatiOff() {
  apiStation.value = false;
  activeButtom.documentationApi = false;
  activeButtom.listApi = true;
}

const textToCopyOne = ref("<div id='ton-connect'></div>");
const textToCopyTwo = ref(
  `
  const connectToWallet = async () => {
  try {
    const connectedWallet = await tonConnectUI.connectWallet();
    // Делайте что-то с connectedWallet, если нужно
    console.log(connectedWallet);
  } catch (error) {
    console.error('Error connecting to wallet:', error);
  }
};
`
);
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

function copyTextTwo() {
  navigator.clipboard
    .writeText(textToCopyTwo.value)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
</script>

<template>
  <section class="api-section">
    <article class="button-cont">
      <button
        :class="{ active: activeButtom.documentationApi }"
        @click="apiStatiOn"
        class="page-button"
      >
        Документация API
      </button>
      <button
        :class="{ active: activeButtom.listApi }"
        @click="apiStatiOff"
        class="page-button"
      >
        Список подключенных API
      </button>
    </article>
    <article class="line-cont">
      <img class="line" src="/personalAccount/apiPage/line.svg" alt="" />
    </article>
    <section v-if="apiStation">
      <h2 class="title">Поздаговок</h2>
      <p class="subtitle">
        Мы предоставляем безопасные платежные решения для ставок на спорт и
        онлайн-казино, обеспечивая быстрые и надежные транзакции Мы
        предоставляем без Мы предоставляем безопасные платежные решения для
        ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные
        транзакции Мы предоставляем без
      </p>
      <p class="subtitle-two">
        Мы предоставляем безопасные платежные <span>решения для став</span>
      </p>
      <article class="img-cont">
        <img src="/personalAccount/apiPage/connectImg.svg" alt="" />
        <img
          src="/personalAccount/apiPage/copy.svg"
          @click="copyTextOne"
          class="copy-img"
          alt=""
        />
      </article>
      <h2 class="title">Поздаговок</h2>
      <p class="subtitle">
        Мы предоставляем безопасные платежные решения для ставок на спорт и
        онлайн-казино, обеспечивая быстрые и надежные транзакции Мы
        предоставляем без Мы предоставляем безопасные платежные решения для
        ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные
        транзакции Мы предоставляем без
      </p>
      <p class="subtitle-two">
        Мы предоставляем безопасные платежные <span>решения для став</span>
      </p>
      <article class="img-cont-two">
        <img src="/personalAccount/apiPage/connectImgTwo.svg" alt="" />
        <img
          @click="copyTextTwo"
          class="copy-img"
          src="/personalAccount/apiPage/copy.svg"
          alt=""
        />
      </article>
    </section>
    <section v-if="!apiStation" class="table-section-cont">
      <section class="table-section">
        <ApiPageTable />
      </section>
    </section>
  </section>
</template>

<style scoped>
.api-section {
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  margin-top: 30px;
}

.table-section-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.table-section {
  border: 1px solid rgba(45, 237, 218, 0.1);
  border-radius: 12px;
  padding: 20px 0px 20px 0px;
  width: 1238px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.line-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 24px;
}

.line {
  width: 1240px;
}

.button-cont {
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-button {
  border-radius: 12px;
  padding: 12px 20px;
  background: #02020e;
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
}

.copy-img {
  cursor: pointer;
}

.page-button.active {
  color: #12d3c0;
}

.title {
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
}

.subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #fff;
  width: 1240px;
}

.subtitle-two {
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #fff;
}

.subtitle-two span {
  font-weight: 600;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #12d3c0;
}

.img-cont {
  border-radius: 12px;
  width: 1238px;
  height: 75px;
  background: #02020e;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 900px;
}

.img-cont-two {
  border-radius: 12px;
  width: 1238px;
  height: 340px;
  background: #02020e;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 480px;
}
</style>
