/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    const highestValue = (obj) => {
        let arr = Object.values(obj);
        if (!arr.length) return 0;
        let max = Math.max(...arr);
        return max;
    };

    let leftIndex = 0;
    let rightIndex = 1;
    let result = 1;

    let numbers = { [s[0]]: 1 };
    let char = s[rightIndex];


    while (rightIndex <= s.length) {

        let subLength = s.slice(leftIndex, rightIndex).length;
        let highestNum = highestValue(numbers);

        if (subLength - highestNum <= k) {
            char = s[rightIndex];
            rightIndex += 1;

            if (numbers[char]) {
                numbers[char] += 1;
            } else {
                numbers[char] = 1;
            };

            if (subLength > result) {
                result = subLength
            };

        } else {
            char = s[leftIndex];
            numbers[char] = numbers[char] - 1 || 0;
            leftIndex += 1;
        }

    }

    return result;

};

// console.log(characterReplacement("ABAB", 2));
// console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAA", 0));

