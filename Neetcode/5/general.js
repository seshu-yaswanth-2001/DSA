// nums  - [1, 2, 2, 3, 3, 3]; k = 2
// if k = 2 solution should repeat top k frequent Elements
// i.e. [2, 3]

function top(nums, k) {
  let freqMap = new Map();

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const entries = [...freqMap.entries()];
  return entries
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
}

console.log(top([1, 2, 2, 2, 3, 3, 3, 4], 2));
