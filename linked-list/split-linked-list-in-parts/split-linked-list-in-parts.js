//  https://leetcode.com/problems/split-linked-list-in-parts    (61.0%)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    function getLengthList(){
        let node = head;
        let cnt = 0
        while(node){
            cnt++;
            node = node.next;    
        }

        return cnt
    }

    let len = getLengthList();
    const result = [];
    let node = head;

    while(node || k){
        if(!node) {
            result.push(null)
            k--;
            continue;
        }

        const limit = Math.ceil(len/k);
        let tmpHead = node;

        let cnt = 0;
        while(cnt < limit - 1 && node){
            node = node.next;
            cnt++;
            len--;
        }

        const tmp = node.next
        node.next = null
        node = tmp

        result.push(tmpHead)
        len--;
        k--
    }

    return result
};