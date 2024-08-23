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
  display: flex;
  align-items: center;
  justify-content: center;
}

.fill-application-form {
  background-color: #0a0a1a;
  border-radius: 100%;
  width: 630px;
  height: 630px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 250px;
  margin-left: -800px;
}

.fast-start {
  position: absolute;
  top: 100px;
}

.fast-start-two {
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

@media screen and (max-width: 1650px) {
  .fill-application-form {
    width: 600px;
    height: 600px;
  }

  .fast-start {
    position: absolute;
    top: 100px;
  }

  .fast-start-two {
    position: absolute;
    top: 170px;
  }
}

@media screen and (max-width: 1500px) {
  .fill-application-form {
    width: 600px;
    height: 600px;
  }

  .fast-start {
    position: absolute;
    top: 100px;
  }

  .fast-start-two {
    position: absolute;
    top: 170px;
  }
}

@media screen and (max-width: 1500px) {
  .fill-application-form {
    width: 600px;
    height: 600px;
  }

  .fast-start {
    position: absolute;
    top: 100px;
  }

  .fast-start-two {
    position: absolute;
    top: 170px;
  }
}

@media screen and (max-width: 1400px) {
  .fill-application-form {
    width: 500px;
    height: 500px;
    margin-top: 50px;
  }

  .fast-start {
    position: absolute;
    top: 100px;
  }

  .fast-start-two {
    position: absolute;
    top: 170px;
  }

  .fill-application-form-title {
    font-size: 24px;
    width: 400px;
    margin-top: 50px;
    margin-bottom: -50px;
  }
}

@media screen and (max-width: 1300px) {
  .fill-application-form {
    width: 500px;
    height: 500px;
    margin-top: 50px;
    margin-left: -700px;
  }

  .fast-start {
    position: absolute;
    width: 1300px;
    top: 150px;
  }

  .fast-start-two {
    position: absolute;
    width: 1300px;
    top: 220px;
  }

  .fill-application-form-title {
    font-size: 24px;
    width: 400px;
    margin-top: 50px;
    margin-bottom: -50px;
  }
}

@media screen and (max-width: 1200px) {
  .fill-application-form {
    width: 450px;
    height: 450px;
    margin-top: 50px;
    margin-left: -600px;
  }

  .fast-start {
    position: absolute;
    width: 1200px;
    top: 150px;
  }

  .fast-start-two {
    position: absolute;
    width: 1200px;
    top: 220px;
  }

  .fill-application-form-title {
    font-size: 20px;
    width: 350px;
    margin-top: 40px;
    margin-bottom: -60px;
  }
}

@media screen and (max-width: 1050px) {
  .fill-application-form {
    width: 400px;
    height: 400px;
    margin-top: 80px;
    margin-left: -600px;
  }

  .fast-start {
    position: absolute;
    width: 1100px;
    top: 150px;
  }

  .fast-start-two {
    position: absolute;
    width: 1100px;
    top: 220px;
  }

  .fill-application-form-title {
    font-size: 18px;
    width: 300px;
    margin-top: 40px;
    margin-bottom: -90px;
  }

  .submit-application-button {
    padding: 16px 28px;
    background: #12d3c0;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #02020e;
  }
}

@media screen and (max-width: 1000px) {
  .fill-application-form {
    width: 400px;
    height: 400px;
    margin-top: 70px;
    margin-left: -500px;
  }

  .fast-start {
    position: absolute;
    width: 1000px;
    top: 150px;
  }

  .fast-start-two {
    position: absolute;
    width: 1000px;
    top: 220px;
  }

  .fill-application-form-title {
    font-size: 18px;
    width: 300px;
    margin-top: 40px;
    margin-bottom: -90px;
  }

  .submit-application-button {
    padding: 16px 28px;
    background: #12d3c0;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #02020e;
  }
}

@media screen and (max-width: 900px) {
  .fill-application-form {
    width: 400px;
    height: 400px;
    margin-top: 100px;
    margin-left: -400px;
  }

  .fast-start {
    position: absolute;
    width: 900px;
    top: 200px;
  }

  .fast-start-two {
    position: absolute;
    width: 900px;
    top: 230px;
  }

  .fill-application-form-title {
    font-size: 18px;
    width: 300px;
    margin-top: 40px;
    margin-bottom: -90px;
  }

  .submit-application-button {
    padding: 16px 28px;
    background: #12d3c0;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #02020e;
  }
}

@media screen and (max-width: 800px) {
  .fill-application-form {
    width: 300px;
    height: 300px;
    margin-top: 150px;
    margin-left: -400px;
  }

  .fast-start {
    position: absolute;
    width: 900px;
    top: 200px;
  }

  .fast-start-two {
    position: absolute;
    width: 900px;
    top: 230px;
  }

  .fill-application-form-title {
    font-size: 14px;
    width: 200px;
    margin-top: 30px;
    margin-bottom: -150px;
  }

  .submit-application-button {
    padding: 14px 20px;
    background: #12d3c0;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #02020e;
  }
}

@media screen and (max-width: 768px) {
  .fill-application-form {
    width: 300px;
    height: 300px;
    margin-top: 150px;
    margin-left: 0px;
    background-color: transparent;
    margin-bottom: 300px;
  }

  .fast-start {
    position: absolute;
    width: 800px;
    top: 120px;
    transform: rotate(7deg);
  }

  .fast-start-two {
    position: absolute;
    width: 800px;
    top: 340px;
    transform: rotate(-7deg);
  }

  .fill-application-form-title {
    font-size: 20px;
    width: 370px;
    margin-top: 30px;
    margin-bottom: -230px;
  }

  .submit-application-button {
    padding: 10px 30px;
    background: #12d3c0;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #02020e;
  }
}
</style>
