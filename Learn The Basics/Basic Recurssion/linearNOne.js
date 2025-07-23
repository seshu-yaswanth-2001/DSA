// print N to one times

function linear(i) {
  if (i < 1) return;
  console.log(i);
  linear(i - 1);
}
linear(4);
