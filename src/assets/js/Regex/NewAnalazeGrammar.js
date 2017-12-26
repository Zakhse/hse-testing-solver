/* eslint-disable */
function getAllVariantVectors(prod) {
    let allVariants = [[]];
    prod.forEach(subProd => {
        const varIds = getLocalVariants(subProd);
        allVariants = appendToAllArrays(allVariants, varIds);
    });
    return allVariants;
}

function appendToAllArrays(penises, enlargements) {
    const result = [];
    penises.forEach(s => {
        enlargements.forEach(t => {
            result.push(s.concat([t]));
        });
    });
    return result;
}

function getLocalVariants(subProd) {
    if (typeof subProd === 'string')
        return [subProd];

    else if (subProd.hasOwnProperty('?'))
        return [''].concat(getLocalVariants(subProd['?']));

    else if (subProd.hasOwnProperty('*')) {
        const variants = {
            '': true
        };

        const sVariants = [''].concat(getLocalVariants(subProd['*']));

        sVariants.forEach(s => {
            sVariants.forEach(t => {
                variants[s + t] = true;
            });
        });

        return Object.keys(variants);
    } else if (subProd.hasOwnProperty('+')) {
        const newVariants = {};

        const pVariants = [''].concat(getLocalVariants(subProd['+']));

        pVariants.forEach(s => {
            pVariants.forEach(t => {
                pVariants.forEach(u => {
                    newVariants[s + t + u] = true;
                });
            });
        });

        delete newVariants[''];

        return Object.keys(newVariants);
    } else if (subProd.hasOwnProperty('|'))
        return subProd['|'];
}

function getExplodedProd(prod) {
    return prod.map(getLocalVariants);
}

function sortInOrderOfNumVarsDesc(explodedProd) {
    const sortedProd = [];
    const oldLocations = {};

    explodedProd = explodedProd.concat([]);

    for (let i = 0; i < explodedProd.length; i++) {
        let iBiggest = null;
        let nBiggest = 0;

        for (let j = 0; j < explodedProd.length; j++) {
            if (explodedProd[j] === null)
                continue;


            if (explodedProd[j].length > nBiggest) {
                nBiggest = explodedProd[j].length;
                iBiggest = j;
            }
        }

        oldLocations[i] = iBiggest;
        sortedProd.push(explodedProd[iBiggest]);
        explodedProd[iBiggest] = null;
    }

    return {
        sortedProd,
        oldLocations
    };
}

function getPairwiseSetForTwo(nVars, mVars) {
    const pairwiseSet = [];
    for (let i = 0; i < nVars; i++)
        for (let j = 0; j < mVars; j++)
            pairwiseSet.push([i, j]);
    return pairwiseSet;
}

const getAllPairsBetweenManyAndOne = function (manyNs, oneN) {
    const allPairs = {};
    manyNs.forEach((particularN, iP) => {
        for (let i = 0; i < particularN; i++)
            for (let j = 0; j < oneN; j++)
                allPairs[`${iP}-${i}/${j}`] = true;
    });
    return allPairs;
};

const getPairsWithParticularTest = function (v, newX) {
    const pairs = {};
    v.forEach((x, i) => {
        pairs[`${i}-${x}/${newX}`] = true;
    });
    return pairs;
};

function getFirstPerm(nVars, mVars) {
    const permutation = [];
    for (let i = 0; i < nVars; i++)
        for (let j = 0; j < mVars; j++)
            permutation.push(i);
    return permutation;
}

function reprPair(x, y) {
    return `${x}/${y}`;
}

function getPairsBetweenParams(nVars, mVars) {
    const pairs = {};
    for (let i = 0; i < nVars; i++)
        for (let j = 0; j < mVars; j++)
            pairs[reprPair(i, j)] = true;
    return pairs;
}

function subtractSets(one, another) {
    const newSet = {};
    one.forEach(x => {
        if (another[x] === undefined)
            newSet[x] = true;
    });
    return newSet;
}

function nextPermutation(perm, nValues) {
    perm[0] += 1;
    for (let i = 0; i < perm.length; i++)
        if (perm[i] === nValues) {
            if (i + 1 === perm.length)
                return false;


            perm[i] = 0;
            perm[i + 1] += 1;
        } else
            break;


    return true;
}

function producePairwiseSetBruteforceIPO(numsOfVariants) {
    if (numsOfVariants.length < 2)
        return []; // no pairs between just one parameter LMAO


    const firstPerm = getFirstPerm(numsOfVariants[0], numsOfVariants[1]);

    const state = {
        numTests: firstPerm.length,
        numsOfVariants,
        permutations: [firstPerm],

        candidateSuitsAll(candidate) {
            for (let iPerm = 0; iPerm < this.permutations.length; iPerm++)
                if (!this.candidateSuitsPerm(iPerm, candidate))
                    return false;


            return true;
        },

        candidateSuitsPerm(iPerm, candidate) {
            const uncoveredPairs =
                getPairsBetweenParams(this.numsOfVariants[iPerm], this.numsOfVariants[this.permutations.length]);

            for (let iTest = 0; iTest < this.numTests; iTest++) {
                const newPair = reprPair(this.permutations[iPerm][iTest], candidate[iTest]);

                if (uncoveredPairs[newPair] !== undefined)
                    delete uncoveredPairs[newPair];
            }

            return Object.keys(uncoveredPairs).length === 0;
        },

        addPermutation(perm) {
            this.permutations.push(perm);
        },

        getTests() {
            const tests = [];

            for (var iTest = 0; iTest < this.numTests; iTest++)
                tests.push(
                    this.permutations.map(perm => {
                        const x = perm[iTest];

                        return x !== -1 ? x : 0;
                    })
                );


            return tests;
        }
    };

    for (let iCurrent = 1; iCurrent < numsOfVariants.length; iCurrent++) {
        const candidatePerm = Array(state.numTests).fill(null).map(() => 0);

        while (!state.candidateSuitsAll(candidatePerm, numsOfVariants[iCurrent]))
            if (!nextPermutation(candidatePerm, numsOfVariants[iCurrent]))
                return state.getTests();

        state.addPermutation(candidatePerm);
    }

    return state.getTests();
}

function findVariantVectorsThatCoverAllPairs(prod) {
    const explodedProd = getExplodedProd(prod);

    const sortResult = sortInOrderOfNumVarsDesc(explodedProd);

    let numVectors = producePairwiseSetBruteforceIPO(sortResult.sortedProd.map(vars => vars.length));

    numVectors = numVectors.map(v => {
        const newV = v.map(() => 0);

        v.forEach((x, i) => {
            newV[sortResult.oldLocations[i]] = x;
        });

        return newV;
    });

    const coveringSetOfWords = numVectors.map(v => v.map((x, i) => explodedProd[i][x]));

    const uncoveredPairs = getAllPairsInProd(explodedProd);

    const numTotalPairs = Object.keys(uncoveredPairs).length;

    getActualPairs(coveringSetOfWords).forEach(pair => {
        uncoveredPairs.splice(uncoveredPairs.indexOf(pair), 1);
    });

    return {
        coveringSet: coveringSetOfWords,
        numTotalPairs,
        numUncoveredPairs: Object.keys(uncoveredPairs).length
    };
};

function indexMaxByKey(arr, f) {
    let iMax = 0;
    let maxKey = f(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        const currentKey = f(arr[i]);

        if (currentKey > maxKey) {
            maxKey = currentKey;
            iMax = i;
        }
    }

    return iMax;
}

function countNewPairs(knownPairs, variantV) {
    const variantPairs = getPairsBetweenParams(variantV);
    let numNewPairs = 0;
    variantPairs.forEach(p => {
        if (knownPairs[p] === undefined)
            numNewPairs += 1;
    });
    return numNewPairs;
}

function countTotalPairs(prod) {
    let result = 0;
    for (let i = 0; i < prod.length; i++)
        for (let j = i + 1; j < prod.length; j++)
            result += getLocalVariants(prod[i]).length * getLocalVariants(prod[j]).length;
    return result;
}

function getActualPairs(supposedPairwiseSet) {
    const pairs = {};
    for (let iTest = 0; iTest < supposedPairwiseSet.length; iTest++)
        for (let i = 0; i < supposedPairwiseSet[iTest].length; i++)
            for (let j = i + 1; j < supposedPairwiseSet[iTest].length; j++)
                pairs[`${i}${supposedPairwiseSet[iTest][i]}/${j}${supposedPairwiseSet[iTest][j]}`] = true;
    return Object.keys(pairs);
}

function getAllPairsInProd(variantV) {
    const pairs = [];

    for (let i = 0; i < variantV.length; i++)
        for (let j = i + 1; j < variantV.length; j++)
            variantV[i].forEach(s => {
                variantV[j].forEach(t => {
                    pairs.push(`${i}${s}/${j}${t}`);
                });
            });


    return pairs;
}

export {
    findVariantVectorsThatCoverAllPairs
    // findVariantsThatCoverAllPairs,
    // getVariantByd
};
