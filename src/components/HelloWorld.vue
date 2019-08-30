<template>
  <div class="hello">
    <h1>crepuscle</h1>
    <p>amphibian dawn</p>
    <ul>
      <li>
        <img src="../assets/boots-at-night.jpg" alt="galoshes" />
      </li>
    </ul>
    <p>
      the male túngara frogs of gamboa, panama serenade ladies all night long.
      but what happens when the club is over and you have to go home? i created
      a submersible infrared camera to capture the experience of sunrise in a
      puddle.
    </p>
    <Visualization />
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
h1 {
  text-transform: uppercase;
  font-size: 48px;
  margin: 24px 0 12px;
}

p {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  width: 100%;
}
</style>
