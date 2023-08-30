/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;
    let s1Map = {};
    let s2Map = {};

    for (let i = 0; i < 26; i++) {
        s1Map[String.fromCharCode(i + 97)] = 0;
        s2Map[String.fromCharCode(i + 97)] = 0;
    };

    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i]] += 1;
        s2Map[s2[i]] += 1;
    };

    let matches = 0;

    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 97);
        if (s1Map[char] === s2Map[char]) matches += 1;
    };

    for (let i = 0; i < (s2.length - s1.length + 1); i++) {
        if (matches === 26) return "KACHOW"

        let leftChar = s2[i];
        let rightChar = s2[i + s1.length];

        s2Map[rightChar] += 1;
        if (s2Map[rightChar] === s1Map[rightChar]) {
            matches += 1;
        } else if (s2Map[rightChar] + 1 === s1Map[rightChar]) {
            matches -= 1;
        };

        s2Map[leftChar] -= 1;
        if (s2Map[leftChar] === s1Map[leftChar]) {
            matches += 1;
        } else if (s2Map[leftChar] - 1 === s1Map[leftChar]){
            matches -= 1;
        };


    };


    return matches;
};

console.log(checkInclusion("ab", "eidbaooo")); //true
console.log(checkInclusion("ab", "eidboaoo")); //false
console.log(checkInclusion("abc", "bbbca")); //true
