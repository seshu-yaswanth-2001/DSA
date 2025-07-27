// Input: s = "III"
// Output: 3
// Explanation: III = 3.

function conversion(str) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const current = values[str[i]];
    const next = values[str[i + 1]];

    if (next > current) {
      sum += next - current;
      i++;
    } else {
      sum += current;
    }
  }
  return sum;
}

console.log(conversion("V"));
