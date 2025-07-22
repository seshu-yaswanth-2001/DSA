// Print the name "N" times
function printName(count, n) {
  if (count > n) return;
  console.log("Seshu:", count);
  printName(count + 1, n);
}

printName(1, 3);

// Time complexity - O(n)
// Stack complexity - O(n)
