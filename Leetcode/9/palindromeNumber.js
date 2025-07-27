// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function palindromeNumber(num) {
  const dup = num;
  let reverse = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    console.log(reverse, ": reverse");
    num = Math.floor(num / 10);
    console.log(num, ": num");
  }

  return dup === reverse;
}

console.log(palindromeNumber(989));
