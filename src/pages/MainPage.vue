<script setup>
import Advantages from "../components/MainPage/Advantages.vue";
import WhoDoesWork from "../components/MainPage/WhoDoesWork.vue";
import FillApplicationForm from "../components/MainPage/FillApplicationForm.vue";
</script>

<template>
  <img class="bg-img" src="/mainPage/photo-main-page.svg" alt="" />
  <section class="fast-payment-acceptance-section">
    <section class="fast-payment-acceptance">
      <article class="test">
        <h2 class="title">Быстрый приём платежей для вашего бизнеса</h2>
        <p class="subtitle">
          Принимайте оплату мгновенно и без сложностей<br />
          — в любое время
        </p>
      </article>
      <article class="button-cont">
        <button class="submit-application-button">Оставить заявку</button>
        <button class="log-in-personal-account">Войти в личный кабинет</button>
      </article>
    </section>
    <img src="/mainPage/netbok.svg" alt="netbok" />
  </section>
  <Advantages />
  <WhoDoesWork />
  <FillApplicationForm />
</template>

<style scoped>
.fast-payment-acceptance-section {
  position: absolute;
  top: 550px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.fast-payment-acceptance {
  margin-left: 50px;
}

.bg-img {
  margin-top: -130px;
}

.test {
  position: relative;
}

.title {
  font-weight: 700;
  font-size: 50px;
  line-height: 105%;
  color: #fff;
  width: 730px;
}

.subtitle {
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #fff;
}

.submit-application-button {
  border-radius: 50px;
  width: 238px;
  height: 56px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
}

.button-cont {
  display: flex;
  align-items: center;
  gap: 24px;
}

.log-in-personal-account {
  border: 2px solid #12d3c0;
  border-radius: 50px;
  width: 323px;
  height: 56px;
  background-color: transparent;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #12d3c0;
}
</style>
