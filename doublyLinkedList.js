class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const nodeBefore = this.tail.prev;
			nodeBefore.next = null;
			this.tail = nodeBefore;
		}
		this.length--;
		return this;
	}
	shift() {
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const nodeAfter = this.head.next;
			nodeAfter.prev = null;
			this.head = nodeAfter;
		}
		this.length--;
		return this;
	}
	unshift(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			const currentHead = this.head;
			this.head = newNode;
			newNode.next = currentHead;
			currentHead.prev = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return this.head;
		let foundItem = null;
		if (index <= this.length / 2) {
			let counter = 0;
			foundItem = this.head;
			while (counter < index) {
				foundItem = foundItem.next;
				counter++;
			}
		} else {
			let counter = this.length - 1;
			foundItem = this.tail;
			while (counter > index) {
				foundItem = foundItem.prev;
				counter--;
			}
		}
		return foundItem;
	}
	set(index, value) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) {
			this.head = value;
		} else {
			const foundItem = this.get(index);
			foundItem.value = value;
		}
		return this;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return false;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();
		const foundItem = this.get(index);
		const nodeBefore = this.get(index - 1);
		const nodeAfter = this.get(index + 1);
		nodeBefore.next = nodeAfter;
		nodeAfter.prev = nodeBefore;
		foundItem.next = null;
		foundItem.prev = null;

		this.length--;
		if (this.length === 0) {
			this.tail = null;
			this.head = null;
		}
		return this;
	}
	insert(index, value) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return this.unshift(value);
		if (index === this.length - 1) return this.push(value);
		const newNode = new Node(value);
		const current = this.get(index);
		const nodeBefore = this.get(index - 1);
		nodeBefore.next = newNode;
		newNode.prev = nodeBefore;
		current.prev = nodeBefore;

		this.length++;
		return this;
	}
	reverse() {}
}

const doublyList = new DoublyLinkedList();
doublyList.push("jack");
doublyList.push("ika");
doublyList.push("nini");

// <- jack -> <- ika <- -> nini ->
