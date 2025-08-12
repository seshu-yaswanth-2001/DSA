// Arrange the array of elements from ascending order
// 13, 46, 24, 52, 20, 9

/**
 * Pseudo Code:
 * n = arr.length
 * for (i = 0; i < n - 2;) {
 *      minIndex = i
 *      for(j = i + 1; j < n) {
 *          if(arr[j] < arr[minIndex]) {
 *              minIndex = j;
 *          }
 *      }
 *      if(minIndex !== i) {
 *          let temp = arr[i]
 *          arr[i] = arr[minIndex]
 *          arr[minIndex] = temp
 * }
 * }
 */

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

const result = selectionSort([13, 46, 24, 52, 20, 9]);
console.log(result);
