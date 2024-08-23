<script setup>
defineProps({
  id: Number,
  time: String,
  commission: String,
  recipientName: String,
  recipientMail: String,
  recipientNumber: String,
  currency: String,
  adres: String,
  bank: String,
  course: String,
  amount: Number,
  amountUsdt: Number,
  status: Boolean,
  onClickAdd: Function,
});
</script>

<template>
  <article @click="onClickAdd" class="card">
    <article class="card-cont">
      <div>
        <p class="text">ID</p>
        <h2 class="title">{{ id }}</h2>
        <p class="text">Время</p>
        <h2 class="title">{{ time }}</h2>
        <p class="text">Адрес</p>
        <h2 class="title-adres">{{ adres }}</h2>
      </div>
      <div>
        <p class="text">Статус</p>
        <h2 class="status-title">{{ status }}</h2>
      </div>
    </article>
    <article class="card-cont-two">
      <div>
        <p class="text">Банк</p>
        <h2 class="title">{{ bank }}</h2>
        <p class="text">Сумма</p>
        <h2 class="title">{{ amount }}</h2>
      </div>
      <div>
        <p class="text">Курс</p>
        <h2 class="title-usdt">{{ course }} USDT</h2>
        <p class="text">
          Сумма списания<br />
          с баланса USDT
        </p>
        <h2 class="title-usdt">{{ amountUsdt }} USDT</h2>
      </div>
    </article>
  </article>
</template>

<style scoped>
.card-cont {
  display: flex;
  align-items: flex-start;
  gap: 100px;
}

.card-cont-two {
  display: flex;
  align-items: center;
  gap: 100px;
}

.text {
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
}

.title {
  font-weight: 400;
  font-size: 38px;
  letter-spacing: 0.02em;
  color: #fff;
}

.title-adres {
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 0.02em;
  color: #fff;
}

.status-title {
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 0.02em;
  text-align: right;
  color: #63ef63;
}

.title-usdt {
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 0.02em;
  color: #fff;
}

@media screen and (max-width: 650px) {
  .card-cont {
    gap: 100px;
  }

  .card-cont-two {
    gap: 100px;
  }

  .text {
    font-size: 26px;
  }

  .title {
    font-size: 36px;
  }

  .title-adres {
    font-size: 36px;
  }

  .status-title {
    font-size: 36px;
  }

  .title-usdt {
    font-size: 36px;
  }
}

@media screen and (max-width: 550px) {
  .card-cont {
    gap: 60px;
  }

  .card-cont-two {
    gap: 60px;
  }

  .text {
    font-size: 24px;
  }

  .title {
    font-size: 30px;
  }

  .title-adres {
    font-size: 30px;
  }

  .status-title {
    font-size: 30px;
  }

  .title-usdt {
    font-size: 30px;
  }
}

@media screen and (max-width: 450px) {
  .card-cont {
    gap: 40px;
  }

  .card-cont-two {
    gap: 40px;
  }

  .text {
    font-size: 20px;
  }

  .title {
    font-size: 22px;
  }

  .title-adres {
    font-size: 22px;
  }

  .status-title {
    font-size: 22px;
  }

  .title-usdt {
    font-size: 22px;
  }
}
</style>
