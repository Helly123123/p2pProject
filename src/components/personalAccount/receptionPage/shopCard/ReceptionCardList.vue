<script setup>
import { inject } from "vue";
import Card from "./ReceptionCard.vue";

const reception = inject("reception");
</script>

<template>
  <section class="card-cont">
    <Card
      v-for="item in reception"
      :key="item.id"
      :id="item.id"
      :time="item.time"
      :amount="item.amount"
      :commission="item.commission"
      :credited="item.credited"
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
