/* eslint-disable */

const tokenTypes = {
    WS: /^[ \t\r\n]+/,
    ID: /^[a-zA-Z]+/,
    INTEGER: /^-?[0-9]+/,
    OPEN_PAREN: /^\(/,
    CLOSE_PAREN: /^\)/,
    COMPARE_OP: /^([><]=?|==)/,
    AND_OP: /^&&/,
    OR_OP: /^\|\|/
};

export default function parseExpression(s) {
    function tokenizeExpression(s) {
        const tokens = [];
        let foundToken;
        do {
            foundToken = false;

            for (const type in tokenTypes) {
                const match = tokenTypes[type].exec(s);
                if (match) {
                    if (type !== 'WS')
                        tokens.push({
                            type,
                            text: match[0]
                        });
                    s = s.substr(match[0].length);
                    foundToken = true;
                    break;
                }
            }
        } while (s.length !== 0 && foundToken);
        return tokens;
    }

    const tokens = tokenizeExpression(s);
    let i = 0;

    function parseJustToken(type) {
        const token = tokens[i++];
        if (token === undefined || (type !== undefined && token.type !== type)) {
            i -= 1;
            return null;
        }
        return token;
    }

    function parseCompare() {
        const iOld = i;

        const leftOp = parseAtomic();
        if (leftOp === null) {
            i = iOld;
            return null;
        }

        const op = parseJustToken('COMPARE_OP');
        if (op === null) {
            i = iOld;
            return parseAtomic();
        }

        const rightOp = parseAtomic();
        if (rightOp === null) {
            i = iOld;
            return null;
        }

        return {
            kind: 'compare',
            op: op.text,
            left: leftOp,
            right: rightOp
        };
    }

    function parseAnd() {
        const iOld = i;

        const leftOp = parseCompare();
        if (leftOp === null) {
            i = iOld;
            return null;
        }

        if (!parseJustToken('AND_OP')) {
            i = iOld;
            return parseCompare();
        }

        const rightOp = parseCompare();
        if (rightOp === null) {
            i = iOld;
            return null;
        }

        return {
            kind: 'logic',
            op: 'and',
            left: leftOp,
            right: rightOp
        };
    }

    function parseExpression() {
        const iOld = i;

        const leftOp = parseAnd();
        if (leftOp === null) {
            i = iOld;
            return null;
        }
        const op = parseJustToken('OR_OP');
        if (op === null) {
            i = iOld;
            return parseAnd();
        }
        const rightOp = parseAnd();
        if (rightOp === null) {
            i = iOld;
            return null;
        }
        return {
            kind: 'logic',
            op: 'or',
            left: leftOp,
            right: rightOp
        };
    }

    function parseAtomic() {
        const iOld = i;

        const tok = parseJustToken();
        if (tok === null)
            return null;

        if (tok.type === 'INTEGER')
            return {
                kind: 'atomicInt',
                value: parseInt(tok.text)
            };
        else if (tok.type === 'ID')
            return {
                kind: 'atomicId',
                value: tok.text
            };
        else if (tok.type === 'OPEN_PAREN') {
            const expression = parseExpression();
            if (expression === null || !parseJustToken('CLOSE_PAREN')) {
                i = iOld;
                return null;
            }
            return expression;
        }
        return null;
    }

    if (tokens.length === 0)
        return { emptyExpression: true };
    return parseExpression();
}
