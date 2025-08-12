// Insertion Sort: Takes an element it in its correct order
// 13, 46, 24, 52, 20, 9

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const res = insertionSort([1, 40, 12, 321, 4, 0, 0, 2, -1, 33]);
console.log(res);
