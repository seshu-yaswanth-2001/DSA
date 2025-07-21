// function palindrome(x) {
//   if (x < 0) return false;
//   const numberToString = x.toString();
//   let reverse = "";
//   for (let i = numberToString.length - 1; i >= 0; i--) {
//     reverse += numberToString[i];
//   }
//   return numberToString === reverse;
// }

// const result = palindrome(-10);
// console.log(result);

function palindrome(num) {
  if (num < 0) return false;
  const duplicate = num;
  let reverse = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return duplicate === reverse;
}

const result = palindrome(13331);
console.log(result);
