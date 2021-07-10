class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			const oldNode = this.tail;
			oldNode.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head || this.length === 0) return false;
		let temp = this.head;
		let prev = temp;
		while (temp.next) {
			prev = temp;
			temp = temp.next;
		}
		this.tail = prev;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
	shift() {
		if (!this.head) return false;
		const temp = this.head;
		this.head = temp.next;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			const oldHead = this.head;
			this.head = newNode;
			newNode.next = oldHead;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index > this.length || index < 0) return false;
		let count = 0;
		let temp = this.head;
		while (count < index) {
			temp = temp.next;
			count++;
		}
		return temp;
	}
	set(index, value) {
		if (index > this.length || index < 0) return false;
		const tempNode = this.get(index);
		tempNode.value = value;
		return this;
	}
	insert(index, value) {
		const newNode = new Node(value);
		if (index > this.length || index < 0) return false;
		if (index === 0) return this.unshift(value);
		const nodeAfter = this.get(index);
		const nodeBefore = this.get(index - 1);
		newNode.next = nodeAfter;
		nodeBefore.next = newNode;
		this.length++;
		return this;
	}
	remove(index) {
		if (index > this.length || index < 0) return false;
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();
		const nodeToRemove = this.get(index);
		const nodeAfter = this.get(index + 1);
		const nodeBefore = this.get(index - 1);
		nodeBefore.next = nodeAfter;
		this.length--;
		return this;
	}
	reverse() {
		let count = 0;
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let prev = null;
		let next;
		while (count < this.length) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
			count++;
		}
		return this;
	}
}

const list = new SinglyLinkedList();

list.push("ika");
list.push("nini");
list.push("mari");
list.push("gio");
list.push("bio");
list.reverse();

// console.log(list);

/*
	ika		nini	gio		mari	lasha
	node	next	prev
*/
