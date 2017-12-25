// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueYandexMetrika from 'vue-yandex-metrika';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import App from './App';
import router from './router';

// let randomColor = 0;
// while (randomColor.toString(16) < '555555' || randomColor.toString(16) > 'c0c0c0') {
//     console.log('меняем');
//     randomColor = Math.random().toString(16).substr(-6);
// }
document.documentElement.style.setProperty('--main-color', `#${Math.random().toString(16).substr(-6)}`);

Vue.use(ElementUI);
Vue.use(VueYandexMetrika, {
    id: 47116071,
    router,
    env: process.env.NODE_ENV
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

