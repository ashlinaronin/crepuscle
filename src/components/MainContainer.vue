<template>
  <div class="hello">
    <h1>crepuscle</h1>
    <h2>amphibian dawn</h2>
    <h3>ashlin aronin</h3>
    <img src="../assets/boots-at-night.jpg" alt="galoshes" />
    <p>
      the male túngara frogs of gamboa, panama serenade ladies all night long.
      but what happens when the club is over and you have to go home? i created
      a submersible infrared camera to capture the experience of sunrise in a
      puddle.
    </p>
    <p>
      include recording of frogs here
    </p>
    <Visualization />
    <p>more text below visualization</p>
  </div>
</template>

<script>
import Visualization from "./Visualization.vue"

export default {
  name: "HelloWorld",
  components: {
    Visualization,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    max-width: 640px;
    margin: 0 auto;
  }

h1 {
  text-transform: uppercase;
  font-size: 48px;
  margin: 24px 0 12px;
}

h2 {
  margin: 0;
  font-weight: normal;
}

h3 {
  margin: 0;
  font-weight: normal;
}

a {
  color: #42b983;
}

img {
  width: 100%;
}
</style>
