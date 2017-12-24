import Queue from 'queue-fifo';

function printDirections(stateMachineGraph) {
    stateMachineGraph.forEach((direction, index) => {
        Object.keys(direction).forEach(stimulus => {
            console.log(`${index} === ${stimulus}/${direction[stimulus].reaction} ===> ${direction[stimulus].endpoint}`);
        });
        console.log('---');
    });
}

function computeReactionSequencesTable(stateMachineGraph) {
    function computeReactionSequences(stateMachineGraph, stimulusSequence) {
        function computeReactionSequence(stateMachineGraph, nodeIndex, stimulusSequence) {
            let res = '';
            while (stimulusSequence !== '') {
                const step = stateMachineGraph[nodeIndex][stimulusSequence[0]];
                res += step.reaction;
                nodeIndex = step.endpoint;
                stimulusSequence = stimulusSequence.substring(1);
            }
            return res;
        }

        return stateMachineGraph.map((el, index) =>
            computeReactionSequence(stateMachineGraph, index, stimulusSequence));
    }

    function generateStimulusSequences(maxLength) {
        const stimulusSequencesArr = [];

        function addStimuluses(stimulusSequence) {
            stimulusSequencesArr.push(stimulusSequence);
            if (stimulusSequence.length >= maxLength)
                return;
            addStimuluses(`${stimulusSequence}a`);
            addStimuluses(`${stimulusSequence}b`);
        }

        addStimuluses('a');
        addStimuluses('b');
        return stimulusSequencesArr.sort((a, b) => {
            if (a.length > b.length)
                return 1;
            if (a.length < b.length)
                return -1;
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        });
    }

    const stimulusSequences = generateStimulusSequences(stateMachineGraph.length);
    const res = {};
    stimulusSequences.forEach(stimulusSequence => {
        res[stimulusSequence] = computeReactionSequences(stateMachineGraph, stimulusSequence);
    });
    return res;
}

function findDeterminingSequences(reactionSequencesTable) {
    return Object.keys(reactionSequencesTable)
        .filter(stimulusSequence =>
            new Set(reactionSequencesTable[stimulusSequence]).size === reactionSequencesTable[stimulusSequence].length);
}

function computeCharacterizingSetTable(reactionSequencesTable) {
    const stimulusSequences = Object.keys(reactionSequencesTable);
    const res = new Map();

    for (let i = 0; i < stimulusSequences.length; i++)
        for (let j = i + 1; j < stimulusSequences.length; j++) {
            const stimulusSequenceA = stimulusSequences[i];
            const stimulusSequenceB = stimulusSequences[j];
            const reactionSequenceA = reactionSequencesTable[stimulusSequenceA];
            const reactionSequenceB = reactionSequencesTable[stimulusSequenceB];
            res.set([stimulusSequenceA, stimulusSequenceB],
                reactionSequenceA.map((el, index) => el + reactionSequenceB[index]));
        }

    return res;
}

function findCharacterizingSets(characterizingSetTable) {
    function getSequencesSets(characterizingSetTable) {
        return Array.from((characterizingSetTable.keys())).sort((combA, combB) => {
            const a1 = combA[0];
            const a2 = combA[1];
            const b1 = combB[0];
            const b2 = combB[1];

            const minA = Math.min(a1.length, a2.length);
            const minB = Math.min(b1.length, b2.length);
            const maxA = Math.max(a1.length, a2.length);
            const maxB = Math.max(b1.length, b2.length);

            if (maxA > maxB)
                return 1;
            if (maxA < maxB)
                return -1;
            if (minA > minB)
                return 1;
            if (minA < minB)
                return -1;
            if (a1 > b1)
                return 1;
            if (a1 < b1)
                return -1;
            if (a2 > b2)
                return 1;
            if (a2 < b2)
                return -1;
            return 0;
        });
    }

    return getSequencesSets(characterizingSetTable).filter(sequencesSet =>
        new Set(characterizingSetTable.get(sequencesSet)).size === characterizingSetTable.get(sequencesSet).length);
}

function findCoveringSet(stateMachineGraph) {
    const reachedNodes = new Set([0]);
    const result = ['ε'];
    const bfsQueue = new Queue();
    bfsQueue.enqueue({ index: 0, path: '' });
    const routes = {};

    function go(stimulus, index, path) {
        const endpoint = stateMachineGraph[index][stimulus].endpoint;
        if (!reachedNodes.has(endpoint)) {
            const newPath = `${path}${stimulus}`;
            reachedNodes.add(endpoint);
            result.push(newPath);
            routes[endpoint] = newPath;
            bfsQueue.enqueue({ index: endpoint, path: newPath });
        }
    }

    while (result.length < stateMachineGraph.length && !bfsQueue.isEmpty()) {
        const { index: currentIndex, path: currentPath } = bfsQueue.dequeue();
        go('a', currentIndex, currentPath);
        go('b', currentIndex, currentPath);
    }

    // console.log(routes);

    return { coveringSet: result, routes };
}

/* Example:
 * {
 * 0: ['b', 'aa'],
 * 1: ['aa'],
 * 2: ['aa'],
 * 3: ['b']
 * }
 */
function findIdentificationSets(reactionSequencesTable, characterizingSetTable, characterizingSet) {
    function countInArray(el, arr) {
        let counter = 0;
        let i = arr.length;
        while (i--)
            if (arr[i] === el)
                counter++;
        return counter;
    }

    if (!characterizingSet || characterizingSet.length !== 2)
        return [];
    const reactionsFor1Seq = reactionSequencesTable[characterizingSet[0]];
    const reactionsFor2Seq = reactionSequencesTable[characterizingSet[1]];
    const reactionsForSet = characterizingSetTable.get(characterizingSet);

    if (!reactionsFor1Seq || !reactionsFor1Seq || !reactionsForSet)
        return [];
    console.log('reactions', reactionsForSet, reactionsFor1Seq, reactionsFor2Seq);

    let i = reactionsForSet.length;
    const res = Array(i);
    while (i--)
        if (countInArray(reactionsFor1Seq[i], reactionsFor1Seq) === 1)
            res[i] = [characterizingSet[0]];
        else if (countInArray(reactionsFor2Seq[i], reactionsFor2Seq) === 1)
            res[i] = [characterizingSet[1]];
        else
            res[i] = characterizingSet;
    return res;
}

function findWtests(coveringSet, stimuluses, characterizingSets) {
    const res = [];

    for (let i = 0; i < coveringSet.length; ++i)
        for (let j = 0; j < stimuluses.length; ++j)
            for (let k = 0; k < characterizingSets.length; ++k)
                res.push(`R${coveringSet[i] === 'ε' ? '' : coveringSet[i]}${stimuluses[j]}${characterizingSets[k]}`);

    return res;
}

function findWpTests(stateMachineGraph, coveringSet, characterizingSets, identificationSets, routes) {
    let res = [];
    const coveredDirections = new Set();

    function getCovered() { // возвращает покрытые покрывающим множеством переходы
        for (let i = 1; i < coveringSet.length; ++i) {
            const currentPath = coveringSet[i];
            let currentNode = 0;
            for (let j = 0; j < currentPath.length; ++j) {
                const currentBranch = currentPath[j];
                const currentDirection = currentNode.toString() + currentBranch;
                if (!coveredDirections.has(currentDirection))
                    coveredDirections.add(currentDirection);

                currentNode = stateMachineGraph[currentNode][currentBranch].endpoint;
            }
        }
    }

    function go(direction, startpoint, endpoint, stimulus) { // если переход не покрыт, покрывает и добавляет для него тест
        if (!coveredDirections.has(direction)) {
            coveredDirections.add(direction);
            res = res.concat(identificationSets[endpoint].map(set => `R${routes[startpoint]}${stimulus}${set}`));
        }
    }

    coveredDirections.add(getCovered());

    for (let i = 0; i < coveringSet.length; ++i) // делаем первый шаг алгоритма RCW
        for (let j = 0; j < characterizingSets.length; ++j)
            res.push(`R${coveringSet[i] === 'ε' ? '' : coveringSet[i]}${characterizingSets[j]}`);

    for (let i = 0; i < stateMachineGraph.length; ++i) { // делаем второй шаг алгоритма RCiAiWi
        const nextDirectionA = `${i.toString()}a`;
        const nextDirectionB = `${i.toString()}b`;
        const [endpointA, endpointB] = [stateMachineGraph[i]['a'].endpoint, stateMachineGraph[i]['b'].endpoint];

        go(nextDirectionA, i, endpointA, 'a');
        go(nextDirectionB, i, endpointB, 'b');
    }

    return res;
}

export {
    computeReactionSequencesTable,
    findDeterminingSequences,
    computeCharacterizingSetTable,
    findCharacterizingSets,
    findCoveringSet,
    findIdentificationSets,
    findWtests,
    findWpTests
};
