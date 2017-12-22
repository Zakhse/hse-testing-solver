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

    function go(stimulus, index, path) {
        const endpoint = stateMachineGraph[index][stimulus].endpoint;
        if (!reachedNodes.has(endpoint)) {
            const newPath = `${path}${stimulus}`;
            reachedNodes.add(endpoint);
            result.push(newPath);
            bfsQueue.enqueue({ index: endpoint, path: newPath });
        }
    }

    while (result.length < stateMachineGraph.length && !bfsQueue.isEmpty()) {
        const { index: currentIndex, path: currentPath } = bfsQueue.dequeue();
        go('a', currentIndex, currentPath);
        go('b', currentIndex, currentPath);
    }

    return result;
}

export {
    computeReactionSequencesTable,
    findDeterminingSequences,
    computeCharacterizingSetTable,
    findCharacterizingSets,
    findCoveringSet
};
