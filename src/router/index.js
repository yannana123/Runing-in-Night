/*
 * @Author: Tedu 228322454@qq.com
 * @Date: 2022-06-09 18:11:54
 * @LastEditors: Tedu 228322454@qq.com
 * @LastEditTime: 2022-06-09 21:04:40
 * @FilePath: \VueProject\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
 {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../views/View.vue'),
  },
  {
    path: '/registerWeight',
    name: 'registerWeight',
    component: () => import('../views/RegisterWeight.vue'),
  },
  {
    path: '/RegisterHeight',
    name: 'RegisterHeight',
    component: () => import('../views/RegisterHeight.vue'),
  },
  {
    path: '/registerAge',
    name: 'registerAge',
    component: () => import('../views/RegisterAge.vue'),
  },
  {
    path: '/registerSex',
    name: 'registerSex',
    component: () => import('../views/RegisterSex.vue'),
  },
  {
    // 此为首页预加载，其余路由懒加载
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
