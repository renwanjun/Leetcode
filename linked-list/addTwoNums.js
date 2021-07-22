/**
 * Definition for singly-linked list.

 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var head = new ListNode(),
    prev = null,
    next = head;
  while (l1 && l2) {
    // !temp.next && (temp.next = new ListNode());
    // 判断是不是第一次
    let value = l1.val + l2.val + next.val,
      nextVal = 0;
    value >= 10 && ((value = value - 10), (nextVal = 1));
    next.val = value;
    next.next = new ListNode(nextVal);
    prev = next;
    next = next.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  var left = l1 || l2;
  if (left) {
    while (left) {
      //   let value = next.val + left.val;
      let value = next.val + left.val,
        nextVal = 0;
      value >= 10 && ((value = value - 10), (nextVal = 1));
      next.val = value;
      next.next = new ListNode(nextVal);
      prev = next;
      next = next.next;
      left = left.next;
    }
  }
  next && next.val == 0 && (prev.next = null);
  //   if(next.val==0)prev.next = left;
  return head;
};

// 测试

function test() {
  var arrl1 = [2, 4, 3],
    arrl2 = [5, 6, 4];
  function toList(arr) {
    let head = new ListNode();
    arr.reduce(function (node, val, index, sor) {
      let temp = index == sor.length - 1 ? null : new ListNode();
      node.val = val;
      node.next = temp;
      return temp;
    }, head);
    return head;
  }
  var l1 = toList(arrl1),
    l2 = toList(arrl2);
  var sum = addTwoNumbers(l1, l2);
  console.log(sum);
}
test();
module.exports = addTwoNumbers;
