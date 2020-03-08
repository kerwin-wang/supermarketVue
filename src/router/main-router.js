export default [
  {
    path: '/user',
    component: () =>
      import(/* webpackChunkName:"userLayout" */ '../layouts/UserLayout'),
    children: [
      {
        path: '/user/login',
        name: 'login',
        //  异步加载
        component: () =>
          import(/* webpackChunkName:"login" */ '../views/user/Login')
      },
      {
        path: '/user/register',
        name: 'register',
        //  异步加载
        component: () =>
          import(/* webpackChunkName:"register" */ '../views/user/Register')
      }
    ]
  }
]
