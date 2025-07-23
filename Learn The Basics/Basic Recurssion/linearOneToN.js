// print number from 1 to N but dont use (i + 1)

function printLinear(i, n) {
  if (i < 1) return;
  printLinear(i - 1, n);
  console.log(i);
}

const n = 5;
printLinear(n, n);
