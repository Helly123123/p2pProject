<script setup>
import Header from "./components/header/header.vue";
import Footer from "./components/footer/footer.vue";
import { ref, provide } from "vue";

const navStation = ref(true);

const navStationOn = () => {
  navStation.value = true;
};

const navStationOff = () => {
  navStation.value = false;
};

provide("navStation", {
  navStationOff,
  navStationOn,
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
