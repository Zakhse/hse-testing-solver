function getPairs(variantId) {
    const pairs = [];
    for (let i = 0; i < variantId.length; i++)
        for (let j = i + 1; j < variantId.length; j++)
            pairs.push((1000 * i) + (100 * variantId[i]) + (10 * j) + variantId[j]);
    return pairs;
}

function countNewPairs(knownPairs, variantId) {
    const variantPairs = getPairs(variantId);
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
            result += getLocalVariantIds(prod[i]).length * getLocalVariantIds(prod[j]).length;
    return result;
}

function appendToAll(penis, enlargement) {
    const result = [];
    penis.forEach(s => {
        enlargement.forEach(t => {
            result.push(s.concat([t]));
        });
    });
    return result;
}

function getLocalVariantIds(subProd) {
    if (typeof subProd === 'string')
        return [0];
    else if (subProd.hasOwnProperty('?'))
        return [0, 1];
    else if (subProd.hasOwnProperty('*') || subProd.hasOwnProperty('+'))
        return [0, 1, 2];
    else if (subProd.hasOwnProperty('|')) {
        const varIds = [];
        for (let i = 0; i < subProd['|'].length; i++)
            varIds.push(i);
        return varIds;
    }
    return '';
}

function getAllVariantIds(prod) {
    let allVariants = [[]];
    prod.forEach(subProd => {
        const varIds = getLocalVariantIds(subProd);
        allVariants = appendToAll(allVariants, varIds);
    });
    return allVariants;
}

function getSubProdVariantById(subProd, i) {
    if (subProd.hasOwnProperty('?'))
        return i === 1 ? subProd['?'] : '';
    else if (subProd.hasOwnProperty('*'))
        return subProd['*'].repeat(i);
    else if (subProd.hasOwnProperty('+'))
        return subProd['+'].repeat(i + 1);
    else if (typeof subProd === 'string')
        return subProd;
    else if (subProd.hasOwnProperty('|'))
        return subProd['|'][i];
    return '';
}

function getVariantByd(prod, variantId) {
    return variantId.map((id, i) => getSubProdVariantById(prod[i], id));
}

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

function findVariantsThatCoverAllPairs(prod) {
    const allVariantIds = getAllVariantIds(prod);
    const selectedVarIds = [];
    const numTotalPairs = countTotalPairs(prod);
    const knownPairs = {};
    while (Object.keys(knownPairs).length < numTotalPairs) {
        const iBest = indexMaxByKey(allVariantIds, varId => countNewPairs(knownPairs, varId));
        getPairs(allVariantIds[iBest]).forEach(p => {
            knownPairs[p] = true;
        });
        selectedVarIds.push(allVariantIds[iBest]);
        allVariantIds.splice(iBest, 1);
    }
    return selectedVarIds;
}

export {
    findVariantsThatCoverAllPairs,
    getVariantByd
};
