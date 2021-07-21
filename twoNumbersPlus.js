/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result=new ListNode(null),p=new ListNode(null),head=false
    while (l1 || l2) {
        const sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + (p.val ? 1 : 0)
        // 取模
        const exceed = parseInt(sum / 10)
        l1 = l1 && l1.next
        l2 = l2 && l2.next
        node=new ListNode(sum%10)
        // 判断是否需要进位
        if (l1||l2||exceed) {
            p=new ListNode(exceed%10)
            node.next=p
        }
        if(!head)head=node
    }
    return head
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function numberToLinkedList(number) {
    let arr = (number + '').split('')
    let next = null
    for (let i = 0, length = arr.length; i < length; i++) {
        let node = new ListNode(Number(arr[i]))
        node.next = next
        next = node
        // if (i == length - 1) head = node
    }
    return next;
}

let l1 = numberToLinkedList(111), l2 = numberToLinkedList(465)
let result = addTwoNumbers(l1, l2)
console.log(result.val) 