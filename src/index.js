import Vue from 'vue';
import app from './application.vue';
import VueRouter from 'vue-router';
import HomeComponent from './components/home.vue';
import projectsComponent from './components/projects.vue';
import contactComponent from './components/contact.vue';

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
            {
                path: '/projects', 
                name: 'projects',
                component: projectsComponent,
            },
            {
                path: '/contact', 
                name: 'contact',
                component: contactComponent,
            },
        ]
    }),
    
    // render: render => render(application),

    template: '<app/>',
    components: {
        app,
    }
})  