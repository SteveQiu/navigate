import Vue from 'vue';
import AppComponent from './core/application.vue';

new Vue({
    render: render => render(AppComponent)
}).$mount('#app');