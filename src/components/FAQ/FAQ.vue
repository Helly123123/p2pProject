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
  /* align-items: center; */
  justify-content: center;
  gap: 260px;
  margin-top: 120px;
}
</style>
