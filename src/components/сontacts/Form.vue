<template>
  <section class="feedback-container">
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
  </section>
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
      console.log("Форма отправлена:", this.form);
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

@media screen and (max-width: 1650px) {
  .feedback-container {
    width: 450px;
    height: 473px;
  }

  .input-form {
    width: 390px;
    height: 20px;
    font-size: 12px;
  }

  textarea {
    min-width: 390px;
    max-width: 390px;
    min-height: 92px;
    max-height: 92px;
    font-size: 12px;
  }

  .submit-button {
    width: 410px;
    height: 44px;
    font-size: 16px;
  }
}

@media screen and (max-width: 1650px) {
  .feedback-container {
    width: 400px;
    height: 473px;
  }

  .input-form {
    width: 350px;
    height: 20px;
    font-size: 12px;
  }

  textarea {
    min-width: 350px;
    max-width: 350px;
    min-height: 92px;
    max-height: 92px;
    font-size: 12px;
  }

  .submit-button {
    width: 370px;
    height: 44px;
    font-size: 16px;
  }

  .approval-text {
    margin-top: 20px;
    font-size: 10px;
  }

  .title {
    font-size: 26px;
  }

  .subtitle {
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 1350px) {
  .feedback-container {
    width: 380px;
    height: 440px;
  }

  .input-form {
    width: 320px;
    height: 20px;
    font-size: 12px;
  }

  textarea {
    min-width: 320px;
    max-width: 320px;
    min-height: 62px;
    max-height: 62px;
    font-size: 12px;
  }

  .submit-button {
    width: 340px;
    height: 40px;
    font-size: 16px;
  }

  .approval-text {
    margin-top: 20px;
    font-size: 10px;
  }

  .title {
    font-size: 26px;
  }

  .subtitle {
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 1200px) {
  .feedback-container {
    width: 360px;
    height: 350px;
  }

  .input-form {
    width: 290px;
    height: 15px;
    font-size: 12px;
  }

  textarea {
    min-width: 290px;
    max-width: 290px;
    min-height: 45px;
    max-height: 45px;
    font-size: 12px;
  }

  .submit-button {
    width: 300px;
    height: 35px;
    font-size: 14px;
  }

  .approval-text {
    margin-top: 20px;
    font-size: 9px;
  }

  .title {
    font-size: 20px;
  }

  .subtitle {
    font-size: 10px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 1050px) {
  .feedback-container {
    width: 300px;
    height: 320px;
  }

  .input-form {
    width: 240px;
    height: 10px;
    font-size: 10px;
  }

  textarea {
    min-width: 240px;
    max-width: 240px;
    min-height: 40px;
    max-height: 40px;
    font-size: 10px;
  }

  .submit-button {
    width: 260px;
    height: 30px;
    font-size: 12px;
  }

  .approval-text {
    margin-top: 15px;
    font-size: 8px;
  }

  .title {
    font-size: 20px;
  }

  .subtitle {
    font-size: 10px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 900px) {
  .feedback-container {
    width: 250px;
    height: 285px;
  }

  .input-form {
    width: 200px;
    height: 5px;
    font-size: 9px;
  }

  textarea {
    min-width: 200px;
    max-width: 200px;
    min-height: 35px;
    max-height: 35px;
    font-size: 10px;
  }

  .submit-button {
    width: 220px;
    height: 27px;
    font-size: 12px;
  }

  .approval-text {
    margin-top: 10px;
    font-size: 7px;
  }

  .title {
    font-size: 18px;
  }

  .subtitle {
    font-size: 8px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 768px) {
  .feedback-container {
    width: 610px;
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
    width: 520px;
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
    width: 420px;
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
    width: 320px;
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
