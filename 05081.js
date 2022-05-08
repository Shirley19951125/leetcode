 function ListNode(val, next) {
	      this.val = (val===undefined ? 0 : val)
	      this.next = (next===undefined ? null : next)
	   }
var removeElements = function(head, val) {
    if (head === null) {
            return head;
        }
        head.next = removeElements(head.next, val);
        return head.val === val ? head.next : head;
};
