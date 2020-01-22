/**
 * Created by 86130 on 2019/11/23.
 */

import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'

import '../../../static/css/common/reset.css'

new Vue({
  el: '#app',
  components: { Index },
  template: '<Index/>',
  router,
  store
})
