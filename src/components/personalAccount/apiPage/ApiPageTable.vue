<script setup>
import { reactive, inject } from "vue";

const apiDate = inject("apiDate");
</script>

<template>
  <table class="styled-table">
    <thead>
      <tr>
        <th class="table-name">Название API</th>
        <th class="table-name">ID API</th>
        <th class="table-name">Комментарий</th>
        <th class="status">Статус</th>
      </tr>
    </thead>
    <img class="line" src="/personalAccount/PaymentsTable/line.svg" alt="" />
    <tbody v-if="apiDate.length > 0">
      <tr v-for="apiDate in apiDate" :key="apiDate.id">
        <td class="table-text-name">{{ apiDate.nameApi }}</td>
        <td class="table-text-id">{{ apiDate.idApi }}</td>
        <td class="table-text-comment">{{ apiDate.comment }}</td>
        <td class="table-text-status">{{ apiDate.status }}</td>
      </tr>
    </tbody>
  </table>
  <article v-if="apiDate.length === 0" class="no-pay-cont">
    <img src="/personalAccount/apiPage/Password.svg" alt="" />
    <h1 class="no-pay-text">Подключённых API пока нет</h1>
  </article>
  <button v-if="apiDate.length > 0" class="show-more-button">
    Показать еще
  </button>
</template>

<style scoped>
.table {
  width: 100px;
}

.styled-table {
  width: 97%;
  border-collapse: collapse;
  margin: 1em 0;
}

.styled-table th {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  opacity: 0.4;
}

.table-name {
  text-align: left;
}

.styled-table th {
  padding: 10px 10px 40px 10px;
}

.styled-table td {
  padding: 10px;
}

.styled-table tbody tr:nth-child(odd) {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  width: 1198px;
  height: 44px;
}

.line {
  position: absolute;
  top: 85px;
}

.no-pay-text {
  font-weight: 700;
  font-size: 18px;
  line-height: 115%;
  color: #fff;
  opacity: 0.3;
}

.table-text-name {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: #fff;
  text-align: left;
}

.table-text-id {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
}

.table-text-comment {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #fff;
  width: 310px;
}

.table-text-status {
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-align: right;
  color: #12d3c0;
  width: 200px;
}

.status {
  text-align: right;
}

.no-pay-cont {
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.show-more-button {
  border: 1px solid #12d3c0;
  border-radius: 40px;
  width: 1200px;
  height: 30px;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  color: #12d3c0;
  margin-top: 2px;
}

@media screen and (max-width: 1800px) {
  .line {
    width: 1100px;
  }
  .show-more-button {
    width: 1160px;
    height: 30px;
    margin-top: 2px;
  }
}

@media screen and (max-width: 1700px) {
  .line {
    width: 1000px;
  }
  .show-more-button {
    width: 1060px;
    height: 30px;
    margin-top: 2px;
  }
}

@media screen and (max-width: 1550px) {
  .line {
    width: 970px;
  }
  .show-more-button {
    width: 960px;
    height: 30px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 12px;
  }

  .table-text-name {
    font-size: 14px;
  }

  .table-text-id {
    font-size: 12px;
  }

  .table-text-comment {
    font-size: 12px;
    width: 310px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 1450px) {
  .line {
    width: 770px;
    height: 3px;
  }
  .show-more-button {
    width: 860px;
    height: 30px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 12px;
  }

  .table-text-name {
    font-size: 14px;
  }

  .table-text-id {
    font-size: 12px;
  }

  .table-text-comment {
    font-size: 12px;
    width: 310px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 1350px) {
  .line {
    width: 770px;
  }
  .show-more-button {
    width: 760px;
    height: 30px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 12px;
  }

  .table-text-name {
    font-size: 14px;
  }

  .table-text-id {
    font-size: 12px;
  }

  .table-text-comment {
    font-size: 12px;
    width: 310px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 1250px) {
  .line {
    width: 700px;
  }
  .show-more-button {
    width: 690px;
    height: 30px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 10px;
  }

  .table-text-name {
    font-size: 14px;
  }

  .table-text-id {
    font-size: 12px;
  }

  .table-text-comment {
    font-size: 8px;
    width: 310px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 1150px) {
  .line {
    width: 600px;
  }
  .show-more-button {
    width: 590px;
    height: 30px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 10px;
  }

  .table-text-name {
    font-size: 14px;
  }

  .table-text-id {
    font-size: 12px;
  }

  .table-text-comment {
    font-size: 8px;
    width: 310px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 1050px) {
  .line {
    width: 500px;
  }
  .show-more-button {
    width: 500px;
    height: 30px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 8px;
  }

  .table-text-name {
    font-size: 12px;
  }

  .table-text-id {
    font-size: 10px;
  }

  .table-text-comment {
    font-size: 6px;
    width: 310px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 830px) {
  .line {
    width: 435px;
  }
  .show-more-button {
    width: 430px;
    height: 25px;
    font-size: 12px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 10px;
  }

  .table-text-name {
    font-size: 10px;
  }

  .table-text-id {
    font-size: 6px;
  }

  .table-text-comment {
    font-size: 6px;
    width: 200px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 738px) {
  .line {
    width: 600px;
    height: 3px;
  }
  .show-more-button {
    width: 600px;
    height: 25px;
    font-size: 12px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 12px;
  }

  .table-text-name {
    font-size: 12px;
  }

  .table-text-id {
    font-size: 10px;
  }

  .table-text-comment {
    font-size: 8px;
    width: 200px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 650px) {
  .line {
    width: 500px;
    height: 3px;
  }
  .show-more-button {
    width: 500px;
    height: 25px;
    font-size: 12px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 12px;
  }

  .table-text-name {
    font-size: 12px;
  }

  .table-text-id {
    font-size: 8px;
  }

  .table-text-comment {
    font-size: 8px;
    width: 200px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}

@media screen and (max-width: 550px) {
  .line {
    width: 500px;
    height: 3px;
  }
  .show-more-button {
    width: 500px;
    height: 25px;
    font-size: 12px;
    margin-top: 2px;
  }

  .styled-table th {
    font-size: 12px;
  }

  .table-text-name {
    font-size: 10px;
  }

  .table-text-id {
    font-size: 8px;
    width: 10px;
  }

  .table-text-comment {
    font-size: 8px;
    width: 200px;
  }

  .table-text-status {
    font-size: 14px;
    width: 200px;
  }
}
</style>
