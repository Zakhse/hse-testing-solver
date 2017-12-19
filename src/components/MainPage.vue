<template>
    <div id="main-page_root">
        <div id="graph-input">
            <el-input-number id="nodes-number-input"
                             v-model="nodesNumber"
                             :min="3"
                             :max="6"
            ></el-input-number>
            <table id="graph-input_routes">
                <tr>
                    <th>Начало</th>
                    <th>Стимул</th>
                    <th>Реакция</th>
                    <th>Конец</th>
                </tr>
                <template v-for="nodeNumber in nodesNumber">
                    <tr v-for="stimulus in stimuluses">
                        <td>{{nodeNumber-1}}</td>
                        <td class="uppercase">{{stimulus}}</td>
                        <td>
                            <el-select v-model="stateMachineGraph[nodeNumber-1][stimulus].reaction">
                                <el-option
                                    label="X"
                                    value="x">
                                </el-option>
                                <el-option
                                    label="Y"
                                    value="y">
                                </el-option>
                            </el-select>
                        </td>
                        <td>
                            <el-select v-model="stateMachineGraph[nodeNumber-1][stimulus].endpoint">
                                <el-option v-for="n in nodesNumber" :key="n"
                                           :label="`${n-1}`"
                                           :value="n-1">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                </template>
            </table>
        </div>
        <div id="graph-results">
            <div>
                Различающие последовательности:
                <span v-if="determiningSequences.length">{{formattedDetermingSequences}}</span>
                <span v-else>нет</span>
            </div>
            <div>
                Характеризующие множества:
                <span v-if="characterizingSets.length">{{formattedCharacterizingSets}}</span>
                <span v-else>нет</span>
            </div>
        </div>
    </div>
</template>

<script>
import {
    computeReactionSequencesTable,
    findDeterminingSequence,
    computeCharacterizingSetTable,
    findCharacterizingSets
} from '../assets/StateMachineTesting';


export default {
    name: 'MainPage',
    data() {
        return {
            nodesNumber: 4,
            stateMachineGraph: []
        };
    },
    computed: {
        reactionSequences() {
            return computeReactionSequencesTable(this.stateMachineGraph);
        },
        determiningSequences() {
            return findDeterminingSequence(this.reactionSequences);
        },
        formattedDetermingSequences() {
            return `${this.determiningSequences.join(', ')}`;
        },
        setsSequences() {
            return computeCharacterizingSetTable(this.reactionSequences);
        },
        characterizingSets() {
            return findCharacterizingSets(this.setsSequences);
        },
        formattedCharacterizingSets() {
            return `${this.characterizingSets.map(set => `{${set[0]},${set[1]}}`).join(', ')}`;
        },
        stimuluses() {
            return ['a', 'b'];
        }
    },
    methods: {},
    watch: {
        nodesNumber: {
            handler(newVal) {
                this.stateMachineGraph = Array(newVal).fill(null).map(el => ({
                    'a': { reaction: 'x', endpoint: 0 },
                    'b': { reaction: 'x', endpoint: 0 }
                }));
            },
            immediate: true
        }
    }
};
</script>
<style lang="scss">
    #main-page_root {
        #graph-input_routes {
            .el-select {
                width: 70px;
            }
        }
    }
</style>
<style lang="scss" scoped>
    .uppercase {
        text-transform: uppercase;
    }

    #graph-input_routes {
        text-align: center;
        td, th {
            padding: 3px;
        }
    }
</style>
