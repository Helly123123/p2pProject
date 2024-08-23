<script setup>
import Question from "./Question.vue";
import Form from "./Form.vue";
</script>

<template>
  <section class="faq-section">
    <Question />
    <Form />
  </section>
</template>

<style scoped>
.faq-section {
  display: flex;
  justify-content: center;
  gap: 260px;
  margin-top: 120px;
}

@media screen and (max-width: 768px) {
  .faq-section {
    flex-direction: column;
  }
}
</style>
