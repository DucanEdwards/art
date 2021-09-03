<template>
  <div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="bulb-o">平面鉴赏</van-tabbar-item>
      <van-tabbar-item icon="fire-o">3D鉴赏</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {Dialog, Notify} from "vant";

export default {
  name: "MyFooter",
  data() {
    return {
      active: 6,
    };
  },
  methods: {
    onChange(index) {
      if(index==0){
        this.$router.push("flat");
      }
      if(index==1){
        this.$router.push("/3d")
        Dialog({
          title:"3D鉴赏",
          message: '当你身在一个盒子中,或许会有不一样的体验! 哈哈,希望如此!',
          theme: 'round-button',
        })
        .then(()=>{
          Notify({ type: 'primary', message: '请在下面选择要鉴赏的艺术品' });
        });
      }
    },
  },
}
</script>

<style scoped>

</style>