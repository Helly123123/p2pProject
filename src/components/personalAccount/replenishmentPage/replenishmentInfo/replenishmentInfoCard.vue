<script setup>
import { inject, ref } from "vue";
const replenishmentInfoStationOff = inject("replenishmentInfoStationOff");

const props = defineProps({
  time: String,
  amount: Number,
  commission: Number,
  credited: Number,
});

function copyPropValue(propKey) {
  const propValue = ref(props[propKey]);

  navigator.clipboard
    .writeText(propValue.value)
    .then(() => {
      console.log(`${propKey} value copied to clipboard: ${propValue.value}`);
    })
    .catch((err) => {
      console.error(`Failed to copy ${propKey} value: `, err);
    });
}
</script>

<template>
  <div class="pay-info-cont"></div>
  <section class="pay-info">
    <img
      @click="replenishmentInfoStationOff"
      class="close-icon"
      src="/personalAccount/payInfo/close.svg"
      alt=""
    />
    <section class="text-cont">
      <article class="title-cont">
        <h2 class="title">Время</h2>
        <h2 class="title">Сумма</h2>
        <h2 class="title">Комиссия</h2>
        <h2 class="title">Зачислено</h2>
      </article>
      <article class="subtitle-cont">
        <span class="subtitle"
          >{{ time }}
          <img
            @click="copyPropValue('time')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ amount }} USDT
          <img
            @click="copyPropValue('amount')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="subtitle"
          >{{ commission }} USDT
          <img
            @click="copyPropValue('commission')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
        <span class="credited"
          >{{ credited }} USDT
          <img
            @click="copyPropValue('credited')"
            src="/personalAccount/payInfo/copy.svg"
            alt=""
        /></span>
      </article>
    </section>
  </section>
</template>

<style scoped>
.pay-info-cont {
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 5000px;
  backdrop-filter: blur(12px);
  background: rgba(2, 2, 14, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  cursor: pointer;
}

.pay-info {
  border: 1px solid rgba(18, 211, 192, 0.2);
  border-radius: 24px;
  padding: 20px;
  width: 490px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
  background: #02020e;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.close-icon {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}

.text-cont {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.title-cont {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.subtitle-cont {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #868686;
}

.status {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #63ef63;
}

.status-false {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #ed2d2d;
}

.subtitle {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #fff;
}

.credited {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #12d3c0;
}
</style>
