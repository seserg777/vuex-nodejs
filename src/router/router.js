import { createWebHistory, createRouter } from "vue-router";
import Home from './../views/Home.vue';
import Articles from './../modules/articles/components/ArticlesList.vue';
import ProductsList from './../modules/products/components/ProductsList.vue';
import NotFound from './../views/NotFound.vue';
import Product from './../modules/products/components/Product.vue';
import UsersList from './../modules/users/components/UsersList.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/articles',
        name: 'Articles',
        component: Articles
    },
    {
        path: '/products/:id',
        props: true,
        name: 'Product',
        component: Product
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsList
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersList
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    history: createWebHistory(),
    routes,
});

export default router;