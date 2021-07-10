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
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
tree.insert(20);
tree.insert(9);
tree.insert(-2);
tree.insert(7);

console.log(tree.find(20));
/*
         10
    -2          11
        7    9     20

*/
