import { createRouter, createWebHistory } from '@ionic/vue-router';
//import ProductList from '../views/ProductList.vue';
import BookList from '../views/BookList.vue';
import BookDetail from '../views/BookDetail.vue';
//import TestA from '../views/TestA.vue';
//import TestB from '../views/TestB.vue';
const routes = [
  {
    path: '/',
    redirect: '/BookList'
  },
  {
    path: '/BookList',
    component: BookList
  },
   {
    path: '/book/:id',
    name: 'BookDetail', 
    component: BookDetail
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
