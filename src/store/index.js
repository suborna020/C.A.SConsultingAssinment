import { createStore } from 'vuex';
import Axios from 'axios';
import allData from './modules/allData.json';
import router from '@/router';

export default createStore({
  state: {
    UserDbData: {
      name: String,
      email: String,
      password: String,
    },
    count: 10,
    engineeringSectors: [],
    ourProjects: [],
    ourClient: allData.options.ourClient,
    membersOf: allData.options.membersOf,
    loginFormData: null,
    loginStatus: '',
  },

  getters: {
    engineeringSectors: (state) => state.engineeringSectors,
    ourProjects: (state) => state.ourProjects,
    UserDbData: (state) => state.UserDbData,
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
    fetchAllUser() {
      Axios.get('https://619c762368ebaa001753c8a5.mockapi.io/casConsulting/users')
        .then((result) => {
          const l = this.state.loginFormData;
          const allUsr = result.data;

          const matchedEmail = allUsr.find((o) => o.email === l.email);
          if (matchedEmail) {
            if (l.password === matchedEmail.password) {
              localStorage.setItem('userLoggedIn', true);
              router.push({ name: 'UserDashboard' });
            } else {
              this.state.loginStatus = "Credantials did't match try Again ";
            }
          } else {
            this.state.loginStatus = 'Email is incorrect';
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    signUp(state, payload) {
      state.UserDbData = payload;
    },
    passLoginFormData(state, payload) {
      state.loginFormData = payload;
    },
    // setESectors: (state, engineeringSectors) => (state.engineeringSectors = engineeringSectors),
    setESectors(state, payload) {
      this.state.engineeringSectors = payload;
    },
    setOurProjects(state, payload) {
      this.state.ourProjects = payload;
    },
    setMatchedUserInfo(state, payload) {
      this.state.engineeringSectors = payload;
    },
  },

  modules: {},
});
