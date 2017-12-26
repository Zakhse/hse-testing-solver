<template>
    <div id="branches_root">
        <div id="if-input">
            <div class="title">
                <b>1.</b> Вводим выражения из ифов
            </div>
            <div v-for="n in ifInnerInputs.length" class="input-wrapper">
                <el-input :class="{error: n - 1 === errorIndex}"
                          placeholder="x <= 3 && y < 0 || z >= 5"
                          v-model="ifInnerInputs[n-1]"
                ></el-input>
                <span v-if="n - 1 === errorIndex" class="error-message">
                    Синтаксически неправильное (или неподдерживаемое) выражение
                </span>
            </div>
        </div>
        <div id="big-error-message" v-if="errorMessage">
            {{errorMessage}}
        </div>
        <div id="if-result">
            <div class="title">
                <b>2.</b> Переписываем в табличку результат:
            </div>
            <table id="result-table" cellspacing="0" border bordercolor="black">
                <tr class="heading">
                    <th colspan="4">Количество элементарных условий:</th>
                    <th id="num_simple_exprs">{{simpleExpressions.length}}</th>
                    <th colspan="3" rowspan="2">Ветвления</th>
                    <th rowspan="3" style="width: 100px">Полный набор комбинаций по MC/DC</th>
                </tr>
                <tr class="heading">
                    <th rowspan="2"></th>
                    <th colspan="4">Элементарные условия</th>
                </tr>
                <tr class="heading">
                    <th class="equally_narrow expression_display" v-for="i in 4">{{simplExpressionsToPrint[i-1]}}</th>
                    <th class="equally_narrow">I</th>
                    <th class="equally_narrow">II</th>
                    <th class="equally_narrow">III</th>
                </tr>
                <tr v-for="(row, i) in rows">
                    <td class="row-number">{{i+1}}</td>
                    <td class="equally_narrow" v-for="n in 7">{{row[n-1]}}</td>
                    <td>{{ixSelected(i) ? '*' : ''}}</td>
                </tr>
            </table>
            <div class="title">
                <b>3.</b> Если ты телочка, позвони мне ( ͡° ͜ʖ ͡°)
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #branches_root {
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
        #if-input {
            .input-wrapper {
                .el-input {
                    font-size: 1.2em;
                }
                .error-message {
                    color: red;
                    font-size: 0.8em;
                }
                margin-bottom: 10px;
            }
        }

        #big-error-message {
            color: red;
            font-size: 0.8em;
        }
        #if-result {
            #result-table {
                width: 100%;
                text-align: center;
                @media (max-width: 800px) {
                    font-size: 0.9em;
                }
                .row-number {
                    width: 1.6em;
                }
                .equally_narrow {
                    width: 12%;
                }
            }
            margin-bottom: 20px;
        }
    }
</style>
<style lang="scss">
    #if-input {
        .el-input {
            &.error {
                > input {
                    background-color: #db847b;
                }
            }
            > input {
                font-family: monospace;
            }
        }
    }
</style>
<script>
import parseExpression from '../assets/js/Branches/ParseLogic';
import {
    extractSimpleExpressions,
    findCombination,
    evaluateExpr,
    getCoveringSetMCDC,
    printExpr
} from '../assets/js/Branches/AnalazeLogic';

export default {
    name: 'Branches',
    data() {
        return {
            ifInnerInputs: ['x > 3 && z < 5 || x <= 3 && y > 0', 'x <= 3 && y < 0 || z >= 5', ''],
            indexOfUndefinedSets: [],
            coveringSet: null
            // errorMessage: ''
        };
    },
    computed: {
        parsedExpressions() {
            return this.ifInnerInputs.map(input => parseExpression(input) || 'error').filter(expr => !expr.emptyExpression);
        },
        simpleAndBigExpressions() {
            return extractSimpleExpressions(this.parsedExpressions);
        },
        simpleExpressions() {
            return (this.simpleAndBigExpressions && this.simpleAndBigExpressions.allSimpleExprs) || [];
        },
        simplExpressionsToPrint() {
            return this.simpleExpressions.map(expr => printExpr(expr));
        },
        bigExpressions() {
            return (this.simpleAndBigExpressions && this.simpleAndBigExpressions.bigExprs) || [];
        },
        /* eslint-disable */
        rows() {
            this.indexOfUndefinedSets = [];
            const evalCombinations = [];
            const rows = [];
            const evalResults = Array(this.bigExpressions.length).fill(null).map(el => []);
            for (let i = 0; i < 16; i++) {
                const newRow = [];
                const values = [];
                let iTmp = i;
                this.simpleExpressions.forEach(expr => {
                    values.push((iTmp & 8) !== 0);
                    newRow.push((iTmp & 8) / 8);
                    iTmp <<= 1;
                });
                const comb = findCombination(this.simpleExpressions, values);
                this.bigExpressions.forEach((expr, i) => {
                    const evalResult = evaluateExpr(expr, this.simpleExpressions, values);
                    newRow.push(evalResult ? 1 : 0);
                    evalResults[i].push(evalResult);
                });
                newRow.push(...Array((3 - this.bigExpressions.length) + 1).fill(null).map(el => ''));
                if (comb === null)
                    this.indexOfUndefinedSets.push(i);
                evalCombinations.push(comb);
                rows.push(newRow);
            }
            this.coveringSet = getCoveringSetMCDC(evalCombinations, evalResults);
            return rows;
        },
        /* eslint-enable */
        errorIndex() {
            return this.parsedExpressions.indexOf('error');
        },
        errorMessage() {
            if (this.simpleExpressions.length !== 4)
                return `Простейших выражений получилось ${this.simpleExpressions.length},
                а по числу столбцов в таблице должно быть только четыре. Либо условие было введено неправильно,
                либо я хз как такое решать`;
            return '';
        }
    },
    methods: {
        ixSelected(i) {
            return this.coveringSet && this.coveringSet.ixSelected[i];
        }
    }
};
</script>
