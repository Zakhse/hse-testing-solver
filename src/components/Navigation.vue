<template>
    <nav id="navigation_root">
        <span class="navigation-item brand-title">
            TestingSolver
        </span>
        <nav-lnk class="navigation-item" text="Автомат" route-name="StateMachine"></nav-lnk>
        <nav-lnk class="navigation-item" text="Ветвления" route-name="Branches"></nav-lnk>
        <nav-lnk class="navigation-item" text="Грамматика" route-name="Regex"></nav-lnk>
    </nav>
</template>
<style lang="scss" scoped>
    @import '../assets/vars';

    #navigation_root {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        background-color: $main-color;
        height: 3em;

        .navigation-item {
            display: flex;
            align-items: center;
            padding-left: 5px;
            padding-right: 5px;

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
