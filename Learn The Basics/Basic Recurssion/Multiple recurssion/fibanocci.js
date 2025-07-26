function fibanocci(num) {
  if (num <= 1) return num;
  last = fibanocci(num - 1);
  secondLast = fibanocci(num - 2);
  return last + secondLast;
}

console.log(fibanocci(4));

