// Push the max to the last by adjacent swaps
// 13, 46, 24, 52, 20, 9

// using Backward loop
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// using forward Loop
function bubble(arr) {
  const n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const result = bubbleSort([13, 46, 24, 52, 20, 9]);
const result2 = bubble(["Zebra", "Apple", "Cross", "Batting"]);
console.log("using backward Loop: ", result);
console.log("using Forward Loop: ", result2);
