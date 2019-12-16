/**
 * Created by Administrator on 2019/12/11.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginHome from '../views/LoginHome.vue'
import Supper from '../views/Supper.vue'
import DelCompany from '../views/DelCompany.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/loginHome',
            component: LoginHome
        },
        {
            path: '/supper',
            component: Supper,
            children: [
                {
                    path: 'delCompany',
                    component: DelCompany
                },
                {
                    path: 'register',
                    component: Register
                },
                {
                    path: '/',
                    redirect: 'register'
                }
            ]
        },
        {
            path: '/',
            redirect: '/loginHome'
        }
    ]
})
