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

<style>
/* Добавьте свои стили, если нужно */
pre {
  background-color: #1e1e1e; /* Темный фон */
  color: #d4d4d4; /* Светлый текст */
  padding: 10px;
  border-radius: 5px;
  width: 500px;
  height: 1px;
}
</style>
