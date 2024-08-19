<script setup>
import { inject } from "vue";
const replenishmentInfo = inject("replenishmentInfo");
import ReplenishmentInfoCard from "./replenishmentInfoCard.vue";
</script>

<template>
  <ReplenishmentInfoCard
    v-for="item in replenishmentInfo"
    :key="item.id"
    :id="item.id"
    :time="item.time"
    :amount="item.amount"
    :commission="item.commission"
    :credited="item.credited"
  />
</template>

<script></script>

<style></style>
