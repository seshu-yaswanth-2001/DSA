// Print 1 to N times

function printLinear(count, n) {
  if (count > n) return;
  console.log(count);
  printLinear(count + 1, n);
}
printLinear(1, 3);
