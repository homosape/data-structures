class MaxBinaryHeap {
	constructor() {
		this.values = [50, 20, 25, 11, 12, 8];
	}
	insert(val) {
		this.values.push(val);

		let idx = this.values.length - 1;
		const element = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (element <= parent) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			let idx = 0;
			const element = this.values[0];

			while (true) {
				let leftChildIdx = Math.floor(idx * 2 + 1);
				let rightChildIdx = Math.floor(idx * 2 + 2);
				let leftChild, rightChild;
				let swap = null;

				if (leftChildIdx < this.values.length) {
					leftChild = this.values[leftChildIdx];
					if (leftChild > this.values[idx]) swap = leftChildIdx;
				}

				if (rightChildIdx < this.values.length) {
					rightChild = this.values[rightChildIdx];
					if (
						(swap === null && rightChild > this.values[idx]) ||
						(swap !== null && rightChild > leftChild)
					) {
						swap = rightChildIdx;
					}
				}

				if (swap === null) break;
				this.values[idx] = this.values[swap];
				this.values[swap] = element;
				idx = swap;
			}
		}
		return max;
	}
}

const heap = new MaxBinaryHeap();

heap.insert(100);
heap.insert(9);

heap.extractMax();
heap.extractMax();
console.log(heap.values);

/* 
[20,15,6,8,9]
insert(25);

const valIndex = 5;
const parentIndex = 2;
temp = null;

while (25 > 6) {
    temp = 6;
    6 = 25;
    25 = 6;
}

[20,15,25,8,9,25]


*/

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		const node = new Node(value, priority);
		this.values.push(node);

		let idx = this.values.length - 1;
		const element = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (element.priority <= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	dequeue() {
		const max = this.values[0];
		const end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			let idx = 0;
			const element = this.values[0];

			while (true) {
				let leftChildIdx = Math.floor(idx * 2 + 1);
				let rightChildIdx = Math.floor(idx * 2 + 2);
				let leftChild, rightChild;
				let swap = null;

				if (leftChildIdx < this.values.length) {
					leftChild = this.values[leftChildIdx];
					if (leftChild.priority > this.values[idx].priority) swap = leftChildIdx;
				}

				if (rightChildIdx < this.values.length) {
					rightChild = this.values[rightChildIdx];
					if (
						(swap === null && rightChild.priority > this.values[idx].priority) ||
						(swap !== null && rightChild.priority > leftChild.priority)
					) {
						swap = rightChildIdx;
					}
				}

				if (swap === null) break;
				this.values[idx] = this.values[swap];
				this.values[swap] = element;
				idx = swap;
			}
		}
		return max;
	}
}

class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

const queue = new PriorityQueue();
queue.enqueue("clean dishes", 1);
queue.enqueue("walk a dog", 1);
queue.enqueue("prepare for interview", 4);

queue.dequeue();

console.log(queue.values);
