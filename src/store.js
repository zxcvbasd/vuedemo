import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: '',
  },
  //改变状态的方法
  mutations: {
    // increase() {
    //   this.state.count ++
    // }
  },
  actions: {

  },
});
