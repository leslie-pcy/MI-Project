import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from "./router/index"

// 使用vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 使用图标
import { Icon } from 'vant';
Vue.use(Icon);

// search
import { Search } from 'vant';
Vue.use(Search);

// 轮播
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
