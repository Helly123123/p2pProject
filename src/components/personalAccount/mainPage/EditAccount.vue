<script setup>
import { reactive, inject } from "vue";
const editAccauntStationOff = inject("editAccauntStation");
const accaunt = inject("accaunt");
const formData = reactive({
  name: "",
  telegram: "",
  email: "",
});

function editAccaunt() {
  accaunt.name = formData.name;
  accaunt.telegram = formData.telegram;
  accaunt.email = formData.email;
  callEditAccauntStationOff();
}

const callEditAccauntStationOff = () => {
  editAccauntStationOff();
};
</script>

<template>
  <section class="edit-accaunt-section">
    <article class="form-cont">
      <img src="/personalAccount/editAccaunt/img.svg" alt="" />
      <form novalidate>
        <div class="form-group">
          <label for="name">Имя</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>

        <div class="form-group">
          <label for="telegram">ТГ</label>
          <input
            type="text"
            id="telegram"
            v-model="formData.telegram"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
      </form>
    </article>
    <article class="button-cont">
      <button @click="editAccaunt" class="save-button">Сохранить</button>
      <button @click="callEditAccauntStationOff" class="cancellation-button">
        Отмена
      </button>
    </article>
  </section>
</template>

<style scoped>
.edit-accaunt-section {
  border-radius: 16px;
  width: 620px;
  height: 242px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 82px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.form-cont {
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  gap: 12px;
}

input {
  border-radius: 12px;
  width: 290px;
  height: 41px;
  background: #02020e;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  padding: 0px 0px 0px 12px;
}

label {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 4px;
}

.button-cont {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
  gap: 12px;
}

.save-button {
  border-radius: 40px;
  width: 114px;
  height: 33px;
  background: #12d3c0;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #02020e;
}

.cancellation-button {
  border: 1px solid #12d3c0;
  border-radius: 40px;
  width: 114px;
  height: 33px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  background-color: transparent;
}

@media screen and (max-width: 1550px) {
  .edit-accaunt-section {
    width: 500px;
    height: 242px;
    gap: 50px;
  }

  .form-group {
    margin-bottom: 12px;
  }

  .form-cont {
    margin-top: 16px;
    gap: 12px;
  }

  input {
    width: 200px;
    height: 41px;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .button-cont {
    margin-top: 16px;
    gap: 12px;
  }

  .save-button {
    width: 114px;
    height: 33px;
    font-size: 14px;
  }

  .cancellation-button {
    width: 114px;
    height: 33px;
    font-size: 14px;
  }
}

@media screen and (max-width: 1350px) {
  .edit-accaunt-section {
    width: 400px;
    height: 242px;
    gap: 50px;
  }

  .form-group {
    margin-bottom: 12px;
  }

  .form-cont {
    margin-top: 16px;
    gap: 12px;
  }

  input {
    width: 150px;
    height: 41px;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .button-cont {
    margin-top: 16px;
    gap: 12px;
  }

  img {
    width: 60px;
  }

  .save-button {
    width: 80px;
    height: 33px;
    font-size: 11px;
  }

  .cancellation-button {
    width: 80px;
    height: 33px;
    font-size: 11px;
  }
}

@media screen and (max-width: 1250px) {
  .edit-accaunt-section {
    width: 350px;
    height: 242px;
    gap: 20px;
  }

  .form-group {
    margin-bottom: 12px;
  }

  .form-cont {
    margin-top: 16px;
    gap: 12px;
  }

  input {
    width: 150px;
    height: 41px;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .button-cont {
    margin-top: 16px;
    gap: 12px;
  }

  img {
    width: 60px;
  }

  .save-button {
    width: 80px;
    height: 33px;
    font-size: 11px;
  }

  .cancellation-button {
    width: 80px;
    height: 33px;
    font-size: 11px;
  }
}

@media screen and (max-width: 1050px) {
  .edit-accaunt-section {
    width: 250px;
    height: 350px;
    gap: 0px;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    margin-bottom: 12px;
  }

  .form-cont {
    margin-top: 16px;
    gap: 12px;
  }

  input {
    width: 150px;
    height: 35px;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .button-cont {
    margin-top: 16px;
    gap: 12px;
  }

  img {
    width: 60px;
  }

  .save-button {
    width: 100%;
    height: 33px;
    font-size: 11px;
  }

  .cancellation-button {
    width: 230px;
    height: 33px;
    font-size: 11px;
  }
}

@media screen and (max-width: 768px) {
  .edit-accaunt-section {
    width: 650px;
    height: 350px;
    gap: 0px;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    margin-bottom: 12px;
  }

  .form-cont {
    margin-top: 16px;
    gap: 12px;
  }

  input {
    width: 500px;
    height: 40px;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .button-cont {
    margin-top: 16px;
    gap: 12px;
  }

  img {
    width: 100px;
  }

  .save-button {
    width: 100%;
    height: 33px;
    font-size: 11px;
  }

  .cancellation-button {
    width: 630px;
    height: 33px;
    font-size: 11px;
  }
}

@media screen and (max-width: 650px) {
  .edit-accaunt-section {
    width: 550px;
    height: 350px;
    gap: 0px;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    margin-bottom: 12px;
  }

  .form-cont {
    margin-top: 16px;
    gap: 12px;
  }

  input {
    width: 400px;
    height: 40px;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .button-cont {
    margin-top: 16px;
    gap: 12px;
  }

  img {
    width: 100px;
  }

  .save-button {
    width: 100%;
    height: 33px;
    font-size: 11px;
  }

  .cancellation-button {
    width: 520px;
    height: 33px;
    font-size: 11px;
  }
}

@media screen and (max-width: 550px) {
  .edit-accaunt-section {
    width: 450px;
    height: 350px;
    gap: 0px;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    margin-bottom: 12px;
  }

  .form-cont {
    margin-top: 16px;
    gap: 12px;
  }

  input {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .button-cont {
    margin-top: 16px;
    gap: 12px;
  }

  img {
    width: 100px;
  }

  .save-button {
    width: 100%;
    height: 33px;
    font-size: 11px;
  }

  .cancellation-button {
    width: 420px;
    height: 33px;
    font-size: 11px;
  }
}

@media screen and (max-width: 450px) {
  .edit-accaunt-section {
    width: 350px;
    height: 350px;
    gap: 0px;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    margin-bottom: 12px;
  }

  .form-cont {
    margin-top: 16px;
    gap: 12px;
  }

  input {
    width: 250px;
    height: 40px;
    font-size: 14px;
  }

  label {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .button-cont {
    margin-top: 16px;
    gap: 12px;
  }

  img {
    width: 60px;
  }

  .save-button {
    width: 100%;
    height: 33px;
    font-size: 11px;
  }

  .cancellation-button {
    width: 330px;
    height: 33px;
    font-size: 11px;
  }
}
</style>
