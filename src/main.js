// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入iconfont字体图标库
import "@/assets/iconfont/iconfont.css"

//导入重置样式的的css
import '@/assets/css/app-reset.css'

// 将请求地址的跟路径挂载到原型上
Vue.prototype.HOST = '/api'

// 导入axios,并将axios挂载到vue的原型对象上
import Axios from 'axios';
Vue.prototype.$axios = Axios;


// 轮播图的相关操作
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
