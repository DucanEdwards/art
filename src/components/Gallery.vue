<template>
  <div class="bottom">
    <van-radio-group v-model="radio" direction="horizontal" @change="radioChange" class="radio">
      <van-radio name="1">List</van-radio>
      <van-radio name="2">Swipe</van-radio>
    </van-radio-group>

    <van-row gutter="10" v-for="(image, index) in imageList" :key="index" v-if="show">
        <div class="img">
          <van-image
              lazy-load
              :src="image.img"
              fit="cover"
              @click="onclick(index)"
          >
            <template v-slot:loading>
              <van-loading color="#1989fa" size="35" type="spinner"></van-loading>
            </template>
          </van-image>
        </div>
      <span>{{image.title}}</span>
    </van-row>

    <div v-if="!show">
      <van-swipe :autoplay="3000" vertical style="height: 300px;" ref="swipe" @change="onchange">
        <van-swipe-item v-for="(image, index) in imageList" :key="index">
          <van-image
              lazy-load
              :src="image.img"
              height="100%"
          />
        </van-swipe-item>
      </van-swipe>
      <div class="title"><span>{{title}}</span></div>
    </div>
    <a href="https://www.artic.edu/">For more...</a>
  </div>
</template>


<script>
import {ImagePreview} from "vant";
import { Lazyload } from 'vant';
import Vue from "vue";

Vue.use(Lazyload);

//@click="onclick(image.img)"

export default {
  name: "Gallery",
  data(){
    return{
      show:true,
      radio: '1',
      title:this.imageList[0].title
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
    },
    onchange(index){
      this.title=this.imageList[index].title
      this.$refs.swipe.resize();
    },
    radioChange(){
      this.show=!this.show
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
.radio{
  display: flex;
  justify-content: center;
  padding:5px;
  margin: 2px;
}
.radio>van-radio{
  margin: 0 auto;
}
.title{
  margin: 20px;
}
</style>