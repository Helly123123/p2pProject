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
    <input class="api-callback-input" type="text" />
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
  font-family: var(--font-family);
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
</style>
