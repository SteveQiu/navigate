import Vue from 'vue';
import AppComponent from './core/ Application.vue';

new Vue({
    render: h => h(AppComponent)
}).$mount('#app')