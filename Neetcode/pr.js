function longest(nums) {
  let res = 0;
  const set = new Set(nums);

  for (let num of set) {
    let length = 0;
    let curr = num;
    while (set.has(curr)) {
      length++;
      curr++;
    }

    res = Math.max(length, res);
  }
  return res;
}

console.log(longest([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
