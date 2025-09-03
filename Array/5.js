// left rotate an array by one

function left(arr) {
  if (arr.length <= 1) return arr;

  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

console.log([100, 1, 2, 2, 2, 3, 3, 99, 99]);
console.log(left([100, 1, 2, 2, 2, 3, 3, 99, 99]));

// O(n) - TC
// O(1) - SC