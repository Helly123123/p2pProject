<script></script>

<template>
  <footer>
    <h1 class="logo-footer">LOGO</h1>
    <section class="footer-nav-section">
      <section>
        <nav>
          <ul>
            <li>
              <h2 class="footer-title">Основные разделы</h2>
            </li>
            <li>
              <a class="footer-subtitle" href="#">С кем работаем?</a>
            </li>
            <li>
              <a class="footer-subtitle" href="#">О нас</a>
            </li>
            <li>
              <a class="footer-subtitle" href="#">FAQ</a>
            </li>
            <li>
              <a class="footer-subtitle" href="#">Контакты</a>
            </li>
          </ul>
          <ul>
            <li>
              <h2 class="footer-title">Документы</h2>
            </li>
            <li>
              <a class="footer-subtitle" href="#">Документация по API</a>
            </li>
            <li>
              <a class="footer-subtitle" href="#"
                >Политика конфиденциальности</a
              >
            </li>
            <li>
              <a class="footer-subtitle" href="#"
                >Пользовательское соглашение</a
              >
            </li>
          </ul>
          <ul>
            <li>
              <h2 class="footer-title">Поддержка</h2>
            </li>
            <li>
              <a class="footer-subtitle" href="#">@telegram</a>
            </li>
            <li>
              <a class="footer-subtitle" href="#">info@mail.ru</a>
            </li>
          </ul>
        </nav>
      </section>
      <article class="button-footer-cont">
        <button class="personal-account-button">Личный кабинет</button>
        <button class="submit-application-button">Оставить заявку</button>
      </article>
    </section>
  </footer>
</template>

<style scoped>
footer {
  background-image: url(/footer/footer.svg);
  width: 100%;
  height: 585px;
  background-size: cover;
  background-position: center;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
}

nav {
  display: flex;
  gap: 180px;
}

.footer-nav-section {
  display: flex;
  gap: 120px;
  margin-top: 250px;
}

.button-footer-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
}

.logo-footer {
  font-weight: 600;
  font-size: 50px;
  color: #fff;
  margin-top: 250px;
}

.footer-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 115%;
  color: #12d3c0;
}

.footer-subtitle {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  text-decoration: none;
}

.personal-account-button {
  border-radius: 40px;
  padding: 12px 20px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #02020e;
  transition: all 0.15s;
}

.personal-account-button:hover {
  background: #2ac4b4;
}

.submit-application-button {
  border: 1px solid #12d3c0;
  border-radius: 40px;
  padding: 12px 20px;
  background-color: transparent;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  transition: all 0.15s;
}

.submit-application-button:hover {
  border: 1px solid #2ac4b4;
}
</style>
