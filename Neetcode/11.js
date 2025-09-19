function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const current = arr[left] + arr[right];

    if (current > target) {
      right--;
    } else if (current < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }

  return [];
}

const numbers = [1, 2, 3, 4];
const target = 3;
console.log(twoSum(numbers, target));
