// top k elements
function bucketSort(nums, k) {
  const count = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (let n of nums) {
    // counting occurenses
    count[n] = (count[n] || 0) + 1;
  }

  for (let n in count) {
    // assigning value to the count
    freq[count[n]].push(parseInt(n));
  }

  let res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
}

const nums = [1, 1, 1, 2, 2, 3];
console.log(bucketSort(nums, 2));
