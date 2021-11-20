// import Vuex from 'vuex';
// import dataModule from './modules/dataModule';

// export default new Vuex.Store({
//   modules: {
//     dataModule,
//   },
// });
import { createStore } from 'vuex';
import allData from './modules/allData.json';

export default createStore({
  state: {
    count: 10,
    engineeringSectors: allData.options.engineeringSectors,
    ourProjects: allData.options.ourProjects,
    ourClient: allData.options.ourClient,
    membersOf: allData.options.membersOf,
  },
  mutations: {},
  actions: {},
  modules: {},
});
