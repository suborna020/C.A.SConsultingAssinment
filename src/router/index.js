import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUP.vue';
import UserDashboard from '../views/UserDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = !!localStorage.getItem('userLoggedIn');
      if (to.name === 'Login' && isAuthenticated) next({ name: 'UserDashboard' });
      else next();
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },

  {
    path: '/userdashboard',
    name: 'UserDashboard',
    component: UserDashboard,
    // beforeEnter: (to, from, next) => {
    //   const isAuthenticated = !!localStorage.getItem('userLoggedIn');
    //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
    //   else next();
    // },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
