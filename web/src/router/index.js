import Vue from 'vue';
import VueRouter from 'vue-router';

import ListComponent from '../component/ListComponent.vue';
import ShopcarComponent from '../component/ShopcarComponent.vue';
import WeComponent from '../component/WeComponent.vue'
import DetailsComponent from '../component/DetailsComponent.vue'


Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'list',//列表页界面
            component: ListComponent
        },
        {
            path: '/DetailsComponent',
            name: 'DetailsComponent',//详情页
            component: DetailsComponent
        },
        {
            path: '/ShopcarComponent',
            name: 'shopcar',//购物车详情界面
            component: ShopcarComponent
        },
        {
            path: '/WeComponent',
            name: 'WeComponent',//购物车详情界面
            component: WeComponent
        }
    ]
})

export default router