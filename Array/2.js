// second Largest
const arr = [7, 1, 5, 3, 9, 0, 20, -18];

function secondLargest(arr) {
  if (arr.length === 0) return false;

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let item of arr) {
    if (item > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = item;
    } else if (item > secondLargest) {
      secondLargest = item;
    }
  }
  return secondLargest;
}

console.log(secondLargest(arr));
