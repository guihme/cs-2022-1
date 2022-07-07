function merge(left: number[], right: number[]) {
    let arr = [];

    while (left.length && right.length) {

        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }


    return [...arr, ...left, ...right];
}

export function mergeSort(array: any): any {
    const half = array.length / 2;

    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}