
import HomeComponent from './components/home.vue';
import projectsComponent from './components/projects.vue';
import contactComponent from './components/contact.vue';


export default {
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
}