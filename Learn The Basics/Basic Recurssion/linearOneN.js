// Print 1 to N linearly

function printLinear(count, n) {
  if (count > n) return;
  console.log(count);
  printLinear(count + 1, n);
}
printLinear(1, 4);

console.log("hello");
// other way
function nu(n) {
  if (n < 1) return;
  nu(n - 1);
  console.log(n);
}

nu(10);

function yes(m) {
  let count = 1;

  if (count < m) return;
  console.log(m);
  yes()
}
