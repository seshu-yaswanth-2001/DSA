function GCD(n1, n2) {
  let hcf = 1;
  for (i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

const result = GCD(11, 13);
console.log(result);

// Time Complexity: O(min(n1, n2))

// optimized
function GCDs(n1, n2) {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) n1 = n1 % n2;
    else n2 = n2 % n1;
  }
  if (n1 === 0) return n2;
  return n1;
}

const res = GCDs(11, 13);
console.log(res);

// more simplified
function GCD(n1, n2) {
  while (n2 !== 0) {
    let temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return n1;
}
