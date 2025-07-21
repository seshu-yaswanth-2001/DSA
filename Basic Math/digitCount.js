function countNumber(n) {
  let count = 0;
  while (n > 0) {
    count += 1;
    n = Math.floor(n / 10);
  }
  return count;
}

const result = countNumber(94410);
console.log(result);

// time complexity: O(log10 (n))
