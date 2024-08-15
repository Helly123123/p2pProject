<script setup>
import EnteringPassword from "../components/forgotPassword/EnteringPassword.vue";
</script>

<script>
export default {
  data() {
    return {
      form: {
        code: "",
      },
      statiomSection: false,
      timer: 30, // Начальное значение таймера
      interval: null, // Для хранения идентификатора интервала
    };
  },
  methods: {
    submitForm() {
      console.log("Форма отправлена:", this.form);
      this.form.login = "";
      this.form.password = "";
    },
    navigateToLogin() {
      this.$router.push("/login"); // Укажите нужный путь
    },
    IsVisiblePassword() {
      this.passwordStation.visible = !this.passwordStation.visible;
    },
    IsVisibleRepeatPassword() {
      this.passwordStation.visibleRepeat = !this.passwordStation.visibleRepeat;
    },
    startTimer() {
      // Сбрасываем таймер, если он уже работает
      if (this.interval) {
        clearInterval(this.interval);
      }

      this.timer = 30; // Сбрасываем таймер на 30 секунд
      this.interval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--; // Уменьшаем таймер на 1 каждую секунду
        } else {
          clearInterval(this.interval); // Очищаем интервал, когда таймер достиг 0
        }
      }, 1000); // Интервал 1 секунда
    },
    onButtonClick() {
      // Здесь можно добавить действия, которые необходимо выполнить при нажатии на кнопку
      alert("Кнопка после таймера нажата!");
    },
    nextButton() {
      this.statiomSection = true;
    },
  },
  mounted() {
    this.startTimer(); // Запускаем таймер при монтировании компонента
  },
  beforeDestroy() {
    clearInterval(this.interval); // Очищаем интервал при уничтожении компонента
  },
};
</script>

<template>
  <section class="code-cont" v-if="!statiomSection">
    <section class="code-form-container">
      <form
        @submit.prevent="submitForm"
        class="login-form"
        aria-label="Авторизация"
      >
        <h2 class="title">
          На ваш <span>e-mail</span> был отправлен код. <br />
          Пожалуйста, введите его для <br />
          смены пароля
        </h2>
        <div class="form-group">
          <label for="code"></label>
          <input
            class="input-form"
            placeholder="Код"
            type="code"
            id="code"
            v-model="form.code"
            required
            aria-required="true"
          />
        </div>
        <article class="button-cont">
          <button
            @click="navigateToLogin"
            type="submit"
            class="change-email-button"
          >
            Назад
          </button>
          <button type="submit" @click="nextButton" class="next-button">
            Далее
          </button>
        </article>
      </form>
    </section>
    <article class="no-code-cont" v-if="timer != 0">
      <h2 class="no-code-text">Отправить повторно через:</h2>
      <h2 @click="startTimer" class="repeat-code-text-timer">
        {{ timer }} сек
      </h2>
    </article>
    <article class="no-code-cont" v-if="timer === 0">
      <h2 class="no-code-text">Не пришёл код?</h2>
      <h2 @click="startTimer" class="repeat-code-text">Отправить повторно</h2>
    </article>
  </section>
  <EnteringPassword v-if="statiomSection" />
</template>

<style scoped>
.code-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
}

.code-form-container {
  border-radius: 10px;
  width: 489px;
  height: 292px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: rgba(45, 237, 218, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button-cont {
  display: flex;
  align-items: center;
  gap: 24px;
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
  margin-bottom: 24px;
  position: relative;
}

.change-email-button {
  border: 1px solid #12d3c0;
  border-radius: 50px;
  width: 201px;
  height: 56px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  background-color: transparent;
}

.next-button {
  border-radius: 50px;
  width: 201px;
  height: 56px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
}

.have-account-text {
  border-radius: 50px;
  width: 201px;
  height: 56px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #02020e;
}

.title {
  font-weight: 600;
  font-size: 20px;
  line-height: 115%;
  text-align: center;
  color: #fff;
}

.title span {
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #12d3c0;
}

.no-code-cont {
  margin-top: 24px;
  border-radius: 10px;
  width: 489px;
  height: 103px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: rgba(122, 45, 237, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.no-code-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  text-align: center;
  color: #fff;
}

.repeat-code-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #5d12ce;
  cursor: pointer;
}

.repeat-code-text-timer {
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #5d12ce;
  cursor: pointer;
}

.time-repeat-code-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #5d12ce;
}
</style>
