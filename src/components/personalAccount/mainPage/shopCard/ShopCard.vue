<script setup>
defineProps({
  shopName: String,
  available: Number,
  frozen: Number,
});
</script>

<template>
  <article class="card">
    <header>
      <h2 class="shop-name">Название магазина</h2>
      <button v-if="frozen > 0 && available > 0" class="bring-out-button">
        Вывести
      </button>
    </header>
    <article class="line-cont">
      <img
        class="line"
        src="/personalAccount/personalAccountCard/line.svg"
        alt=""
      />
    </article>
    <footer>
      <div>
        <p class="text">Доступно</p>
        <h2 class="balance-available">{{ available }} USDT</h2>
      </div>
      <div>
        <p class="text">Заморожено</p>
        <h2 class="balance-frozen">{{ frozen }} USDT</h2>
      </div>
    </footer>
  </article>
  <article class="card-phone">
    <header>
      <h2 class="shop-name-phone">Название магазина</h2>
    </header>
    <article class="line-cont-phone">
      <img
        class="line-phone"
        src="/personalAccount/personalAccountCard/line.svg"
        alt=""
      />
    </article>
    <footer>
      <div>
        <p class="text-phone">Доступно</p>
        <h2 class="balance-available-phone">{{ available }} USDT</h2>
      </div>
      <div>
        <p class="text-phone">Заморожено</p>
        <h2 class="balance-frozen-phone">{{ frozen }} USDT</h2>
      </div>
      <article class="line-cont-phone">
        <img
          class="line-phone"
          src="/personalAccount/personalAccountCard/line.svg"
          alt=""
        />
      </article>
      <article class="button-cont-phone">
        <button
          v-if="frozen > 0 && available > 0"
          class="bring-out-button-phone"
        >
          Вывести
        </button>
      </article>
    </footer>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid rgba(45, 237, 218, 0.1);
  border-radius: 12px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
}

.line-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

header {
  display: flex;
  align-items: center;
  gap: 270px;
  margin-bottom: 12px;
}

footer {
  display: flex;
  align-items: center;
  gap: 177px;
  margin-left: 16px;
  margin-top: 16px;
}

.shop-name {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
}

.bring-out-button {
  border: 1px solid #12d3c0;
  border-radius: 40px;
  width: 91px;
  height: 24px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  background-color: transparent;
}

.text {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
  margin: 0;
  margin-bottom: 4px;
}

.balance-available {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #63ef63;
  margin: 0;
}

.balance-frozen {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #ed2d2d;
  margin: 0;
}

.card-phone {
  border: 1px solid rgba(45, 237, 218, 0.1);
  border-radius: 8px;
  padding: 10px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: none;
}

.shop-name-phone {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
}

.line-cont-phone {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-phone {
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
}

.line-phone {
}

.balance-frozen-phone {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #ed2d2d;
}

.balance-available-phone {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #63ef63;
}

@media screen and (max-width: 1800px) {
  .card {
    padding: 16px;
  }

  header {
    gap: 250px;
    margin-bottom: 12px;
  }

  .line {
    width: 555px;
    height: 2px;
  }
}

@media screen and (max-width: 1700px) {
  .card {
    padding: 16px;
  }

  header {
    gap: 200px;
    margin-bottom: 12px;
  }

  .line {
    width: 500px;
    height: 2px;
  }
}

@media screen and (max-width: 1550px) {
  header {
    gap: 150px;
    margin-bottom: 12px;
  }

  .line {
    width: 460px;
    height: 2px;
  }
}

@media screen and (max-width: 1450px) {
  header {
    gap: 90px;
    margin-bottom: 12px;
  }

  .line {
    width: 400px;
    height: 2px;
  }

  footer {
    gap: 100px;
    margin-left: 16px;
    margin-top: 16px;
  }
}

@media screen and (max-width: 1350px) {
  header {
    gap: 50px;
    margin-bottom: 12px;
  }

  .line {
    width: 350px;
    height: 2px;
  }

  footer {
    gap: 50px;
    margin-left: 16px;
    margin-top: 16px;
  }
}

@media screen and (max-width: 1250px) {
  header {
    gap: 43px;
    margin-bottom: 12px;
  }

  .line {
    width: 300px;
    height: 2px;
  }

  footer {
    gap: 40px;
    margin-left: 16px;
    margin-top: 16px;
  }

  .shop-name {
    font-size: 16px;
  }
}

@media screen and (max-width: 1150px) {
  header {
    gap: 35px;
    margin-bottom: 12px;
  }

  .line {
    width: 265px;
    height: 2px;
  }

  footer {
    gap: 30px;
    margin-left: 16px;
    margin-top: 16px;
  }

  .shop-name {
    font-size: 14px;
  }

  .bring-out-button {
    width: 80px;
    height: 20px;
    font-size: 12px;
  }

  .text {
    font-size: 12px;
    margin-bottom: 4px;
  }

  .balance-available {
    font-size: 16px;
  }

  .balance-frozen {
    font-size: 16px;
  }
}

@media screen and (max-width: 1050px) {
  header {
    gap: 20px;
    margin-bottom: 12px;
  }

  .line {
    width: 210px;
    height: 2px;
  }

  footer {
    gap: 30px;
    margin-left: 16px;
    margin-top: 16px;
  }

  .shop-name {
    font-size: 12px;
  }

  .bring-out-button {
    width: 70px;
    height: 20px;
    font-size: 10px;
  }

  .text {
    font-size: 10px;
    margin-bottom: 4px;
  }

  .balance-available {
    font-size: 14px;
  }

  .balance-frozen {
    font-size: 14px;
  }
}

@media screen and (max-width: 830px) {
  header {
    gap: 20px;
    margin-bottom: 12px;
  }

  .line {
    width: 180px;
    height: 5px;
  }

  footer {
    gap: 30px;
    margin-left: 16px;
    margin-top: 16px;
  }

  .shop-name {
    font-size: 10px;
  }

  .bring-out-button {
    width: 60px;
    height: 20px;
    font-size: 8px;
  }

  .text {
    font-size: 8px;
    margin-bottom: 4px;
  }

  .balance-available {
    font-size: 12px;
  }

  .balance-frozen {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .card {
    display: none;
  }
  .card-phone {
    border: 1px solid rgba(45, 237, 218, 0.1);
    border-radius: 8px;
    padding: 10px;
    backdrop-filter: blur(150px);
    background: rgba(10, 10, 26, 0.8);
    display: block;
  }

  footer {
    display: block;
    margin-left: 0px;
    margin-top: 10px;
  }

  .shop-name-phone {
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #fff;
    margin: 0;
  }

  .line-cont-phone {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-phone {
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #fff;
    opacity: 0.4;
  }

  .line-phone {
    width: 100%;
  }

  .balance-frozen-phone {
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #ed2d2d;
  }

  .balance-available-phone {
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #63ef63;
  }

  .button-cont-phone {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bring-out-button-phone {
    border: 1px solid #12d3c0;
    border-radius: 40px;
    background-color: transparent;
    width: 100%;
    height: 33px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    margin-top: 12px;
  }
}

@media screen and (max-width: 650px) {
  .card-phone {
    padding: 10px;
  }

  footer {
    margin-top: 10px;
  }

  .shop-name-phone {
    font-size: 24px;
  }

  .text-phone {
    font-size: 20px;
  }

  .line-phone {
    width: 500px;
  }

  .balance-frozen-phone {
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #ed2d2d;
  }

  .balance-available-phone {
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #63ef63;
  }

  .button-cont-phone {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bring-out-button-phone {
    border: 1px solid #12d3c0;
    border-radius: 40px;
    background-color: transparent;
    width: 100%;
    height: 33px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    margin-top: 12px;
  }
}

@media screen and (max-width: 550px) {
  .card-phone {
    padding: 10px;
  }

  footer {
    margin-top: 10px;
  }

  .shop-name-phone {
    font-size: 24px;
  }

  .text-phone {
    font-size: 20px;
  }

  .line-phone {
    width: 400px;
  }

  .balance-frozen-phone {
    font-size: 24px;
    color: #ed2d2d;
  }

  .balance-available-phone {
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #63ef63;
  }

  .button-cont-phone {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bring-out-button-phone {
    border: 1px solid #12d3c0;
    border-radius: 40px;
    background-color: transparent;
    width: 100%;
    height: 33px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    margin-top: 12px;
  }
}

@media screen and (max-width: 450px) {
  .card-phone {
    padding: 10px;
  }

  footer {
    margin-top: 10px;
  }

  .shop-name-phone {
    font-size: 24px;
  }

  .text-phone {
    font-size: 20px;
  }

  .line-phone {
    width: 300px;
  }

  .balance-frozen-phone {
    font-size: 24px;
    color: #ed2d2d;
  }

  .balance-available-phone {
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #63ef63;
  }

  .button-cont-phone {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bring-out-button-phone {
    border: 1px solid #12d3c0;
    border-radius: 40px;
    background-color: transparent;
    width: 100%;
    height: 33px;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #12d3c0;
    margin-top: 12px;
  }
}
</style>
