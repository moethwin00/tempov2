/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import routes from './routes/routes';
const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.filter('upText', function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter('myDate', function(created) {
    return moment(created).format('MMMM Do YYYY')
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
