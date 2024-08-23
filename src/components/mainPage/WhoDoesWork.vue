<script>
export default {
  data() {
    return {
      currentIndex: 0,
      cards: [
        {
          title: "iGaming",
          comment:
            "Мы предоставляем безопасные платежные решения для ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные транзакции",
          img: "/mainPage/WhoDoesWork/sword.svg",
        },
        {
          title: "Exchange сервисы",
          comment:
            "Мы поддерживаем обмен криптовалют и фиатных денег, предлагая мгновенные и безопасные транзакции",
          img: "/mainPage/WhoDoesWork/money.svg",
        },
        {
          title: "E-Commerce",
          comment:
            "Мы предлагаем комплексные платежные решения для онлайн-магазинов, обеспечивая удобство и безопасность покупок",
          img: "/mainPage/WhoDoesWork/basket.svg",
        },
        {
          title: "High-Risk проекты",
          comment:
            "Мы обслуживаем проекты с повышенным риском, предоставляя надежные решения для обработки и защиты платежей",
          img: "/mainPage/WhoDoesWork/sword.svg",
        },
      ],
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 50}%)`,
        width: `${this.cards.length * 50}%`,
      };
    },
    progressWidth() {
      return `${((this.currentIndex + 1) / this.cards.length) * 100}%`;
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex > 0 ? this.currentIndex - 1 : this.cards.length - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex < this.cards.length - 1 ? this.currentIndex + 1 : 0;
    },
  },
};
</script>

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
    <section class="slider-sect">
      <div class="slider-container">
        <div class="slider" :style="sliderStyle">
          <div v-for="(card, index) in cards" :key="index" class="card">
            <img :src="card.img" alt="" />
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-com">{{ card.comment }}</p>
          </div>
        </div>
      </div>
      <article class="controls-cont">
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressWidth }"></div>
        </div>
        <div class="controls">
          <img
            class="controls-img"
            @click="prevSlide"
            src="/Arrow-l.svg"
            alt=""
          />
          <img
            class="controls-r"
            @click="nextSlide"
            src="/Arrow-r.svg"
            alt=""
          />
        </div>
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

@media screen and (max-width: 1750px) {
  .who-Does-work-card {
    padding: 14px;
  }

  .who-Does-work-card-subtitle {
    font-size: 16px;
  }

  .who-Does-work-card-section {
    gap: 25px;
  }
}

@media screen and (max-width: 1650px) {
  .who-Does-work-card {
    padding: 14px;
  }

  .who-Does-work-card-subtitle {
    font-size: 14px;
    margin: 0;
    width: 310px;
  }

  .who-Does-work-card-section {
    gap: 25px;
  }
}

@media screen and (max-width: 1500px) {
  .who-Does-work-card {
    padding: 14px;
  }

  .who-Does-work-card-subtitle {
    font-size: 14px;
    margin: 0;
    width: 280px;
  }

  .who-Does-work-card-section {
    gap: 25px;
  }
}

@media screen and (max-width: 1350px) {
  .who-Does-work-card {
    padding: 14px;
  }

  .who-Does-work-title {
    font-size: 35px;
    margin-bottom: 60px;
  }

  .who-Does-work-card-title {
    font-size: 22px;
    margin-bottom: 50px;
  }

  .who-Does-work-card-subtitle {
    font-size: 12px;
    margin: 0;
    width: 240px;
  }

  .who-Does-work-card-section {
    gap: 25px;
  }

  img {
    width: 50px;
  }
}

@media screen and (max-width: 1200px) {
  .who-Does-work-card {
    padding: 14px;
  }

  .who-Does-work-section {
    height: 700px;
    margin-top: 300px;
  }

  .who-Does-work-title {
    font-size: 35px;
    margin-bottom: 60px;
  }

  .who-Does-work-card-title {
    font-size: 22px;
    margin-bottom: 50px;
  }

  .who-Does-work-card-subtitle {
    font-size: 10px;
    margin: 0;
    width: 200px;
  }

  .who-Does-work-card-section {
    gap: 25px;
  }

  img {
    width: 50px;
  }
}

@media screen and (max-width: 1050px) {
  .who-Does-work-card {
    padding: 12px;
  }

  .who-Does-work-section {
    height: 700px;
    margin-top: 300px;
  }

  .who-Does-work-title {
    font-size: 35px;
    margin-bottom: 60px;
  }

  .who-Does-work-card-title {
    font-size: 20px;
    margin-bottom: 50px;
  }

  .who-Does-work-card-subtitle {
    font-size: 10px;
    margin: 0;
    width: 200px;
  }

  .who-Does-work-card-section {
    gap: 20px;
  }

  img {
    width: 50px;
  }
}

@media screen and (max-width: 1000px) {
  .who-Does-work-card {
    padding: 12px;
  }

  .who-Does-work-section {
    height: 700px;
    margin-top: 260 px;
  }

  .who-Does-work-title {
    font-size: 35px;
    margin-bottom: 60px;
  }

  .who-Does-work-card-title {
    font-size: 18px;
    margin-bottom: 50px;
  }

  .who-Does-work-card-subtitle {
    font-size: 10px;
    margin: 0;
    width: 180px;
  }

  .who-Does-work-card-section {
    gap: 20px;
  }

  img {
    width: 40px;
  }
}

@media screen and (max-width: 900px) {
  .who-Does-work-card {
    padding: 12px;
  }

  .who-Does-work-section {
    height: 700px;
    margin-top: 260px;
  }

  .who-Does-work-title {
    font-size: 35px;
    margin-bottom: 60px;
  }

  .who-Does-work-card-title {
    font-size: 16px;
    margin-bottom: 50px;
  }

  .who-Does-work-card-subtitle {
    font-size: 10px;
    margin: 0;
    width: 150px;
  }

  .who-Does-work-card-section {
    gap: 20px;
  }

  img {
    width: 40px;
  }
}

@media screen and (max-width: 768px) {
  .who-Does-work-card {
    padding: 12px;
  }

  .who-Does-work-section {
    height: 1200px;
    margin-top: 260px;
  }

  .who-Does-work-title {
    font-size: 45px;
    margin-bottom: 60px;
  }

  .who-Does-work-card-title {
    font-size: 16px;
    margin-bottom: 50px;
  }

  .who-Does-work-card-subtitle {
    font-size: 10px;
    margin: 0;
    width: 150px;
  }

  .who-Does-work-card-section {
    display: none;
    gap: 20px;
  }

  .submit-application-button {
    margin-top: 60px;
    padding: 16px 28px;
    width: 640px;
    font-size: 24px;
  }

  .who-Does-work-section {
    margin-top: 1000px;
  }

  img {
    width: 40px;
  }
}

.slider-container {
  position: relative;
  width: 30%;
  overflow: hidden;
}

.slider-sect {
  /* display: block; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.slider {
  display: flex;
  transition: transform 0.5s ease;
}

.card {
  flex: 0 0 50%;
  box-sizing: border-box;
  height: 60vh; /* высота карточки */
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: #0a0a1a;
}

.card-title {
  font-weight: 600;
  font-size: 30px;
  line-height: 115%;
  color: #12d3c0;
}

.card-com {
  margin-top: 80px;
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #fff;
  width: 500px;
}

.controls-cont {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-top: 10px;
}

.controls-img {
  width: 48px;
}

.controls-r {
  width: 20px;
}

.card-content {
  font-size: 1.2em;
  color: #333;
  margin: 0;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.controls button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 0 5px;
}

.progress-bar {
  background: #432b6b;
  height: 10px;
  border-radius: 5px;
  width: 500px;
}

.progress {
  background: #5d12ce;
  height: 100%;
  border-radius: 5px;
  transition: width 0.5s ease;
}

@media screen and (max-width: 650px) {
  .slider-container {
    position: relative;
    width: 25%;
    overflow: hidden;
  }

  .slider-sect {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
  }

  .card {
    flex: 0 0 50%;
    box-sizing: border-box;
    height: 60vh; /* высота карточки */
    border-radius: 10px;
    padding: 18px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25),
      0 20px 25px 0 rgba(0, 0, 0, 0.15);
    background: #0a0a1a;
  }

  .card-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 115%;
    color: #12d3c0;
  }

  .card-com {
    margin-top: 80px;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #fff;
    width: 500px;
  }

  .controls-cont {
    display: flex;
    align-items: center;
    gap: 26px;
    margin-top: 10px;
  }

  .controls-img {
    width: 48px;
  }

  .controls-r {
    width: 20px;
  }

  .card-content {
    font-size: 1.2em;
    color: #333;
    margin: 0;
  }

  .controls {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .controls button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin: 0 5px;
  }

  .progress-bar {
    background: #432b6b;
    height: 10px;
    border-radius: 5px;
    width: 400px;
  }

  .progress {
    background: #5d12ce;
    height: 100%;
    border-radius: 5px;
    transition: width 0.5s ease;
  }

  .submit-application-button {
    margin-top: 60px;
    padding: 16px 28px;
    width: 540px;
    font-size: 24px;
  }
}

@media screen and (max-width: 550px) {
  .slider-container {
    position: relative;
    width: 25%;
    overflow: hidden;
  }

  .slider-sect {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
  }

  .card {
    flex: 0 0 40%;
    box-sizing: border-box;
    height: 60vh; /* высота карточки */
    border-radius: 10px;
    padding: 18px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25),
      0 20px 25px 0 rgba(0, 0, 0, 0.15);
    background: #0a0a1a;
  }

  .card-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 115%;
    color: #12d3c0;
  }

  .card-com {
    margin-top: 80px;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #fff;
    width: 400px;
  }

  .controls-cont {
    display: flex;
    align-items: center;
    gap: 26px;
    margin-top: 10px;
  }

  .controls-img {
    width: 48px;
  }

  .controls-r {
    width: 20px;
  }

  .card-content {
    font-size: 1.2em;
    color: #333;
    margin: 0;
  }

  .controls {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .who-Does-work-title {
    font-size: 30px;
    margin-bottom: 60px;
  }

  .controls button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin: 0 5px;
  }

  .progress-bar {
    background: #432b6b;
    height: 10px;
    border-radius: 5px;
    width: 300px;
  }

  .progress {
    background: #5d12ce;
    height: 100%;
    border-radius: 5px;
    transition: width 0.5s ease;
  }

  .submit-application-button {
    margin-top: 60px;
    padding: 16px 28px;
    width: 440px;
    font-size: 24px;
  }
}

@media screen and (max-width: 450px) {
  .slider-container {
    position: relative;
    width: 25%;
    overflow: hidden;
  }

  .slider-sect {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
  }

  .card {
    flex: 0 0 40%;
    box-sizing: border-box;
    height: 60vh; /* высота карточки */
    border-radius: 10px;
    padding: 18px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25),
      0 20px 25px 0 rgba(0, 0, 0, 0.15);
    background: #0a0a1a;
  }

  .card-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 115%;
    color: #12d3c0;
  }

  .card-com {
    margin-top: 80px;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #fff;
    width: 300px;
  }

  .controls-cont {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
  }

  .controls-img {
    width: 30px;
  }

  .controls-r {
    width: 13px;
  }

  .card-content {
    font-size: 1.2em;
    color: #333;
    margin: 0;
  }

  .controls {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .who-Does-work-title {
    font-size: 30px;
    margin-bottom: 60px;
  }

  .controls button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin: 0 5px;
  }

  .progress-bar {
    background: #432b6b;
    height: 10px;
    border-radius: 5px;
    width: 250px;
  }

  .progress {
    background: #5d12ce;
    height: 100%;
    border-radius: 5px;
    transition: width 0.5s ease;
  }

  .submit-application-button {
    margin-top: 60px;
    padding: 16px 28px;
    width: 340px;
    font-size: 24px;
  }
}
</style>
