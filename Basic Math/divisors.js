function divisors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
divisors(36);

// time complexity: O(n)

// optimized version
function divisor(n) {
  const result = new Set();
  for (let i = 1; i * i <= n; i++) {
    // Math.sqrt(n)
    if (n % i === 0) {
      result.add(i);
      result.add(n / i);
    }
  }
  console.log([...result].sort((a, b) => a - b));
}

divisor(36);

// time complexity: O(sqrt(n))
