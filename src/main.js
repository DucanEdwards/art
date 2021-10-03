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
import Drop from "./components/3D";
import Index from "./components/Index"
import Flat from "./components/Flat";
import Intro from "./components/Intro";
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Vant);
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes=[
  // {
  //   path: "/gallery",
  //   name:"gallery",
  //   component: Gallery,
  // },
  {
    path:"/",
    name:"index",
    component:Index,
  },
  {
    path:"/3d",
    name:"3d",
    component:Drop,
    children: [
      {
        path: 'intro',
        name:'intro',
        component: Intro
      },
      {
        path:'van',
        name:'van',
        component:Van,
      },
      {
        path:"monet",
        name:"monet",
        component:Monet,
      },
      {
        path: "seurat",
        name:"seurat",
        component:Seurat,
      },
      {
        path: "newyork",
        name:"newyork",
        component:Newyork,
      },
      {
        path: "greece",
        name:"greece",
        component:Greece,
      }
    ]
  },
  // {
  //   path: "/gallery",
  //   name:"gallery",
  //   component: Gallery
  // },
  {
    path: "/flat",
    name: "/flat",
    component: Flat
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
