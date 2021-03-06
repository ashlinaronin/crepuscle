<template>
  <div class="main-container">
    <h1>crepuscle</h1>
    <Hero/>
    <h3>concept</h3>
    <p>
      Night falls in Gamboa, Panama -- site of the 2019 Digital Naturalism Conference. The Tungara frogs come to life, filling the air with their uncanny mating calls resonating from murky ponds and puddles. As day breaks, they retreat. I created a submersible infrared timelapse camera to capture the experience of dawn from beneath the surface of a muddy puddle, the end of a long night of singing and mating.
    </p>
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
    <iframe src="https://player.vimeo.com/video/360214429" width="640" height="360" frameborder="0"
            allow="autoplay; fullscreen" allowfullscreen></iframe>

    <h3>process</h3>
    <ul class="image-container">
      <li><img src="../assets/crepuscle-rig.jpg" alt="crepuscle rig"></li>
      <li>
        <SketchfabModel/>
      </li>
    </ul>
    <p>
      This is the device I ultimately produced (photo left, 3D scan right by <a href="http://www.gracegrothaus.com/"
                                                                                rel="noopener" target="_blank">Grace Grothaus</a>). The transparent plastic on the box confused the scanner, but I find the aesthetic fitting, as if the capsule were rescued from the bottom of the ocean after years of decay.
    </p>
    <p>
      I arrived at Dinacon with a loose idea of what I would need to make this project happen and what the results would look like. I brought an infrared camera, a Raspberry Pi, a waterproof case and 100 feet of paracord.
    </p>
    <p>
      I took an iterative approach, repeatedly testing versions of the prototype. The first thing I realized was that for an infrared camera to work properly in low-light environments, it needs an infrared light source. I tried using one, then three small infrared LEDs in series, powered by the Raspberry Pi. It quickly became clear that this was not enough light to penetrate the murky underwater depths.
    </p>
    <p>
      The next step was to take apart a heavy-duty infrared floodlight used by local bat researchers for nocturnal imaging. I extracted the circuit board and LEDs from the internals of this light, disabled the ambient light sensor and rewired the power supply to run off the Pi power supply using a SparkFun Buck Boost.
    </p>
    <img src="../assets/infrared-light-buckboost.jpg" alt="deconstructed infrared light">
    <p>
      With this arrangement, I would experience seemingly random issues where the Pi would stop taking images and lose network connectivity once running on battery power out in the field. After some investigation and discussion with other knowledgeable folks, I measured the current drawn by the infrared light and determined it was drawing 1.8 amps. The battery pack I was using to power the Pi provides around 2.1 amps at peak capacity, so this arrangement only worked when it was fully charged. As soon as the battery was drawn down a bit, the Pi was not getting enough current to operate (around 80-100mA), so the camera ceased to work. The solution was to use a separate battery pack for the light.
    </p>
    <p>
      Even after solving this and other technical problems, like running out of space on the Pi's SD card, and <a
        href="https://www.raspberrypi.org/documentation/usage/camera/raspicam/timelapse.md" target="_blank"
        rel="noopener">figuring out the right cron / shell script configuration for timelapse images</a>, a fundamental problem remained: infrared light doesn't travel well underwater, perhaps because it is at the low end of the light spectrum, meaning it has low energy. Therefore, there wasn't much to see in the middle of the night in the images that crepuscle produced. I schemed about how to make the most of these initially disappointing results.
    </p>
    <p>
      At first, all the images seemed completely black. However, when I took a look at the histogram for a random image in the free image editing software GIMP, I noticed that there was some image data in the very low wavelengths. I experimented with bumping up the color curves so this information was more visible, and was pleased with the somewhat psychedelic effect.
    </p>
    <img src="../assets/curves.png" alt="color curves"/>
    <p>
      I then applied this curve to each image with a command line batch process using <strong>ImageMagick</strong>, then compiled the images into videos using <strong>ffmpeg</strong>.
    </p>
    <p>
      Overall, this project was a great learning experience. I learned about the physics of light and water, efficient and appropriate use of batteries in electronics, batch image processing using open source software, and how to use local found materials like bamboo and cement blocks.</p>
    <p>Thanks to <a href="http://andy.dorkfort.com/andy/man/" target="_blank" rel="noopener">Andy Quitmeyer</a>, <a
        href="https://twitter.com/webspookie" target="_blank" rel="noopener">Sid Drmay</a>, <a
        href="https://www.faludi.com" target="_blank" rel="noopener">Rob Faludi</a>, <a
        href="http://www.joshjet.net/about" target="_blank" rel="noopener">Josh Michaels</a>
      and everyone else who helped out. Thanks also to the <a
          href="https://www.oregonartscommission.org/" target="_blank" rel="noopener">Oregon Arts Commission</a>
      for their financial support which made this project and experience possible.</p>
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
      <li>Aquarian H2A-XLR hydrophone and Zoom H4n audio recorder (for frog audio recordings)</li>
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
  .main-container {
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
