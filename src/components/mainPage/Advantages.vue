<script></script>

<template>
  <section class="advantages-section">
    <section class="advantages-section-card-cont">
      <article class="advantages-card card-one">
        <img
          class="advantages-card-img"
          src="/mainPage/advantages/advantages-one.svg"
          alt="card"
        />
        <div>
          <h2 class="advantages-card-title">
            Гибкие условия сотрудничества для проектов любого масштаба
          </h2>
          <p class="advantages-card-subtitle">
            Мы открыты к партнерству с компаниями из различных сфер
          </p>
        </div>
      </article>
      <article class="advantages-card card-two">
        <img
          class="advantages-card-img"
          src="/mainPage/advantages/advantages-two.svg"
          alt="card"
        />
        <div>
          <h2 class="advantages-card-title">
            Мгновенные выплаты без ограничений
          </h2>
          <p class="advantages-card-subtitle">
            Выводите средства быстро и удобно, когда вам это необходимо
          </p>
        </div>
      </article>
      <article class="advantages-card card-three">
        <img
          class="advantages-card-img"
          src="/mainPage/advantages/advantages-three.svg"
          alt="card"
        />
        <div>
          <h2 class="advantages-card-title">Быстрая поддержка</h2>
          <p class="advantages-card-subtitle">
            Наши специалисты ответят на ваши вопросы и помогут решить любую
            проблему в кратчайшие сроки
          </p>
        </div>
      </article>
    </section>
    <img class="line" src="/mainPage/advantages/advantages-line.svg" alt="" />
  </section>
</template>

<style scoped>
.advantages-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 250px;
}

.advantages-section-card-cont {
  display: flex;
  align-items: center;
  gap: 75px;
  position: absolute;
}

.line {
  margin-right: 350px;
  margin-top: -100px;
}

.card-one {
  margin-top: 140px;
}

.card-three {
  margin-top: 250px;
}

.advantages-card-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 115%;
  color: #fff;
  width: 500px;
}

.advantages-card-subtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #fff;
  width: 500px;
}

@media screen and (max-width: 1750px) {
  .advantages-section-card-cont {
    gap: 20px;
  }
}

@media screen and (max-width: 1650px) {
  .advantages-section-card-cont {
    gap: 0px;
  }

  .advantages-card-title {
    font-size: 20px;
    width: 480px;
  }

  .advantages-card-subtitle {
    font-size: 16px;
    width: 410px;
  }

  .advantages-card-img {
    width: 120px;
  }

  .line {
    margin-right: 350px;
    margin-top: -50px;
  }
}

@media screen and (max-width: 1500px) {
  .card-three {
    margin-top: 200px;
  }

  .advantages-card-title {
    font-size: 20px;
    width: 460px;
  }

  .card-one {
    margin-top: 140px;
    margin-right: -80px;
  }

  .advantages-card-subtitle {
    font-size: 16px;
    width: 410px;
  }

  .advantages-card-img {
    width: 120px;
  }

  .line {
    margin-right: 350px;
    margin-top: -50px;
    width: 960px;
  }
}

@media screen and (max-width: 1350px) {
  .advantages-section-card-cont {
    gap: 25px;
  }

  .card-three {
    margin-top: 160px;
  }

  .advantages-card-title {
    font-size: 18px;
    width: 400px;
  }

  .card-one {
    margin-top: 100px;
    margin-right: -80px;
  }

  .advantages-card-subtitle {
    font-size: 14px;
    width: 350px;
  }

  .advantages-card-img {
    width: 120px;
  }

  .line {
    margin-right: 350px;
    margin-top: -50px;
    width: 800px;
  }
}

@media screen and (max-width: 1200px) {
  .advantages-section-card-cont {
    gap: 0px;
  }

  .card-three {
    margin-top: 160px;
    margin-left: -30px;
  }

  .advantages-card-title {
    font-size: 18px;
    width: 350px;
  }

  .card-one {
    margin-top: 100px;
    margin-right: 0px;
  }

  .advantages-card-subtitle {
    font-size: 14px;
    width: 350px;
  }

  .advantages-card-img {
    width: 100px;
  }

  .line {
    margin-right: 300px;
    margin-top: -50px;
    width: 650px;
  }

  .advantages-section {
    margin-top: 170px;
  }
}

@media screen and (max-width: 1050px) {
  .advantages-section-card-cont {
    gap: 0px;
  }

  .card-three {
    margin-top: 160px;
    margin-left: -30px;
  }

  .advantages-card-title {
    font-size: 16px;
    width: 320px;
    margin-bottom: -8px;
  }

  .card-one {
    margin-top: 100px;
    margin-right: -40px;
  }

  .advantages-card-subtitle {
    font-size: 14px;
    width: 350px;
  }

  .advantages-card-img {
    width: 80px;
  }

  .line {
    margin-right: 300px;
    margin-top: -50px;
    width: 650px;
  }
}

@media screen and (max-width: 1000px) {
  .advantages-section-card-cont {
    gap: 32px;
  }

  .card-three {
    margin-top: 160px;
    margin-left: -30px;
  }

  .advantages-card-title {
    font-size: 14px;
    width: 290px;
    margin-bottom: -8px;
  }

  .card-one {
    margin-top: 100px;
    margin-right: -40px;
  }

  .advantages-card-subtitle {
    font-size: 14px;
    width: 300px;
  }

  .advantages-card-img {
    width: 75px;
  }

  .line {
    margin-right: 220px;
    margin-top: -50px;
    width: 550px;
  }

  .advantages-section {
    margin-top: 130px;
  }
}

@media screen and (max-width: 900px) {
  .advantages-section-card-cont {
    gap: 90px;
  }

  .card-three {
    margin-top: 130px;
    margin-left: -60px;
  }

  .advantages-card-title {
    font-size: 12px;
    width: 230px;
    margin-bottom: -8px;
  }

  .card-one {
    margin-top: 100px;
    margin-right: -40px;
  }

  .advantages-card-subtitle {
    font-size: 10px;
    width: 200px;
  }

  .advantages-card-img {
    width: 65px;
  }

  .line {
    margin-right: 220px;
    margin-top: -10px;
    width: 550px;
  }

  .advantages-section {
    margin-top: 130px;
  }
}

@media screen and (max-width: 768px) {
  .advantages-section-card-cont {
    flex-direction: column;
    margin-top: 1000px;
    gap: 0px;
  }

  .card-three {
    margin-top: 0px;
    margin-left: 0px;
  }

  .advantages-card-title {
    font-size: 30px;
    width: 500px;
    margin-bottom: -8px;
  }

  .card-one {
    margin-top: 0px;
    margin-right: 0px;
  }

  .advantages-card-subtitle {
    font-size: 26px;
    width: 460px;
  }

  .advantages-card-img {
    width: 70px;
  }

  .line {
    margin-right: 220px;
    margin-top: -10px;
    width: 550px;
    display: none;
  }

  .advantages-card {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .advantages-section {
    margin-top: 130px;
  }
}

@media screen and (max-width: 650px) {
  .advantages-section-card-cont {
    flex-direction: column;
    margin-top: 900px;
    gap: 0px;
    margin-left: 30px;
  }

  .card-three {
    margin-top: 0px;
    margin-left: 0px;
  }

  .advantages-card-title {
    font-size: 24px;
    width: 450px;
    margin-bottom: -8px;
  }

  .card-one {
    margin-top: 0px;
    margin-right: 0px;
  }

  .advantages-card-subtitle {
    font-size: 20px;
    width: 450px;
  }

  .advantages-card-img {
    width: 70px;
  }

  .line {
    margin-right: 220px;
    margin-top: -10px;
    width: 550px;
    display: none;
  }

  .advantages-card {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .advantages-section {
    margin-top: 130px;
  }
}

@media screen and (max-width: 550px) {
  .advantages-section-card-cont {
    flex-direction: column;
    margin-top: 900px;
    gap: 0px;
    margin-left: -90px;
  }

  .card-three {
    margin-top: 0px;
    margin-left: 0px;
  }

  .advantages-card-title {
    font-size: 20px;
    width: 300px;
    margin-bottom: -8px;
  }

  .card-one {
    margin-top: 0px;
    margin-right: 0px;
  }

  .advantages-card-subtitle {
    font-size: 16px;
    width: 300px;
  }

  .advantages-card-img {
    width: 70px;
  }

  .line {
    margin-right: 220px;
    margin-top: -10px;
    width: 550px;
    display: none;
  }

  .advantages-card {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .advantages-section {
    margin-top: 130px;
  }
}

@media screen and (max-width: 450px) {
  .advantages-section-card-cont {
    flex-direction: column;
    margin-top: 900px;
    gap: 0px;
    margin-left: 0px;
  }

  .card-three {
    margin-top: 0px;
    margin-left: 0px;
  }

  .advantages-card-title {
    font-size: 18px;
    width: 300px;
    margin-bottom: -8px;
  }

  .card-one {
    margin-top: 0px;
    margin-right: 0px;
  }

  .advantages-card-subtitle {
    font-size: 14px;
    width: 300px;
  }

  .advantages-card-img {
    width: 60px;
  }

  .line {
    margin-right: 220px;
    margin-top: -10px;
    width: 550px;
    display: none;
  }

  .advantages-card {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .advantages-section {
    margin-top: 130px;
  }
}
</style>
