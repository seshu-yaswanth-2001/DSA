// print number from N to one by using backtracking
// dont use i - 1

function printLinear(i, n) {
  if (i > n) return;
  printLinear(i + 1, n);
  console.log(i);
}

const n = 5;
printLinear(1, n);
