<script></script>

<template>
  <section class="card-section">
    <article class="card">
      <h2 class="title">E-mail</h2>
      <h2 class="subtitle">info@mail.ru</h2>
    </article>
    <article class="card">
      <h2 class="title">Тел</h2>
      <h2 class="subtitle">+7 (000) 000-00-00</h2>
      <h2 class="subtitle">+7 (000) 000-00-00</h2>
    </article>
    <article class="card">
      <h2 class="title">ТГ</h2>
      <h2 class="subtitle">@wasdwasd</h2>
    </article>
  </section>
</template>

<style scoped>
.card-section {
  display: flex;
  align-items: center;
  gap: 33px;
}

.card {
  border-radius: 10px;
  padding: 20px 20px;
  width: 300px;
  height: 140px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: #0a0a1a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
}

.subtitle {
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #fff;
  flex-wrap: wrap;
  margin: 0;
}

@media screen and (max-width: 1750px) {
  .card {
    width: 270px;
    height: 140px;
  }
}

@media screen and (max-width: 1650px) {
  .card {
    width: 255px;
    height: 140px;
  }
}

@media screen and (max-width: 1500px) {
  .card {
    width: 230px;
    height: 140px;
  }

  .title {
    font-size: 14px;
  }

  .subtitle {
    font-size: 22px;
  }
}

@media screen and (max-width: 1350px) {
  .card {
    width: 190px;
    height: 100px;
  }

  .title {
    font-size: 14px;
  }

  .subtitle {
    font-size: 18px;
  }
}

@media screen and (max-width: 1200px) {
  .card {
    width: 150px;
    height: 90px;
  }

  .title {
    font-size: 14px;
  }

  .subtitle {
    font-size: 14px;
  }
}

@media screen and (max-width: 1000px) {
  .card {
    width: 140px;
    height: 70px;
  }

  .title {
    font-size: 10px;
  }

  .subtitle {
    font-size: 12px;
  }
}

@media screen and (max-width: 900px) {
  .card {
    width: 115px;
    height: 60px;
  }

  .title {
    font-size: 8px;
  }

  .subtitle {
    font-size: 10px;
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 600px;
    height: 60px;
  }

  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 20px;
  }
}

@media screen and (max-width: 650px) {
  .card {
    width: 500px;
    height: 60px;
  }

  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 20px;
  }
}

@media screen and (max-width: 550px) {
  .card {
    width: 400px;
    height: 60px;
  }

  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 20px;
  }
}

@media screen and (max-width: 450px) {
  .card {
    width: 300px;
    height: 60px;
  }

  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 20px;
  }
}
</style>
