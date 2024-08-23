<template>
  <div>
    <pre>
          <code ref="codeBlock" class="language-javascript">
            
    const connectToWallet = async () => {
      try {
        const connectedWallet = await tonConnectUI.connectWallet();
        // Делайте что-то с connectedWallet, если нужно
        console.log(connectedWallet);
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    };
    
          </code>
        </pre>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css"; // Импорт стиля, похожего на VS Code

export default {
  mounted() {
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      const blocks = this.$refs.codeBlock;
      hljs.highlightBlock(blocks);
    },
  },
};
</script>

<style scoped>
/* Добавьте свои стили, если нужно */
pre {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4d4d4; /* Светлый текст */
  padding: 10px;
  border-radius: 5px;
  height: 250px;
  width: 700px;
  background-color: transparent;
}

@media screen and (max-width: 1100px) {
  pre {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    height: 250px;
    width: 700px;
    font-size: 10px;
  }
}

@media screen and (max-width: 550px) {
  pre {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    height: 250px;
    width: 700px;
    /* background-color: transparent; */
    /* background-color: red; */
    font-size: 8px;
  }
}

@media screen and (max-width: 450px) {
  pre {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    height: 250px;
    width: 700px;
    /* background-color: transparent; */
    /* background-color: red; */
    font-size: 7px;
  }
}
</style>
