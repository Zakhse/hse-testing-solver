<template>
    <nav id="navigation_root">
        <span class="navigation-item brand-title">
            TestingSolver
        </span>
        <nav-lnk class="navigation-item" text="Автомат" route-name="StateMachine"></nav-lnk>
        <nav-lnk class="navigation-item" text="Доменное тестирование" route-name="DomenTesting"></nav-lnk>
        <nav-lnk class="navigation-item" text="Грамматика" route-name="Grammar"></nav-lnk>
        <!--<nav-lnk class="navigation-item" text="Ветвления" route-name="Branches"></nav-lnk>-->
        <!--<nav-lnk class="navigation-item" text="Грамматика" route-name="Regex"></nav-lnk>-->
    </nav>
</template>
<style lang="scss" scoped>
    @import '../assets/vars';

    #navigation_root {
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: stretch;
        background-color: $main-color;

        .navigation-item {
            display: flex;
            flex-shrink: 1;
            flex-basis: 10%;
            align-items: center;
            padding-left: 5px;
            padding-right: 5px;
            height: 3em;
            @media (max-width: 450px) {
                font-size: 0.7em;
            }
            &.brand-title {
                font-weight: bold;
                border-bottom: 3px solid $main-color;
            }
        }
    }
</style>
<script>
import NavigationLink from './NavigationLink';

export default {
    name: 'Navigation',
    components: {
        'nav-lnk': NavigationLink
    }
};
</script>
