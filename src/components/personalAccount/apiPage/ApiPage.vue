<script setup>
import { ref, reactive, provide } from "vue";
import ApiPageTable from "./ApiPageTable.vue";
import ApiCardList from "./shopCard/ApiCardList.vue";
import GenerateCode from "./generateCode/codeApi.vue";
import CodeApiTwo from "./generateCode/codeApiTwo.vue";
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

const apiDate = reactive([
  {
    id: 1,
    nameApi: "Название",
    idApi: "TXFe3cFbGLrQKvYEgoapvPAkGqSZNjcEcS",
    comment:
      "Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст ",
    status: "Активен",
  },
  {
    id: 1,
    nameApi: "Название",
    idApi: "TXFe3cFbGLrQKvYEgoapvPAkGqSZNjcEcS",
    comment:
      "Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст ",
    status: "Активен",
  },
  {
    id: 1,
    nameApi: "Название",
    idApi: "TXFe3cFbGLrQKvYEgoapvPAkGqSZNjcEcS",
    comment:
      "Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст Тест текст ",
    status: "Активен",
  },
]);

provide("apiDate", apiDate);
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
        class="page-button button"
      >
        Список подключенных API
      </button>
      <button
        :class="{ active: activeButtom.listApi }"
        @click="apiStatiOff"
        class="page-button-phone"
      >
        Список <br />
        подключенных API
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
        <CodeApiTwo class="CodeApiTwo" />
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
      <
      <article class="img-cont-two">
        <GenerateCode class="GenerateCode" />
        <img
          @click="copyTextTwo"
          class="copy-img"
          src="/personalAccount/apiPage/copy.svg"
          alt=""
        />
      </article>
      >
    </section>
    <section v-if="!apiStation" class="table-section-cont">
      <section class="table-section">
        <ApiPageTable />
      </section>
      <section class="table-phone">
        <ApiCardList />
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
}

.CodeApiTwo {
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translate(-50%, -50%);
}

.table-phone {
  display: none;
}

.phone-text-one,
.phone-text-two {
  display: none;
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

.page-button-phone {
  display: none;
  border-radius: 12px;
  padding: 12px 20px;
  background: #02020e;
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
}

.GenerateCode {
  position: absolute;
  top: 50%;
  left: 280px;
  transform: translate(-50%, -50%);
}

.copy-img {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -50%);
}

.page-button-phone.active {
  color: #12d3c0;
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
  position: relative;
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
  position: relative;
  gap: 500px;
}

@media screen and (max-width: 1800px) {
  .line {
    width: 1200px;
  }
  .subtitle {
    font-size: 18px;
    width: 1200px;
  }

  .img-cont {
    width: 1200px;
    height: 75px;
    gap: 850px;
  }

  .img-cont-two {
    width: 1200px;
    height: 340px;
    gap: 430px;
  }

  .table-section {
    width: 1200px;
  }
}

@media screen and (max-width: 1700px) {
  .line {
    width: 1120px;
  }
  .subtitle {
    font-size: 18px;
    width: 1120px;
  }

  .img-cont {
    width: 1120px;
    height: 75px;
    gap: 760px;
  }

  .img-cont-two {
    width: 1120px;
    height: 340px;
    gap: 340px;
  }

  .table-section {
    width: 1100px;
  }
}

@media screen and (max-width: 1550px) {
  .line {
    width: 1020px;
  }
  .subtitle {
    font-size: 18px;
    width: 1020px;
  }

  .img-cont {
    width: 1020px;
    height: 75px;
    gap: 680px;
  }

  .img-cont-two {
    width: 1020px;
    height: 340px;
    gap: 250px;
  }

  .table-section {
    width: 1000px;
  }
}

@media screen and (max-width: 1450px) {
  .line {
    width: 900px;
  }
  .subtitle {
    font-size: 18px;
    width: 900px;
  }

  .img-cont {
    width: 900px;
    height: 75px;
    gap: 560px;
  }

  .img-cont-two {
    width: 900px;
    height: 340px;
    gap: 130px;
  }

  .table-section {
    width: 900px;
  }
}

@media screen and (max-width: 1350px) {
  .line {
    width: 800px;
  }
  .subtitle {
    font-size: 18px;
    width: 800px;
  }

  .img-cont {
    width: 800px;
    height: 75px;
    gap: 460px;
  }

  .img-cont-two {
    width: 800px;
    height: 340px;
    gap: 30px;
  }

  .table-section {
    width: 800px;
  }
}

@media screen and (max-width: 1250px) {
  .line {
    width: 720px;
    height: 2px;
  }
  .subtitle {
    font-size: 16px;
    width: 720px;
  }

  .img-cont {
    width: 720px;
    height: 75px;
    gap: 390px;
  }

  .img-cont-two {
    width: 720px;
    height: 300px;
    gap: 70px;
  }

  .table-section {
    width: 720px;
  }

  .img-two {
    width: 600px;
  }

  .page-button {
    padding: 8px 16px;
    font-size: 20px;
  }
}

@media screen and (max-width: 1150px) {
  .line {
    width: 620px;
    height: 2px;
  }
  .subtitle {
    font-size: 16px;
    width: 620px;
  }

  .img-cont {
    width: 620px;
    height: 75px;
    gap: 290px;
  }

  .img-cont-two {
    width: 620px;
    height: 250px;
    gap: 70px;
  }

  .table-section {
    width: 620px;
  }

  .phone-text-one {
  }

  .img-two {
    width: 500px;
  }

  .page-button {
    padding: 8px 16px;
    font-size: 20px;
  }
}

@media screen and (max-width: 1100px) {
  .GenerateCode {
    position: absolute;
    top: 50%;
    left: 180px;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-width: 1050px) {
  .line {
    width: 520px;
    height: 2px;
  }
  .subtitle {
    font-size: 12px;
    width: 520px;
  }

  .title {
    font-size: 24px;
  }

  .img-cont {
    width: 520px;
    height: 75px;
    gap: 190px;
  }

  .img-cont-two {
    width: 520px;
    height: 200px;
    gap: 70px;
  }

  .table-section {
    width: 520px;
  }

  .img-two {
    width: 400px;
  }

  .page-button {
    padding: 6px 10px;
    font-size: 16px;
  }

  .subtitle-two {
    font-size: 14px;
  }
}

@media screen and (max-width: 830px) {
  .line {
    width: 450px;
    height: 4px;
  }
  .subtitle {
    font-size: 10px;
    width: 420px;
  }

  .title {
    font-size: 22px;
  }

  .img-cont {
    width: 420px;
    height: 75px;
    gap: 90px;
  }

  .img-cont-two {
    width: 420px;
    height: 200px;
    gap: 20px;
  }

  .table-section {
    width: 450px;
  }

  .img-two {
    width: 350px;
  }

  .page-button {
    padding: 6px 10px;
    font-size: 16px;
  }

  .subtitle-two {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .button-cont {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  .table-section {
    display: none;
  }

  .line {
    width: 620px;
    height: 4px;
  }
  .subtitle {
    font-size: 14px;
    width: 620px;
  }

  .title {
    font-size: 26px;
  }

  .img-cont {
    width: 620px;
    height: 75px;
    gap: 370px;
    padding: 10px;
    align-items: flex-start;
  }

  .img-cont-two {
    width: 620px;
    height: 200px;
    gap: 40px;
    padding: 10px;
    align-items: flex-start;
  }

  .table-phone {
    display: block;
  }

  .button {
    display: none;
  }

  .table-section {
    width: 620px;
  }

  .img-two {
    display: none;
  }

  .img-one {
    display: none;
  }

  .page-button {
    padding: 12px 100px;
    font-size: 40px;
  }

  .page-button-phone {
    text-align: left;
    display: block;
    padding: 12px 100px;
    font-size: 39px;
  }

  .phone-text-one {
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #12d3c0;
    width: 200px;
  }

  .phone-text-two {
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #12d3c0;
    width: 530px;
  }

  .subtitle-two {
    font-size: 14px;
  }
}

@media screen and (max-width: 650px) {
  .button-cont {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  .line {
    width: 520px;
    height: 6px;
  }
  .subtitle {
    font-size: 14px;
    width: 520px;
  }

  .title {
    font-size: 26px;
  }

  .img-cont {
    width: 500px;
    height: 75px;
    gap: 250px;
    padding: 10px;
    align-items: flex-start;
  }

  .img-cont-two {
    width: 500px;
    height: 200px;
    gap: 50px;
    padding: 10px;
    align-items: flex-start;
  }

  .button {
    display: none;
  }

  .table-section {
    width: 620px;
  }

  .img-two {
    display: none;
  }

  .img-one {
    display: none;
  }

  .page-button {
    padding: 12px 80px;
    font-size: 35px;
  }

  .page-button-phone {
    text-align: left;
    display: block;
    padding: 12px 75px;
    font-size: 35px;
  }

  .phone-text-one {
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #12d3c0;
    width: 200px;
  }

  .phone-text-two {
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #12d3c0;
    width: 400px;
  }

  .subtitle-two {
    font-size: 14px;
  }
}

@media screen and (max-width: 550px) {
  .button-cont {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  .line {
    width: 410px;
    height: 6px;
  }

  .CodeApiTwo {
    position: absolute;
    top: 50%;
    left: 70px;
    transform: translate(-50%, -50%);
  }

  .subtitle {
    font-size: 14px;
    width: 380px;
  }

  .title {
    font-size: 26px;
  }

  .img-cont {
    width: 380px;
    height: 75px;
    gap: 150px;
    padding: 10px;
    align-items: flex-start;
  }

  .img-cont-two {
    width: 380px;
    height: 200px;
    gap: 50px;
    padding: 10px;
    align-items: flex-start;
  }

  .button {
    display: none;
  }

  .table-section {
    width: 620px;
  }

  .img-two {
    display: none;
  }

  .GenerateCode {
    position: absolute;
    top: 50%;
    left: 150px;
    transform: translate(-50%, -50%);
  }

  .img-one {
    display: none;
  }

  .page-button {
    padding: 12px 47px;
    font-size: 32px;
  }

  .page-button-phone {
    text-align: left;
    padding: 12px 47px;
    font-size: 31px;
  }

  .phone-text-one {
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #12d3c0;
    width: 200px;
  }

  .phone-text-two {
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #12d3c0;
    width: 300px;
  }

  .subtitle-two {
    font-size: 11px;
  }
}

@media screen and (max-width: 450px) {
  .button-cont {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
  }

  .line {
    width: 320px;
    height: 6px;
  }
  .subtitle {
    font-size: 14px;
    width: 280px;
  }

  .title {
    font-size: 26px;
  }

  .img-cont {
    width: 260px;
    height: 75px;
    gap: 30px;
    padding: 10px;
    align-items: flex-start;
  }

  .img-cont-two {
    width: 260px;
    height: 160px;
    gap: 0px;
    align-items: flex-start;
    padding: 10px;
  }

  .button {
    display: none;
  }

  .table-section {
    width: 620px;
  }

  .img-two {
    display: none;
  }

  .img-one {
    display: none;
  }

  .page-button {
    padding: 12px 47px;
    font-size: 23px;
  }

  .GenerateCode {
    position: absolute;
    top: 50%;
    left: 110px;
    transform: translate(-50%, -50%);
  }

  .page-button-phone {
    text-align: left;
    padding: 12px 47px;
    font-size: 22px;
  }

  .phone-text-one {
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #12d3c0;
    width: 200px;
  }

  .phone-text-two {
    font-weight: 600;
    font-size: 11px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #12d3c0;
    width: 250px;
  }

  .subtitle-two {
    font-size: 9px;
  }
}
</style>
