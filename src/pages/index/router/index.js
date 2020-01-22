/**
 * Created by Administrator on 2019/12/22.
 */


import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue'
import OperatorOptionMenu from '../views/OperatorOptionMenu/OperatorOptionMenu.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/operatorAuth',
            component: OperatorOptionMenu
        }
    ]
})