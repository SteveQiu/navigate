'use strict';
import Vue from 'vue';
import app from './application.vue';
import route from './route'
import VueRouter from 'vue-router';

Vue.use(VueRouter);// router 0
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router: new VueRouter(route),
    // template: '<app/>',
    // components: {
    //     app,
    // }
    render: render => render(app),
}).$mount('#app')