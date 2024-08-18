<script setup>
import ReceptionPageTable from "./ReceptionPageTable.vue";
</script>

<template>
  <section class="reception-section">
    <h2 class="title">История приёма</h2>
    <section class="reception-section-table-cont">
      <section class="reception-section-table">
        <ReceptionPageTable />
      </section>
    </section>
  </section>
</template>

<style scoped>
.reception-section {
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
}

.reception-section-table-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reception-section-table {
  border: 1px solid rgba(45, 237, 218, 0.1);
  border-radius: 12px;
  width: 1238px;
  backdrop-filter: blur(150px);
  background: rgba(10, 10, 26, 0.8);
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title {
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: #fff;
  margin-left: 16px;
  margin-top: 16px;
}
</style>
