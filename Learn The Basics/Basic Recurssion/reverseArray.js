// reverse the array

function reverse(arr, n = 0) {
  if (n >= arr.length / 2) return;

  [arr[n], arr[arr.length - n - 1]] = [arr[arr.length - n - 1], arr[n]];
  reverse(arr, n + 1);
}

const arr = [1, 2, 3, 4];
reverse(arr);
console.log(arr);

// option 2:
// reverse the array

function reverseArray(arr2, start = 0, end = arr2.length - 1) {
  if (start >= end) return;

  // Swap
  [arr2[start], arr2[end]] = [arr2[end], arr2[start]];

  // Recurse
  reverseArray(arr2, start + 1, end - 1);
}

const arr2 = [1, 2, 3, 4, 5];
reverseArray(arr2);
console.log(arr2);
