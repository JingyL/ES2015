/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root == null){
        return 0;
    }
    let res = 0;
    let stack = [this.root];
    while (stack.length){
        let node = stack.shift();
        if (node.children) {
            for (let child of node.children){
                stack.push(child);
            }
        }
        res += node.val
    }
    return res
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root == null){
        return 0
    }
    let count = 0;
    let stack = [this.root];
    while (stack.length){
        let node = stack.shift();
        if (node.children) {
            for (let child of node.children){
                stack.push(child);
            }
        }
        if (node.val % 2 == 0){
            count += 1
        }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root == null){
        return 0
    }
    let count = 0;
    let stack = [this.root];
    while (stack.length){
        let node = stack.shift();
        if (node.children) {
            for (let child of node.children){
                stack.push(child);
            }
        }
        if (node.val > lowerBound){
            count += 1
        }
    }
    return count
  }
}

module.exports = { Tree, TreeNode };
