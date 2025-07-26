function one(arr, queries) {
  const max = Math.max(...arr);
  const hash = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] += 1;
  }

  for (let i = 0; i < queries.length; i++) {
    console.log(`Frequency of ${queries[i]}: ${hash[queries[i]]}`);
  }
}
one([1, 2, 3, 2, 1, 12, 12, 100], [1, 2, 12, 4, 100]);

// using map

console.log("Using Map");

function usingMap(arr, queries) {
  const maps = new Map();

  for (let item of arr) {
    maps.set(item, (maps.get(item) || 0) + 1);
  }

  for (let q of queries) {
    console.log(`Frequencies of ${q}: ${maps.get(q) || 0}`);
  }
}

usingMap([1, 2, 3, 2, 1, 12, 12, 100], [1, 2, 12, 4, 100]);
