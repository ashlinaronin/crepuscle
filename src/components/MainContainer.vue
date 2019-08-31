<template>
  <div class="hello">
    <h1>crepuscle</h1>
    <Hero />
    <h3>concept</h3>
    <p>
      Night falls in Gamboa, Panama -- site of the 2019 Digital Naturalism
      Conference. The Tungara frogs come to life, filling the air with their
      uncanny mating calls resonating from murky ponds and puddles. As day
      breaks, they retreat. I created a submersible infrared timelapse camera to
      capture the experience of dawn from beneath the surface of a muddy puddle,
      the end of a long night of singing and mating.
    </p>
    <p>
      Hear the frogs:
    </p>
    <audio controls src="frogs.mp3" />
    <p>This is the device I produced:</p>
    <div class="sketchfab-embed-wrapper">
      <iframe
        title="A 3D model"
        width="640"
        height="480"
        src="https://sketchfab.com/models/5ba6853a7465411891d52f8bf614e9cf/embed?autospin=0.2&amp;autostart=1&amp;preload=1"
        frameborder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>

      <p
        style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"
      >
        <a
          href="https://sketchfab.com/3d-models/ashlin-5ba6853a7465411891d52f8bf614e9cf?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
          target="_blank"
          style="font-weight: bold; color: #1CAAD9;"
          >crepuscle</a
        >
        by
        <a
          href="https://sketchfab.com/scenicbanker?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
          target="_blank"
          style="font-weight: bold; color: #1CAAD9;"
          >scenicbanker</a
        >
        on
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
          target="_blank"
          style="font-weight: bold; color: #1CAAD9;"
          >Sketchfab</a
        >
      </p>
    </div>
    <!--<Visualization />-->
    <h3>videos</h3>
    <p>
      As you can see in the histogram below, there is only a narrow band of
      available data in most of the images, since light (including infrared)
      does not travel well underwater.
    </p>
    <p>
      To compensate, I applied the below color curve to each image with
      <strong>ImageMagick</strong> so that all available data is visible, then
      compiled them into videos using <strong>ffmpeg</strong>. This results in
      some slightly unnatural color artifacts from boosting data that is usually
      not visible.
    </p>
    <img src="../assets/curves.png" alt="color curves" />
    <ul>
      <li>
        <video controls src="../assets/timelapse/sunrise-2019-08-30.mp4" />
      </li>
      <li>
        <video controls src="../assets/timelapse/sunrise-2019-08-26.mp4" />
      </li>
      <li>
        <video controls src="../assets/timelapse/sunrise-2019-08-27.mp4" />
      </li>
    </ul>
    <h3>location</h3>
    <p>
      Here are a few of the locations where the camera was deployed overnight:
    </p>
    <ul>
      <li>
        <img
          src="../assets/caiman-with-camera.jpg"
          alt="camera rig near a caiman"
        />
      </li>
      <li>
        <img
          src="../assets/spool-in-puddle.jpg"
          alt="spooling camera cord into frog pond"
        />
      </li>
    </ul>

    <h3>
      materials
    </h3>
    <ul>
      <li>Raspberry Pi Zero W</li>
      <li>Lewis N. Clark WaterSeals hard case</li>
      <li>Raspberry Pi NoIR camera</li>
      <li>2 packets of silica gel</li>
      <li>SparkFun Buck Boost</li>
      <li>infrared flashlight</li>
      <li>Anker PowerCore 10,000mAh power bank</li>
      <li>USB to micro USB cable</li>
      <li>100 ft of paracord</li>
      <li>1 ft length of bamboo</li>
      <li>cement block</li>
      <li>zip ties</li>
      <li>solder</li>
      <li>wires</li>
      <li>4 rechargeable AAA batteries</li>
      <li>battery charger</li>
      <li>AAA battery pack</li>
    </ul>
    <Problems />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import Problems from "./Problems.vue";

export default {
  name: "HelloWorld",
  components: {
    Hero,
    Problems
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

  // https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#Accessibility_concerns
  li::before {
    content: "\200B";
  }
}

li {
  margin: 0;
  padding: 0;
}

video,
audio {
  width: 100%;
  margin-bottom: 10px;
}

img {
  display: block;
  width: 300px;
  margin: 0 auto 10px;
}
</style>
