// const arr = [7, 1, 5, 3, 9, 0, 20, -18];
const arr = [1, 2, 3, 4, 5, 6, 7];

function sortedArr(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(sortedArr(arr));
