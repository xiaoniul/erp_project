/**
 * Created by Administrator on 2019/12/22.
 */


import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue'
import OperatorAuth from '../views/OperatorAuth/OperatorAuth.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/operatorAuth',
            component: OperatorAuth
        }
    ]
})