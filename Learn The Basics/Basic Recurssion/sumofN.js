// print sum of N numbers

// Parameterized Way (Tail Recursive Style)
function add(i, sum) {
  if (i < 1) {
    console.log(`The sum of N is: ${sum} `);
    return;
  }
  add(i - 1, sum + i);
}

add(6, 0);

// Functional Way (Return-Based Recursion)
function adds(i) {
  if (i === 0) return 0;

  return i + adds(i - 1);
}

console.log(adds(6));
