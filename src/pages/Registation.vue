<script setup>
import SendCode from "../components/registration/SendCode.vue";
import Header from "../components/header/header.vue";
import Footer from "../components/footer/footer.vue";
</script>

<script>
export default {
  data() {
    return {
      form: {
        login: "",
        emall: "",
        password: "",
        repeatPassword: "",
      },
      passwordStation: {
        visible: false,
        visibleRepeat: false,
      },
      codeStation: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Форма отправлена:", this.form);
      this.form.login = "";
      this.form.password = "";
    },
    IsVisiblePassword() {
      this.passwordStation.visible = !this.passwordStation.visible;
    },
    IsVisibleRepeatPassword() {
      this.passwordStation.visibleRepeat = !this.passwordStation.visibleRepeat;
    },
    nextButtom() {
      this.codeStation = true;
    },
    navigateToLogin() {
      this.$router.push("/Login"); // Укажите нужный путь
    },
  },
};
</script>

<template>
  <Header />
  <section class="registation-cont" v-if="!codeStation">
    <section class="registation-form-container">
      <form
        @submit.prevent="submitForm"
        class="login-form"
        aria-label="Авторизация"
      >
        <h2 class="title">Регистрация</h2>
        <div class="form-group">
          <label for="login"></label>
          <input
            class="input-form"
            placeholder="Логин"
            type="text"
            id="login"
            v-model="form.login"
            required
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <label for="email"></label>
          <input
            class="input-form"
            placeholder="E-mail"
            type="email"
            id="email"
            v-model="form.email"
            required
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <label for="password"></label>
          <input
            class="input-form"
            placeholder="Пароль"
            :type="passwordStation.visible ? 'text' : 'password'"
            id="password"
            v-model="form.password"
            required
            aria-required="true"
          />
          <img
            @click="IsVisiblePassword"
            class="look-password-img"
            :src="
              passwordStation.visible
                ? '/login/up_look_password.svg'
                : '/login/look_password.svg'
            "
            alt=""
          />
        </div>
        <div class="form-group">
          <label for="repeatPassword"></label>
          <input
            class="input-form"
            placeholder="Пароль еще раз"
            :type="passwordStation.visibleRepeat ? 'text' : 'password'"
            id="repeatPassword"
            v-model="form.repeatPassword"
            required
            aria-required="true"
          />
          <img
            @click="IsVisibleRepeatPassword"
            class="look-password-img"
            :src="
              passwordStation.visibleRepeat
                ? '/login/up_look_password.svg'
                : '/login/look_password.svg'
            "
            alt=""
          />
        </div>
        <label class="custom-checkbox">
          <input type="checkbox" v-model="isChecked" class="checkbox-input" />
          <span class="checkbox-checkmark"></span>
          <h1 class="checkbox-text">Запомнить меня</h1>
        </label>
        <article>
          <button type="submit" @click="nextButtom" class="next-button">
            Далее
          </button>
        </article>
      </form>
    </section>
    <article class="have-account-cont">
      <h2 class="have-account-text">Уже есть аккаунт?</h2>
      <button class="login-button" @click="navigateToLogin">Войти</button>
    </article>
  </section>
  <SendCode v-if="codeStation" />
  <Footer />
</template>

<style scoped>
.registation-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
}

.registation-form-container {
  border-radius: 10px;
  width: 489px;
  height: 490px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: rgba(45, 237, 218, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-weight: 600;
  font-size: 45px;
  line-height: 115%;
  text-align: center;
  color: #12d3c0;
  margin: 0;
  margin-bottom: 24px;
}

.form-group {
  position: relative;
}

.input-form {
  border: 1px solid #12d3c0;
  border-radius: 20px;
  padding: 10px 10px;
  width: 410px;
  height: 25px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  opacity: 0.6;
  outline: none;
  background-color: transparent;
  margin-bottom: 12px;
  position: relative;
}

.look-password-img {
  position: absolute;
  right: 15px;
  top: 11px;
  cursor: pointer;
}

.next-button {
  border-radius: 50px;
  width: 410px;
  height: 56px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
  margin-top: 24px;
  cursor: pointer;
  transition: all 0.15s;
}

.next-button:hover {
  background: #2ac4b4;
}

.forgot-password-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #fff;
}

.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  margin-left: 5px;
}

.checkbox-input {
  opacity: 0; /* Скрываем стандартный чекбокс */
  position: absolute;
}

.checkbox-checkmark {
  border: 1px solid #12d3c0;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  backdrop-filter: blur(7px);
  transition: background 0.3s;
}

.checkbox-input:checked + .checkbox-checkmark {
  background-color: #12d3c0;
}

.checkbox-input:checked + .checkbox-checkmark::after {
  content: "";
  position: absolute;
  left: 6.5px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid rgb(0, 0, 0);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-text {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
}

.have-account-cont {
  border-radius: 10px;
  width: 489px;
  height: 127px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: rgba(122, 45, 237, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.have-account-text {
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 115%;
  text-align: center;
  color: #5d12ce;
}

.login-button {
  border-radius: 50px;
  width: 149px;
  height: 48px;
  background: #5d12ce;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
  margin: 0;
  transition: all 0.15s;
}

.login-button:hover {
  background: #561eaa;
}

@media screen and (max-width: 500px) {
  .registation-form-container {
    width: 450px;
    height: 490px;
  }

  .have-account-cont {
    width: 450px;
    height: 127px;
    gap: 16px;
    margin-top: 24px;
  }
}

@media screen and (max-width: 450px) {
  .registation-form-container {
    width: 360px;
    height: 490px;
  }

  .have-account-cont {
    width: 360px;
    height: 127px;
    gap: 16px;
    margin-top: 24px;
  }

  .input-form {
    width: 290px;
    height: 25px;
    font-size: 12px;
  }

  .next-button {
    width: 290px;
    height: 45px;
    font-size: 20px;
    transition: all 0.15s;
  }

  .have-account-text {
    font-size: 20px;
  }

  .login-button {
    width: 120px;
    height: 40px;
    font-size: 20px;
  }
}
</style>
