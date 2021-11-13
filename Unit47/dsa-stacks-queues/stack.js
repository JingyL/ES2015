/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newN = new Node(val);
    if (this.size === 0){
        this.first = newN;
        this.last = newN;
        this.size += 1;
        return;
    }
    let first = this.first;
    this.first = newN;
    this.first.next = first;
    this.size += 1;
    return;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0 ){
        throw new Error;
    }
    let first = this.first;
    this.first = first.next
    this.size -= 1;
    return first.val;

  }


  popList() {
    if (this.size === 0 ){
        throw new Error;
    }
    this._list.head = this._list.head.next;
    this._list.size -= 1;
    this.first = this._list.head;
    this.size = this._list.size;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0
  }
}

module.exports = Stack;
