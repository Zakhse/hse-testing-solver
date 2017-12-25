<template>
    <div id="footer_root">
        <img id="coolyamin" src="../assets/images/deal.png">
        <span>
            Разрабатывали:
            <template v-for="(developer, i) in developers">
                <a :href="`https://vk.com/${developer.vkId}`">{{developer.name}}</a>
                <template v-if="i !== developers.length - 1">, </template>
            </template>
            <br>
            Помогали: <template v-for="(tester, i) in testers">
                <a :href="`https://vk.com/${tester.vkId}`">{{tester.name}}</a>
                <template v-if="i !== testers.length - 1">, </template>
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
        font-weight: 100;
        line-height: 1.7em;
        @media (max-width: 750px) {
            font-size: 1em;
        }
        @media (max-width: 450px) {
            font-size: 0.9em;
        }

        a {
            color: white;
            transition-property: color;
            transition-duration: 0.5s;

            &:hover {
                color: rgba(255, 255, 255, 0.7);
                transition-property: color;
                transition-duration: 0.5s;
            }
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
            developers: [{
                name: 'Екатерина',
                vkId: 'one_step_cl0ser'
            }, {
                name: 'Илья',
                vkId: 'isgulkov'
            }, {
                name: 'Данил',
                vkId: 'heckvik'
            }, {
                name: 'Сергей',
                vkId: 'zakhse'
            }],
            testers: [{
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
