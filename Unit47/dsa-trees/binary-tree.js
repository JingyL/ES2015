/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root == null){
        return 0
    }
    let lvl = 1;
    let queue = [this.root];
    while (queue.length){
        // why do we need to define l first?
        // let l = queue.length
        for (let i = 0; i < queue.length; i++){
            let node = queue.shift();
            if (node.right || node.left){
                if (node.right){
                    queue.push(node.right);
                }
                if (node.left){
                    queue.push(node.left);
                }
            }
            else{
                return lvl;
            }
        }
        lvl += 1;
    }
    return lvl;

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root == null){
        return 0
    }
    let lvl = 0
    let queue = [this.root]
    while (queue.length){
        // let l = queue.length;
        for (let i = 0; i < queue.length; i++){
            let node = queue.shift();
            if (node.right){
                queue.push(node.right);
            }
            if (node.left){
                queue.push(node.left);
            }
        }
        lvl += 1;
    }
    return lvl

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
      if (this.root == null){
          return 0
      }
      let res = 0;
      function maxsumhelper(node){
          if (node === null){
              return 0
          }
          let leftsum = maxsumhelper(node.left);
          let rightsum = maxsumhelper(node.right);
          res = Math.max(res, node.val + leftsum + rightsum);
          return Math.max(0, node.val + leftsum, node.val + rightsum);
        }
        maxsumhelper(this.root);
        return res;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root == null){
        return null;
    }
    let res = null;
    let queue = [this.root];
    while (queue.length > 0){
        const l = queue.length;
        for(let i = 0; i < l; i++){
            let node = queue.shift();
            if (node.right){
                queue.push(node.right);
            }
            if (node.left){
                queue.push(node.left);
            }
            if (node.val > lowerBound){
                if (res !== null) {
                    if (node.val < res){
                        res = node.val;
                    }
                }
                else{
                    res = node.val;
                }
            }
        }
    }
    return res;
  }

  

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

   static serialize(tree) {
    let res = [];
    function serializehelper(node){
        if (node){
            res.push(node.val);
            serializehelper(node.left);
            serializehelper(node.right);
        }else{
            res.push('#');
        }
    }
    serializehelper(tree.root);
    let str = res.join('');
    return str;
  }

//   static serialize(tree) {
//     function serializehelper(node){
//         if (!node) {
//             return "";
//         }
//         let s = "";
//         let r = node.val.toString();
//         s += r;
//         s += "(";
//         s += serializehelper(node.left);
//         s += ")";
//         if (node.right){
//             s += "(";
//             s += serializehelper(node.right);
//             s += ")";   
//         }
//         return s;
//     }
//     return serializehelper(tree.root);
//   }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */
   static deserialize(stringTree) {
    let arr = stringTree.split('');
    if (arr.length === 0){
        return
    }
    function deserializehelper(){
        let currVal;
        if (arr.length){
            currVal = arr.shift();
        }
        let node = new BinaryTreeNode(parseInt(currVal));
        if (currVal === '#'){
            return null;
        }
        node.left = deserializehelper();
        node.right = deserializehelper();
        return node;
  }

  let root = deserializehelper();

  return new BinaryTree(root);
}
//   static deserialize(stringTree) {
//     if (stringTree === ''){
//         this.root = null;
//         return this.root;
//     }
//     function deserializehelper(string, i){
//         if (i === string.length) {
//             return;
//         }
//         let j = i;
//         while (i < string.length && string.charAt(i) != '(' && string.charAt(i) != ')') {
//             i += 1;
//         }
//         let node = null;
//         let val = parseInt(string.substring(j, i));
//         if (val) {
//             node = new BinaryTreeNode(val);
//         }
//         if (string.charAt(i) === '(') {
//             i += 1;
//             node.left = deserializehelper(string, i);
//             i += 1;
//             if (string.charAt(i) === '(') {
//                 console.log("***" + i)
//                 i += 1;
//                 node.right = deserializehelper(string, i);
//                 i += 1;
//                 console.log("///" +i)
//             }
//         }
//         return node;
//     }
//     return new BinaryTree(deserializehelper(stringTree, 0));
//   }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
