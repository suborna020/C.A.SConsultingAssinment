import { createStore } from 'vuex';
import allData from './modules/allData.json';

export default createStore({
  state: {
    formData: {
      name: String,
      email: String,
      password: String,
    },
    count: 10,
    engineeringSectors: allData.options.engineeringSectors,
    ourProjects: allData.options.ourProjects,
    ourClient: allData.options.ourClient,
    membersOf: allData.options.membersOf,
  },
  mutations: {
    signUp(state, payload) {
      state.formData = payload;
    },
  },
  actions: {},
  modules: {},
});
