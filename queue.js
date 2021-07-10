class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	enqueue(value) {
		const newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const last = this.last;
			last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
	dequeue() {
		if (this.length === 0) return false;
		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			const first = this.first;
			const nodeAfter = first.next;
			this.first = nodeAfter;
			first.next = null;
			// remove first item
		}
		this.length--;
		return this;
	}
}
