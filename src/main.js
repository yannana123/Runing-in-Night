import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
//默认前缀
axios.defaults.baseURL = 'http://localhost:3000';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
