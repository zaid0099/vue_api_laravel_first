import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '@/views/Register';
import Login from '@/views/Login';
import Profile from '@/views/Profile';
import store from '../store';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            guest: true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            guest: true,
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            secure: true,
        }
    },
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.secure)) {

        if (store.state.loggedIn) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }

    } else if (to.matched.some(record => record.meta.guest)) {

        if (store.state.loggedIn) {
            next({
                path: '/profile',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }

    } else {
        next() // make sure to always call next()!
    }
})

export default router;