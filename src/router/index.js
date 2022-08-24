import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import intro from '../views/intro.vue'
import make from '../views/make.vue'
import finance from '../views/finance.vue'
import product from '../views/product.vue'
import news from '../views/news.vue'
import resource from '../views/resource.vue'
Vue.use(VueRouter);

const router=new VueRouter({
    routes:[
        {
            path:"/",
            name:'index',
            component:index
        },
        {
            path:"/intro",
            name:'intro',
            component:intro
        },
        {
            path:"/make",
            name:'make',
            component:make
        },
        {
            path:"/product",
            name:'product',
            component:product
        },
        {
            path:"/finance",
            name:'finance',
            component:finance
        },
        {
            path:"/news",
            name:'news',
            component:news
        },
        {
            path:"/resource",
            name:'resource',
            component:resource
        }
    ]
})


export default router;

