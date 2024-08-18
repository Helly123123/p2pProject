<script></script>

<template>
  <section class="who-Does-work-section">
    <h2 class="who-Does-work-title">С кем мы работаем</h2>
    <section class="who-Does-work-card-section">
      <article class="who-Does-work-card igaming">
        <img src="/mainPage/WhoDoesWork/sword.svg" alt="sword" />
        <h2 class="who-Does-work-card-title">iGaming</h2>
        <p class="who-Does-work-card-subtitle">
          Мы предоставляем безопасные платежные решения для ставок на спорт и
          онлайн-казино, обеспечивая быстрые и надежные транзакции
        </p>
      </article>
      <article class="who-Does-work-card exchange">
        <img src="/mainPage/WhoDoesWork/money.svg" alt="sword" />
        <h2 class="who-Does-work-card-title">Exchange сервисы</h2>
        <p class="who-Does-work-card-subtitle">
          Мы поддерживаем обмен криптовалют и фиатных денег, предлагая
          мгновенные и безопасные транзакции
        </p>
      </article>
      <article class="who-Does-work-card e-commerce">
        <img src="/mainPage/WhoDoesWork/basket.svg" alt="sword" />
        <h2 class="who-Does-work-card-title">E-Commerce</h2>
        <p class="who-Does-work-card-subtitle">
          Мы предлагаем комплексные платежные решения для онлайн-магазинов,
          обеспечивая удобство и безопасность покупок
        </p>
      </article>
      <article class="who-Does-work-card high-risk">
        <img src="/mainPage/WhoDoesWork/sword.svg" alt="sword" />
        <h2 class="who-Does-work-card-title">High-Risk проекты</h2>
        <p class="who-Does-work-card-subtitle">
          Мы обслуживаем проекты с повышенным риском, предоставляя надежные
          решения для обработки и защиты платежей
        </p>
      </article>
    </section>
    <button class="submit-application-button">Оставить заявку</button>
  </section>
</template>

<style scoped>
.who-Does-work-section {
  background-image: url(/mainPage/WhoDoesWork/bg_two.svg);
  background-size: cover;
  width: 100%;
  height: 920px;
  margin-top: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.who-Does-work-card-section {
  display: flex;
  align-items: center;
  gap: 35px;
}

.who-Does-work-title {
  font-weight: 700;
  font-size: 45px;
  line-height: 115%;
  color: #fff;
  margin-bottom: 40px;
}

.who-Does-work-card {
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: #0a0a1a;
}

.igaming {
  transform: rotate(-4deg);
}

.exchange {
  transform: rotate(2deg);
}

.e-commerce {
  transform: rotate(3deg);
}

.high-risk {
  transform: rotate(-2deg);
}

.who-Does-work-card-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 115%;
  color: #12d3c0;
  margin-bottom: 80px;
}

.who-Does-work-card-subtitle {
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #fff;
  width: 340px;
}

.submit-application-button {
  margin-top: 60px;
  border-radius: 50px;
  padding: 16px 28px;
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
</style>
