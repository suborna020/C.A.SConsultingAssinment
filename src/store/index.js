import { createStore } from 'vuex';
import Axios from 'axios';
import allData from './modules/allData.json';

export default createStore({
  state: {
    formData: {
      name: String,
      email: String,
      password: String,
    },
    count: 10,
    engineeringSectors: [],
    ourProjects: [],
    ourClient: allData.options.ourClient,
    membersOf: allData.options.membersOf,
  },
  getters: {
    engineeringSectors: (state) => state.engineeringSectors,
    ourProjects: (state) => state.ourProjects,
  },
  actions: {
    fetchESectors(context) {
      Axios.get('https://619c762368ebaa001753c8a5.mockapi.io/casConsulting/e_sectors')
        .then((result) => {
          context.commit('setESectors', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchOurProjects(context) {
      Axios.get('https://619c762368ebaa001753c8a5.mockapi.io/casConsulting/ourProjects')
        .then((result) => {
          context.commit('setOurProjects', result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    signUp(state, payload) {
      state.formData = payload;
    },
    // setESectors: (state, engineeringSectors) => (state.engineeringSectors = engineeringSectors),
    setESectors(state, payload) {
      this.state.engineeringSectors = payload;
    },
    setOurProjects(state, payload) {
      this.state.ourProjects = payload;
    },
  },

  modules: {},
});
