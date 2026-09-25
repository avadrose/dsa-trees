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
    if (!this.root) return 0;

    let queue = [[this.root, 1]];

    while (queue.length) {
      let [node, depth] = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }

      if (node.left) {
        queue.push([node.left, depth + 1]);
      }

      if (node.right) {
        queue.push([node.right, depth + 1]);
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function findDepth(node) {
      if (!node) return 0;

      return 1 + Math.max(
        findDepth(node.left),
        findDepth(node.right)
      );
    }

    return findDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;

    let max = -Infinity;

    function helper(node) {
      if (!node) return 0;

      let left = Math.max(0, helper(node.left));
      let right = Math.max(0, helper(node.right));

      max = Math.max(
        max,
        node.val + left + right
      );

      return node.val + Math.max(left, right);
    }

    helper(this.root);

    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let next = null;
    let stack = [this.root];

    while (stack.length) {
      let node = stack.pop();

      if (
        node.val > lowerBound &&
        (next === null || node.val < next)
      ) {
        next = node.val;
      }

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }

    return next;
  }

  /** Further study! */

  areCousins(node1, node2) {

  }

  static serialize() {

  }

  static deserialize() {

  }

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };