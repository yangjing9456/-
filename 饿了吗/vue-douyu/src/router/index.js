import Vue from 'vue'
import Router from 'vue-router'
import Hot from '../pages/Hot';
import My from "../pages/My";
import Find from "../pages/Find";
import Details from "../pages/Details";


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hot',
            component: Hot
        },
        {
            path: '/find',
            name: 'Find',
            component: Find
        },
        {
            path: '/my',
            name: 'My',
            component: My
        },
        {
            path: '/details/:shoppingid',
            name: 'Details',
            component: Details
        },

    ]
})