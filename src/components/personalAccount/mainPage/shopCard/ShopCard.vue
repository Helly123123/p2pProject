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
      <img src="/personalAccount/personalAccountCard/line.svg" alt="" />
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
</style>
