<script setup>
import Advantages from "../components/mainPage/Advantages.vue";
import WhoDoesWork from "../components/mainPage/WhoDoesWork.vue";
import FillApplicationForm from "../components/mainPage/FillApplicationForm.vue";
import Header from "../components/header/header.vue";
import Footer from "../components/footer/footer.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const navigateToPersonalAccount = () => {
  router.push("/personalAccount");
  navStationOff();
};
</script>

<template>
  <Header />
  <section class="bg-cont">
    <img class="bg-img" src="/mainPage/photo-main-page.svg" alt="" />
  </section>
  <section class="fast-payment-acceptance-section">
    <section class="fast-payment-acceptance">
      <article class="text-main-cont">
        <h2 class="title">Быстрый приём платежей для вашего бизнеса</h2>
        <p class="subtitle">
          Принимайте оплату мгновенно и без сложностей<br />
          — в любое время
        </p>
      </article>
      <article class="button-cont">
        <button class="submit-application-button">Оставить заявку</button>
        <button
          @click="navigateToPersonalAccount"
          class="log-in-personal-account"
        >
          Войти в личный кабинет
        </button>
      </article>
    </section>
    <img class="netbok-img" src="/mainPage/netbok.svg" alt="netbok" />
  </section>
  <Advantages />
  <WhoDoesWork />
  <FillApplicationForm />
  <Footer />
</template>

<style scoped>
body,
html {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

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

.bg-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-img {
  margin-top: -130px;
}

.text-main-cont {
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

@media screen and (max-width: 1750px) {
  .fast-payment-acceptance {
    margin-right: -100px;
  }
}

@media screen and (max-width: 1650px) {
  .fast-payment-acceptance {
    margin-left: 0px;
    margin-right: -100px;
  }

  .netbok-img {
    width: 800px;
  }
}

@media screen and (max-width: 1500px) {
  .fast-payment-acceptance-section {
    top: 500px;
  }

  .fast-payment-acceptance {
    margin-left: 0px;
    margin-right: -120px;
  }

  .netbok-img {
    width: 700px;
  }
}

@media screen and (max-width: 1350px) {
  .fast-payment-acceptance-section {
    top: 450px;
  }

  .fast-payment-acceptance {
    margin-left: 0px;
    margin-right: -160px;
  }

  .netbok-img {
    width: 600px;
  }

  .title {
    font-size: 40px;
    width: 730px;
  }

  .subtitle {
    font-size: 20px;
  }

  .button-cont {
    gap: 24px;
  }

  .submit-application-button {
    width: 238px;
    height: 56px;
    font-size: 18px;
  }

  .log-in-personal-account {
    width: 323px;
    height: 56px;
    font-size: 18px;
  }

  .bg-img {
    margin-top: -130px;
    height: 800px;
  }
}

@media screen and (max-width: 1200px) {
  .fast-payment-acceptance-section {
    top: 350px;
  }

  .fast-payment-acceptance {
    margin-left: 10px;
    margin-right: -190px;
  }

  .netbok-img {
    width: 500px;
  }

  .title {
    font-size: 35px;
    width: 730px;
  }

  .subtitle {
    font-size: 18px;
  }

  .button-cont {
    gap: 24px;
  }

  .submit-application-button {
    width: 200px;
    height: 50px;
    font-size: 16px;
  }

  .log-in-personal-account {
    width: 280px;
    height: 50px;
    font-size: 16px;
  }

  .bg-img {
    margin-top: -130px;
    height: 700px;
  }
}

@media screen and (max-width: 1050px) {
  .fast-payment-acceptance-section {
    top: 260px;
  }

  .fast-payment-acceptance {
    margin-left: 30px;
    margin-right: -150px;
  }

  .netbok-img {
    width: 400px;
  }

  .title {
    font-size: 35px;
    width: 730px;
  }

  .subtitle {
    font-size: 18px;
  }

  .button-cont {
    gap: 24px;
  }

  .submit-application-button {
    width: 200px;
    height: 50px;
    font-size: 16px;
  }

  .bg-img {
    margin-top: -130px;
    height: 600px;
  }

  .log-in-personal-account {
    width: 280px;
    height: 50px;
    font-size: 16px;
  }
}

@media screen and (max-width: 1000px) {
  .fast-payment-acceptance-section {
    top: 280px;
  }

  .fast-payment-acceptance {
    margin-left: 0px;
    margin-right: 45px;
  }

  .netbok-img {
    width: 350px;
  }

  .title {
    font-size: 30px;
    width: 500px;
  }

  .subtitle {
    font-size: 18px;
  }

  .button-cont {
    gap: 24px;
  }

  .submit-application-button {
    width: 160px;
    height: 45px;
    font-size: 14px;
  }

  .bg-img {
    margin-top: -130px;
    height: 600px;
  }

  .log-in-personal-account {
    width: 230px;
    height: 45px;
    font-size: 14px;
  }
}

@media screen and (max-width: 900px) {
  .fast-payment-acceptance-section {
    top: 240px;
  }

  .fast-payment-acceptance {
    margin-left: 0px;
    margin-right: -10px;
  }

  .netbok-img {
    width: 330px;
  }

  .title {
    font-size: 25px;
    width: 450px;
  }

  .subtitle {
    font-size: 16px;
  }

  .button-cont {
    gap: 24px;
  }

  .submit-application-button {
    width: 140px;
    height: 40px;
    font-size: 12px;
  }

  .bg-img {
    margin-top: -130px;
    height: 550px;
  }

  .log-in-personal-account {
    width: 200px;
    height: 40px;
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .fast-payment-acceptance-section {
    top: 540px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .fast-payment-acceptance {
    margin-left: -20px;
    margin-right: -10px;
  }

  .netbok-img {
    width: 500px;
    margin-top: 100px;
  }

  .title {
    font-size: 45px;
    width: 600px;
  }

  .subtitle {
    font-size: 24px;
  }

  .button-cont {
    margin-left: 0px;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
  }

  .submit-application-button {
    width: 650px;
    height: 40px;
    font-size: 16px;
  }

  .bg-img {
    margin-top: -130px;
    height: 900px;
  }

  .log-in-personal-account {
    width: 650px;
    height: 40px;
    font-size: 16px;
  }
}

@media screen and (max-width: 650px) {
  .fast-payment-acceptance-section {
    top: 540px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .fast-payment-acceptance {
    margin-left: -20px;
    margin-right: -10px;
  }

  .netbok-img {
    width: 500px;
    margin-top: 100px;
  }

  .title {
    font-size: 35px;
    width: 550px;
  }

  .subtitle {
    font-size: 22px;
  }

  .button-cont {
    margin-left: 0px;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
  }

  .submit-application-button {
    width: 550px;
    height: 40px;
    font-size: 16px;
  }

  .bg-img {
    margin-top: -130px;
    height: 900px;
  }

  .log-in-personal-account {
    width: 550px;
    height: 40px;
    font-size: 16px;
  }
}

@media screen and (max-width: 550px) {
  .fast-payment-acceptance-section {
    top: 540px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .fast-payment-acceptance {
    margin-left: -10px;
    margin-right: -10px;
  }

  .netbok-img {
    width: 430px;
    margin-top: 100px;
  }

  .title {
    font-size: 35px;
    width: 400px;
  }

  .subtitle {
    font-size: 22px;
  }

  .button-cont {
    margin-left: 0px;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
  }

  .submit-application-button {
    width: 450px;
    height: 40px;
    font-size: 16px;
  }

  .bg-img {
    margin-top: -130px;
    height: 900px;
  }

  .log-in-personal-account {
    width: 450px;
    height: 40px;
    font-size: 16px;
  }
}

@media screen and (max-width: 450px) {
  .fast-payment-acceptance-section {
    top: 490px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .fast-payment-acceptance {
    margin-left: 0px;
    margin-right: 0px;
  }

  .netbok-img {
    width: 360px;
    margin-top: 100px;
  }

  .title {
    font-size: 30px;
    width: 350px;
  }

  .subtitle {
    font-size: 20px;
  }

  .button-cont {
    margin-left: 0px;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
  }

  .submit-application-button {
    width: 350px;
    height: 40px;
    font-size: 16px;
  }

  .bg-img {
    margin-top: -130px;
    height: 900px;
  }

  .log-in-personal-account {
    width: 350px;
    height: 40px;
    font-size: 16px;
  }
}
</style>
