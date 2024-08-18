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
</style>
