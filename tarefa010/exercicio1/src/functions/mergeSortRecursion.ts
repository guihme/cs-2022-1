export function mergeSortRecursion(unsortedArray: number[]): number[] {
	if (unsortedArray.length <= 1) {
		return unsortedArray;
	}

	const midPoint = Math.floor(unsortedArray.length / 2);
	const leftArr = unsortedArray.slice(0, midPoint);
	const rightArr = unsortedArray.slice(midPoint);

	return mergeTwoArrays(mergeSortRecursion(leftArr), mergeSortRecursion(rightArr));
}

function mergeTwoArrays(leftArr: number[], rightArr: number[]) {
	let resultArray = [], leftIndex = 0, rightIndex = 0;

	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			resultArray.push(leftArr[leftIndex]);
			leftIndex++;
		} else {
			resultArray.push(rightArr[rightIndex]);
			rightIndex++;
		}
	}

	if (leftArr[leftIndex]) {
		var unaddedElements = leftArr.slice(leftIndex)
		resultArray.push(...unaddedElements);
	} else {
		var unaddedElements = rightArr.slice(rightIndex)
		resultArray.push(...unaddedElements);
	}

	return resultArray;
}