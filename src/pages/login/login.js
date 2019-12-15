/**
 * Created by 86130 on 2019/11/23.
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from './Login.vue'
import router from './router/index'
import store from '../../store'
import global from '../../components/Global.vue'

import '../../../static/css/common/reset.css'

Vue.use(ElementUI)
Vue.prototype.GLOBAL = global

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { Login },
  template: '<Login/>',
  router: router,
  store
})
