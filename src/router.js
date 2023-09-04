import { createRouter, createWebHistory } from 'vue-router';

// Importing
import Homepage from './pages/Homepage.vue';
import About from './pages/About.vue';
import Index from './pages/Index.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes : [
      {
          path: '/',
          name : 'homepage',
          component : Homepage,
          meta: { title: 'Home'}
      },
      {
          path: '/about',
          name : 'about',
          component : About,
          meta: { title: 'About Us'}
      },
      {
          path: '/index',
          name : 'index',
          component : Index,
          meta: { title: 'Index'}
      },
      {
          path: '/:catchAll(.*)',
          name : 'notfound',
          component : NotFoundPage,
          meta: { title: 'Not found'}
      },
  ]
})

// Update the title based on the route
router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title || 'Default title';
  document.title = pageTitle;
  next();
});

export { router };