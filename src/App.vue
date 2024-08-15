<script setup>
import Header from "./components/header/header.vue";
// import MainPage from "./components/mainPage/MainPage.vue";
import Footer from "./components/footer/footer.vue";
import FAQ from "./components/FAQ/FAQ.vue";
</script>

<template>
  <Header />
  <!-- <MainPage /> -->
  <!-- <FAQ /> -->
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
