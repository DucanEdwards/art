<template>
  <div class="bg-greg border-tb padding-tb">
    <div class="container">
    <van-cell-group inset>
      <van-cell title="芝加哥美术馆 简介">
        <template #label>
          <ul>
            <li>·以收藏大量印象派作品以及美国艺术品着称，如莫奈、修拉、梵高、爱德华·霍普等人的作品</li>
            <br>
            <li>·购藏了一批古典雕塑模制品的艺术收藏，是迄今为止在美国最大的复制品收藏</li>
            <br>
            <li>·世界上最古老的美术展览馆之一，美国三大美术馆之一</li>
            <br>
            <li>·镇馆之宝:梵高的《卧室》、莫奈的《麦草垛》、《睡莲》、格兰特·伍德的《美国哥特式》和爱德华·霍珀《夜鹰》...</li>
          </ul>
        </template>
      </van-cell>
      <van-cell title="纽约大都会博物馆" class="van-hairline--top-bottom">
        <template #label>
          <ul>
            <li>·是美国最大的艺术博物馆，位于美国纽约第五大道的82号大街</li>
            <br>
            <li>·馆藏有埃及、巴比伦、亚述、远东和近东、希腊和罗马、欧洲、非洲、美洲前哥伦布时期和新几内亚等各地艺术珍品330余万件</li>
            <br>
            <li>·收藏了古今各个历史时期的建筑、雕塑、绘画、素描、版画、照片、玻璃器皿、陶瓷器、纺织品、金属制品、家具、古代房屋、武器、盔甲和乐器</li>
          </ul>
        </template>
      </van-cell>
    </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style scoped>
.bg-greg{
  background: #F7F8FA;
}
.border-tb{
  border-top: 10px;
  border-bottom: 10px;
}
.padding-tb{
  padding-top: 10px;
  padding-bottom: 10px;
}
.container{
  height: 90vh;
  overflow-y: auto;
}
</style>