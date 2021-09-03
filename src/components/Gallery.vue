<template>
  <div class="bottom">
    <van-row gutter="10" v-for="(image, index) in imageList" :key="index">
        <div class="img">
          <van-image
              :src="image.img"
              fit="cover"
              @click="onclick(index)"
          >
          </van-image>
          <span>{{image.title}}</span>
        </div>
    </van-row>
    <a href="https://www.artic.edu/">For more...</a>
  </div>
</template>


<script>
import {ImagePreview} from "vant";
//@click="onclick(image.img)"

export default {
  name: "Gallery",
  data(){
    return{
      show:false
    }
  },
  props:{
    imageList:Array
  },
  methods:{
    onclick(index){
      let images=[];
      this.imageList.forEach((image)=>{
        images.push(image.img)
      })
      ImagePreview({
        images:images,
        startPosition:index,
        swipeDuration:1000,
        maxZoom:5
      });
    }
  }
}
</script>

<style scoped>
.img{
  padding: 25px 10px;
}
.bottom{
  padding-bottom: 100px;
}
</style>