function threeSum(arr) {
  arr.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const current = arr[left] + arr[right] + arr[i];

      if (current < 0) {
        left++;
      } else if (current > 0) {
        right--;
      } else {
        res.push([arr[left], arr[right], arr[i]]);
        left++;
        right--;

        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
      }
    }
  }
  return res;
}
const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));
