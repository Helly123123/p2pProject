<script setup>
import { inject } from "vue";
import Card from "./ReceptionCard.vue";

const emit = defineEmits(["openCard"]);
const replenishment = inject("replenishment");
</script>

<template>
  <section class="card-cont">
    <Card
      v-for="item in replenishment"
      :key="item.id"
      :id="item.id"
      :time="item.time"
      :amount="item.amount"
      :commission="item.commission"
      :credited="item.credited"
      :onClickAdd="() => emit('openCard', item)"
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
