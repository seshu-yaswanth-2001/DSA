const arr = [7, 1, 5, 3, 9, 0, 20, -18];

const largest = arr.length ? Math.max(...arr) : null;

console.log(largest);

// optimal
function firstLargest(arr) {
  if (arr.length === 0) return false;

  let largest = arr[0];
  for (let i of arr) {
    if (i > largest) {
      largest = i;
    }
  }
  return largest;
}

console.log(firstLargest(arr));

// brute force approch  -   o(nlogn)
function large(arr) {
  if (arr.length === 0) return false;

  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 1];
}

console.log(large(arr));
