const TERM_SYMBOL = /[a-zA-Z0-9]/;

function parseExpression(s) {
    s = s.replace(' ', '').replace('\t', '');
    const prod = [];
    let currentTerm = '';
    const alternativesStack = [];

    try {
        for (let i = 0; i < s.length; i++)
            if (s[i] === '(') {
                if (currentTerm !== '') {
                    if (alternativesStack.length !== 0)
                        alternativesStack[alternativesStack.length - 1].push(currentTerm);
                    else
                        prod.push(currentTerm);
                    currentTerm = '';
                }
                alternativesStack.push([]);
            } else if (TERM_SYMBOL.test(s[i]))
                currentTerm += s[i];

            else if (s[i] === '|') {
                if (currentTerm !== '') {
                    alternativesStack[alternativesStack.length - 1].push(currentTerm);
                    currentTerm = '';
                }
            } else if (s[i] === ')') {
                if (alternativesStack.length !== 0) {
                    if (currentTerm !== '') {
                        alternativesStack[alternativesStack.length - 1].push(currentTerm);
                        currentTerm = '';
                    }
                    const alt = alternativesStack.pop();
                    if (alt.length > 1)
                        prod.push({
                            '|': alt
                        });
                    else
                        prod.push(alt[0]);
                }
            } else if ('*+?'.indexOf(s[i]) !== -1) {
                const lastItem = prod.pop();
                const modifiedItem = {};
                modifiedItem[s[i]] = lastItem;
                prod.push(modifiedItem);
            }
        if (currentTerm !== '')
            prod.push(currentTerm);
    } catch (err) {
        return [];
    }
    return prod;
}

export default parseExpression;
