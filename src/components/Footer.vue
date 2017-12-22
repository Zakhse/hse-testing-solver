<template>
    <div id="footer_root">
        <span>
            Благодарности: <a href="https://vk.com/one_step_cl0ser">Екатерина</a>, <a href="https://vk.com/zakhse">Сергей</a>
        </span>
    </div>
</template>
<style lang="scss" scoped>
    @import '../assets/vars';

    #footer_root {
        padding: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $main-color;
        min-height: 3em;
        margin-top: auto;
    }
</style>
<script>
export default {
    name: 'Footer'
};
</script>
