<template>
    <div id="regex_root">
        <div id="regex-input">
            <div class="title">
                1. Введите правую сторону правила (после знака <span class="highlight">::=</span>)
            </div>
            <el-input placeholder="(A)? B (C0|C1|C2) (D)* (E0|E1|E2) F (G0|G1)" v-model="regexInput"></el-input>
        </div>
        <div id="regex-result">
            <div class="title">
                2. Результат:
            </div>
            <table id="regex-result_table" cellspacing="0" border bordercolor="black" v-if="parsedReges.length">
                <tr>
                    <th>#</th>
                    <th v-for="n in parsedReges.length">{{n}}</th>
                </tr>
                <tr v-for="(word, i) in coveringWords">
                    <td align="center">{{i+1}}</td>
                    <td v-for="letter in word" align="center">{{letter}}</td>
                </tr>
            </table>
            <div class="invalid-regex" v-else>
                Выражение не распознано
            </div>
        </div>
        <div>
            <div class="title">
                3. Выкрикнуть на всю аудиторию «ПИ — шарага». Чем громче выкрикните, тем больше ПИ — шарага.
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #regex_root {
        margin-left: 20%;
        margin-right: 20%;
        @media (max-width: 750px) {
            margin-left: 10%;
            margin-right: 10%;
        }
        @media (max-width: 450px) {
            margin-left: 10px;
            margin-right: 10px;
        }
        .title {
            margin-top: 10px;
            margin-bottom: 6px;
        }
        .highlight {
            background-color: lightyellow;
            font-family: monospace;
            font-size: 1.2em;
        }
        #regex-input {
            .el-input {
                font-size: 1.2em;
            }
        }
        #regex-result {
            .invalid-regex {
                color: red;
            }
            #regex-result_table {
                width: 100%;
                td {
                    text-align: center;
                }
            }
        }
    }
</style>
<style lang="scss">
    #regex-input {
        .el-input > input {
            font-family: monospace;
        }
    }
</style>
<script>
import parseExpression from '../assets/js/Regex/ParseGrammar';
import { getVariantByd, findVariantsThatCoverAllPairs } from '../assets/js/Regex/AnalazeGrammar';

export default {
    name: 'Regex',
    data() {
        return {
            regexInput: '(A)? B (C0|C1|C2) (D)* (E0|E1|E2) F (G0|G1)'
        };
    },
    computed: {
        parsedReges() {
            return parseExpression(this.regexInput);
        },
        coveringWords() {
            return findVariantsThatCoverAllPairs(this.parsedReges).map(vId => getVariantByd(this.parsedReges, vId));
        }
    }
};
</script>
