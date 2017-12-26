<template>
    <div id="regex_root">
        <div id="regex-input">
            <div class="title">
                <b>1.</b> Введите правую сторону правила (после знака <span class="highlight">::=</span>)
            </div>
            <el-input placeholder="(A)? B (C0|C1|C2) (D)* (E0|E1|E2) F (G0|G1)" v-model="regexInput"></el-input>
            <div class="title">
                <b>2.</b> Выберите, какой алгоритм использовать (новый вычисляет минимальные наборы тестов, это лучше, в
                первую очередь используем его, но может не заработать):
            </div>
            <el-switch
                v-model="mode"
                active-value="new"
                inactive-value="old"
                active-text="Новый алгоритм"
                inactive-text="Старый алгоритм">
            </el-switch>
        </div>
        <div id="regex-result">
            <div class="title">
                <b>3.</b> Результат:
            </div>
            <table id="regex-result_table" cellspacing="0" border bordercolor="black" v-if="parsedReges.length">
                <tr>
                    <th>#</th>
                    <th v-for="n in parsedReges.length">{{n}}</th>
                </tr>
                <tr v-for="(word, i) in coverResult">
                    <td align="center">{{i+1}}</td>
                    <td v-for="letter in word" align="center">{{letter}}</td>
                </tr>
            </table>
            <div class="invalid-regex" v-else>
                Выражение не распознано
            </div>
            <div class="result-info" v-if="mode === 'new'">
                <span v-if="newCover.numUncoveredPairs > 0" class="error">
                    Не покрыто {{newCover.numUncoveredPairs}} пар (из {{newCover.numTotalPairs}}). Воспользуйтесь старым алгоритмом!
                </span>
                <span v-else>
                    Все пары ({{newCover.numTotalPairs}}) покрыты, всё в порядке
                </span>
            </div>
        </div>
        <div>
            <div class="title">
                <b>4.</b> Выкрикнуть на всю аудиторию «ПИ — шарага». Чем громче выкрикните, тем больше ПИ — шарага.
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
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            .el-switch {
                align-self: center;
                margin-left: auto;
                margin-right: auto;
            }
            .el-input {
                font-size: 1.2em;
            }
        }
        #regex-result {
            .invalid-regex {
                color: red;
            }
            .result-info {
                .error {
                    color: red;
                }
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
import { findVariantVectorsThatCoverAllPairs } from '../assets/js/Regex/NewAnalazeGrammar';

export default {
    name: 'Regex',
    data() {
        return {
            regexInput: '(A)? B (C0|C1|C2) (D)* (E0|E1|E2) F (G0|G1)',
            mode: 'new'
        };
    },
    computed: {
        parsedReges() {
            return parseExpression(this.regexInput);
        },
        newCover() {
            return findVariantVectorsThatCoverAllPairs(this.parsedReges);
        },
        coverResult() {
            if (this.mode === 'new')
                return this.newCover.coveringSet;
            return findVariantsThatCoverAllPairs(this.parsedReges).map(vId => getVariantByd(this.parsedReges, vId));
        }
        // },
        // coveringWords() {
        //     return findVariantVectorsThatCoverAllPairs(this.parsedReges).map(vId => getVariantByd(this.parsedReges, vId));
        // }
    }
};
</script>
