import Vue from 'vue';
import Router from 'vue-router';
import StateMachine from '../components/StateMachine';
import Branches from '../components/Branches';
import Regex from '../components/Regex';
import DomenTesting from '../components/DomenTesting';
import Grammar from '../components/Grammar';

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
            path: '/domentesting',
            name: 'DomenTesting',
            component: DomenTesting
        },
        {
            path: '/grammar',
            name: 'Grammar',
            component: Grammar
        },
        {
            path: '/branches',
            name: 'Branches',
            component: Branches
        },
        {
            path: '/regex',
            name: 'Regex',
            component: Regex
        }
    ]
});
