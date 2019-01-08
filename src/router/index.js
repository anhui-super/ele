import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function requireAuth(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.user) {
          next();
      } else {
          next({
              path: '/login',
              query: { redirect: to.fullPath }
          });
      }
  } else {
      next();
  }
}

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',  //首页
      name: 'index',
      component: resolve => { require(['../view/index/index'], resolve) },
      // meta: {auth: true}
    },
    {  
      path: '/classify',  //分类
      name: 'classify',
      component: resolve => { require(['../view/classify/classify'], resolve) },
      // meta: {auth: true}
    },
    {
      path: '/classifyDetail/:id', //分类->详情
      name: 'classifyDetail',
      component: resolve => { require(['../view/classify/classifyDetail'], resolve) },
      // meta: {auth: true}
    },
    {
      path: '/buy',  //购物车
      name: 'buy',
      component: resolve => { require(['../view/buy/buy'], resolve) },
      // meta: {auth: true}
    },
    {
      path: '/main',  //我的
      name: 'main',
      component: resolve => { require(['../view/main/main'], resolve) },
      // meta: {auth: true}
      beforeEnter: requireAuth,
      meta: { requiresAuth: true }
    },
    {
      path: '/integral', //我的积分
      name: 'integral',
      component: resolve => { require(['../view/main/integral'], resolve) },
      // meta: {auth: true}
    },
    {
      path: '/order/:id', //我的积分
      name: 'order',
      component: resolve => { require(['../view/main/order'], resolve) },
      // meta: {auth: true}
    },
    {
      path: '/detail/:id',  //详情页
      name: 'index',
      component: resolve => { require(['../view/detail/detail'], resolve) },
      // meta: {auth: true}
    },
    {
      path: '/sureOrder', //确认订单
      name: 'sureOrder',
      component: resolve => { require(['../view/detail/sureOrder'], resolve) },
      // meta: {auth: true}
    },
    {
      path: '/activity',  //倒计时
      name: 'activity',
      component: resolve => { require(['../view/activity/activity'], resolve) },
      // meta: {auth: true}
    },
    {
      path: '/login',  //登陆
      name: 'login',
      component: resolve => { require(['../view/login/login'], resolve) },
      // meta: {auth: true}
    }
  ]
})
