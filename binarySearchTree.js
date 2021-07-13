class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (!this.root) return (this.root = newNode);

		let current = this.root;
		while (true) {
			if (value < current.value) {
				if (!current.left) return (current.left = newNode);
				current = current.left;
			}
			if (value > current.value) {
				if (!current.right) return (current.right = newNode);
				current = current.right;
			}
		}
	}
	find(value) {
		if (this.root.value === value) return true;

		let current = this.root;
		let found = false;

		while (!found && current !== null) {
			if (value > current.value) {
				current = current.right;
			} else if (value < current.value) {
				current = current.left;
			} else {
				found = current;
			}
		}
		if (!found) return -1;
		if (found) return true;
	}

	breadthSearch() {
		let node;
		const data = [];
		const queue = [this.root];

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	depthSearchPreorder() {
		const visited = [];
		let current = this.root;

		const traverse = (node) => {
			visited.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(current);
		return visited;
	}
	depthSearchInOrder() {
		const visited = [];
		let current = this.root;

		const traverse = (node) => {
			if (node.left) traverse(node.left);
			visited.push(node.value);
			if (node.right) traverse(node.right);
		};
		traverse(current);
		return visited;
	}
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(20);

console.log(tree.depthSearchInOrder());

/*
         10
     6          11
 4      7    9     20
node = this.root	node = 6
data = []			data = [10]
queue = [10]		queue = []
tempNode = 10	   tempNode = null;

*/
