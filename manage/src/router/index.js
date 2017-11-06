import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login.vue'
import FoodComponent from '../components/foods.vue'
import OrderComponent from '../components/order.vue'
import UserComponent from '../components/user.vue'
import AddFoodComponent from '../components/addFood.vue'
import AddUserComponent from '../components/adduser.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginComponent
    }, {
      path: '/home',
      name: 'home',
      component: HomeComponent,
      children: [{
        path: 'food',
        name: 'food',
        component: FoodComponent,
        meta: ['菜品管理']
      }, {
        path: 'order',
        name: 'order',
        component: OrderComponent,
        meta: ['订单管理']
      }, {
        path: 'user',
        name: 'user',
        component: UserComponent,
        meta: ['员工管理']
      }, {
        path: 'addfood',
        name: 'addfood',
        component: AddFoodComponent,
        meta: ['添加菜品']
      }, {
        path: 'adduser',
        name: 'adduser',
        component: AddUserComponent,
        meta: ['新增员工']
      }]
    }
  ]
})
