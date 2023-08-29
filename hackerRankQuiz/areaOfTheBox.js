'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'numberOfWays' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY queries as parameter.
 */

function numberOfWays(queries) {
    let a = queries[0];
    let b = queries[1];
    let sum = 0;
    while (a !== 0 && b !== 0) {
        sum += (a*b)
        a -= 1;
        b -= 1;
    }
    return sum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const queriesRows = parseInt(readLine().trim(), 10);

    const queriesColumns = parseInt(readLine().trim(), 10);

    let queries = Array(queriesRows);

    for (let i = 0; i < queriesRows; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = numberOfWays(queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

console.log(numberOfWays([6, 5]))


