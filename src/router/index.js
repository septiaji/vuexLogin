import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Secure from '../views/Secure.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/secure',
    name: 'Secure',
    component: Secure,
    beforeEach: (to, from, next) => {
      // eslint-disable-next-line eqeqeq
      if (this.$store.state.isLoggedIn == false) {
        next('/Login');
      } else {
        next();
      }
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
export default router;
