<template>
  <div id="app">
    <MainContainer/>
  </div>
</template>

<script>
  import MainContainer from "./components/MainContainer.vue";

  export default {
    name: "app",
    components: {
      MainContainer
    }
  };
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Barlow&display=swap");

  #app {
    font-family: "Barlow", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 10px;
    background: content-box radial-gradient(#b6dbbb, #080c06 );
    color: #0f140e;
    padding-bottom: 600px;
  }
</style>
