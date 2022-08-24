import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index'
// ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
// 组件
import Header from './components/Header.vue'
import Foorl from './components/Foorl.vue'
import Botsearch from './components/Botsearch.vue'
import TopImg from './components/TopImg.vue'
import index from './views/index'
import finance from './views/finance'

Vue.component('Header',Header)
Vue.component('Foorl',Foorl)
Vue.component('index',index)
Vue.component('Botsearch',Botsearch)
Vue.component('TopImg',TopImg)
Vue.component('finance',finance)

Vue.config.productionTip = false
// 轮播图
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
