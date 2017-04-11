// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FontAwesome from "./assets/Font-Awesome/css/font-awesome.css"
import VueResource from 'vue-resource';
Vue.use(VueResource);

import jQuery from "jquery"
Vue.prototype.jQuery = jQuery
Vue.prototype.$ = jQuery

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})