<template>
  <div class="hello">
    <h1>crepuscle</h1>
    <Hero />
    <h3>concept</h3>
    <p>
      Night falls in Gamboa, Panama. The frogs come to life, filling the air with their uncanny mating calls. As day breaks, they retreat into murky ponds and puddles. I created
      a submersible infrared camera to capture the experience of these sunrises and sunsets from beneath the surface.
    </p>
    <p>
      include recording of frogs here
    </p>
    <Visualization />
    <h3>results</h3>
    <p>Here are some timelapse videos of the results. As you can see in the histogram below, there is only a narrow band of available data in most of the images, since light (including infrared) does not travel well underwater.</p>
    <p>
      To compensate, I applied the below color curve to each image with <strong>ImageMagick</strong> so that all available data is visible, then compiled them into videos using <strong>ffmpeg</strong>. This results in some slightly unnatural color artifacts from boosting data that is usually not visible.
    </p>
    <img src="../assets/curves.png" alt="color curves">
    <ul>
      <li>
        <video controls src="../assets/timelapse/sunrise-2019-08-30.mp4" />
      </li>
      <li>
        <video controls src="../assets/timelapse/sunrise-2019-08-26.mp4" />
      </li>
    </ul>
    <h3>process</h3>
    <p>Here i describe the process of making the thing.</p>
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

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  video {
    width: 100%;
    margin-bottom: 10px;
  }

  img {
    display: block;
    width: 300px;
    margin: 0 auto;
  }
</style>
