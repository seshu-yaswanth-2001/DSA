// product of Array Expect Self
// [1, 2, 4, 8]  -> [48, 24, 12, 8];

// Brute force approach -
// i !== j -> prod *= num[j] -> O(n * n);
// num[i] = num[i + 1] * num[i + 2];
// num[i] never multiply by itself;

function prodArr(nums) {
  const n = nums.length;
  const res = new Array(n);

  for (let i = 0; i < n; i++) {
    let prod = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        prod *= nums[j];
      }
    }
    res[i] = prod;
  }
  return res;
}

// using prefix & suffix
function prod(nums) {
  const n = nums.length;
  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);
  const res = new Array(n).fill(1);
  console.log("prefix : " + prefix + " suffix : " + suffix + " res : " + res);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
    console.log(i, prefix);
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
    console.log(i, suffix);
  }

  for (let i = 0; i < n; i++) {
    res[i] = prefix[i] * suffix[i];
  }

  return res;
}

const arr = [1, 2, 4, 6];
const arr2 = [-1, 0, 1, 2, 3];
console.log(prodArr(arr2));
console.log(prod(arr));
