<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Какой-то вопрос какой-то вопрос какой-то вопрос?",
          answer:
            "Мы предоставляем безопасные платежные решения для ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные транзакции",
          showAnswer: false,
        },
        {
          text: "Какой-то вопрос какой-то вопрос какой-то вопрос?",
          answer:
            "Мы предоставляем безопасные платежные решения для ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные транзакции",
          showAnswer: false,
        },
        {
          text: "Какой-то вопрос какой-то вопрос какой-то вопрос?",
          answer:
            "Мы предоставляем безопасные платежные решения для ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные транзакции",
          showAnswer: false,
        },
        {
          text: "Какой-то вопрос какой-то вопрос какой-то вопрос?",
          answer:
            "Мы предоставляем безопасные платежные решения для ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные транзакции",
          showAnswer: false,
        },
        {
          text: "Какой-то вопрос какой-то вопрос какой-то вопрос?",
          answer:
            "Мы предоставляем безопасные платежные решения для ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные транзакции",
          showAnswer: false,
        },
        {
          text: "Какой-то вопрос какой-то вопрос какой-то вопрос?",
          answer:
            "Мы предоставляем безопасные платежные решения для ставок на спорт и онлайн-казино, обеспечивая быстрые и надежные транзакции",
          showAnswer: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(item) {
      item.showAnswer = !item.showAnswer; // переключение состояния
    },
  },
};
</script>

<template>
  <section>
    <h2 class="title">Часто задаваемые вопросы</h2>
    <ul class="styled-list">
      <li class="list-item" v-for="(item, index) in items" :key="index">
        <article class="question-container">
          <h2 class="item-text">{{ item.text }}</h2>
          <img
            :src="item.showAnswer ? '/FAQ/down.svg' : '/FAQ/up.svg'"
            alt="Toggle Image"
            class="toggle-image"
            @click="toggleAnswer(item)"
          />
        </article>
        <article v-if="item.showAnswer" class="answer">
          <div class="line"></div>
          <h2 class="answer-text">{{ item.answer }}</h2>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.styled-list {
  list-style-type: none;
  padding: 0;
}

.title {
  font-weight: 700;
  font-size: 50px;
  line-height: 105%;
  color: #fff;
}

.line {
  height: 2px;
  background-color: #fff;
  opacity: 10%;
  width: 830px;
  margin-top: -20px;
  margin-bottom: 20px;
}

.list-item {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 20px 25px 0 rgba(0, 0, 0, 0.15);
  background: #0a0a1a;
  border-radius: 10px;
  width: 879px;
  padding: 0px 0px 0px 10px;
}

.question-container {
  display: flex;
  align-items: center;
}

.answer-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #fff;
}

.toggle-image {
  width: 20px;
  height: 20px;
  margin-left: 150px;
}

.item-text {
  font-weight: 600;
  font-size: 24px;
  line-height: 115%;
  color: #12d3c0;
  margin-left: 10px;
}

.toggle-button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.answer {
  padding: 20px 0px 10px 20px;
  border-radius: 0 0 5px 5px;
  margin-top: 5px;
  font-style: italic;
}

@media screen and (max-width: 1500px) {
  .question-container {
    gap: 0px;
  }

  .line {
    width: 700px;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  .list-item {
    width: 750px;
    padding: 0px 0px 0px 10px;
  }

  .answer-text {
    font-size: 17px;
  }

  .toggle-image {
    margin-left: 40px;
  }
}

@media screen and (max-width: 1350px) {
  .question-container {
    gap: 0px;
  }

  .list-item {
    width: 650px;
    padding: 0px 0px 0px 10px;
  }

  .line {
    width: 585px;
    margin-left: -9px;
    margin-top: -15px;
    margin-bottom: 15px;
  }

  .item-text {
    font-size: 20px;
    margin-left: 10px;
  }

  .answer-text {
    font-size: 14px;
    margin: 0;
    margin-left: -9px;
  }

  .toggle-image {
    margin-left: 40px;
  }

  .title {
    font-size: 40px;
  }
}

@media screen and (max-width: 1200px) {
  .question-container {
    gap: 0px;
  }

  .list-item {
    width: 590px;
    padding: 0px 0px 0px 10px;
  }

  .line {
    width: 570px;
    margin-left: -9px;
    margin-top: -15px;
    margin-bottom: 15px;
  }

  .item-text {
    font-size: 18px;
    margin-left: 10px;
  }

  .answer-text {
    font-size: 14px;
    margin: 0;
    margin-left: -9px;
  }

  .toggle-image {
    margin-left: 40px;
  }

  .title {
    font-size: 35px;
  }
}

@media screen and (max-width: 1050px) {
  .list-item {
    width: 500px;
    padding: 0px 0px 0px 10px;
  }

  .line {
    width: 460px;
    margin-left: -9px;
    margin-top: -20px;
    margin-bottom: 10px;
  }

  .item-text {
    font-size: 16px;
    margin-left: 10px;
  }

  .answer-text {
    font-size: 11px;
    margin: 0;
    margin-left: -9px;
  }

  .toggle-image {
    margin-left: 15px;
    width: 15px;
    height: 15px;
  }

  .title {
    font-size: 30px;
  }
}

@media screen and (max-width: 900px) {
  .list-item {
    width: 450px;
    padding: 0px 0px 0px 10px;
  }

  .line {
    width: 420px;
    margin-left: -20px;
    margin-top: -25px;
    margin-bottom: 10px;
  }

  .item-text {
    font-size: 15px;
    margin-left: 0px;
  }

  .answer-text {
    font-size: 10px;
    margin: 0;
    margin-left: -20px;
  }

  .toggle-image {
    margin-left: 10px;
    width: 13px;
    height: 13px;
  }

  .title {
    font-size: 27px;
  }
}

@media screen and (max-width: 768px) {
  .list-item {
    width: 650px;
    padding: 0px 0px 0px 10px;
  }

  .line {
    width: 640px;
    margin-left: -20px;
    margin-top: -25px;
    margin-bottom: 10px;
  }

  .item-text {
    font-size: 15px;
    margin-left: 0px;
  }

  .answer-text {
    font-size: 10px;
    margin: 0;
    margin-left: -20px;
  }

  .toggle-image {
    margin-left: 200px;
    width: 13px;
    height: 13px;
  }

  .title {
    font-size: 27px;
  }
}

@media screen and (max-width: 650px) {
  .list-item {
    width: 550px;
    padding: 0px 0px 0px 10px;
  }

  .line {
    width: 540px;
    margin-left: -20px;
    margin-top: -25px;
    margin-bottom: 10px;
  }

  .item-text {
    font-size: 15px;
    margin-left: 0px;
  }

  .answer-text {
    font-size: 10px;
    margin: 0;
    margin-left: -20px;
  }

  .toggle-image {
    margin-left: 100px;
    width: 13px;
    height: 13px;
  }

  .title {
    font-size: 27px;
  }
}

@media screen and (max-width: 550px) {
  .list-item {
    width: 450px;
    padding: 0px 0px 0px 10px;
  }

  .line {
    width: 440px;
    margin-left: -20px;
    margin-top: -25px;
    margin-bottom: 10px;
  }

  .item-text {
    font-size: 15px;
    margin-left: 0px;
  }

  .answer-text {
    font-size: 10px;
    margin: 0;
    margin-left: -20px;
  }

  .toggle-image {
    margin-left: 10px;
    width: 13px;
    height: 13px;
  }

  .title {
    font-size: 27px;
  }
}

@media screen and (max-width: 450px) {
  .list-item {
    width: 350px;
    padding: 0px 0px 0px 10px;
  }

  .line {
    width: 340px;
    margin-left: -20px;
    margin-top: -25px;
    margin-bottom: 10px;
  }

  .item-text {
    font-size: 11px;
    margin-left: 0px;
  }

  .answer-text {
    font-size: 10px;
    margin: 0;
    margin-left: -20px;
  }

  .toggle-image {
    margin-left: 20px;
    width: 13px;
    height: 13px;
  }

  .title {
    font-size: 30px;
    width: 100px;
  }
}
</style>
