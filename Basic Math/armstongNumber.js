function armstronNumber(n) {
  const digits = n.toString().length;
  const dup = n;
  let sum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    sum = sum + lastDigit ** digits;
    n = Math.floor(n / 10);
  }
  return dup === sum;
}

const result = armstronNumber(153);
console.log(result);

// time complexity: O(log10 (n))
