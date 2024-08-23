<script setup>
import { inject } from "vue";
import Card from "./ApiCard.vue";

const apiDate = inject("apiDate");
</script>

<template>
  <section class="card-cont">
    <Card
      v-for="item in apiDate"
      :key="item.id"
      :id="item.id"
      :nameApi="item.nameApi"
      :idApi="item.idApi"
      :comment="item.comment"
      :status="item.status"
    />
  </section>
</template>

<style scoped>
.card-cont {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
}
</style>
