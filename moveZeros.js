var moveZeroes = function (nums) { // [0,1,0]
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        while (num === 0) {
            for (let j = i; j < nums.length - i; j++) {
                console.log("Hey")
                if (nums[j + 1] !== undefined) {
                    nums[j] = nums[j + 1];
                    num = nums[i]
                }
            };
            console.log(i)
            nums[nums.length - 1] = 0;
        };
    }
    return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 1]));