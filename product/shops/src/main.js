// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store/index'
import router from './router'
import filter from './filter/index.js'
import components from '../../../components'

import '@/assets/icon/iconfont.css'
import 'swiper/dist/css/swiper.css'

import 'lib-flexible/flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(filter)
Vue.use(components)

Vue.prototype.$store = store

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
