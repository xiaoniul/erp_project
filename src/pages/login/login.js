/**
 * Created by 86130 on 2019/11/23.
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from './login.vue'
import VueRoseurce from 'vue-resource'

import '../../../static/css/common/reset.css'

Vue.use(ElementUI)
Vue.use(VueRoseurce)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { Login },
  template: '<Login/>'
})
