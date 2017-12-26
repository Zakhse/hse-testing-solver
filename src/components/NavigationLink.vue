<template>
    <span class="navigation_link"
          :class="isActiveClass"
          @click="go">
        <span style="text-align: center; margin: auto;">
            {{text}}
        </span>
    </span>
</template>

<style lang="scss" scoped>
    @import '../assets/vars';

    .navigation_link {
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        border-bottom: 3px solid $main-color;

        &.is-active, &:hover {
            color: white !important;
            border-bottom-color: white;
        }
    }
</style>

<script>
export default {
    name: 'NavigationLink',
    props: {
        routeName: {
            type: String,
            required: true
        },
        routeParams: {
            type: Object,
            default: () => ({})
        },
        text: {
            type: String,
            required: true
        }
    },
    computed: {
        toObj() {
            return { name: this.routeName, params: this.routeParams };
        },
        isActiveClass() {
            return { 'is-active': this.$route.name.indexOf(this.routeName) === 0 };
        }
    },
    methods: {
        go() {
            this.$router.push(this.toObj);
        }
    }
};
</script>
