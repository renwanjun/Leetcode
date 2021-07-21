/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum == target) return [i, j];
    }
  }
};

function twoSumUpgrade(nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (map.has(x)) {
      return [i, map.get(x)];
    } else {
      map.set(nums[i], i);
    }
  }
}
console.log(twoSumUpgrade([3, 2, 4], 6));
module.exports = {
  twoSum,
  twoSumUpgrade,
};
