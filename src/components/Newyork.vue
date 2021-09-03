<template>
  <div>
    <div id='container'></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: "newyork",
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

      this.useSphere();

      this.loop();
    },
    useSphere(){
      let materials = [];
      // let sphereGeometry = new THREE.SphereGeometry(60, 40, 40);
      let geometry = new THREE.CylinderGeometry( 50, 50, 100, 25 );
      geometry.scale(1, 1, -1);

      let img=require('../common/images/newyork/wheat.jpeg')
      let texture_bottom = new THREE.TextureLoader().load(img);
      materials.push( new THREE.MeshBasicMaterial( { map: texture_bottom} ) );

      let art2=require('../common/images/newyork/muse.jpeg')
      let texture_top = new THREE.TextureLoader().load(art2);
      materials.push( new THREE.MeshBasicMaterial( { map: texture_top} ) );

      let ground=require('../common/images/newyork/card-player.jpeg')
      let texture_front = new THREE.TextureLoader().load(ground);
      materials.push( new THREE.MeshBasicMaterial( { map: texture_front} ) );

      let sphere = new THREE.Mesh(geometry,materials);
      // sphere.material.wireframe  = true;
      this.scene.add(sphere);
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
  /*position: absolute;*/
  /*left: 0;*/
  /*top: 0;*/
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