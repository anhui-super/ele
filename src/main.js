// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

import vueg from 'vueg'
import 'vueg/css/transition-min.css'
Vue.use(vueg, router) //←注意这一句应该在router实例化之后

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import 'lib-flexible/flexible'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// import Distpicker from 'v-distpicker'
// Vue.component('v-distpicker', Distpicker)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})