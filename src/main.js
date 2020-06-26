import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload'

// 导入toast自定义插件
import toastPlugin from 'components/common/toast/index.js';
// 安装toast插件
Vue.use(toastPlugin);

// 解决移动端延迟300毫秒的问题
FastClick.attach(document.body);

// 使用图片懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/images/common/placeholder.png')
})

Vue.config.productionTip = false
// 事件总线赋值为Vue的实例
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
