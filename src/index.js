import Vue from 'vue';
import AppComponent from './core/Application.vue';

new Vue({
    render: render => render(AppComponent)
}).$mount('#app');