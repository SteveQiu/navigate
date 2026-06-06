
import HomeComponent from './components/home.vue';
import projectsComponent from './components/projects.vue';
import contactComponent from './components/contact.vue';
import NotFound from './components/NotFound.vue';

export default {
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
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
        {
            path: '*',
            name: 'notfound',
            component: NotFound,
        },
    ]
}