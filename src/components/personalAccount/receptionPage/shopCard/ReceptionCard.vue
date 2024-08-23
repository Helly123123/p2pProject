<script setup>
defineProps({
  time: String,
  commission: Number,
  credited: Number,
  amount: Number,
});
</script>

<template>
  <article class="card">
    <div>
      <p class="text">Время</p>
      <h2 class="meaning-text">{{ time }}</h2>
      <p class="text">Сумма</p>
      <h2 class="meaning-text">{{ amount }} USDT</h2>
      <p class="text">Зачислено</p>
      <h2 class="credited-text">{{ credited }} USDT</h2>
    </div>
    <div>
      <p class="text">Комиссия</p>
      <h2 class="meaning-text">{{ commission }} USDT</h2>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 12px;
}

.card:nth-child(even) {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  padding: 12px;
}

.text {
  font-weight: 400;
  font-size: 38px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
}

.meaning-text {
  font-weight: 600;
  font-size: 44px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
}

.credited-text {
  font-weight: 600;
  font-size: 46px;
  letter-spacing: 0.02em;
  color: #12d3c0;
}

@media screen and (max-width: 650px) {
  .text {
    font-size: 28px;
  }

  .meaning-text {
    font-size: 36px;
  }

  .credited-text {
    font-size: 38px;
  }
}

@media screen and (max-width: 550px) {
  .text {
    font-size: 20px;
  }

  .meaning-text {
    font-size: 28px;
  }

  .credited-text {
    font-size: 30px;
  }
}

@media screen and (max-width: 450px) {
  .text {
    font-size: 14px;
  }

  .meaning-text {
    font-size: 18px;
  }

  .credited-text {
    font-size: 22px;
  }
}
</style>
