<script setup></script>

<script>
export default {
  data() {
    return {
      form: {
        password: "",
        passwordRepeat: "",
      },
      passwordStation: {
        visible: false,
        Repeatvisible: false,
      },
      errorMessage: false,
    };
  },
  methods: {
    submitForm() {
      if (this.form.password != this.form.passwordRepeat) {
        this.errorMessage = true;
      } else {
        console.log("Форма отправлена");
        this.errorMessage = false;
      }
    },
    IsVisiblePassword() {
      this.passwordStation.visible = !this.passwordStation.visible;
    },
    IsVisibleRepeatPassword() {
      this.passwordStation.Repeatvisible = !this.passwordStation.Repeatvisible;
    },
    navigateToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<template>
  <section class="password-cont">
    <section class="password-form-container">
      <form
        @submit.prevent="submitForm"
        class="login-form"
        aria-label="Авторизация"
      >
        <h2 class="title">Введите новый пароль</h2>
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
          <label for="passwordRepeat"></label>
          <input
            class="input-form"
            placeholder="Пароль еще раз"
            :type="passwordStation.Repeatvisible ? 'text' : 'password'"
            id="passwordRepeat"
            v-model="form.passwordRepeat"
            required
            aria-required="true"
          />
          <p v-if="errorMessage" class="error-message">Пароли не совпадают</p>
          <img
            @click="IsVisibleRepeatPassword"
            class="look-password-img"
            :src="
              passwordStation.Repeatvisible
                ? '/login/up_look_password.svg'
                : '/login/look_password.svg'
            "
            alt=""
          />
        </div>
        <article>
          <button type="submit" class="login-button">Завершить</button>
        </article>
      </form>
    </section>
  </section>
</template>

<style scoped>
.password-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 145px;
  flex-direction: column;
}

.password-form-container {
  border-radius: 10px;
  width: 489px;
  height: 320px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: rgba(45, 237, 218, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 115%;
  text-align: center;
  color: #12d3c0;
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

.login-button {
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

.login-button:hover {
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

.no-account-cont {
  border-radius: 10px;
  width: 489px;
  height: 180px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: rgba(122, 45, 237, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.no-account-text {
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 115%;
  text-align: center;
  color: #5d12ce;
}

.registration-button {
  border-radius: 50px;
  width: 410px;
  height: 56px;
  background: #5d12ce;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
  cursor: pointer;
}

.error-message {
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #ed2d2d;
  text-align: left;
  margin-top: -5px;
  margin: 0;
}

@media screen and (max-width: 500px) {
  .password-form-container {
    border-radius: 10px;
    width: 450px;
    height: 320px;
  }
}

@media screen and (max-width: 450px) {
  .password-form-container {
    border-radius: 10px;
    width: 360px;
    height: 320px;
  }

  .input-form {
    width: 290px;
    height: 25px;
  }

  .login-button {
    width: 310px;
    height: 50px;
    font-size: 20px;
    margin-top: 24px;
    cursor: pointer;
    transition: all 0.15s;
  }
}
</style>
