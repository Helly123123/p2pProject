<template>
  <div>
    <pre class="pre">
          <code ref="codeBlock" class="language-javascript">
            &lt;div id='ton-connect'&gt;&lt;/div&gt;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  height: 250px;
  width: 700px;
  background-color: transparent;
}

@media screen and (max-width: 550px) {
  pre {
    font-size: 12px;
  }
}
</style>
