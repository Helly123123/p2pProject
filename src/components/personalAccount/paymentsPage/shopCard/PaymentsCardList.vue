<script setup>
import { inject } from "vue";
import Card from "./PaymentsCard.vue";
const payments = inject("payments");
</script>

<template>
  <section class="card-cont">
    <Card
      v-for="item in payments"
      :key="item.id"
      :id="item.id"
      :time="item.time"
      :payName="item.payName"
      :recipientName="item.recipientName"
      :recipientMail="item.recipientMail"
      :currency="item.currency"
      :adres="item.adres"
      :bank="item.bank"
      :course="item.course"
      :amount="item.amount"
      :amountUsdt="item.amountUsdt"
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
