/* eslint-disable */

function SetOfNumbers(xs) {
    this.xs = xs;
}

SetOfNumbers.all = function all(constraint) {
    const newSet = {};
    for (let i = -1000; i <= 1000; i++)
        if (constraint === undefined || constraint(i))
            newSet[i] = true;
    return new SetOfNumbers(newSet);
};

SetOfNumbers.none = function none() {
    return new SetOfNumbers({});
};

SetOfNumbers.fromCompare = function fromCompare(compareOp, x) {
    let constraint;

    if (compareOp === '<')
        constraint = function (y) {
            return y < x;
        };

    else if (compareOp === '<=')
        constraint = function (y) {
            return y <= x;
        };

    else if (compareOp === '>=')
        constraint = function (y) {
            return y >= x;
        };

    else if (compareOp === '>')
        constraint = function (y) {
            return y > x;
        };

    else if (compareOp === '==')
        return {
            x: true
        };

    else
        return undefined;


    return new SetOfNumbers.all(constraint);
};

SetOfNumbers.prototype.clone = function clone() {
    return new SetOfNumbers(Object.assign({}, this.xs));
};

SetOfNumbers.prototype.toString = function toString() {
    if (this.xs.length === 0)
        return '(none)';
    return `(from ${Math.min.apply(null, Object.keys(this.xs))
        } to ${Math.max.apply(null, Object.keys(this.xs))})`;
};

SetOfNumbers.prototype.intersect = function intersect(other) {
    const newSetXs = {};
    for (const x in other.xs)
        if (this.xs.hasOwnProperty(x))
            newSetXs[x] = true;
    return new SetOfNumbers(newSetXs);
};

SetOfNumbers.prototype.union = function union(other) {
    const newSet = this.clone();
    for (const x in other.xs)
        newSet.xs[x] = true;
    return newSet;
};

SetOfNumbers.prototype.subtract = function subtract(other) {
    const newSet = this.clone();
    for (const x in other.xs)
        if (newSet.xs.hasOwnProperty(x))
            delete newSet.xs[x];
    return newSet;
};

SetOfNumbers.prototype.subtractFrom = function subtractFrom(other) {
    return other.subtract(this);
};

SetOfNumbers.prototype.pickAny = function pickAny() {
    for (let i = 0; i <= 1000; i++)
        if (this.xs.hasOwnProperty(i))
            return i;
        else if (this.xs.hasOwnProperty(-i))
            return -i;
    return null;
};

SetOfNumbers.prototype.isEmpty = function isEmpty() {
    return this.xs.length === 0;
};

function oppositeOp(op) {
    return ['<', '>', '<=', '>=', '=='][['>', '<', '>=', '<=', '=='].indexOf(op)];
}

function areSimpleExprsEqual(one, another) {
    if (!one.hasOwnProperty('op') || !another.hasOwnProperty('op'))
        return undefined;
    if (one.op === another.op) {
        if (one.left.value === another.left.value && one.right.value === another.right.value)
            return true;
        else if (one.op === '==')
            return one.left.value === another.right.value && one.right.value === another.left.value;
        return false;
    } else if (one.op === oppositeOp(another.op))
        return one.left.value === another.right.value && one.right.value === another.left.value;
    return undefined;
}

function putIdOnTheLeft(simpleExpr) {
    if (simpleExpr.left.kind === 'atomicInt') {
        const tmp = simpleExpr.left;
        simpleExpr.left = simpleExpr.right;
        simpleExpr.right = tmp;

        simpleExpr.op = oppositeOp(simpleExpr.op);
    }
}

function printExpr(expr) {
    if (expr === undefined)
        return `${undefined}`;


    if (expr.hasOwnProperty('value'))
        return `${expr.value}`;

    else if (expr.hasOwnProperty('left'))
        return `${printExpr(expr.left)} ${expr.op} ${printExpr(expr.right)}`;

    else if (expr.hasOwnProperty('arg'))
        return `!(${printExpr(expr.arg)})`;


    return expr; // TODO: remove
}

function evaluateExpr(expression, simpleExpressions, values) {
    if (expression.kind === 'compare')
        return values[simpleExpressions.findIndex(ex => areSimpleExprsEqual(expression, ex))];

    else if (expression.kind === 'logic') {
        if (expression.hasOwnProperty('arg'))
            return !evaluateExpr(expression.arg, simpleExpressions, values);


        const leftVal = evaluateExpr(expression.left, simpleExpressions, values);
        const rightVal = evaluateExpr(expression.right, simpleExpressions, values);

        if (expression.op === 'and')
            return leftVal && rightVal;

        else if (expression.op === 'or')
            return leftVal || rightVal;
    }
    return undefined;
}

function inverseOp(op) {
    return ['<', '<=', '>=', '>'][['>=', '>', '<', '<='].indexOf(op)];
}

function areSimpleExprsInverse(one, another) {
    putIdOnTheLeft(one);
    putIdOnTheLeft(another);

    return one.op === inverseOp(another.op) && one.left.value === another.left.value && one.right.value === another.right.value;
}

function getSimpleExprsRecursive(expr) {
    if (expr.kind === 'compare')
        return [expr];

    else if (expr.left !== undefined && expr.right !== undefined) {
        const leftExprs = getSimpleExprsRecursive(expr.left);
        const rightExprs = getSimpleExprsRecursive(expr.right);

        return leftExprs.concat(rightExprs);
    }

    return [];
}

function extractSimpleExpressions(parsedExpressions) {
    const allSimpleExprs = [];

    parsedExpressions.forEach(expression => {
        const simpleExprs = getSimpleExprsRecursive(expression);

        simpleExprs.forEach(newSimpleExpr => {
            if (!allSimpleExprs.some(oldSimpleExpr =>
                    (areSimpleExprsEqual(newSimpleExpr, oldSimpleExpr)
                        || areSimpleExprsInverse(newSimpleExpr, oldSimpleExpr))))
                allSimpleExprs.push(newSimpleExpr);
        });
    });

    function substituteAllOccurrencesOnTheLeft(expression, simpleExpressions) {
        if (expression.hasOwnProperty('left')) {
            substituteAllOccurrences(expression.left, simpleExpressions);
            substituteAllOccurrences(expression.right, simpleExpressions);

            if (expression.left.kind === 'compare')
                for (const simpleExpr of simpleExpressions)
                    if (areSimpleExprsEqual(simpleExpr, expression.left)) {
                        expression.left = simpleExpr;

                        break;
                    } else if (areSimpleExprsInverse(simpleExpr, expression.left)) {
                        expression.left = {
                            kind: 'logic',
                            op: 'not',
                            arg: simpleExpr
                        };
                        break;
                    }
        }

        if (expression.hasOwnProperty('arg'))
            substituteAllOccurrences(expression.arg, simpleExpressions);
    }

    function invert(expression) {
        if (expression.kind === 'logic' && expression.hasOwnProperty('left')) {
            invert(expression.left);
            invert(expression.right);

            const tmp = expression.left;
            expression.left = expression.right;
            expression.right = tmp;
        }
    }

    function substituteAllOccurrences(expression, simpleExpressions) {
        substituteAllOccurrencesOnTheLeft(expression, simpleExpressions);
        invert(expression);
        substituteAllOccurrencesOnTheLeft(expression, simpleExpressions);
        invert(expression);
    }

    parsedExpressions.forEach(expression => {
        substituteAllOccurrences(expression, allSimpleExprs);
    });

    return {
        allSimpleExprs,
        bigExprs: parsedExpressions
    };
}

function findCombination(simpleExpressions, values) {
    const constraints = {};

    simpleExpressions.forEach((ex, i) => {
        putIdOnTheLeft(ex);
        if (constraints[ex.left.value] === undefined)
            constraints[ex.left.value] = SetOfNumbers.all();
        const expressionSet = SetOfNumbers.fromCompare(ex.op, ex.right.value);
        constraints[ex.left.value] = constraints[ex.left.value].intersect(
            values[i] ? expressionSet : SetOfNumbers.all().subtract(expressionSet)
        );
    });

    const combination = [];
    Object.keys(constraints).sort().forEach(v => {
        combination.push(constraints[v].pickAny());
    });
    if (combination.indexOf(null) !== -1)
        return null;
    return combination;
}

function intLog2(x) {
    let result = 0;
    while (x >= 2) {
        result += 1;
        x /= 2;
    }
    return result;
}

function getCoveringSetMCDC(combinations, exprValues) {
    const ixSelected = {};
    const pairsNotCovered = [];

    for (let iVar = 0; iVar < intLog2(combinations.length); iVar++) {
        const varBit = 8 >> iVar;

        for (let iExpr = 0; iExpr < exprValues.length; iExpr++) {
            let foundPair = false;

            for (let iComb = 0; iComb < combinations.length; iComb++) {
                const iOtherComb = iComb ^ varBit;
                if (iOtherComb <= iComb)
                    continue;
                if (combinations[iComb] === null || combinations[iOtherComb] === null)
                    continue;
                if (exprValues[iExpr][iComb] !== exprValues[iExpr][iOtherComb]) {
                    ixSelected[iComb] = true;
                    ixSelected[iOtherComb] = true;
                    foundPair = true;
                    break;
                }
            }
            if (!foundPair)
                pairsNotCovered.push({
                    iVar,
                    iExpr
                });
        }
    }

    return {
        ixSelected,
        pairsNotCovered
    };
}

export {
    extractSimpleExpressions,
    findCombination,
    evaluateExpr,
    getCoveringSetMCDC,
    printExpr
};
