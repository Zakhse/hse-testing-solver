import Vue from 'vue';
import Router from 'vue-router';
import StateMachine from '../components/StateMachine';
import Branches from '../components/Branches';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: { name: 'StateMachine' }
        },
        {
            path: '/statemachine',
            name: 'StateMachine',
            component: StateMachine
        },
        {
            path: '/branches',
            name: 'Branches',
            component: Branches
        }
    ]
});