<script setup>
defineProps({
  nameApi: String,
  idApi: String,
  comment: String,
  status: String,
});
</script>

<template>
  <article class="card">
    <p class="text">Статус</p>
    <h2 class="meaning-text-status">{{ status }}</h2>
    <p class="text">Название API</p>
    <h2 class="meaning-text">{{ nameApi }}</h2>
    <p class="text">ID API</p>
    <h2 class="meaning-text-id">
      {{ idApi }}
    </h2>
    <p class="text">Комментарий</p>
    <h2 class="meaning-text-comment">{{ comment }}</h2>
  </article>
</template>

<style scoped>
.card {
  gap: 100px;
  padding: 12px;
  width: 605px;
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

.meaning-text-comment {
  font-weight: 600;
  font-size: 44px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
  width: 400px;
}

.meaning-text-status {
  font-weight: 600;
  font-size: 44px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  margin: 0;
}

.meaning-text-id {
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  margin: 0;
  word-wrap: break-word; /* Поддерживает перенос слов */
  overflow-wrap: break-word; /* Альтернативный метод переноса слов */
  white-space: normal; /* Убедитесь, что текст переносится, если необходимо */
}

.credited-text {
  font-weight: 600;
  font-size: 46px;
  letter-spacing: 0.02em;
  color: #12d3c0;
}

@media screen and (max-width: 650px) {
  .card {
    width: 505px;
  }

  .text {
    font-size: 34px;
  }

  .meaning-text {
    font-size: 40px;
  }

  .meaning-text-comment {
    font-size: 40px;
    width: 400px;
  }

  .meaning-text-status {
    font-size: 40px;
  }

  .meaning-text-id {
    font-size: 36px;
  }
}

@media screen and (max-width: 550px) {
  .card {
    width: 405px;
  }

  .text {
    font-size: 34px;
  }

  .meaning-text {
    font-size: 40px;
  }

  .meaning-text-comment {
    font-size: 40px;
    width: 400px;
  }

  .meaning-text-status {
    font-size: 40px;
  }

  .meaning-text-id {
    font-size: 36px;
  }
}

@media screen and (max-width: 450px) {
  .card {
    width: 305px;
  }

  .text {
    font-size: 30px;
  }

  .meaning-text {
    font-size: 28px;
  }

  .meaning-text-comment {
    font-size: 26px;
    width: 300px;
  }

  .meaning-text-status {
    font-size: 36px;
  }

  .meaning-text-id {
    font-size: 26px;
  }
}
</style>
