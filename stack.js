class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const currentFirst = this.first;
			this.first = newNode;
			newNode.next = currentFirst;
		}
		this.length++;
		return this.length;
	}
	pop() {
		if (this.length === 0) return false;
		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			const currentFirst = this.first;
			this.first = currentFirst.next;
			currentFirst.next = null;
		}
		this.length--;
		return this.length;
	}
}
