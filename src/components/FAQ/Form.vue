<template>
  <main class="feedback-container">
    <form
      @submit.prevent="submitForm"
      class="feedback-form"
      aria-label="Форма обратной связи"
    >
      <h2 class="title">Остались вопросы?</h2>
      <p class="subtitle">
        Оставьте заявку и уже в течение 3-х часов <br />
        с вами свяжется менеджер.
      </p>

      <div class="form-group">
        <label for="name"></label>
        <input
          class="input-form"
          placeholder="Имя"
          type="text"
          id="name"
          v-model="form.name"
          required
          aria-required="true"
        />
      </div>

      <div class="form-group">
        <label for="tg"></label>
        <input
          class="input-form"
          placeholder="ТГ"
          type="text"
          id="tg"
          v-model="form.tg"
          required
          aria-required="true"
        />
      </div>
      <div class="form-group">
        <label for="question"></label>
        <textarea
          placeholder="Ваш вопрос"
          id="question"
          v-model="form.question"
          required
          aria-required="true"
        ></textarea>
      </div>
      <article>
        <button type="submit" class="submit-button">Отправить</button>
        <h2 class="approval-text">
          Нажимая на кнопку вы даёте своё на согласие на обработку <br />
          ваших
          <span>персональных данных</span>
        </h2>
      </article>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        tg: "",
        question: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Обработка отправки формы
      console.log("Форма отправлена:", this.form);
      // Очистка формы после отправки
      this.form.name = "";
      this.form.tg = "";
      this.form.question = "";
    },
  },
};
</script>

<style scoped>
.feedback-container {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: rgba(45, 237, 218, 0.1);
  border-radius: 10px;
  width: 489px;
  height: 473px;
  text-align: center;
  margin-top: 140px;
}

.feedback-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 8px;
}

.title {
  font-weight: 600;
  font-size: 28px;
  line-height: 115%;
  text-align: center;
  color: #12d3c0;
}

.subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-align: center;
  color: #fff;
  margin-top: -10px;
  margin-bottom: 20px;
}

.input-form {
  border: 1px solid #12d3c0;
  border-radius: 20px;
  padding: 10px 10px;
  width: 410px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  opacity: 0.6;
  outline: none;
  background-color: transparent;
}

textarea {
  border: 1px solid #12d3c0;
  border-radius: 20px;
  padding: 10px 10px;
  min-width: 410px;
  max-width: 410px;
  min-height: 92px;
  max-height: 92px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  opacity: 0.6;
  outline: none;
  background-color: transparent;
}

.submit-button {
  border-radius: 50px;
  width: 430px;
  height: 44px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #02020e;
  transition: all 0.15s;
}

.submit-button:hover {
  background: #2ac4b4;
}

.approval-text {
  margin-top: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-align: center;
  color: #fff;
  opacity: 0.6;
}

.approval-text span {
  text-decoration: underline;
}

@media screen and (max-width: 1350px) {
  .feedback-container {
    width: 460px;
    height: 473px;
    margin-top: 110px;
  }

  .input-form {
    padding: 10px 10px;
    width: 380px;
    height: 20px;
    font-size: 12px;
  }

  textarea {
    padding: 10px 10px;
    min-width: 380px;
    max-width: 380px;
    min-height: 92px;
    max-height: 92px;
    font-size: 12px;
  }

  .submit-button {
    width: 400px;
    height: 44px;
    font-size: 16px;
  }

  .approval-text {
    margin-top: 20px;
    font-size: 10px;
  }
}

@media screen and (max-width: 1200px) {
  .feedback-container {
    width: 400px;
    height: 450px;
    margin-top: 90px;
  }

  .input-form {
    padding: 10px 10px;
    width: 340px;
    height: 20px;
    font-size: 12px;
  }

  textarea {
    padding: 10px 10px;
    min-width: 340px;
    max-width: 340px;
    min-height: 70px;
    max-height: 70px;
    font-size: 14px;
  }

  .submit-button {
    width: 370px;
    height: 44px;
    font-size: 16px;
  }

  .title {
    font-size: 26px;
  }

  .subtitle {
    font-size: 12px;
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .approval-text {
    margin-top: 20px;
    font-size: 10px;
  }
}

@media screen and (max-width: 1050px) {
  .feedback-container {
    width: 350px;
    height: 400px;
    margin-top: 80px;
  }

  .input-form {
    padding: 10px 10px;
    width: 290px;
    height: 15px;
    font-size: 12px;
  }

  textarea {
    padding: 10px 10px;
    min-width: 290px;
    max-width: 290px;
    min-height: 40px;
    max-height: 40px;
    font-size: 14px;
  }

  .submit-button {
    width: 310px;
    height: 40px;
    font-size: 16px;
  }

  .title {
    font-size: 24spx;
  }

  .subtitle {
    font-size: 11px;
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .approval-text {
    margin-top: 20px;
    font-size: 9px;
  }
}

@media screen and (max-width: 900px) {
  .feedback-container {
    width: 300px;
    height: 340px;
    margin-top: 73px;
  }

  .input-form {
    padding: 10px 10px;
    width: 240px;
    height: 10px;
    font-size: 11px;
  }

  textarea {
    padding: 10px 10px;
    min-width: 240px;
    max-width: 240px;
    min-height: 40px;
    max-height: 40px;
    font-size: 12px;
  }

  .submit-button {
    width: 260px;
    height: 35px;
    font-size: 13px;
  }

  .title {
    font-size: 22px;
  }

  .subtitle {
    font-size: 10px;
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .approval-text {
    margin-top: 15px;
    font-size: 8px;
  }
}

@media screen and (max-width: 768px) {
  .feedback-container {
    width: 630px;
    height: 390px;
    padding: 12px;
    margin-top: 73px;
  }

  .input-form {
    padding: 10px 10px;
    width: 500px;
    height: 20px;
    font-size: 11px;
  }

  textarea {
    padding: 10px 10px;
    min-width: 500px;
    max-width: 500px;
    min-height: 60px;
    max-height: 60px;
    font-size: 12px;
  }

  .submit-button {
    width: 520px;
    height: 35px;
    font-size: 13px;
  }

  .title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .approval-text {
    margin-top: 15px;
    font-size: 12px;
  }
}

@media screen and (max-width: 650px) {
  .feedback-container {
    width: 530px;
    height: 400px;
    padding: 12px;
    margin-top: 73px;
  }

  .input-form {
    padding: 10px 10px;
    width: 500px;
    height: 20px;
    font-size: 11px;
  }

  textarea {
    padding: 10px 10px;
    min-width: 500px;
    max-width: 500px;
    min-height: 60px;
    max-height: 60px;
    font-size: 12px;
  }

  .submit-button {
    width: 520px;
    height: 35px;
    font-size: 13px;
  }

  .title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .approval-text {
    margin-top: 15px;
    font-size: 12px;
  }
}

@media screen and (max-width: 550px) {
  .feedback-container {
    width: 430px;
    height: 400px;
    padding: 12px;
    margin-top: 73px;
  }

  .input-form {
    padding: 10px 10px;
    width: 400px;
    height: 20px;
    font-size: 11px;
  }

  textarea {
    padding: 10px 10px;
    min-width: 400px;
    max-width: 400px;
    min-height: 60px;
    max-height: 60px;
    font-size: 12px;
  }

  .submit-button {
    width: 420px;
    height: 35px;
    font-size: 13px;
  }

  .title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .approval-text {
    margin-top: 15px;
    font-size: 12px;
  }
}

@media screen and (max-width: 450px) {
  .feedback-container {
    width: 330px;
    height: 420px;
    padding: 12px;
    margin-top: 73px;
  }

  .input-form {
    padding: 10px 10px;
    width: 300px;
    height: 20px;
    font-size: 11px;
  }

  textarea {
    padding: 10px 10px;
    min-width: 300px;
    max-width: 300px;
    min-height: 60px;
    max-height: 60px;
    font-size: 12px;
  }

  .submit-button {
    width: 320px;
    height: 35px;
    font-size: 13px;
  }

  .title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 20px;
  }

  .approval-text {
    margin-top: 15px;
    font-size: 10px;
  }
}
</style>
