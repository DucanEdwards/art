import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Van from  './components/Van'
import Monet from  './components/Monet'
import Seurat from "./components/Seurat";
import Newyork from "./components/Newyork";
import Greece from "./components/Greece";


Vue.use(Vant);
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes=[
  {
    path:"/van",
    name:"van",
    component:Van,
  },
  {
    path:"/monet",
    name:"monet",
    component:Monet,
  },
  {
    path: "/seurat",
    name:"seurat",
    component:Seurat,
  },
  {
    path: "/seurat",
    name:"seurat",
    component:Seurat,
  },
  {
    path: "/newyork",
    name:"newyork",
    component:Newyork,
  },
  {
    path: "/greece",
    name:"greece",
    component:Greece,
  }
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
