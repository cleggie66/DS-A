var findDisappearedNumbers = function (nums) {
    const sortedArr = nums.sort((a, b) => a - b);
    const result = [];
    let firstNum = sortedArr[0];
    let lastNum = sortedArr[sortedArr.length - 1];
    for (let i = firstNum + 1; i < lastNum; i++) {
        if (!sortedArr.includes(i)) result.push(i);
    }
    return result;
};