<script setup>
import Card from "./ShopCard.vue";
defineProps({
  shopCard: Array,
});
</script>

<template>
  <section class="card-cont">
    <Card
      v-for="item in shopCard"
      :key="item.id"
      :id="item.id"
      :shopName="item.shopName"
      :available="item.available"
      :frozen="item.frozen"
    />
  </section>
</template>

<style scoped>
.card-cont {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 колонки */
  gap: 16px; /* расстояние между карточками */
}

@media screen and (max-width: 768px) {
  .card-cont {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
}
</style>
