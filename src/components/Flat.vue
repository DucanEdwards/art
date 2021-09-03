<template>
  <div>
    <!--  导航栏  -->
    <van-tabs v-model="active"swipeable sticky animated @change="onchange(active)">
      <van-tab v-for="(option,index) in options" :title="option.option" :key="index">
        <Gallery :image-list="imageList"></Gallery>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Gallery from "./Gallery";
export default {
  name: "Flat",
  components: {Gallery},
  data() {
    return {
      active: 0,
      options:[
        {option:"梵高"},
        {option:"莫奈"},
        {option:"修拉"},
        {option: "雷诺 阿"},
        {option: "德加"},
        {option: "毕沙罗"}
      ],
      imageList:[
        {img:require('../common/images/van/van1.jpeg'),title:"The Poet's Garden 1888"},
        {img:require('../common/images/van/van2.jpeg'),title:"The Bedroom 1989"},
        {img:require('../common/images/van/van3.jpeg'),title:"The Drinkers 1890"},
        {img:require('../common/images/van/van4.jpeg'),title:"Tetards(Pollards) 1884"},
        {img:require('../common/images/van/van5.jpeg'),title:"Roses 1927"},
        {img:require('../common/images/van/van6.jpeg'),title:"Self-Portrait 1887"},
      ]
    };
  },
  methods:{
    onchange(active){
      if (active==0){
        this.imageList=[
          {img:require('../common/images/van/van1.jpeg'),title:"The Poet's Garden 1888"},
          {img:require('../common/images/van/van2.jpeg'),title:"The Bedroom 1989"},
          {img:require('../common/images/van/van3.jpeg'),title:"The Drinkers 1890"},
          {img:require('../common/images/van/van4.jpeg'),title:"Tetards(Pollards) 1884"},
          {img:require('../common/images/van/van5.jpeg'),title:"Roses 1927"},
          {img:require('../common/images/van/van6.jpeg'),title:"Self-Portrait 1887"},
        ]
      }
      if (active==1){
        this.imageList=[
          {img:require('../common/images/monet/monet1.jpeg'),title:"The Artist's House at Argenteuil 1873"},
          {img:require('../common/images/monet/monet2.jpeg'),title:"On the Bank of the Seine,Bennecourt 1868"},
          {img:require('../common/images/monet/monet3.jpeg'),title:"The Beach at Sainte-Adresse 1867"},
          {img:require('../common/images/monet/monet4.jpeg'),title:"Arrival of the Normandy Train, Gare Saint-Lazare, 1877"},
          {img:require('../common/images/monet/monet5.jpeg'),title:"Caricature of a Man with a Large Nose, 1855/56"},
          {img:require('../common/images/monet/monet6.jpeg'),title:"Caricature of Jules Didier (“Butterfly Man”), c. 1858"},
        ]
      }
      if (active==2){
        this.imageList=[
          {img: require('../common/images/seurat/seurat1.jpeg'),title:"Oil Sketch for “La Grande Jatte”, 1884"},
          {img: require('../common/images/seurat/seurat2.jpeg'),title:"Final Study for “Bathers at Asnières”, 1883"},
          {img: require('../common/images/seurat/seurat3.jpeg'),title:"Woman Walking with a Parasol (study for La Grande Jatte), 1884"},
          {img: require('../common/images/seurat/seurat4.jpeg'),title:"Woman with a Muff, c. 1884"},
          {img: require('../common/images/seurat/seurat5.jpeg'),title:"Roses in a Vase, 1881/83"},
          {img: require('../common/images/seurat/seurat6.jpeg'),title:"The Zone (Outside the City Walls), 1882–83"},
        ]
      }
      if (active==3){
        this.imageList=[
          {img:require('../common/images/renoir/renoir1.jpeg'),title: "Seascape, 1879"},
          {img:require('../common/images/renoir/renoir2.jpeg'),title: "Near the Lake, 1879/80"},
          {img:require('../common/images/renoir/renoir3.jpeg'),title: "Chrysanthemums, 1881/82"},
          {img:require('../common/images/renoir/renoir4.jpeg'),title: "Woman at the Piano, 1875/76"},
          {img:require('../common/images/renoir/renoir5.jpeg'),title: "Lunch at the Restaurant Fournaise (The Rowers’ Lunch), 1875"},
          {img:require('../common/images/renoir/renoir6.jpeg'),title: "Madame Léon Clapisson, 1883"},
          {img:require('../common/images/renoir/renoir7.jpeg'),title: "Grove of Trees, 1888/90"},
        ]
      }
      if (active==4){
        this.imageList=[
          {img: require('../common/images/dega/dega1.jpeg'),title: "The Millinery Shop, 1879/86"},
          {img: require('../common/images/dega/dega2.jpeg'),title: "The Star, 1879/81"},
          {img: require('../common/images/dega/dega3.jpeg'),title: "Portrait after a Costume Ball (Portrait of Madame Dietz-Monnin), 1879"},
          {img: require('../common/images/dega/dega4.jpeg'),title: "Woman at Her Toilette, 1900/05"},
          {img: require('../common/images/dega/dega5.jpeg'),title: "The Morning Bath, 1887/90"},
          {img: require('../common/images/dega/dega6.jpeg'),title: "Yellow Dancers (In the Wings), 1874/76"},
        ]
      }
      if (active==5){
        this.imageList=[
          {img:require('../common/images/pissaro/pissaro1.jpeg'),title: "Woman Bathing Her Feet in a Brook, 1894/95"},
          {img:require('../common/images/pissaro/pissaro2.jpeg'),title: "Woman and Child at the Well, 1882"},
          {img:require('../common/images/pissaro/pissaro3.jpeg'),title: "Young Peasant Having Her Coffee, 1881"},
          {img:require('../common/images/pissaro/pissaro4.jpeg'),title: "Woman Mending, 1895"},
          {img:require('../common/images/pissaro/pissaro5.jpeg'),title: "The Place du Havre, Paris, 1893"},
          {img:require('../common/images/pissaro/pissaro6.jpeg'),title: "Haymaking at Éragny, 1892"},
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>