function mostWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = Math.min(arr[left], arr[right]) * (right - left);
    maxArea = Math.max(area, maxArea);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

const arr = [1, 7, 2, 5, 4, 7, 3, 6];
console.log(mostWater(arr));
