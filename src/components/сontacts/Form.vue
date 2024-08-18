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
</style>
