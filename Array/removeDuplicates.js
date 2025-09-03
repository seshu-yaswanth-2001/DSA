const arr = [1, 1, 2, 2, 2, 3, 3];

// function remove(arr) {
//   let sets = new Set();
//   for (let item of arr) {
//     sets.add(item);
//   }
//   return Array.from(sets);
// }

function remove(arr) {
  return [...new Set(arr)];
}

console.log(remove(arr));
