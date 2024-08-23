<script setup>
import { ref } from "vue";

const isOn = ref(false);

function toggle() {
  isOn.value = !isOn.value;
}

const textToCopyOne = ref("TXFe3cFbGLrQKvYEgoapvPAkGqSZNjcEcS");
function copyTextOne() {
  navigator.clipboard
    .writeText(textToCopyOne.value)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
</script>

<template>
  <section class="settings-section">
    <h2 class="title">Доступ через API</h2>
    <section class="generation-apisection-section">
      <article>
        <h2 class="sutitle">Токен API</h2>
        <div class="api-token-cont">
          <p class="api-token-text">TXFe3cFbGLrQKvYEgoapvPAkGqSZNjcEcS</p>
          <img
            class="copy-img"
            @click="copyTextOne"
            src="/personalAccount/SettingsPage/copy.svg"
            alt=""
          />
        </div>
      </article>
      <article>
        <h2 class="sutitle">Комментарий</h2>
        <input
          class="comment-input"
          placeholder="Введите комментарий"
          type="text"
        />
      </article>
    </section>
    <button class="generate-api-button">Сгенерировать ключ API</button>
  </section>
  <section class="api-callback-url-section">
    <h2 class="api-callback-title">API Callback URL</h2>
    <input placeholder="Введите URL" class="api-callback-input" type="text" />
    <button class="api-callback-save-button">Сохранить</button>
  </section>
  <section class="password-section">
    <article class="switch-cont">
      <div class="toggle-switch" @click="toggle">
        <div :class="['switch', { 'switch-on': isOn }]"></div>
      </div>
      <h2 class="switch-text">2FA включено</h2>
    </article>
    <button class="edit-password-button">Сменить пароль</button>
  </section>
</template>

<style scoped>
.settings-section {
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
}

.generation-apisection-section {
  display: flex;
  align-items: center;
  gap: 40px;
}

.title {
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
}

.sutitle {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
}

.api-token-cont {
  border-radius: 12px;
  width: 450px;
  height: 41px;
  background: #02020e;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 97px;
}

.api-token-text {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  margin: 0;
}

.comment-input {
  border-radius: 12px;
  padding: 0px 0px 0px 12px;
  height: 41px;
  width: 748px;
  background: #02020e;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  border: none;
  outline: none;
}

.generate-api-button {
  border-radius: 50px;
  width: 323px;
  height: 56px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
  margin-top: 28px;
}

.copy-img {
  cursor: pointer;
}

.api-callback-url-section {
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 30px;
}

.api-callback-title {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #fff;
  margin: 0;
}

.api-callback-input {
  border-radius: 12px;
  padding: 0px 0px 0px 12px;
  width: 833px;
  height: 41px;
  background: #02020e;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  border: none;
  outline: none;
  margin: 0;
}

.api-callback-save-button {
  border-radius: 50px;
  width: 165px;
  height: 41px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
  margin: 0;
}

.password-section {
  border-radius: 16px;
  height: 73px;
  width: 1280px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
}

.toggle-switch {
  border-radius: 48px;
  width: 48px;
  height: 24px;
  background: rgba(18, 211, 192, 0.3);
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.switch {
  border-radius: 48px;
  width: 18px;
  height: 18px;
  background: #12d3c0;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform 0.3s ease;
}

.switch-on {
  transform: translateX(23px);
}

.switch-cont {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 16px;
}

.switch-text {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #fff;
}

.edit-password-button {
  border-radius: 50px;
  width: 229px;
  height: 41px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
}

@media screen and (max-width: 1800px) {
  .api-token-cont {
    width: 450px;
    height: 41px;
    gap: 97px;
  }

  .comment-input {
    height: 41px;
    width: 600px;
    font-size: 14px;
  }

  .api-callback-input {
    width: 790px;
    height: 41px;
    font-size: 14px;
  }

  .password-section {
    height: 73px;
    width: 1240px;
    gap: 40px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 1700px) {
  .api-token-cont {
    width: 450px;
    height: 41px;
    gap: 97px;
  }

  .comment-input {
    height: 41px;
    width: 610px;
    font-size: 14px;
  }

  .api-callback-input {
    width: 700px;
    height: 41px;
    font-size: 14px;
  }

  .password-section {
    height: 73px;
    width: 1150px;
    gap: 40px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 1550px) {
  .api-token-cont {
    width: 450px;
    height: 41px;
    gap: 97px;
  }

  .comment-input {
    height: 41px;
    width: 510px;
    font-size: 14px;
  }

  .api-callback-input {
    width: 600px;
    height: 41px;
    font-size: 14px;
  }

  .password-section {
    height: 73px;
    width: 1050px;
    gap: 40px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 1450px) {
  .api-token-cont {
    width: 450px;
    height: 41px;
    gap: 97px;
  }

  .comment-input {
    height: 41px;
    width: 410px;
    font-size: 14px;
  }

  .api-callback-input {
    width: 500px;
    height: 41px;
    font-size: 14px;
  }

  .password-section {
    height: 73px;
    width: 950px;
    gap: 40px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 1350px) {
  .api-token-cont {
    width: 400px;
    height: 41px;
    gap: 40px;
  }

  .comment-input {
    height: 41px;
    width: 360px;
    font-size: 14px;
  }

  .api-callback-input {
    width: 390px;
    height: 41px;
    font-size: 14px;
  }

  .password-section {
    height: 73px;
    width: 850px;
    gap: 40px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 1250px) {
  .api-token-cont {
    width: 400px;
    height: 41px;
    gap: 40px;
  }

  .comment-input {
    height: 41px;
    width: 270px;
    font-size: 14px;
  }

  .api-callback-input {
    width: 305px;
    height: 41px;
    font-size: 14px;
  }

  .password-section {
    height: 73px;
    width: 750px;
    gap: 40px;
    margin-top: 30px;
  }

  .edit-password-button {
    width: 200px;
    height: 41px;
    font-size: 16px;
  }
}

@media screen and (max-width: 1150px) {
  .api-token-cont {
    width: 300px;
    height: 41px;
    gap: 10px;
  }

  .api-token-text {
    font-size: 11px;
  }

  .comment-input {
    height: 41px;
    width: 270px;
    font-size: 14px;
  }

  .api-callback-input {
    width: 205px;
    height: 41px;
    font-size: 14px;
  }

  .password-section {
    height: 73px;
    width: 655px;
    gap: 40px;
    margin-top: 30px;
  }

  .edit-password-button {
    width: 200px;
    height: 41px;
    font-size: 16px;
  }

  .generate-api-button {
    width: 280px;
    height: 40px;
    font-size: 16px;
    margin-top: 28px;
  }

  .api-callback-save-button {
    width: 165px;
    height: 41px;
    font-size: 16px;
  }
}

@media screen and (max-width: 1050px) {
  .api-token-cont {
    width: 270px;
    height: 41px;
    gap: 10px;
  }

  .api-token-text {
    font-size: 10px;
  }

  .comment-input {
    height: 41px;
    width: 200px;
    font-size: 12px;
  }

  .api-callback-input {
    width: 180px;
    height: 41px;
    font-size: 12px;
  }

  .password-section {
    height: 73px;
    width: 555px;
    gap: 40px;
    margin-top: 30px;
  }

  .edit-password-button {
    width: 200px;
    height: 41px;
    font-size: 16px;
  }

  .generate-api-button {
    width: 280px;
    height: 40px;
    font-size: 16px;
    margin-top: 28px;
  }

  .api-callback-save-button {
    width: 130px;
    height: 35px;
    font-size: 14px;
  }

  .api-callback-title {
    font-size: 16px;
  }
}

@media screen and (max-width: 830px) {
  .api-token-cont {
    width: 210px;
    height: 41px;
    gap: 10px;
  }

  .api-token-text {
    font-size: 7px;
  }

  .comment-input {
    height: 41px;
    width: 200px;
    font-size: 12px;
  }

  .api-callback-input {
    width: 120px;
    height: 41px;
    font-size: 12px;
  }

  .password-section {
    height: 73px;
    width: 495px;
    gap: 40px;
    margin-top: 30px;
  }

  .edit-password-button {
    width: 200px;
    height: 41px;
    font-size: 16px;
  }

  .generate-api-button {
    width: 280px;
    height: 40px;
    font-size: 16px;
    margin-top: 28px;
  }

  .api-callback-save-button {
    width: 130px;
    height: 35px;
    font-size: 14px;
  }

  .api-callback-title {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .api-token-cont {
    width: 380px;
    height: 41px;
    gap: 60px;
  }

  .api-token-text {
    font-size: 12px;
  }

  .comment-input {
    height: 41px;
    width: 200px;
    font-size: 12px;
  }

  .api-callback-input {
    width: 290px;
    height: 41px;
    font-size: 12px;
  }

  .password-section {
    height: 73px;
    width: 660px;
    gap: 40px;
    margin-top: 30px;
  }

  .edit-password-button {
    width: 200px;
    height: 41px;
    font-size: 16px;
  }

  .generate-api-button {
    width: 280px;
    height: 40px;
    font-size: 16px;
    margin-top: 28px;
  }

  .api-callback-save-button {
    width: 130px;
    height: 35px;
    font-size: 14px;
  }

  .api-callback-title {
    font-size: 16px;
  }
}

@media screen and (max-width: 650px) {
  .api-token-cont {
    width: 380px;
    height: 41px;
    gap: 60px;
  }

  .api-callback-url-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    margin-top: 30px;
  }

  .api-token-text {
    font-size: 12px;
  }

  .comment-input {
    height: 41px;
    width: 370px;
    font-size: 12px;
  }

  .api-callback-input {
    width: 290px;
    height: 41px;
    font-size: 12px;
  }

  .password-section {
    height: 150px;
    width: 530px;
    gap: 40px;
    margin-top: 30px;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .edit-password-button {
    width: 100%;
    height: 41px;
    font-size: 16px;
  }

  .generate-api-button {
    width: 100%;
    height: 40px;
    font-size: 16px;
    margin-top: 28px;
  }

  .api-callback-save-button {
    width: 130px;
    height: 35px;
    font-size: 14px;
  }

  .api-callback-title {
    font-size: 16px;
  }

  .generation-apisection-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
}

@media screen and (max-width: 550px) {
  .api-token-cont {
    width: 380px;
    height: 41px;
    gap: 60px;
  }

  .api-callback-url-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    margin-top: 30px;
  }

  .api-token-text {
    font-size: 12px;
  }

  .comment-input {
    height: 41px;
    width: 370px;
    font-size: 12px;
  }

  .api-callback-input {
    width: 290px;
    height: 41px;
    font-size: 12px;
  }

  .password-section {
    height: 150px;
    width: 430px;
    gap: 40px;
    margin-top: 30px;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .edit-password-button {
    width: 100%;
    height: 41px;
    font-size: 16px;
  }

  .generate-api-button {
    width: 100%;
    height: 40px;
    font-size: 16px;
    margin-top: 28px;
  }

  .api-callback-save-button {
    width: 130px;
    height: 35px;
    font-size: 14px;
  }

  .api-callback-title {
    font-size: 16px;
  }

  .generation-apisection-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
}

@media screen and (max-width: 450px) {
  .api-token-cont {
    width: 300px;
    height: 41px;
    gap: 40px;
  }

  .api-callback-url-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    margin-top: 30px;
  }

  .api-token-text {
    font-size: 10px;
  }

  .comment-input {
    height: 41px;
    width: 290px;
    font-size: 12px;
  }

  .api-callback-input {
    width: 200px;
    height: 41px;
    font-size: 12px;
  }

  .password-section {
    height: 150px;
    width: 330px;
    gap: 40px;
    margin-top: 30px;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .edit-password-button {
    width: 100%;
    height: 41px;
    font-size: 16px;
  }

  .generate-api-button {
    width: 100%;
    height: 40px;
    font-size: 16px;
    margin-top: 28px;
  }

  .api-callback-save-button {
    width: 130px;
    height: 35px;
    font-size: 14px;
  }

  .api-callback-title {
    font-size: 16px;
  }

  .generation-apisection-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
}
</style>
