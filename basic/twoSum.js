const arr = [3, 2, 4];
const target = 6;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log(i, j);
    }
  }
}
