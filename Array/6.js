// left rotate an array by D elements

// brute force approach
function leftRotate(arr, d) {
  if (arr.length <= 1) return arr;

  let n = arr.length;
  d = d % n;

  let temp = arr.slice(0, d);
  let rotated = arr.slice(d);

  return rotated.concat(temp);
}

let arr = [100, 99, 2, 2, 2, 3, 3, 99, 99];
console.log(leftRotate(arr, 9));

// if the d is exactly arr.length then left rotate of arr.length will be same as original array
// if d is multiples of arr.length it is same as original array

// reverse method  - optimal solution

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateByD(arr, d) {
  let n = arr.length;
  d = d % n;

  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}

console.log(rotateByD(arr, 2));
