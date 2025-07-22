function prime(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count === 2 ? "Prime Number" : "Not Prime Number";
}

const result = prime(35);
console.log(result);

// Time Complexity: O(n)

// optimized way

function primeNumber(n) {
  if (n <= 1) return "Not Prime Number";
  if (n === 2) return "Prime Number";

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "Not Prime Number";
    }
  }
  return "Prime Number";
}

const res = primeNumber(21);
console.log(res);

// time complexity: O(sqrt(n))

function primeNumbers(num) {
  let count = 0;
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count = count + 1;

      if (num / i !== i) {
        count = count + 1;
      }
    }
  }
  return count === 2 ? "Prime Number" : "Not Prime Number";
}
const res2 = primeNumbers(36);
console.log(res2);
