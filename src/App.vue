<template>
    <div id="app">
        <navigation></navigation>
        <router-view class="page-content"/>
        <thanks-footer></thanks-footer>
    </div>
</template>

<script>
import Navigation from './components/Navigation';
import ThanksFooter from './components/Footer';

export default {
    components: {
        ThanksFooter,
        Navigation
    },
    name: 'app'
};
</script>
<style lang="scss">
    @import './assets/main';

    #app {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }
</style>
