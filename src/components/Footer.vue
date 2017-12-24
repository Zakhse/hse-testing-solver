<template>
    <div id="footer_root">
        <img id="coolyamin" src="../assets/images/deal.png">
        <span>
            Благодарности:
            <br>
            <template v-for="(collaborator, i) in collaborators">
                <a :href="`https://vk.com/${collaborator.vkId}`">{{collaborator.name}}</a>
                <template v-if="i !== collaborators.length - 1">, </template>
            </template>
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
        font-size: 1.2em;
        line-height: 1.7em;
        @media (max-width: 750px) {
            font-size: 1em;
        }
        @media (max-width: 450px) {
            font-size: 0.9em;
        }
    }

    #coolyamin {
        margin: 10px 30px 10px 0;
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
            }, {
                name: 'Саша',
                vkId: 'id33861656'
            }, {
                name: 'Рома',
                vkId: 'romikabi'
            }, {
                name: 'Кэр',
                vkId: 'heykarolina'
            }]
        };
    }
};
</script>
