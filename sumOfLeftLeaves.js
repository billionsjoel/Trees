class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function arrayToTree(array, i) {
	if (i >= array.length || array[i] === 0) {
		return null;
	}

	const node = new Node(array[i]);
	node.left = arrayToTree(array, 2 * i + 1);
	node.right = arrayToTree(array, 2 * i + 2);

	return node;
}
function sumOfLeftLeaves(node, sum = 0, side = '') {
	if (node === null) {
		return 0;
	}
	if (node.left === null && node.right === null) {
		sum = side === 'left' ? node.data : 0;
		return sum;
	}

	sum += sumOfLeftLeaves(node.left, 0, 'left');
	sum += sumOfLeftLeaves(node.right, 0, 'right');
	return sum;
}

const tree = arrayToTree(
	[10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	0
);
console.log(sumOfLeftLeaves(tree));
//=> 3 4 1 5 6 2 10
