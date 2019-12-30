/**
 * Created by Administrator on 2019/12/11.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginHome from '../views/Plus/LoginHome.vue'
import Supper from '../views/Plus/Supper.vue'
import DeleteCompany from '../views/Plus/DeleteCompany.vue'
import DeleteUser from '../views/Plus/DeleteUser.vue'
import RegisterCompany from '../views/Plus/RegisterCompany.vue'
import RegisterUser from '../views/Plus/RegisterUser.vue'
import UpdateCompany from '../views/Plus/UpdateCompany.vue'
import UpdateUser from '../views/Plus/UpdateUser.vue'

Vue.use(VueRouter)

/*为了解决多次点击同一个路由组件报错问题而加入的*/
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
                    path: 'deleteCompany',
                    component: DeleteCompany
                },
                {
                    path: 'deleteUser',
                    component: DeleteUser
                },
                {
                    path: 'registerCompany',
                    component: RegisterCompany
                },
                {
                    path: 'registerUser',
                    component: RegisterUser
                },
                {
                    path: 'updateCompany',
                    component: UpdateCompany
                },
                {
                    path: 'updateUser',
                    component: UpdateUser
                },
                {
                    path: '/',
                    redirect: 'registerCompany'
                }
            ]
        },
        {
            path: '/',
            redirect: '/loginHome'
        }
    ]
})
