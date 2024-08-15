<script setup>
import Contacts from "../components/сontacts/Contacts.vue";
import Form from "../components/сontacts/Form.vue";
</script>

<template>
  <section class="contacts-section">
    <h2 class="title">Контакты</h2>
    <section class="card-section">
      <Contacts />
      <Form />
    </section>
  </section>
</template>

<style scoped>
.contacts-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
}

.title {
  font-weight: 700;
  font-size: 50px;
  line-height: 105%;
  color: #fff;
  margin-bottom: 20px;
  width: 1600px;
}

.card-section {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 33px;
}
</style>
