for (let i = 1; i <= 3; i++) {
  // for rows
  for (let j = 1; j <= 3; j++) {
    // for columns - this loop doesn't break until the condition is satisfied
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 2d array
const grid = [
  [1, 2],
  [3, 4],
];

for (let row of grid) {
  for (let item of row) {
    console.log(item);
  }
}

// continue / Break - use continie to skip and break for stopping
console.log("Continue and Break");

for (let i = 0; i <= 5; i++) {
  if (i === 3) continue; // skip this
  if (i === 5) break; // stops here
  console.log(i);
}

// Comparing All Pairs (Nested loops again)
console.log("Comparing all Pairs available");

let arr = [1, 2, 3];
// unique pairs
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    console.log(`Pair: ${arr[i]}, ${arr[j]}`);
  }
}

// all pairs
console.log("All Pairs");

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(`Pair: ${arr[i]}, ${arr[j]}`);
  }
}

// Print all pairs whose sum is even
const nums = [1, 2, 3, 4];

console.log("unique even combinations");

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if ((nums[i] + nums[j]) % 2 === 0) {
      console.log(`pairs: ${nums[i]}, ${nums[j]}`);
    }
  }
}

console.log("all even Combinations");
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if ((nums[i] + nums[j]) % 2 === 0) {
      console.log(`pairs: ${nums[i]}, ${nums[j]}`);
    }
  }
}

// Print all combinations (including same element with itself)
console.log("all combinations of pairs");

const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[i], " ", numbers[j]);
  }
}

// Print only unique sorted pairs
const num = [4, 1, 3, 2];

for (let i = 0; i < num.length; i++) {
  for (let j = 0; j < num.length; j++) {
    if (num[j] > num[j + 1]) {
      let temp = num[j];
      num[j] = num[j + 1];
      num[j + 1] = temp;
    }
  }
}

console.log(num);

// finding the largest number in an array
console.log("max");

const largest = [4, 333, 3422, 2];
let max = largest[0];
// or
// let max = -Infinity;

// for (let item of largest) {
// if(item > max) {
//     max=item
// }
// }
for (let i = 0; i < largest.length; i++) {
  if (largest[i] > max) {
    max = largest[i];
  }
}

console.log(max);

// find the second largest element
const arr3 = [4, 9, 0, 8, 10, 7, 1, 2];
console.log("Second Largest");

let firstLargest = -Infinity;
let secondLargest = -Infinity;

for (let item of arr3) {
  if (item > firstLargest) {
    secondLargest = firstLargest;
    firstLargest = item;
  } else if (item > secondLargest) {
    secondLargest = item;
  }
}
// console.log(firstLargest);
// console.log(secondLargest);

// using functions
function secondLarge(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let item of arr) {
    if (item > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = item;
    } else if (item > secondLargest && item !== firstLargest) {
      secondLargest = item;
    }
  }
  return secondLargest;
}

const arr4 = [4];
let result = secondLarge(arr4);
console.log(result);


