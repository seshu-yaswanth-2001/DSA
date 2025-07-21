let i = 10;

while (i > 0) {
  // console.log(i);
  i--;
}

// classic For
const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for .... of -  Used to iterate directly over the values in an iterable (arrays, strings, etc.).
// Best for: Simple value iteration when index isn't needed.

const arr2 = ["seshu", "deepika", "rama"];
for (let value of arr2) {
  console.log(value);
}

// for...in - Used to iterate over keys (property names) of an object. It can also be used with arrays, but that's not recommended

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, ": ", obj[key]);
}

// foreach - A higher-order function available on arrays. It takes a callback function.
const variations = ["press", "push", "pull", "legs"];
variations.forEach((value, index) => {
  console.log(value, "of ", index);
});
