
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home.vue') },
      {
        path: '/details/:id',
        props: true,
        component: () => import('pages/details.vue')
      },
      {
        path: '/category/:id',
        props: true,
        component: () => import('pages/category.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
