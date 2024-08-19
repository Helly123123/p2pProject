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
  <section class="user-section">
    <section class="user-accaunt-cont" v-if="!editAccauntStation">
      <article class="user-accaunt-info">
        <img src="/personalAccount/user.svg" alt="user" />
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
  width: 620px;
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
  width: 620px;
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
  gap: 923px;
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
</style>
