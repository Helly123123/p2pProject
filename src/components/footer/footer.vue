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

@media screen and (max-width: 1650px) {
  nav {
    display: flex;
    gap: 80px;
  }
}

@media screen and (max-width: 1500px) {
  nav {
    display: flex;
    gap: 20px;
  }
}

@media screen and (max-width: 1350px) {
  nav {
    display: flex;
    gap: 20px;
  }

  footer {
    gap: 20px;
  }

  .footer-nav-section {
    gap: 40px;
  }
}

@media screen and (max-width: 1200px) {
  nav {
    display: flex;
    gap: 0px;
  }

  footer {
    gap: 0px;
  }

  .footer-nav-section {
    gap: 20px;
  }

  .logo-footer {
    font-size: 35px;
    margin-top: 220px;
  }

  .footer-subtitle {
    font-size: 12px;
  }
}

@media screen and (max-width: 1000px) {
  nav {
    display: flex;
    gap: 8px;
  }

  footer {
    gap: 0px;
  }

  .footer-nav-section {
    gap: 20px;
  }

  .logo-footer {
    font-size: 35px;
    margin-top: 220px;
  }

  .footer-subtitle {
    font-size: 10px;
  }

  .footer-title {
    font-size: 16px;
  }
}

@media screen and (max-width: 900px) {
  nav {
    display: flex;
    gap: 8px;
  }

  footer {
    gap: 0px;
  }

  .footer-nav-section {
    gap: 10px;
  }

  .logo-footer {
    font-size: 30px;
    margin-top: 210px;
  }

  .footer-subtitle {
    font-size: 9px;
  }

  .footer-title {
    font-size: 14px;
  }

  .submit-application-button {
    padding: 12px 20px;
    font-size: 10px;
  }

  .personal-account-button {
    font-size: 10px;
  }
}

@media screen and (max-width: 768px) {
  nav {
    display: flex;
    gap: 0px;
    flex-direction: column;
    margin-left: -30px;
  }

  footer {
    flex-direction: column;
    background-image: url(/footer/ft-phone.svg);
    height: 1200px;
    gap: 0px;
  }

  .footer-nav-section {
    flex-direction: column;
    gap: 0px;
    margin-bottom: -200px;
  }

  ul {
    margin-top: 0px;
  }

  li {
    margin-top: 0px;
  }

  .logo-footer {
    font-size: 100px;
    margin-top: 100px;
    margin-bottom: -230px;
  }

  .footer-subtitle {
    font-size: 24px;
  }

  .footer-title {
    font-size: 28px;
  }

  .submit-application-button {
    padding: 8px 50px;
    font-size: 28px;
    width: 500px;
  }

  .button-footer-cont {
    margin-top: 10px;
  }

  .personal-account-button {
    padding: 8px 50px;
    width: 500px;
    font-size: 28px;
  }
}

@media screen and (max-width: 500px) {
  nav {
    display: flex;
    gap: 0px;
    flex-direction: column;
    margin-left: -30px;
  }

  footer {
    flex-direction: column;
    background-image: url(/footer/ft-phone.svg);
    height: 1200px;
    gap: 0px;
  }

  .footer-nav-section {
    flex-direction: column;
    gap: 0px;
    margin-bottom: -200px;
  }

  ul {
    margin-top: 0px;
  }

  li {
    margin-top: 0px;
  }

  .logo-footer {
    font-size: 100px;
    margin-top: 60px;
    margin-bottom: -150px;
  }

  .footer-subtitle {
    font-size: 20px;
  }

  .footer-title {
    font-size: 24px;
  }

  .submit-application-button {
    padding: 8px 50px;
    font-size: 28px;
    width: 400px;
  }

  .button-footer-cont {
    margin-top: 10px;
  }

  .personal-account-button {
    padding: 8px 50px;
    width: 400px;
    font-size: 28px;
  }
}

@media screen and (max-width: 400px) {
  nav {
    display: flex;
    gap: 0px;
    flex-direction: column;
    margin-left: 0px;
  }

  footer {
    flex-direction: column;
    background-image: url(/footer/ft-phone.svg);
    height: 1200px;
    gap: 0px;
  }

  .footer-nav-section {
    flex-direction: column;
    gap: 0px;
    margin-bottom: -200px;
  }

  ul {
    margin-top: 0px;
  }

  li {
    margin-top: 0px;
  }

  .logo-footer {
    font-size: 100px;
    margin-top: 40px;
    margin-bottom: -150px;
  }

  .footer-subtitle {
    font-size: 18px;
  }

  .footer-title {
    font-size: 22px;
  }

  .submit-application-button {
    padding: 8px 50px;
    font-size: 20px;
    width: 300px;
  }

  .button-footer-cont {
    margin-top: 10px;
  }

  .personal-account-button {
    padding: 8px 50px;
    width: 300px;
    font-size: 20px;
  }
}
</style>
