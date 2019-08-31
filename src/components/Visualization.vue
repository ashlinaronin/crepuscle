<!-- adapted from https://github.com/mrdoob/three.js/blob/master/examples/webgl_effects_ascii.html -->
<template>
  <div id="scene" >
    <canvas id="scene-canvas" ref="sceneCanvas" />
  </div>
</template>
<script>
  import * as THREE from "three";
  import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect";
  import { initializeControls, destroyControls, updateControlsOnResize, rotateObject} from "../library/rotateControls";
  import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
  import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2";
  import { MtlObjBridge } from "three/examples/jsm/loaders/obj2/bridge/MtlObjBridge";

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
//        this.camera.position.x = 0;
        this.camera.position.z = 500;
        
        this.scene = new THREE.Scene();

        this.loadModel();
        
        const light1 = new THREE.PointLight(0xffffff);
        light1.position.set(500, 500, 500);
        this.scene.add(light1);
        
        const light2 = new THREE.PointLight(0xffffff, 0.25);
        light2.position.set(-500, -500, -500);
        this.scene.add(light2);

        const sun = new THREE.DirectionalLight(0xff0000, 0.5);
        this.scene.add(sun);

        // this.plane
        this.plane = new THREE.Mesh(
          new THREE.PlaneBufferGeometry(400, 400),
          new THREE.MeshBasicMaterial({ color: 0xe0e0e0 })
        );
        this.plane.position.y = -200;
        this.plane.rotation.x = -Math.PI / 2;
        this.scene.add(this.plane);
        
        this.renderer = new THREE.WebGLRenderer({
          canvas: this.$refs.sceneCanvas,
          antialias: true,
          autoClear: true
        });
        this.renderer.setClearColor( 0x050505 );
        this.renderer.setSize(this.$el.offsetWidth, this.$el.offsetHeight);

        this.$el.appendChild(this.renderer.domElement);
        
        initializeControls(this.$el);
        document.body.addEventListener("resize", this.onWindowResize, false);
      },
      loadModel() {
        let modelName = 'ashlin';
        this._reportProgress( { detail: { text: 'Loading: ' + modelName } } );
        let scope = this;
        let objLoader2 = new OBJLoader2();
        let callbackOnLoad = function ( object3d ) {
          scope.scene.add( object3d );
          window.obj = object3d;
//          object3d.position.x = 200
//          object3d.position.y = 200
//          object3d.position.z = 200
          console.log( 'Loading complete: ' + modelName );
          scope._reportProgress( { detail: { text: '' } } );
        };
        let onLoadMtl = function ( mtlParseResult ) {
          objLoader2.setModelName( modelName );
          objLoader2.setLogging( true, true );
          objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ) );
          objLoader2.load( 'ashlin.obj', callbackOnLoad, null, null, null );
        };
        let mtlLoader = new MTLLoader();
        mtlLoader.load( 'ashlin.mtl', onLoadMtl );
      },
      _reportProgress: function ( event ) {
        let output = '';
        if ( event.detail !== null && event.detail !== undefined && event.detail.text ) {
          output = event.detail.text;
        }
        console.log( 'Progress: ' + output );
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
//        const timer = Date.now() - this.start;
//        this.sphere.rotation.z = timer * 0.0002;
//        rotateObject(this.sphere);
        this.renderer.render(this.scene, this.camera);
      },
      destroyed() {
        destroyControls();
      }
    }
  }
</script>
<style scoped lang="scss">
  #scene {
    width: 100%;
    height: 480px;
    // rendered as text, so this will center in table
    text-align: center;
  }
</style>
