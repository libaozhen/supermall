// 导入vue和vuex
import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
// 1、使用vuex
Vue.use(Vuex);

const state = {
  cartList:[]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{}
});

export default store;
