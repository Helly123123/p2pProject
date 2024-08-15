<script></script>

<template>
  <section class="fill-application-form-section">
    <article class="fill-application-form">
      <h2 class="fill-application-form-title">
        Заполните заявку и уже в течение 3-х часов с вами свяжется менеджер.
      </h2>
      <button class="submit-application-button">Оставить заявку</button>
    </article>
    <img
      class="fast-start"
      src="/mainPage/FillApplicationForm/fast_start.svg"
      alt=""
    />
    <img
      class="fast-start-two"
      src="/mainPage/FillApplicationForm/fast_start_two.svg"
      alt=""
    />
  </section>
</template>

<style scoped>
.fill-application-form-section {
  margin-top: 200px;
  position: relative;
}

.fill-application-form {
  background-image: url(/mainPage/FillApplicationForm/bg_three.svg);
  width: 630px;
  height: 630px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 250px;
  margin-left: 255px;
}

.fast-start {
  width: 100%;
  position: absolute;
  top: 100px;
}

.fast-start-two {
  width: 100%;
  position: absolute;
  top: 170px;
}

.fill-application-form-title {
  font-weight: 600;
  font-size: 28px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-align: center;
  color: #fff;
  width: 400px;
}

.submit-application-button {
  border-radius: 50px;
  padding: 16px 28px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
}
</style>
