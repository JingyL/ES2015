/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }


   /** push(val): add new value to end of list. */

   push(val) {
    let newNode = new Node(val);

    if (this.head === null){
        this.head = newNode;
    }
    if (this.tail !== null){
        this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
    }
    if (this.head !== null) {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let head = this.head;
    for (let i = 0; i < idx; i++){
        head = head.next;
    }
    return head.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx === 0) {
        if (this.length === 1){
            this.head.val = val;
            this.tail.val = val;
        }else if (this.length > 1){
            this.head.val = val;
        }
    }
    if (idx > 0) {
        let head = this.head;
        if (idx < this.length - 1) {
            for (let i = 0; i < idx; i++){
                head = head.next;
            }
            head.val = val;
        }
        if (idx === this.length - 1){
            this.tail.val = val;
        }
    }
  }


  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let head = this.head;
    if (idx === 0) {
        if (this.length === 0) {
            this.head= new Node(val);
            this.tail = this.head;
        }else if (this.length > 0){
            this.head= new Node(val);
            this.head.next = head;
        }
        this.length += 1;
    }else{
        let nextNode;
        for (let i = 0; i < idx - 1; i++){
            head = head.next;
            nextNode = head.next;
        }
        head.next = new Node(val);
        head.next.next = nextNode;
        if (idx === this.length){
            this.tail = head.next;
        }
        this.length += 1;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length) {
        throw new Error();
    }
    if (this.length === 0){
        throw new Error();
    }
    if (idx === 0){
        if (this.length === 1){
            let removeItem = this.head;
            this.head = null;
            this.tail = null;
            this.length -= 1;
            return removeItem.val;
        }else{
            let removeItem = this.head;
            this.head = this.head.next;
            this.length -= 1;
            return removeItem.val;
        }
    }
    if (idx > 0) {
        let head = this.head;
        if (idx < this.length - 1) {
            for (let i = 0; i < idx - 1; i++){
                head = head.next;
            }
            let removeItem = head.next;
            head.next = head.next.next;
            this.length -= 1;
            return removeItem.val;
        }
        if(idx === this.length - 1){
            for (let i = 0; i < idx - 1; i++){
                head = head.next;
            }
            let removeItem = head.next;
            this.tail = head;
            this.length -= 1;
            return removeItem.val;

        }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let head = this.head;
    let count = 0;
    let result = 0;
    if (head === null){
        return 0;
    }
    while (head !== null) {
        count += 1;
        result += head.val;
        head = head.next;
    }
    return result /count;
  }

//   /** push(val): add new value to end of list. */

//   push(val) {
//     let newNode = new Node(val);

//     if (this.head === null){
//         this.head = newNode;
//     }
//     if (this.tail !== null){
//         this.tail.next = newNode;
//     }
//     this.tail = newNode;
//     this.length += 1;
//   }

//   /** unshift(val): add new value to start of list. */

//   unshift(val) {
//     let newNode = new Node(val);
//     if (this.head === null) {
//         this.head = newNode;
//         this.tail = newNode;
//     }
//     if (this.head !== null) {
//         newNode.next = this.head;
//         this.head = newNode;
//     }
//     this.length += 1;
//   }

//   /** pop(): return & remove last item. */

//   pop() {
//     return this.removeAt(this.length - 1);
//   }

//   /** shift(): return & remove first item. */

//   shift() {
//     return this.removeAt(0);
//   }

//   /** getAt(idx): get val at idx. */

//   getAt(idx) {
//     let head = this.head;
//     for(let i = 0; i < idx; i ++) {
//         if(head != null) {
//             head = head.next;
//         }
//         else {
//             throw Error();
//         }
//     }
//     return head.val;
//   }

//   /** setAt(idx, val): set val at idx to val */

//   setAt(idx, val) {
//     let head = this.head;
//     for(let i = 0; i < idx; i ++) {
//         head = head.next;
//     }
//     head.val = val;
//   }

//   /** insertAt(idx, val): add node w/val before idx. */

//   insertAt(idx, val) {
//     let pre = new Node(0);
//     pre.next = this.head;
//     for(let i = 0; i < idx; i ++) {
//         pre = pre.next;
//     }
//     let nxt = pre.next;
//     pre.next = new Node(val);
//     pre.next.next = nxt;
//     this.length += 1;
//     if (nxt == null) {
//         this.tail = pre.next
//     }
//     if (idx === 0) {
//         this.head = pre.next;
//     }
//   }

//   /** removeAt(idx): return & remove item at idx, */

//   removeAt(idx) {
//     if (idx === 0) {
//         if (idx === this.length - 1) {
//             let val = this.head.val;
//             this.head = null;
//             this.tail = null;
//             this.length -= 1;
//             return val;
//         }
//         let val = this.head.val;
//         this.head = this.head.next;
//         this.length -= 1;
//         return val;
//     }

//     let head = this.head;
//     for(let i = 0; i < idx - 1; i ++) {
//         head = head.next;
//     }
//     let val = head.next.val;
//     if (head.next === this.tail) {
//         this.tail = head;
//     }
//     head.next = head.next.next;
//     this.length -= 1;
//     return val;
//   }

//   /** average(): return an average of all values in the list */

//   average() {
//     if (this.head === null) {
//         return 0;
//     }
//     let head = this.head;
//     let sum = 0;
//     let count = 0;
//     while (head != null) {
//         sum += head.val;
//         count += 1;
//         head = head.next;
//     }
//     return sum / count;
//   }
}

module.exports = LinkedList;
