import Vue from 'vue';
import app from './core/application.vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/home.vue';

Vue.use(VueRouter);// router 0
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router: new VueRouter({
        routes :[
            {
                path: '/', 
                name: 'home',
                component: HomeComponent,
            },
        ]
    }),
    
    // render: render => render(application),

    template: '<app/>',
    components: {
        app,
    }
})  