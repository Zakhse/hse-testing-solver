<template>
    <div id="footer_root">
        <span>
            Благодарности:
            <template v-for="(collaborator, i) in collaborators">
                <a :href="`https://vk.com/${collaborator.vkId}`">{{collaborator.name}}</a>
                <template v-if="i !== collaborators.length - 1">, </template>
            </template>
            <!--<a href="https://vk.com/one_step_cl0ser">Екатерина</a>, <a href="https://vk.com/zakhse">Сергей</a>-->
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
    name: 'Footer',
    data() {
        return {
            collaborators: [{
                name: 'Екатерина',
                vkId: 'one_step_cl0ser'
            }, {
                name: 'Илья',
                vkId: 'isgulkov'
            }, {
                name: 'Сергей',
                vkId: 'zakhse'
            }]
        };
    }
};
</script>
