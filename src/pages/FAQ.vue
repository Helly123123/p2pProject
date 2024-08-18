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
</style>
