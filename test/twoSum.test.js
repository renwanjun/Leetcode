var should = require("chai").should();
var { twoSum, twoSumUpgrade } = require("../array/twoSum");
describe("TwoSum", function () {
  var nums = [3, 2, 4],
    target = 6,
    result = [1, 2];
  describe("# 暴力解决 时间复杂度O(n2)", function () {
    it("[3,2,4] 6 =>[1,2]", function () {
      twoSum(nums, target).should.to.have.members(result);
    });
  });

  describe("# hash协助解决 时间复杂度O(n)", function () {
    it("[3,2,4] 6 =>[1,2]", function () {
      twoSumUpgrade(nums, target).should.to.have.members(result);
    });
  });
});
