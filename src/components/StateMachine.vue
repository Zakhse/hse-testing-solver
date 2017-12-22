<template>
    <div id="main-page_root">
        <el-button @click="fillGraphDebug">Заполнить граф (отладка)</el-button>
        <div id="graph-input">
            <el-input-number id="nodes-number-input"
                             v-model="nodesNumber"
                             :min="3"
                             :max="MAX_NODES"
            ></el-input-number>
            <div id="invalid-graph" v-if="!usedGraphIsValid">
                Ошибка в ведённых данных
            </div>
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
        <div id="graph-results" v-if="usedGraphIsValid">
            <div>
                <b>Различающие последовательности:</b>
                <span v-if="determiningSequences.length">{{formattedDetermingSequences}}</span>
                <span v-else>нет</span>
            </div>
            <div>
                <b>Характеризующие множества (первые 10):</b>
                <span v-if="characterizingSets.length">{{formattedCharacterizingSets}}</span>
                <span v-else>нет</span>
            </div>
            <div>
                <b>Основное характеризующее множество (тупо самое первое в списке и самое короткое):</b>
                <span v-if="characterizingSets.length">{{formattedMainCharacterizingSet}}</span>
                <span v-else>нет</span>
            </div>
            <div>
                <b>Покрывающее множество:</b>
                <span v-if="coveringSet.length === this.nodesNumber">{{formattedCoveringSet}}</span>
                <span v-else>нет</span>
            </div>
            <div>
                <b>Идентифицирующие множества:</b>
                <table id="identification-sets-table" cellspacing="0" border bordercolor="black">
                    <tr>
                        <th v-for="nodeNumber in nodesNumber">
                            {{nodeNumber-1}}
                        </th>
                    </tr>
                    <tr>
                        <td v-for="nodeNumber in nodesNumber">
                            <template v-if="identificationSets[nodeNumber-1]">
                                {{'{' + identificationSets[nodeNumber-1].join(', ') + '}'}}
                            </template>
                            <template v-else>
                                -
                            </template>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {
    computeReactionSequencesTable,
    findDeterminingSequences,
    computeCharacterizingSetTable,
    findCharacterizingSets,
    findCoveringSet,
    findIdentificationSets
} from '../assets/js/StateMachine/StateMachineTesting';

const MAX_NODES = 6;

export default {
    name: 'StateMachine',
    data() {
        return {
            nodesNumber: 4,
            MAX_NODES,
            stateMachineGraph: Array(MAX_NODES).fill(null).map(el => ({
                'a': { reaction: 'x', endpoint: 0 },
                'b': { reaction: 'x', endpoint: 0 }
            }))
        };
    },
    computed: {
        usedStateMachineGraph() {
            return this.stateMachineGraph.slice(0, this.nodesNumber);
        },
        usedGraphIsValid() {
            return this.usedStateMachineGraph.every(node =>
                ['a', 'b'].every(stimulus => node[stimulus].endpoint < this.nodesNumber));
        },
        reactionSequences() {
            return computeReactionSequencesTable(this.usedStateMachineGraph);
        },
        determiningSequences() {
            return findDeterminingSequences(this.reactionSequences);
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
            return `${this.characterizingSets.slice(0, 10).map(set => `{${set[0]},${set[1]}}`).join(', ')}`;
        },
        formattedMainCharacterizingSet() {
            return `{${this.characterizingSets[0][0]},${this.characterizingSets[0][1]}}`;
        },
        coveringSet() {
            return findCoveringSet(this.usedStateMachineGraph);
        },
        formattedCoveringSet() {
            return `{${this.coveringSet.join(', ')}}`;
            // console.log(this.coveringSet);
            // console.log(Array.prototype.join.call(this.coveringSet, ', '));
            // return Array.prototype.join.call(this.coveringSet, ', ');
        },
        identificationSets() {
            return findIdentificationSets(this.reactionSequences, this.setsSequences, this.characterizingSets[0]);
        },
        stimuluses() {
            return ['a', 'b'];
        }
    },
    methods: {
        fillGraphDebug() {
            this.stateMachineGraph[0]['a'].reaction = 'x';
            this.stateMachineGraph[0]['a'].endpoint = 0;
            this.stateMachineGraph[0]['b'].reaction = 'x';
            this.stateMachineGraph[0]['b'].endpoint = 1;
            this.stateMachineGraph[1]['a'].reaction = 'y';
            this.stateMachineGraph[1]['a'].endpoint = 0;
            this.stateMachineGraph[1]['b'].reaction = 'x';
            this.stateMachineGraph[1]['b'].endpoint = 2;
            this.stateMachineGraph[2]['a'].reaction = 'y';
            this.stateMachineGraph[2]['a'].endpoint = 3;
            this.stateMachineGraph[2]['b'].reaction = 'y';
            this.stateMachineGraph[2]['b'].endpoint = 2;
            this.stateMachineGraph[3]['a'].reaction = 'x';
            this.stateMachineGraph[3]['a'].endpoint = 1;
            this.stateMachineGraph[3]['b'].reaction = 'x';
            this.stateMachineGraph[3]['b'].endpoint = 1;
        }
    }
};
</script>
<style lang="scss">
    #main-page_root {
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

        #invalid-graph {
            color: red;
            font-size: 1.5em;
            font-weight: bold;
        }

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

    #graph-input {
        #graph-input_routes {
            text-align: center;
            td, th {
                padding: 3px;
            }
        }
    }

    #graph-results {
        #identification-sets-table {
            text-align: center;
            td, th {
                padding: 3px;
            }
        }
    }
</style>
