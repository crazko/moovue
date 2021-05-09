import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('src/pages/home/HomePage.vue'),
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('src/pages/movie/MoviePage.vue'),
      props: true,
    },
  ],
});
