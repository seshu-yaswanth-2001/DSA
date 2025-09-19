function trapWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let leftMax = arr[left];
  let rightMax = arr[right];

  let maxSave = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, arr[left]);
      maxSave += leftMax - arr[left];
    } else {
      right--;
      rightMax = Math.max(arr[right], rightMax);
      maxSave += rightMax - arr[right];
    }
  }

  return maxSave;
}

const arr = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
console.log(trapWater(arr));
