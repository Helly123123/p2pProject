<script setup>
import Question from "../components/FAQ/Question.vue";
import Form from "../components/FAQ/Form.vue";
import Header from "../components/header/header.vue";
import Footer from "../components/footer/footer.vue";
</script>

<template>
  <Header />
  <section class="faq-section">
    <Question />
    <Form />
  </section>
  <Footer />
</template>

<style scoped>
.faq-section {
  display: flex;
  justify-content: center;
  gap: 260px;
  margin-top: 120px;
}

@media screen and (max-width: 1750px) {
  .faq-section {
    gap: 170px;
    margin-top: 120px;
  }
}

@media screen and (max-width: 1650px) {
  .faq-section {
    gap: 50px;
    margin-top: 80px;
    margin-bottom: -100px;
  }
}

@media screen and (max-width: 1050px) {
  .faq-section {
    gap: 80px;
    margin-top: 60px;
    margin-bottom: -250px;
  }
}

@media screen and (max-width: 1000px) {
  .faq-section {
    gap: 40px;
    margin-top: 40px;
    margin-bottom: -250px;
  }
}

@media screen and (max-width: 900px) {
  .faq-section {
    gap: 20px;
    margin-top: 40px;
    margin-bottom: -250px;
  }
}

@media screen and (max-width: 768px) {
  .faq-section {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    margin-bottom: -250px;
  }
}
</style>
