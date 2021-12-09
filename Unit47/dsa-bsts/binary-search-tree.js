class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        if (this.root === null) {
            let r = new Node(val);
            this.root = r
            return new BinarySearchTree(this.root);
        }
        let curr = this.root;
        let newNode = new Node(val);
        while (curr.left || curr.right) {
            if (val < curr.val) {
                if (!curr.left) {
                    curr.left = newNode;
                    return new BinarySearchTree(this.root);
                } else {
                    curr = curr.left;
                }
            } else {
                if (!curr.right) {
                    curr.right = newNode;
                    return new BinarySearchTree(this.root);
                } else {
                    curr = curr.right;
                }
            }
        }

        if (val < curr.val) {
            curr.left = newNode;
        } else {
            let r = new Node(val);
            curr.right = newNode;
        }
        return new BinarySearchTree(this.root);

    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val) {
        if (!this.root) {
            this.root = new Node(val);
            return new BinarySearchTree(this.root);
        }
        let newNode = new Node(val);
        function insertHelper(curr, val) {
            if (val < curr.val) {
                if (curr.left) {
                    insertHelper(curr.left, val)
                }
                else {
                    curr.left = newNode;
                }
            }
            else if (val > curr.val) {
                if (curr.right) {
                    insertHelper(curr.right, val)
                }
                else {
                    curr.right = newNode;
                }
            }
            // function insertHelper(curr, val){
            //     if (!curr){
            //         curr = newNode;
            //     }
            //     if (val < curr.val){
            //             insertHelper(curr.left, val)

            //     }
            //     else if (val > curr.val){
            //             insertHelper(curr.right, val)
            //     }
        }
        insertHelper(this.root, val);
        return new BinarySearchTree(this.root)

    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        if (!this.root) {
            return
        }
        let curr = this.root;
        while (curr) {
            if (val === curr.val) {
                return curr;
            } else if (val < curr.val) {
                if (curr.left) {
                    curr = curr.left;
                } else {
                    return;
                }
            } else if (val > curr.val) {
                if (curr.right) {
                    curr = curr.right;
                } else {
                    return;
                }
            }
        }
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val) {
        function findHelper(node, val) {
            if (!node) {
                return
            }
            if (val === node.val) {
                return node;
            } else if (val < node.val) {
                return findHelper(node.left, val)
            } else if (val > node.val) {
                return findHelper(node.right, val)
            }
        }

        return findHelper(this.root, val)

    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
        if (!this.root) {
            return
        }
        let res = [];
        function traverse(node) {
            res.push(node.val);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right)
            };
        }
        traverse(this.root);
        return res;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
        if (!this.root) {
            return
        }
        let res = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            res.push(node.val);
            if (node.right) {
                traverse(node.right)
            };
        }
        traverse(this.root);
        return res;

    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
        if (!this.root) {
            return
        }
        let res = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right)
            };
            res.push(node.val);
        }
        traverse(this.root);
        return res;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */

    bfs() {
        if (!this.root) {
            return
        }
        let res = [];
        let queue = [this.root];
        while (queue.length > 0) {
            let lvl = [];
            let l = queue.length
            for (let i = 0; i < l; i++) {
                let node = queue.shift();
                res.push(node.val);
                if (node.left) {
                    lvl.push(node.left);
                }
                if (node.right) {
                    lvl.push(node.right);
                }
            }
            queue = lvl;
        }
        return res;

    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */

    remove(val) {
        if (!this.root) {
            return
        }
        function findMin(root) {
            let curr = root;
            while (curr.left) {
                curr = curr.left;
            }
            return curr;
        }
        let res;
        function removeNode(root, val) {
            if (!root) {
                return root;
            }
            if (val < root.val) {
                root.left = removeNode(root.left, val);
            } else if (val > root.val) {
                root.right = removeNode(root.right, val);
            } else {
                if (!root.left) {
                    res = root;
                    let temp = root.right;
                    root = temp;
                    return root;
                }
                if (!root.right) {
                    res = root;
                    let temp = root.left;
                    root = temp;
                    return root;
                }
                res = root;
                let temp = findMin(root.right);
                root.val = temp.val;
                root.right = removeNode(root.right, temp.val);
            }
            return root;
        }
        this.root = removeNode(this.root, val);
        return res;

    }

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */

    isBalanced() {
        function height(node) {
            if (!node) {
                return 0;
            }
            return Math.max(height(node.left), height(node.right)) + 1;
        }
        function helper(node) {
            if (!node) {
                return true;
            }
            return Math.abs(height(node.right) - height(node.left)) <= 1 && helper(node.right) && helper(node.left);
        }
        return helper(this.root);
    }

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */

    findSecondHighest() {
        function maxLeftValue(node) {
            let curr = node;
            while (curr.right) {
                curr = curr.right;
            }
            return curr.val;
        }
        function maxRightValue(node) {
            let pre = node;
            let curr = node.right;
            while (curr.right) {
                curr = curr.right;
                // pre = curr.right;
                pre = pre.right;
            }
            if (!curr.right && curr.left) {
                return maxLeftValue(curr.left);
            }
            if (!curr.left && !curr.right) {
                return pre.val;
                // curr.val;
            }
        }
        if (!this.root) {
            return;
        }
        if (!this.root.left && !this.root.right) {
            return;
        }
        return maxRightValue(this.root);















        //     function maxLeftValue(node){
        //         let curr = node;
        //         while (curr.right) {
        //             curr = curr.right;
        //         };
        //         return curr.val;
        //     }

        //     function maxRightValue(node) {
        //         let pre = node;
        //         let curr = node.right;
        //         while (curr.right) {
        //             curr = curr.right;
        //             pre = pre.right;
        //         }
        //         if (!curr.left) {
        //             return pre.val;
        //         }
        //         else {
        //             return maxLeftValue(curr.left);
        //         }
        //     }
        //     if (!this.root) {
        //         return;
        //     }
        //     if (!this.root.left && !this.root.right) {
        //         return ;
        //     }
        //     else if (!this.root.right) {
        //         return maxLeftValue(this.root.left);
        //     }
        //     else {
        //         return maxRightValue(this.root);
        //     }
    }
}

module.exports = BinarySearchTree;
