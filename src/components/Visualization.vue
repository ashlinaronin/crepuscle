<!-- adapted from https://github.com/mrdoob/three.js/blob/master/examples/webgl_effects_ascii.html -->
<template>
  <div id="scene"/>
</template>
<script>
  import * as THREE from "three";
  import { AsciiEffect } from "../library/three/AsciiEffect.js";
  import { initializeControls, updateControlsOnResize, rotateObject} from "../library/three/rotateControls";
  import { TrackballControls } from "../library/three/TrackballControls.js";

  export default {
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        effect: null,
        sphere: null,
        plane: null,
        start: Date.now(),
      }
    },
    mounted() {
      this.init();
      this.animate();
    },
    methods: {
      init() {
        this.camera = new THREE.PerspectiveCamera(
          70,
          this.$el.offsetWidth / this.$el.offsetHeight,
          1,
          1000
        );
        this.camera.position.y = 150;
        this.camera.position.z = 500;
        
        this.scene = new THREE.Scene();
        
        const light1 = new THREE.PointLight(0xffffff);
        light1.position.set(500, 500, 500);
        this.scene.add(light1);
        
        const light2 = new THREE.PointLight(0xffffff, 0.25);
        light2.position.set(-500, -500, -500);
        this.scene.add(light2);
        
        this.sphere = new THREE.Mesh(
          new THREE.SphereBufferGeometry(200, 20, 10),
          new THREE.MeshPhongMaterial({ flatShading: true })
        );
        this.scene.add(this.sphere);
        
        // this.plane
        this.plane = new THREE.Mesh(
          new THREE.PlaneBufferGeometry(400, 400),
          new THREE.MeshBasicMaterial({ color: 0xe0e0e0 })
        );
        this.plane.position.y = -200;
        this.plane.rotation.x = -Math.PI / 2;
        this.scene.add(this.plane);
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.$el.offsetWidth, this.$el.offsetHeight);
        
        this.effect = new AsciiEffect(this.renderer, " .:-+*=%@#", { invert: true });
        this.effect.setSize(this.$el.offsetWidth, this.$el.offsetHeight);
        this.effect.domElement.style.color = "white";
        this.effect.domElement.style.backgroundColor = "black";
        // Special case: append effect.domElement, instead of renderer.domElement.
        // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.
        this.$el.appendChild(this.effect.domElement);
        
        initializeControls(this.$el);
        document.body.addEventListener("resize", this.onWindowResize, false);
      },
      animate() {
        requestAnimationFrame(this.animate);

        this.render();
      },
      onWindowResize() {
        this.camera.aspect = this.$el.offsetWidth / this.$el.offsetHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.$el.offsetWidth, this.$el.offsetHeight);
        this.effect.setSize(this.$el.offsetWidth, this.$el.offsetHeight);
        updateControlsOnResize();
      },
      render() {
        const timer = Date.now() - this.start;
//        this.sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
//        this.sphere.rotation.x = timer * 0.0003;
//        this.sphere.rotation.z = timer * 0.0002;
//        controls.update();
        rotateObject(this.sphere);
        this.effect.render(this.scene, this.camera);
      },
      destroyed() {

      }
    }
  }
</script>
<style scoped lang="scss">
  #scene {
    // todo responsive
    width: 640px;
    height: 480px;
  }
</style>
