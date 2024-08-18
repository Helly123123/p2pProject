<script setup>
import Advantages from "../components/mainPage/Advantages.vue";
import WhoDoesWork from "../components/mainPage/WhoDoesWork.vue";
import FillApplicationForm from "../components/mainPage/FillApplicationForm.vue";
import Header from "../components/header/header.vue";
import Footer from "../components/footer/footer.vue";
</script>

<template>
  <Header />
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
  <Footer />
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
  transition: all 0.15s;
}

.submit-application-button:hover {
  background: #2ac4b4;
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
  transition: all 0.15s;
}

.log-in-personal-account:hover {
  border: 2px solid #2ac4b4;
}
</style>
