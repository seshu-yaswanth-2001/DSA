const arr = [1, 1, 2, 2, 2, 3, 3, 99, 99];

// remove duplicates

// function remove(arr) {
//   let sets = new Set();
//   for (let item of arr) {
//     sets.add(item);
//   }
//   return Array.from(sets);
// }

// if the input is sorted then we can use two pointer approach else we can use set because set can do unsorted removal also

// using two pointer approach
function removeDuplicates(arr) {
  if (arr.length <= 1) return arr;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] != arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  arr.splice(i + 1);
}
removeDuplicates(arr);
console.log(arr);

function remove(arr) {
  return [...new Set(arr)];
}

console.log(remove(arr));
