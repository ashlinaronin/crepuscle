<template>
  <div class="hello">
    <h1>crepuscle</h1>
    <p>do laser frogs dream of electric sheep?</p>
    <ul>
      <li>
        <img src="../assets/boots-at-night.jpg" alt="galoshes" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-family: "Zilla Slab Highlight", serif;
  text-transform: uppercase;
  font-size: 48px;
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
