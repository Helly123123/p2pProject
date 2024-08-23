<script setup>
import ShopCardList from "./shopCard/ShopCardList.vue";
import EditAccaunt from "./EditAccount.vue";
import { reactive, ref, provide } from "vue";

const shopCard = reactive([
  {
    id: 2,
    shopName: "Название магазина",
    available: 1240,
    frozen: 1240,
  },
  {
    id: 1,
    shopName: "Название магазина",
    available: 0,
    frozen: 0,
  },
  {
    id: 1,
    shopName: "Название магазина",
    available: 0,
    frozen: 0,
  },
  {
    id: 2,
    shopName: "Название магазина",
    available: 1240,
    frozen: 1240,
  },
  {
    id: 2,
    shopName: "Название магазина",
    available: 1240,
    frozen: 1240,
  },
  {
    id: 1,
    shopName: "Название магазина",
    available: 0,
    frozen: 0,
  },
  {
    id: 1,
    shopName: "Название магазина",
    available: 0,
    frozen: 0,
  },
  {
    id: 2,
    shopName: "Название магазина",
    available: 1240,
    frozen: 1240,
  },
]);

const accaunt = reactive({
  name: "Сергей Б",
  telegram: "wasdwasd",
  email: "info@mail.ru",
});

const editAccauntStation = ref(false);

function editAccauntStationOn() {
  editAccauntStation.value = true;
}

const editAccauntStationOff = () => {
  editAccauntStation.value = false;
};

provide("editAccauntStation", editAccauntStationOff);
provide("accaunt", accaunt);
</script>

<template>
  <section class="custom-container-section">
    <section class="custom-container">
      <div class="marquee">
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-up">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-down">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-up">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-down">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-up">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-down">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-up">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-down">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-up">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-down">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-up">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-down">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-up">89.3494</span>
        </p>
        <p class="marquee-currensy-text">
          USDT/RUB <span class="amount-down">89.3494</span>
        </p>
      </div>
    </section>
  </section>
  <section class="user-section">
    <section class="user-accaunt-cont" v-if="!editAccauntStation">
      <article class="user-accaunt-info">
        <img class="user-icon" src="/personalAccount/user.svg" alt="user" />
        <div>
          <h2 class="name-user">{{ accaunt.name }}.</h2>
          <p class="user-text">@{{ accaunt.telegram }}</p>
          <p class="user-text">{{ accaunt.email }}</p>
        </div>
      </article>
      <button class="edit-button" @click="editAccauntStationOn">
        Редактировать
        <img src="/personalAccount/mainPage/Edit.svg" alt="" />
      </button>
      <button class="edit-button-phone" @click="editAccauntStationOn">
        <img src="/personalAccount/mainPage/Edit.svg" alt="" />
      </button>
    </section>
    <EditAccaunt v-if="editAccauntStation" />
    <section class="user-balance-cont">
      <article class="balance-cont">
        <p class="balance">Баланс</p>
        <h2 class="balance-text">1 240 USDT</h2>
      </article>
      <article class="balance-button-cont">
        <button class="replenish-button">Пополнить</button>
        <button class="bring-out-button">Вывести</button>
      </article>
    </section>
  </section>
  <section class="shop-section">
    <article class="shop-title-cont">
      <h2 class="shop-title">Магазины</h2>
      <button class="go-to-the-section-button">
        Перейти в раздел
        <img src="/personalAccount/mainPage/Arrow.svg" alt="" />
      </button>
    </article>
    <section class="shop-card-setction">
      <ShopCardList :shopCard="shopCard" />
    </section>
  </section>
</template>

<style scoped>
.user-section {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

.user-accaunt-cont {
  border-radius: 16px;
  width: 622px;
  height: 112px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;
}

.user-balance-cont {
  border-radius: 16px;
  width: 622px;
  height: 112px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 245px;
}

.user-accaunt-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 20px;
}

.custom-container-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.name-user {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
  margin-bottom: 8px;
}

.user-text {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
  margin: 0;
}

.edit-button {
  position: absolute;
  right: 20px;
  border-radius: 40px;
  width: 169px;
  height: 33px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #02020e;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.edit-button-phone {
  display: none;
}

.balance {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
}

.balance-text {
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
  margin-top: 20px;
}

.replenish-button {
  border-radius: 40px;
  width: 150px;
  height: 33px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #02020e;
}

.balance-button-cont {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.bring-out-button {
  border: 1px solid #12d3c0;
  border-radius: 40px;
  width: 150px;
  height: 33px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  background-color: transparent;
}

.shop-section {
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  margin-top: 30px;
}

.shop-card-setction {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}

.shop-title {
  margin: 0;
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
}

.go-to-the-section-button {
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  display: flex;
  align-items: center;
}

.shop-title-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 910px;
}

.custom-container {
  width: 1270px;
  height: 41px;
  border-radius: 30px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  ); /* Маска для плавного перехода */
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  ); /* Маска для плавного перехода */
  margin-bottom: 60px;
}

.marquee {
  display: flex;
  align-items: center;
  animation: slide 15s linear infinite;
  gap: 32px;
}

.marquee-currensy-text {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
}

.amount-up {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #63ef63;
}

.amount-down {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #ed2d2d;
}

/* Анимация плавного движения текста */
@keyframes slide {
  0% {
    transform: translateX(-100%); /* Текст начинается вне экрана слева */
  }
  100% {
    transform: translateX(100%); /* Текст исчезает за правым краем */
  }
}

@media screen and (max-width: 1800px) {
  .shop-title-cont {
    gap: 870px;
  }

  .user-accaunt-cont {
    width: 600px;
    height: 112px;
  }

  .user-balance-cont {
    width: 600px;
    height: 112px;
    gap: 210px;
  }

  .custom-container {
    width: 1230px;
    height: 41px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1700px) {
  .shop-title-cont {
    gap: 765px;
  }

  .user-accaunt-cont {
    width: 550px;
    height: 112px;
  }

  .user-balance-cont {
    width: 550px;
    height: 112px;
    gap: 160px;
  }

  .custom-container {
    width: 1130px;
    height: 41px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1550px) {
  .shop-title-cont {
    gap: 670px;
  }

  .user-accaunt-cont {
    width: 500px;
    height: 112px;
  }

  .user-balance-cont {
    width: 500px;
    height: 112px;
    gap: 120px;
  }

  .custom-container {
    width: 1030px;
    height: 41px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1450px) {
  .shop-title-cont {
    gap: 550px;
  }

  .user-accaunt-cont {
    width: 443px;
    height: 112px;
  }

  .user-balance-cont {
    width: 443px;
    height: 112px;
    gap: 50px;
  }

  .custom-container {
    width: 915px;
    height: 41px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 1350px) {
  .shop-title-cont {
    gap: 470px;
  }

  .user-accaunt-cont {
    width: 400px;
    height: 100px;
  }

  .user-balance-cont {
    width: 400px;
    height: 100px;
    gap: 50px;
  }

  .custom-container {
    width: 830px;
    height: 41px;
    margin-bottom: 60px;
  }

  .name-user {
    font-size: 18px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 12px;
  }

  .user-icon {
    width: 70px;
  }

  .edit-button {
    right: 20px;
    width: 140px;
    height: 33px;
    font-size: 12px;
    gap: 4px;
  }

  .balance-text {
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
    margin-top: 20px;
  }
}

@media screen and (max-width: 1250px) {
  .shop-title-cont {
    gap: 370px;
  }

  .user-accaunt-cont {
    width: 350px;
    height: 100px;
  }

  .user-balance-cont {
    width: 350px;
    height: 100px;
    gap: 45px;
  }

  .custom-container {
    width: 730px;
    height: 41px;
    margin-bottom: 60px;
  }

  .name-user {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 10px;
  }

  .user-icon {
    width: 60px;
  }

  .edit-button {
    right: 20px;
    width: 140px;
    height: 33px;
    font-size: 12px;
    gap: 4px;
  }

  .balance-text {
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
    margin-top: 20px;
  }

  .balance {
    font-size: 14px;
  }

  .balance-text {
    font-size: 24px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 120px;
    height: 33px;
    font-size: 12px;
  }

  .bring-out-button {
    width: 120px;
    height: 33px;
    font-size: 12px;
  }
}

@media screen and (max-width: 1150px) {
  .shop-title-cont {
    gap: 280px;
  }

  .user-accaunt-cont {
    width: 310px;
    height: 100px;
  }

  .user-balance-cont {
    width: 310px;
    height: 100px;
    gap: 30px;
  }

  .custom-container {
    width: 645px;
    height: 41px;
    margin-bottom: 60px;
  }

  .name-user {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 10px;
  }

  .user-icon {
    width: 60px;
  }

  .edit-button {
    right: 20px;
    width: 110px;
    height: 33px;
    font-size: 10px;
    gap: 4px;
  }

  .edit-button img {
    width: 12px;
  }

  .balance-text {
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
    margin-top: 20px;
  }

  .balance {
    font-size: 14px;
  }

  .balance-text {
    font-size: 24px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 120px;
    height: 33px;
    font-size: 12px;
  }

  .bring-out-button {
    width: 120px;
    height: 33px;
    font-size: 12px;
  }
}

@media screen and (max-width: 1050px) {
  .shop-title-cont {
    gap: 190px;
  }

  .user-accaunt-cont {
    width: 265px;
    height: 90px;
  }

  .user-balance-cont {
    width: 265px;
    height: 90px;
    gap: 30px;
  }

  .custom-container {
    width: 565px;
    height: 41px;
    margin-bottom: 60px;
  }

  .name-user {
    font-size: 10px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 8px;
  }

  .user-icon {
    width: 40px;
  }

  .edit-button {
    right: 10px;
    width: 110px;
    height: 33px;
    font-size: 10px;
    gap: 4px;
  }

  .edit-button img {
    width: 12px;
  }

  .balance-text {
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
    margin-top: 20px;
  }

  .balance {
    font-size: 10px;
  }

  .balance-text {
    font-size: 16px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 100px;
    height: 25px;
    font-size: 10px;
  }

  .bring-out-button {
    width: 100px;
    height: 25px;
    font-size: 10px;
  }
}

@media screen and (max-width: 840px) {
  .shop-title-cont {
    gap: 130px;
  }

  .user-accaunt-cont {
    width: 230px;
    height: 90px;
  }

  .user-balance-cont {
    width: 230px;
    height: 90px;
    gap: 20px;
  }

  .custom-container {
    width: 490px;
    height: 41px;
    margin-bottom: 60px;
  }

  .name-user {
    font-size: 15px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 12px;
  }

  .user-icon {
    width: 50px;
  }

  .edit-button {
    right: 10px;
    width: 110px;
    height: 33px;
    font-size: 10px;
    gap: 4px;
    display: none;
  }

  .edit-button img {
    width: 12px;
  }

  .edit-button-phone {
    position: absolute;
    right: 20px;
    border-radius: 40px;
    width: 40px;
    height: 32px;
    background: #12d3c0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .balance-text {
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
    margin-top: 20px;
  }

  .balance {
    font-size: 10px;
  }

  .balance-text {
    font-size: 16px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 80px;
    height: 25px;
    font-size: 9px;
  }

  .bring-out-button {
    width: 80px;
    height: 25px;
    font-size: 9px;
  }
}

@media screen and (max-width: 768px) {
  .shop-title-cont {
    gap: 270px;
  }

  .user-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }

  .user-accaunt-cont {
    width: 650px;
    height: 94px;
  }

  .user-balance-cont {
    width: 650px;
    height: 94px;
    gap: 70px;
    position: relative;
  }

  .balance-cont {
    position: absolute;
    left: 20px;
  }

  .custom-container {
    width: 650px;
    height: 41px;
    margin-bottom: 60px;
  }

  .balance-button-cont {
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: absolute;
    right: 20px;
  }

  .name-user {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 16px;
  }

  .user-icon {
    width: 70px;
  }

  .edit-button {
    right: 10px;
    top: 10px;
    width: 110px;
    height: 33px;
    font-size: 10px;
    gap: 4px;
    display: none;
  }

  .edit-button-phone {
    position: absolute;
    right: 20px;
    border-radius: 40px;
    width: 40px;
    height: 32px;
    background: #12d3c0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .balance-text {
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
    margin-top: 20px;
  }

  .balance {
    font-size: 14px;
  }

  .balance-text {
    font-size: 26px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 150px;
    height: 30px;
    font-size: 14px;
  }

  .bring-out-button {
    width: 150px;
    height: 30px;
    font-size: 14px;
  }
}

@media screen and (max-width: 650px) {
  .shop-title-cont {
    gap: 180px;
  }

  .user-section {
    gap: 30px;
  }

  .user-accaunt-cont {
    width: 550px;
    height: 94px;
  }

  .user-balance-cont {
    width: 550px;
    height: 94px;
    gap: 70px;
  }

  .balance-cont {
    left: 20px;
  }

  .custom-container {
    width: 550px;
    height: 41px;
    margin-bottom: 60px;
  }

  .balance-button-cont {
    gap: 14px;
    right: 20px;
  }

  .name-user {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 16px;
  }

  .user-icon {
    width: 70px;
  }

  .edit-button {
    right: 10px;
    top: 10px;
    width: 110px;
    height: 33px;
    font-size: 10px;
    gap: 4px;
  }

  .edit-button-phone {
    right: 20px;
    width: 40px;
    height: 32px;
  }

  .balance-text {
    font-size: 26px;
    margin-top: 20px;
  }

  .balance {
    font-size: 14px;
  }

  .balance-text {
    font-size: 26px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 150px;
    height: 30px;
    font-size: 14px;
  }

  .bring-out-button {
    width: 150px;
    height: 30px;
    font-size: 14px;
  }
}

@media screen and (max-width: 550px) {
  .shop-title-cont {
    gap: 90px;
  }

  .user-section {
    gap: 30px;
  }

  .user-accaunt-cont {
    width: 450px;
    height: 94px;
  }

  .user-balance-cont {
    width: 450px;
    height: 94px;
    gap: 70px;
  }

  .balance-cont {
    left: 20px;
  }

  .custom-container {
    width: 450px;
    height: 41px;
    margin-bottom: 60px;
  }

  .balance-button-cont {
    gap: 14px;
    right: 20px;
  }

  .name-user {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 16px;
  }

  .user-icon {
    width: 70px;
  }

  .edit-button {
    right: 10px;
    top: 10px;
    width: 110px;
    height: 33px;
    font-size: 10px;
    gap: 4px;
  }

  .edit-button-phone {
    right: 20px;
    width: 40px;
    height: 32px;
  }

  .balance-text {
    font-size: 26px;
    margin-top: 20px;
  }

  .balance {
    font-size: 14px;
  }

  .balance-text {
    font-size: 26px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 150px;
    height: 30px;
    font-size: 14px;
  }

  .bring-out-button {
    width: 150px;
    height: 30px;
    font-size: 14px;
  }
}

@media screen and (max-width: 450px) {
  .shop-title-cont {
    gap: 30px;
  }

  .shop-title {
    font-size: 20px;
  }

  .user-section {
    gap: 30px;
  }

  .user-accaunt-cont {
    width: 350px;
    height: 94px;
  }

  .user-balance-cont {
    width: 350px;
    height: 94px;
    gap: 70px;
  }

  .balance-cont {
    left: 20px;
  }

  .custom-container {
    width: 350px;
    height: 41px;
    margin-bottom: 60px;
  }

  .balance-button-cont {
    gap: 14px;
    right: 20px;
  }

  .name-user {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .user-text {
    font-size: 16px;
  }

  .user-icon {
    width: 70px;
  }

  .edit-button {
    right: 10px;
    top: 10px;
    width: 110px;
    height: 33px;
    font-size: 10px;
    gap: 4px;
  }

  .edit-button-phone {
    right: 20px;
    width: 40px;
    height: 32px;
  }

  .balance-text {
    font-size: 26px;
    margin-top: 20px;
  }

  .balance {
    font-size: 14px;
  }

  .balance-text {
    font-size: 26px;
    margin-top: 20px;
  }

  .replenish-button {
    width: 120px;
    height: 30px;
    font-size: 12px;
  }

  .bring-out-button {
    width: 120px;
    height: 30px;
    font-size: 12px;
  }
}
</style>
