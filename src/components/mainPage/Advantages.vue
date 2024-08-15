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
        <h2 class="advantages-card-title">
          Гибкие условия сотрудничества для проектов любого масштаба
        </h2>
        <p class="advantages-card-subtitle">
          Мы открыты к партнерству с компаниями из различных сфер
        </p>
      </article>
      <article class="advantages-card card-two">
        <img
          class="advantages-card-img"
          src="/mainPage/advantages/advantages-two.svg"
          alt="card"
        />
        <h2 class="advantages-card-title">
          Мгновенные выплаты без ограничений
        </h2>
        <p class="advantages-card-subtitle">
          Выводите средства быстро и удобно, когда вам это необходимо
        </p>
      </article>
      <article class="advantages-card card-three">
        <img
          class="advantages-card-img"
          src="/mainPage/advantages/advantages-three.svg"
          alt="card"
        />
        <h2 class="advantages-card-title">Быстрая поддержка</h2>
        <p class="advantages-card-subtitle">
          Наши специалисты ответят на ваши вопросы и помогут решить любую
          проблему в кратчайшие сроки
        </p>
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
</style>
