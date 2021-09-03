<template>
  <div class="drop">
<!--    <van-tag type="primary" round size="large">请在下面选择作品</van-tag>-->
<!--    <svg t="1629270996209" class="icon" viewBox="100 -300 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4672" width="20" height="20"><path d="M511.997952 755.974268l365.02634-487.950584L146.975708 268.023684 511.997952 755.974268" p-id="4673"></path></svg>-->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" @change="changeArt"/>
      <van-dropdown-item v-model="value2" :options="option2" @change="changeArt1"/>
    </van-dropdown-menu>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Drop",
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '芝加哥美术馆', value: 0 },
        { text: '梵高', value: 1 },
        { text: '莫奈', value: 2 },
        { text: '乔治·修拉', value: 3 },
      ],
      option2: [
        { text: '纽约大都会艺术博物馆', value: 'a' },
        { text: '镇馆之宝', value: 'b' },
        { text: '古希腊', value: 'c' },
      ],
    };
  },
  methods:{
    changeArt(value){
      if(value==1){
        console.log("van")
        this.$router.push('/3d/van');
      }
      if (value==2){
        this.$router.push("/3d/monet")
      }
      if (value==3){
        this.$router.push("/3d/seurat")
      }

    },
    changeArt1(value){
      if (value=='b'){
        this.$router.push("/3d/newyork")
      }
      if (value=='c'){
        this.$router.push("/3d/greece")
      }

    }

  },
  mounted() {
    console.log("sakh")
  }
}
</script>

<style scoped>

</style>