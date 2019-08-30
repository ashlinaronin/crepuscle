<template>
  <div class="hello">
    <h1>crepuscle</h1>
    <Hero />
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
import Hero from "./Hero.vue";

export default {
  name: "HelloWorld",
  components: {
    Visualization,
    Hero
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
</style>
