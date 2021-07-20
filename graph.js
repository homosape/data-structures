class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	validate(nodeOne, nodeTwo) {
		if (!nodeOne || !nodeTwo) throw new Error("Unsupported inputs.");
		if (!this.adjacencyList[nodeOne] || !this.adjacencyList[nodeTwo])
			throw new Error("One of the provided nodes does not exist.");
	}
	addNode(node) {
		if (!this.adjacencyList[node]) this.adjacencyList[node] = [];
		return this.adjacencyList;
	}
	removeNode(node) {
		if (!this.adjacencyList[node]) throw new Error("Node does not exist.");
		this.adjacencyList[node].forEach((i) => {
			this.removeLink(node, i);
		});
		// OPTIONAL
		delete this.adjacencyList[node];
	}
	addLink(nodeOne, nodeTwo) {
		this.validate(nodeOne, nodeTwo);
		this.adjacencyList[nodeOne].push(nodeTwo);
		this.adjacencyList[nodeTwo].push(nodeOne);
	}
	removeLink(nodeOne, nodeTwo) {
		this.validate(nodeOne, nodeTwo);
		this.adjacencyList[nodeOne] = this.adjacencyList[nodeOne].filter(
			(i) => i !== nodeTwo
		);
		this.adjacencyList[nodeTwo] = this.adjacencyList[nodeTwo].filter(
			(i) => i !== nodeOne
		);
	}

	depthFirstSearch(node) {
		if (!this.adjacencyList[node]) throw new Error("Node does not exist.");
		const stack = [node];
		const result = [];
		const visited = {};

		visited[node] = true;
		let currentNode;

		while (stack.length) {
			currentNode = stack.pop();
			result.push(currentNode);

			this.adjacencyList[currentNode].forEach((i) => {
				if (!visited[i]) {
					visited[i] = true;
					stack.push(i);
				}
			});
		}
		return result;
	}

	breadthFirstSearch(node) {
		if (!this.adjacencyList[node]) throw new Error("Node does not exist.");
		const queue = [node];
		const result = [];
		const visited = {};

		visited[node] = true;
		let currentNode;
		while (queue.length) {
			currentNode = queue.shift();
			result.push(currentNode);

			this.adjacencyList[currentNode].forEach((i) => {
				if (!visited[i]) {
					visited[i] = true;
					queue.push(i);
				}
			});
		}
		return result;
	}
}

const graph = new Graph();
graph.addNode("Ika");
graph.addNode("Teo");
graph.addNode("Nini");
graph.addNode("Gio");
graph.addLink("Ika", "Nini");
graph.addLink("Gio", "Ika");
graph.addLink("Gio", "Nini");
graph.addLink("Ika", "Teo");
// graph.removeNode("Ika");
console.log(graph.breadthFirstSearch("Ika"));
console.log(graph.depthFirstSearch("Ika"));
