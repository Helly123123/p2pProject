<script setup>
import Contacts from "../components/сontacts/Contacts.vue";
import Form from "../components/сontacts/Form.vue";
import Header from "../components/header/header.vue";
import Footer from "../components/footer/footer.vue";
</script>

<template>
  <Header />
  <section class="contacts-section">
    <h2 class="title">Контакты</h2>
    <section class="card-section">
      <Contacts />
      <Form />
    </section>
  </section>
  <Footer />
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

@media screen and (max-width: 1750px) {
  .title {
    font-size: 50px;
    margin-bottom: 20px;
    width: 1530px;
  }
}

@media screen and (max-width: 1650px) {
  .title {
    font-size: 50px;
    margin-bottom: 20px;
    width: 1430px;
  }
}

@media screen and (max-width: 1500px) {
  .title {
    font-size: 45px;
    margin-bottom: 20px;
    width: 1310px;
  }
}

@media screen and (max-width: 1350px) {
  .title {
    font-size: 40px;
    margin-bottom: 20px;
    width: 1170px;
  }

  .contacts-section {
    margin-top: 100px;
    margin-bottom: -150px;
  }
}

@media screen and (max-width: 1200px) {
  .title {
    font-size: 35px;
    margin-bottom: 20px;
    width: 1030px;
  }
}

@media screen and (max-width: 1050px) {
  .title {
    font-size: 30px;
    margin-bottom: 20px;
    width: 970px;
  }
}

@media screen and (max-width: 1000px) {
  .title {
    font-size: 25px;
    margin-bottom: 20px;
    width: 900px;
  }

  .card-section {
    gap: 20px;
  }
}

@media screen and (max-width: 900px) {
  .title {
    font-size: 20px;
    margin-bottom: 20px;
    width: 770px;
  }

  .card-section {
    gap: 20px;
  }

  .contacts-section {
    margin-top: 50px;
    margin-bottom: -150px;
  }
}

@media screen and (max-width: 768px) {
  .card-section {
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 20px;
    margin-bottom: 20px;
    width: 650px;
  }
}

@media screen and (max-width: 650px) {
  .title {
    font-size: 20px;
    margin-bottom: 20px;
    width: 540px;
  }
}

@media screen and (max-width: 550px) {
  .title {
    font-size: 20px;
    margin-bottom: 20px;
    width: 440px;
  }
}

@media screen and (max-width: 450px) {
  .title {
    font-size: 20px;
    margin-bottom: 20px;
    width: 340px;
  }
}
</style>
