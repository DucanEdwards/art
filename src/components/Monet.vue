<template>
  <div>
    <div id='container'></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "monet",
  data(){
    return {
      scene:'',
      camera:'',
      renderer:''
    }
  },
  methods:{
    initThree(){
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(90, document.body.clientWidth / document.body.clientHeight, 0.1, 100);
      this.camera.position.set(0, 0, 0.01);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(document.body.clientWidth, document.body.clientHeight);

      document.getElementById("container").appendChild(this.renderer.domElement);

      let controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.useBox();
      this.loop();
    },
    useBox(){
      let materials = [];

      let monet1 = require('../common/images/monet/monet1.jpeg')
      let texture_left = new THREE.TextureLoader().load( monet1 );
      materials.push( new THREE.MeshBasicMaterial( { map: texture_left} ) );

      let monet2 = require('../common/images/monet/monet2.jpeg')
      let texture_right = new THREE.TextureLoader().load( monet2);
      materials.push( new THREE.MeshBasicMaterial( { map: texture_right} ) );

      let monet5 = require('../common/images/monet/monet5.jpeg')
      let texture_top = new THREE.TextureLoader().load( monet5);
      materials.push( new THREE.MeshBasicMaterial( { map: texture_top} ) );

      let monet6 = require('../common/images/monet/monet6.jpeg')
      let texture_bottom = new THREE.TextureLoader().load( monet6 );
      materials.push( new THREE.MeshBasicMaterial( { map: texture_bottom} ) );

      let monet3 = require('../common/images/monet/monet3.jpeg')
      let texture_front = new THREE.TextureLoader().load( monet3 );
      materials.push( new THREE.MeshBasicMaterial( { map: texture_front} ) );

      let monet4 = require('../common/images/monet/monet4.jpeg')
      let texture_back = new THREE.TextureLoader().load( monet4 );
      materials.push( new THREE.MeshBasicMaterial( { map: texture_back} ) );

      let box = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), materials );
      box.geometry.scale( 1, 1, -1 );
      this.scene.add(box);
    },
    loop() {
      requestAnimationFrame(this.loop);

      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted(){
    this.initThree();
  }
}
</script>

<style scoped>
#container{
  position: absolute;
  left: 0;
  top: 0;
}
span{
  position:absolute;
  left: 5px;
  height: 5px;
  color: white;
}
.back{
  position: absolute;
}
</style>