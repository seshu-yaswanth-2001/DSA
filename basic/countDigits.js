function findLength(num) {
  let count = 0;
  num = Math.abs(num);

  if (num < 0) return false;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

const result = findLength(123456789);
console.log(result);
