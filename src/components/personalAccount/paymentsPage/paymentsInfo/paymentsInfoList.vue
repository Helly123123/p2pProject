<script setup>
import { inject } from "vue";
const paymentsInfo = inject("paymentsInfo");
import CardInfo from "./paymentsInfoCard.vue";
</script>

<template>
  <CardInfo
    v-for="item in paymentsInfo"
    :key="item.id"
    :id="item.id"
    :time="item.time"
    :adres="item.adres"
    :bank="item.bank"
    :course="item.course"
    :amount="item.amount"
    :amountUsdt="item.amountUsdt"
    :recipientName="item.recipientName"
    :recipientMail="item.recipientMail"
    :recipientNumber="item.recipientNumber"
    :currency="item.currency"
    :status="item.status"
    :payName="item.payName"
  />
</template>

<script></script>

<style></style>
