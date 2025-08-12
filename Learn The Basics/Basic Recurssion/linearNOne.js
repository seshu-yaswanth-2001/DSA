// print N to 1 times

function linear(i) {
  if (i < 1) return;
  console.log(i);
  linear(i - 1);
}
linear(4);
