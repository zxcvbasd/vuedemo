import Vue from 'vue';
import Vant from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';

import { Toast } from 'vant';
import { Dialog } from 'vant';
import { Lazyload } from 'vant';
// import 'vant/lib/index.css';
import '@/assets/index.css';
import { CountDown } from 'vant';

Vue.use(CountDown);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
