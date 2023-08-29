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
    }

//    for (let i = 0; i < s1.length; i++) {

//    }

    return s2Map
};

console.log(checkInclusion("ab", "eidbaooo")); //true
console.log(checkInclusion("ab", "eidboaoo")); //false
console.log(checkInclusion("abc", "bbbca")); //true
