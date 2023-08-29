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
[[0, 2], [1, 3], [0, 7]]
set previous time
set longest time
set longest key
iterate through array
subtract previous time from total time
compare that to longest time
if longer, set longest key and longest time
return longest key
 */


/*
 * Complete the 'slowestKey' function below.
 *
 * The function is expected to return a CHARACTER.
 * The function accepts 2D_INTEGER_ARRAY keyTimes as parameter.
 */

function slowestKey(keyTimes) {
    let prevTime = 0;
    let longestTime = 0;
    let longestKey = "";
    keyTimes.forEach((set) => {
        let currentTime = set[1] - prevTime;
        prevTime += currentTime;
        if (currentTime > longestTime) {
            longestTime = currentTime;
            longestKey = String.fromCharCode(set[0] + 97)
        }
    })
    return longestKey
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const keyTimesRows = parseInt(readLine().trim(), 10);

    const keyTimesColumns = parseInt(readLine().trim(), 10);

    let keyTimes = Array(keyTimesRows);

    for (let i = 0; i < keyTimesRows; i++) {
        keyTimes[i] = readLine().replace(/\s+$/g, '').split(' ').map(keyTimesTemp => parseInt(keyTimesTemp, 10));
    }

    const result = slowestKey(keyTimes);

    ws.write(result + '\n');

    ws.end();
}

console.log(slowestKey([[0, 2], [1, 3], [0, 7]]))