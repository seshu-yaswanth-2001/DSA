// longest consecutive sequence
function sequnece(nums) {
  let count = 0;
  const newSet = new Set(nums);

  for (let num of newSet) {
    let length = 0;
    let current = num;

    while (newSet.has(current)) {
      length++;
      current++;
    }

    count = Math.max(count, length);
  }
  return count;
}

console.log(sequnece([6, 5, 4, 3, 2, 1, 10]));

function longest(nums) {
  if (nums.length === 0) return false;

  nums.sort((a, b) => a - b);

  let res = 0;
  let current = nums[0];
  let streak = 0;
  let i = 0;

  while (i < nums.length) {
    if (current !== nums[i]) {
      current = nums[i];
      streak = 0;
    }
    while (i < nums.length && nums[i] === current) {
      i++;
    }
    streak++;
    current++;
    res = Math.max(res, streak);
  }
  return res;
}

console.log(longest([6, 5, 4, 3, 2, 1, 10]));

function consecutive(nums) {
  const set = new Set(nums);
  let count = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let length = 1;
      while (set.has(num + length)) {
        length++;
      }
      count = Math.max(count, length);
    }
  }
  return count;
}

console.log(consecutive([6, 5, 4, 3, 2, 1, 10]));
