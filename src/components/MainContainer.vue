<template>
  <div class="hello">
    <h1>crepuscle</h1>
    <Hero/>
    <h3>concept</h3>
    <p>
      Night falls in Gamboa, Panama -- site of the 2019 Digital Naturalism Conference. The Tungara frogs come to life, filling the air with their uncanny mating calls resonating from murky ponds and puddles. As day breaks, they retreat. I created a submersible infrared timelapse camera to capture the experience of dawn from beneath the surface of a muddy puddle, the end of a long night of singing and mating.
    </p>
    <p>
      Hear the frogs:
    </p>
    <audio controls src="frogs.mp3"/>
    <h3>location</h3>
    <p>
      Here are a few of the locations where the camera was deployed overnight:
    </p>
    <ul class="image-container">
      <li>
        <img
            src="../assets/spool-in-puddle.jpg"
            alt="spooling camera cord into frog pond"
        />
      </li>
      <li>
        <img
            src="../assets/caiman-with-camera.jpg"
            alt="camera rig near a caiman"
        />
      </li>

      <li>
        <img src="../assets/puddle-night.jpg" alt="camera in frog puddle at night">
      </li>
    </ul>

    <h3>videos</h3>

    <ul>
      <li>
        <video controls src="../assets/timelapse/sunrise-2019-08-30.mp4"/>
      </li>
      <li>
        <video controls src="../assets/timelapse/sunrise-2019-08-26.mp4"/>
      </li>
      <li>
        <video controls src="../assets/timelapse/sunrise-2019-08-27.mp4"/>
      </li>
    </ul>

    <h3>process</h3>
    <ul class="image-container">
      <li><img src="../assets/crepuscle-rig.jpg" alt="crepuscle rig"></li>
      <li>
        <SketchfabModel/>
      </li>
    </ul>
    <p>
      Here is an image and a 3D scan of the device produced by <a href="http://www.gracegrothaus.com/" rel="noopener"
                                                                  target="_blank">Grace Grothaus</a>. The transparent plastic on the box confused the scanner, but I find the aesthetic fitting, as if the capsule were rescued from the bottom of the ocean after years of decay.
    </p>
    <p>
      I arrived at Dinacon with a loose idea of what I would need to make this project happen and what the results would look like. I brought an infrared camera, a Raspberry Pi, a waterproof case and 100 feet of paracord.</p>
    <p>
      I took an iterative approach, repeatedly testing versions of the prototype. The first thing I realized was that for an infrared camera to work properly in low-light environments, it needs an infrared light source. I tried using one, then three small infrared LEDS in series, powered by the Raspberry Pi. It quickly became clear that this was not enough light to penetrate the murky underwater depths.</p>
    <p>
      The next step was to take apart a heavy-duty infrared floodlight used by local bat researchers for nocturnal imaging. I extracted the circuit board and LEDs from the internals of this light, disabled the ambient light sensor and rewired the power supply to run off the Pi power supply using a SparkFun Buck Boost.</p>
    <img src="../assets/infrared-light-buckboost.jpg" alt="deconstructed infrared light">
    <p>
      With this arrangement, I would experience seemingly random issues where the Pi would stop taking images and lose network connectivity once running on battery power out in the field. After some investigation and discussion with other knowledgeable folks, I measured the current drawn by the infrared light and determined it was drawing 1.8 amps. The battery pack I was using to power the Pi provides around 2.1 amps at peak capacity, so this arrangement only worked when it was fully charged. As soon as the battery was drawn down a bit, the Pi was not getting enough current to operate (around 80-100mA), so the camera ceased to work. The solution was to use a separate battery pack for the light.</p>

    <p>Even after solving this and other technical problems, like running out of psace on the SD card, and figuring out the right cron / shell script configuration for timelapse images, a fundamental problem remained. Apparently infrared light doesn't travel well underwater.There isn't much to see in the middle of the night, since infrared light doesn't carry far in mud puddles.

      Thinking about the focus of the conference on making new connections between humans and our environment. I thought it would be interesting to focus on sunrise since the way light breaks through mud is quite interesting.</p>

    <p>
      In the histogram below, you can see there is only a narrow band of available data in most of the images, demonstrating how visible (and infrared) light do not travel well underwater.
    </p>
    <p>
      To compensate, I prototyped the below color curve in GIMP, then applied it to each image with <strong>ImageMagick</strong> so that all available data is visible, then compiled them into videos using <strong>ffmpeg</strong>. This results in some slightly unnatural color artifacts from boosting data that is usually not visible, but I like the effect.
    </p>
    <img src="../assets/curves.png" alt="color curves"/>
    <h3>
      materials
    </h3>
    <ul class="material-list">
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
  </div>
</template>

<script>
  import Hero from "./Hero.vue";
  import Problems from "./Problems.vue";
  import SketchfabModel from "./SketchfabModel.vue";

  export default {
    name: "HelloWorld",
    components: {
      Hero,
      SketchfabModel
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

  .image-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
      margin: 0;
    }

    > * {
      width: 50%;
    }
  }

  ul.material-list {
    list-style: outside;
  }
</style>
