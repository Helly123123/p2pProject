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
</style>
