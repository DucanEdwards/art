<template>
  <div id="app">
    <Mhead></Mhead>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Mhead from "./components/Head"
import Drop from "./components/3D";
import MyFooter from "./components/MyFooter";
export default {
  name: 'App',
  components: {
    MyFooter,
    Mhead,
    Drop
  },
  data() {
    return {
      activeKey: 0,
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
}

</style>
